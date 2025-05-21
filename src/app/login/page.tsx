import LoginForm from "./LoginForm";
import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/logo.png";

export const metadata: Metadata = {
  title: "Login - DevOps & Cloud Jobs",
  description: "Login to your account to post and manage jobs.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="relative h-12 w-12 mb-4">
            <Image
              src={logo}
              alt="DevOps & Cloud Jobs"
              className="rounded-xl"
              fill
              priority
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground text-center max-w-sm">
            Enter your credentials below to access your account and manage your job postings
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg backdrop-blur-lg backdrop-filter">
          <LoginForm />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-medium text-primary hover:text-primary/80">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
} 