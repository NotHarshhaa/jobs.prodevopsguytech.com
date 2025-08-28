"use client";

import { useEffect, useState } from "react";
import { jobTypes as originalJobTypes } from "@/lib/job-types";
import { JobFilterValues } from "@/lib/validation";
import { filterJobs } from "@/actions/filterJobs";
import FormSubmitButton from "./FormSubmitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "@/components/ui/select";
import { ChevronDown, Filter, Search, MapPin, Briefcase, Globe } from "lucide-react";

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
    <aside className="w-full lg:w-[300px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg dark:shadow-2xl transition-all duration-300">
      {/* Mobile toggle */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full gap-3 px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 shadow-sm backdrop-blur-md hover:bg-gray-50 dark:hover:bg-gray-700/90 active:scale-[0.98] transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">Filter Jobs</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 shadow transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {(isClient && (isOpen || window.innerWidth >= 1024)) && (
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Refine Your Search</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Find the perfect DevOps opportunity</p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            action={filterJobs}
            key={JSON.stringify(defaultValues)}
            className={`space-y-6 ${submitted ? 'opacity-50' : ''} transition-opacity duration-300`}
          >
            {/* Search Input */}
            <div className="space-y-3">
              <Label htmlFor="q" className="text-gray-700 dark:text-gray-200 font-medium flex items-center gap-2">
                <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Search Jobs
              </Label>
              <Input
                id="q"
                name="q"
                placeholder="Title, company, skills..."
                defaultValue={defaultValues.q}
                className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all shadow-sm placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            {/* Job Type Dropdown */}
            <div className="space-y-3">
              <Label htmlFor="type" className="text-gray-700 dark:text-gray-200 font-medium flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Job Type
              </Label>
              <Select
                options={jobTypes}
                value={selectedType}
                onValueChange={setSelectedType}
                placeholder="Select job type"
                className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all shadow-sm"
              />
              <input type="hidden" name="type" value={selectedType === "all" ? "" : selectedType} aria-label="Selected job type" />
            </div>

            {/* Location Dropdown */}
            <div className="space-y-3">
              <Label htmlFor="location" className="text-gray-700 dark:text-gray-200 font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Location
              </Label>
              <Select
                options={locations}
                value={selectedLocation}
                onValueChange={setSelectedLocation}
                placeholder="Select location"
                className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all shadow-sm"
              />
              <input type="hidden" name="location" value={selectedLocation === "all" ? "" : selectedLocation} aria-label="Selected location" />
            </div>

            {/* Remote Checkbox */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <input
                id="remote"
                name="remote"
                type="checkbox"
                className="scale-125 accent-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                defaultChecked={defaultValues.remote}
                aria-label="Remote jobs only"
              />
              <Label htmlFor="remote" className="text-gray-700 dark:text-gray-200 font-medium flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Remote jobs only
              </Label>
            </div>

            <FormSubmitButton className="w-full font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all py-3 px-6 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Apply Filters
            </FormSubmitButton>
          </form>

          {/* Quick Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">1000+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Active Jobs</div>
              </div>
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800/50">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">50+</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Companies</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
