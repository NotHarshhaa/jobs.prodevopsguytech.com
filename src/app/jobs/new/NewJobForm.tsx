"use client";

import LoadingButton from "@/components/LoadingButton";
import LocationInput from "@/components/LocationInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobTypes, locationTypes } from "@/lib/job-types";
import { CreateJobValues, createJobSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createJobPosting } from "./actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertCircle,
  Briefcase,
  Building,
  MapPin,
  Globe,
  Mail,
  Link2,
  Clock,
  CheckCircle2,
  Info,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function NewJobForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    setValue,
  } = form;

  async function onSubmit(values: CreateJobValues) {
    try {
      setError(null);
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value.toString());
        }
      });

      await createJobPosting(formData);
    } catch (error) {
      console.error("Job posting error:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong, please try again.");
      }
    }
  }

  return (
    <div className="space-y-6">
      <Alert className="border-blue-900/30 bg-blue-900/10 text-white">
        <Info className="h-4 w-4 text-blue-400" />
        <AlertDescription className="text-sm">
          <span className="font-semibold">Tips:</span> Complete all fields for
          better visibility. Your job will be reviewed before it appears in our
          listings.
        </AlertDescription>
      </Alert>

      <Card className="overflow-hidden border-indigo-900/30 bg-gradient-to-br from-gray-900 to-indigo-900/10 shadow-lg">
        <CardHeader className="border-b border-indigo-900/30 bg-gradient-to-r from-indigo-900/20 to-gray-900">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5 text-indigo-400" />
            <CardTitle className="text-white">Post a Job</CardTitle>
          </div>
          <CardDescription className="text-gray-300">
            Create a new job posting for your company.
          </CardDescription>
        </CardHeader>

        <Tabs defaultValue="basics" className="w-full">
          <div className="border-b border-indigo-900/30 px-6 pt-2">
            <TabsList className="grid w-full grid-cols-3 bg-transparent text-gray-300">
              <TabsTrigger
                value="basics"
                className="rounded-none text-gray-300 hover:text-white data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-indigo-400" />
                  <span>Job Basics</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="location"
                className="rounded-none text-gray-300 hover:text-white data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span>Location</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className="rounded-none text-gray-300 hover:text-white data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Application</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <TabsContent value="basics" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-900/30 shadow-md">
                        <Briefcase className="h-4 w-4 text-indigo-400" />
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-white">
                        Job Details
                      </h3>
                    </div>

                    <Separator />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-gray-200">
                              <Briefcase className="h-3.5 w-3.5 text-indigo-400" />
                              Job Title
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. DevOps Engineer"
                                className="border-indigo-900/50 bg-gray-900/50 text-white placeholder:text-gray-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-gray-200">
                              <Clock className="h-3.5 w-3.5 text-purple-400" />
                              Job Type
                            </FormLabel>
                            <FormControl>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger className="border-indigo-900/50 bg-gray-900/50 text-white">
                                  <SelectValue placeholder="Select job type" />
                                </SelectTrigger>
                                <SelectContent className="border-indigo-900/50 bg-gray-800 text-white">
                                  {jobTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1 text-gray-200">
                            <Building className="h-3.5 w-3.5 text-blue-400" />
                            Company Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="border-indigo-900/50 bg-gray-900/50 text-white placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1 text-gray-200">
                            <Clock className="h-3.5 w-3.5 text-cyan-400" />
                            Experience Required
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. 2+ years"
                              className="border-indigo-900/50 bg-gray-900/50 text-white placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/30 shadow-md">
                        <MapPin className="h-4 w-4 text-purple-400" />
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-white">
                        Location Information
                      </h3>
                    </div>

                    <Separator />

                    <FormField
                      control={control}
                      name="locationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1 text-gray-200">
                            <Globe className="h-3.5 w-3.5 text-purple-400" />
                            Location Type
                          </FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="border-indigo-900/50 bg-gray-900/50 text-white">
                                <SelectValue placeholder="Select location type" />
                              </SelectTrigger>
                              <SelectContent className="border-indigo-900/50 bg-gray-800 text-white">
                                {locationTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1 text-gray-200">
                            <MapPin className="h-3.5 w-3.5 text-blue-400" />
                            Office Location
                          </FormLabel>
                          <FormControl>
                            <LocationInput
                              onLocationSelected={field.onChange}
                              defaultValue={field.value}
                              className="border-indigo-900/50 bg-gray-900/50 text-white placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="application" className="mt-0">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/30 shadow-md">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-white">
                        Application Methods
                      </h3>
                    </div>

                    <Separator />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={control}
                        name="applicationEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-gray-200">
                              <Mail className="h-3.5 w-3.5 text-cyan-400" />
                              Application Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                className="border-indigo-900/50 bg-gray-900/50 text-white placeholder:text-gray-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name="applicationUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-gray-200">
                              <Link2 className="h-3.5 w-3.5 text-blue-400" />
                              Application URL
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="url"
                                className="border-indigo-900/50 bg-gray-900/50 text-white placeholder:text-gray-500"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </TabsContent>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <CardFooter className="flex justify-end gap-3 border-t border-indigo-900/30 px-6 py-4">
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    className="gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-2 text-white shadow-lg hover:from-blue-700 hover:to-indigo-800"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Create Job Post
                  </LoadingButton>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Tabs>
      </Card>

      <Card className="border-indigo-900/30 bg-gradient-to-br from-gray-900 to-indigo-900/10 shadow-lg">
        <CardHeader className="border-b border-indigo-900/30 bg-indigo-900/20 pb-3">
          <CardTitle className="text-base text-white">
            What happens next?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-900/30 text-blue-400 shadow-md">
                1
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">Review Process</p>
                <p className="text-sm text-gray-400">
                  Our team will review your job posting for quality and
                  relevance.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-900/30 text-purple-400 shadow-md">
                2
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">Publication</p>
                <p className="text-sm text-gray-400">
                  Once approved, your job will appear in our listings and be
                  visible to thousands of professionals.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-900/30 text-cyan-400 shadow-md">
                3
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">Applications</p>
                <p className="text-sm text-gray-400">
                  Candidates will apply through your preferred method (email or
                  URL).
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
