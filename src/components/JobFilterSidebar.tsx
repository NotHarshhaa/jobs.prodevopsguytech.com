"use client";

import { jobTypes } from "@/lib/job-types";
import { JobFilterValues } from "@/lib/validation";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface JobFilterSidebarProps {
  defaultValues: JobFilterValues;
}

export default function JobFilterSidebar({ defaultValues }: JobFilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [values, setValues] = useState<JobFilterValues>(defaultValues);

  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  function updateSearchParams(values: JobFilterValues) {
    const params = new URLSearchParams();
    if (values.q) params.set("q", values.q);
    if (values.type && values.type !== "_all") params.set("type", values.type);
    if (values.location) params.set("location", values.location);
    if (values.remote) params.set("remote", "true");
    router.push(`/jobs?${params.toString()}`);
  }

  return (
    <Card className="sticky top-4 h-fit p-4 dark:bg-black/95 dark:border-gray-800">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateSearchParams(values);
        }}
      >
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input
              id="q"
              placeholder="Title, company, etc."
              value={values.q || ""}
              onChange={(e) => setValues({ ...values, q: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              value={values.type || "_all"}
              onValueChange={(type) => setValues({ ...values, type: type === "_all" ? "" : type })}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="_all">All types</SelectItem>
                {jobTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="City, state, country"
              value={values.location || ""}
              onChange={(e) => setValues({ ...values, location: e.target.value })}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="remote"
              type="checkbox"
              className="scale-125 accent-black dark:accent-white"
              checked={values.remote}
              onChange={(e) => setValues({ ...values, remote: e.target.checked })}
            />
            <Label htmlFor="remote">Remote jobs only</Label>
          </div>
          <Button type="submit" className="w-full dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
            Filter jobs
          </Button>
        </div>
      </form>
    </Card>
  );
}
