"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FiUser, FiLock, FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const { handleSubmit, register, formState: { isSubmitting, errors } } = form;

  async function onSubmit(data: LoginValues) {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
      });

      if (!result?.ok) {
        form.setError("root", { message: "Invalid credentials" });
        return;
      }

      router.push(callbackUrl);
      router.refresh();
    } catch (error) {
      form.setError("root", { message: "Something went wrong. Please try again." });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-sm font-medium">Username</Label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="username"
                className="pl-10 bg-white dark:bg-gray-950"
                placeholder="Enter your username"
                type="text"
                autoCapitalize="none"
                autoComplete="username"
                autoCorrect="off"
                {...register("username")}
              />
            </div>
            {errors.username && (
              <p className="text-sm text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="password"
                className="pl-10 bg-white dark:bg-gray-950"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="rememberMe"
                {...register("rememberMe")}
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-primary hover:text-primary/80"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Forgot password functionality coming soon!");
                }}
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>

        {form.formState.errors.root && (
          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/30">
            <p className="text-sm text-red-500 dark:text-red-400 text-center">
              {form.formState.errors.root.message}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <Button 
            className="w-full h-11 text-base font-medium" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11"
              onClick={() => alert("GitHub login coming soon!")}
            >
              <FiGithub className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11"
              onClick={() => alert("Google login coming soon!")}
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Google
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
} 