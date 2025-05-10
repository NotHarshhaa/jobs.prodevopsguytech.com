"use client";

import { useEffect, useState } from "react";
import { jobTypes as originalJobTypes } from "@/lib/job-types";
import { JobFilterValues } from "@/lib/validation";
import { filterJobs } from "@/actions/filterJobs";
import FormSubmitButton from "./FormSubmitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "@/components/ui/select";
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

  // Add "All" options with non-empty value
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
    <aside className="w-full md:sticky md:top-4 md:w-[260px] rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent backdrop-blur-md p-5 shadow-none transition-all duration-300">
      {/* Mobile toggle */}
      <div className="md:hidden mb-4">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 shadow-sm backdrop-blur-md hover:bg-gray-100 dark:hover:bg-gray-900 active:scale-[0.98] transition-all duration-300"
        >
          <span className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">Filter Jobs</span>
          <ChevronDown
            className={`w-5 h-5 p-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 shadow transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {(isClient && (isOpen || window.innerWidth >= 768)) && (
        <form
          onSubmit={handleFormSubmit}
          action={filterJobs}
          key={JSON.stringify(defaultValues)}
          className={`space-y-6 ${submitted ? 'opacity-50' : ''} transition-opacity duration-300`}
        >
          {/* Search Input */}
          <div className="space-y-2">
            <Label htmlFor="q" className="text-gray-700 dark:text-gray-200 font-medium">Search</Label>
            <Input
              id="q"
              name="q"
              placeholder="Title, company, etc."
              defaultValue={defaultValues.q}
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all"
            />
          </div>

          {/* Job Type Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="type" className="text-gray-700 dark:text-gray-200 font-medium">Type</Label>
            <Select
              options={jobTypes}
              value={selectedType}
              onValueChange={setSelectedType}
              placeholder="Select type"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all"
            />
            <input type="hidden" name="type" value={selectedType === "all" ? "" : selectedType} />
          </div>

          {/* Location Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-700 dark:text-gray-200 font-medium">Location</Label>
            <Select
              options={locations}
              value={selectedLocation}
              onValueChange={setSelectedLocation}
              placeholder="Select location"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all"
            />
            <input type="hidden" name="location" value={selectedLocation === "all" ? "" : selectedLocation} />
          </div>

          {/* Remote Checkbox */}
          <div className="flex items-center gap-2">
            <input
              id="remote"
              name="remote"
              type="checkbox"
              className="scale-125 accent-black rounded border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all"
              defaultChecked={defaultValues.remote}
            />
            <Label htmlFor="remote" className="text-gray-700 dark:text-gray-200">Remote jobs</Label>
          </div>

          <FormSubmitButton className="w-full font-medium rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all py-2 px-4 shadow-sm">
            Filter jobs
          </FormSubmitButton>
        </form>
      )}
    </aside>
  );
}
