"use client";

import { useEffect, useState } from "react";
import { jobTypes } from "@/lib/job-types";
import { JobFilterValues } from "@/lib/validation";
import { filterJobs } from "@/actions/filterJobs";
import FormSubmitButton from "./FormSubmitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "@/components/ui/select";
import { ChevronDown, ChevronUp } from "lucide-react";

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

  // Set client flag after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle form submission and collapse the sidebar
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    // Simulate a delay to let the form process (you can replace this with your real logic)
    setTimeout(() => {
      setIsOpen(false); // Auto-collapse after submission
      setSubmitted(false); // Reset the submission state
    }, 500); // Delay for smooth collapse animation
  };

  return (
    <aside className="w-full md:sticky md:top-4 md:w-[260px] rounded-xl border border-muted bg-background p-4 shadow-sm transition-all duration-300">
      {/* Mobile: Toggle button */}
      <div className="md:hidden mb-4">
        <button
          type="button"
          className="flex items-center justify-between w-full text-sm font-medium border rounded-md px-4 py-2 hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Filter Jobs</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Always show form on desktop; conditionally show on mobile after mount */}
      {(isClient && (isOpen || window.innerWidth >= 768)) && (
        <form
          onSubmit={handleFormSubmit}
          action={filterJobs}
          key={JSON.stringify(defaultValues)}
          className={`space-y-5 ${submitted ? 'opacity-50' : ''} transition-opacity duration-300`}
        >
          <div className="space-y-2">
            <Label htmlFor="q">Search</Label>
            <Input
              id="q"
              name="q"
              placeholder="Title, company, etc."
              defaultValue={defaultValues.q}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
              className="w-full"
            >
              <option value="">All types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
              className="w-full"
            >
              <option value="">All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="remote"
              name="remote"
              type="checkbox"
              className="scale-125 accent-black"
              defaultChecked={defaultValues.remote}
            />
            <Label htmlFor="remote">Remote jobs</Label>
          </div>

          <FormSubmitButton className="w-full font-medium">
            Filter jobs
          </FormSubmitButton>
        </form>
      )}
    </aside>
  );
}
