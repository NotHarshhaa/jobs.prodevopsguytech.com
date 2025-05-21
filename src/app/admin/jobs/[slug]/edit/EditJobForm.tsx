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
import { UpdateJobValues, updateJobSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Job } from "@prisma/client";
import { updateJob } from "../actions";

interface EditJobFormProps {
  job: Job;
}

export default function EditJobForm({ job }: EditJobFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<UpdateJobValues>({
    resolver: zodResolver(updateJobSchema),
    defaultValues: {
      title: job.title,
      type: job.type,
      companyName: job.companyName,
      locationType: job.locationType,
      location: job.location || undefined,
      experience: job.experience,
      applicationEmail: job.applicationEmail || undefined,
      applicationUrl: job.applicationUrl || undefined,
    }
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    setValue,
  } = form;

  async function onSubmit(values: UpdateJobValues) {
    try {
      setError(null);
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      await updateJob(job.slug, formData);
      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error('Job update error:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong, please try again.");
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Job</CardTitle>
        <CardDescription>Update the job posting details.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. DevOps Engineer" {...field} />
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
                  <FormLabel>Job Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map(type => (
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
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="locationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                      <SelectContent>
                        {locationTypes.map(type => (
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
                  <FormLabel>Office Location</FormLabel>
                  <FormControl>
                    <LocationInput 
                      onLocationSelected={field.onChange}
                      defaultValue={field.value}
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
                  <FormLabel>Experience Required</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 2+ years" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="applicationEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
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
                  <FormLabel>Application URL</FormLabel>
                  <FormControl>
                    <Input type="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <LoadingButton type="submit" loading={isSubmitting}>
              Update Job Post
            </LoadingButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
} 