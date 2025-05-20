"use client";

import { useEffect, useState } from "react";
import { jobTypes as originalJobTypes } from "@/lib/job-types";
import { JobFilterValues } from "@/lib/validation";
import { filterJobs } from "@/actions/filterJobs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const distinctLocations = [
  "Andhra Pradesh",
  "Telegana",
  "Remote",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Delhi",
  "Gujarat",
  "Haryana",
];

interface JobFilterSidebarProps {
  defaultValues: JobFilterValues;
}

export default function JobFilterSidebar({ defaultValues }: JobFilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const jobTypes = [{ label: "All types", value: "all" }, ...originalJobTypes.map(t => ({ label: t, value: t }))];
  const locations = [{ label: "All locations", value: "all" }, ...distinctLocations.map(l => ({ label: l, value: l }))];

  const [selectedType, setSelectedType] = useState(defaultValues.type || "all");
  const [selectedLocation, setSelectedLocation] = useState(defaultValues.location || "all");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 500);
  };

  return (
    <Card className="border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-black/95 dark:border-gray-800">
      <CardHeader className="md:hidden">
        <Button
          variant="ghost"
          className="w-full justify-between dark:hover:bg-gray-800/50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CardTitle className="text-lg font-semibold">Filter Jobs</CardTitle>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </CardHeader>

      {(isClient && (isOpen || window.innerWidth >= 768)) && (
        <CardContent className="grid gap-6">
        <form
          onSubmit={handleFormSubmit}
          action={filterJobs}
          key={JSON.stringify(defaultValues)}
          className={`space-y-6 ${submitted ? 'opacity-50' : ''} transition-opacity duration-300`}
        >
          <div className="space-y-2">
              <Label htmlFor="q" className="dark:text-gray-200">Search</Label>
            <Input
              id="q"
              name="q"
              placeholder="Title, company, etc."
              defaultValue={defaultValues.q}
                className="w-full dark:bg-gray-900 dark:border-gray-800 dark:placeholder:text-gray-500"
            />
          </div>

          <div className="space-y-2">
              <Label htmlFor="type" className="dark:text-gray-200">Type</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="dark:bg-gray-900 dark:border-gray-800">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-900 dark:border-gray-800">
                  {jobTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            <input type="hidden" name="type" value={selectedType === "all" ? "" : selectedType} />
          </div>

          <div className="space-y-2">
              <Label htmlFor="location" className="dark:text-gray-200">Location</Label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="dark:bg-gray-900 dark:border-gray-800">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-900 dark:border-gray-800">
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            <input type="hidden" name="location" value={selectedLocation === "all" ? "" : selectedLocation} />
          </div>

            <div className="flex items-center space-x-2">
              <Checkbox
              id="remote"
              name="remote"
              defaultChecked={defaultValues.remote}
                className="dark:border-gray-700"
            />
              <Label htmlFor="remote" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-300">
                Remote jobs only
              </Label>
          </div>

            <Button type="submit" className="w-full dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
            Filter jobs
            </Button>
        </form>
        </CardContent>
      )}
    </Card>
  );
}
