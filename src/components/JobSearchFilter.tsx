"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Sliders,
  Globe,
  Clock,
  ChevronRight,
  X,
  RotateCcw,
} from "lucide-react";
import { jobTypes, locationTypes } from "@/lib/job-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

function JobSearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [jobType, setJobType] = useState(searchParams.get("type") || "all");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [locationType, setLocationType] = useState(
    searchParams.get("locationType") || "all",
  );
  const [experienceLevel, setExperienceLevel] = useState(
    searchParams.get("experience") || "all",
  );
  const [salaryRange, setSalaryRange] = useState(
    searchParams.get("salary") || "all",
  );
  const [isRemote, setIsRemote] = useState(
    searchParams.get("remote") === "true",
  );
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Calculate active filters
  useEffect(() => {
    const filters = [];
    if (searchTerm) filters.push("Search");
    if (jobType && jobType !== "all") filters.push("Job Type");
    if (location) filters.push("Location");
    if (locationType && locationType !== "all") filters.push("Location Type");
    if (experienceLevel && experienceLevel !== "all")
      filters.push("Experience");
    if (salaryRange && salaryRange !== "all") filters.push("Salary");
    if (isRemote) filters.push("Remote");

    setActiveFilters(filters);
  }, [
    searchTerm,
    jobType,
    location,
    locationType,
    experienceLevel,
    salaryRange,
    isRemote,
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm) params.set("q", searchTerm);
    if (jobType && jobType !== "all") params.set("type", jobType);
    if (location) params.set("location", location);
    if (locationType && locationType !== "all")
      params.set("locationType", locationType);
    if (experienceLevel && experienceLevel !== "all")
      params.set("experience", experienceLevel);
    if (salaryRange && salaryRange !== "all") params.set("salary", salaryRange);
    if (isRemote) params.set("remote", "true");

    router.push(`/jobs?${params.toString()}`);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setJobType("all");
    setLocation("");
    setLocationType("all");
    setExperienceLevel("all");
    setSalaryRange("all");
    setIsRemote(false);

    router.push("/jobs");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="space-y-4">
        {/* Main Search Bar with Submit */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr,auto]">
          <div className="relative flex flex-1 overflow-hidden rounded-full border border-indigo-200/60 bg-white shadow-md backdrop-blur-sm transition-all focus-within:border-indigo-400/60 focus-within:ring-1 focus-within:ring-indigo-400/30 dark:border-indigo-900/30 dark:bg-gray-900/80 dark:focus-within:border-indigo-500/60 dark:focus-within:ring-indigo-500/30">
            <div className="flex h-full items-center pl-4">
              <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <Input
              placeholder="Search job titles, skills, or companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border-0 bg-transparent pl-2 text-gray-800 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white"
            />
            {searchTerm && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-full rounded-none px-3 text-gray-500 hover:bg-transparent hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Button
            type="submit"
            className="rounded-full bg-indigo-500 px-8 text-white shadow-md hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            <span className="hidden sm:inline-block">Search Jobs</span>
            <span className="sm:hidden">Search</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Quick Filters Row */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Job Type Dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "h-9 gap-1.5 rounded-full border-indigo-200/60 bg-white text-sm text-gray-600 backdrop-blur-sm hover:bg-gray-50 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                  jobType !== "all" &&
                    "border-indigo-400/30 bg-indigo-50/50 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-900/30 dark:text-white",
                )}
              >
                <Briefcase className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
                {jobType === "all" ? "Job Type" : jobType}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 border-indigo-200/60 bg-white p-2 text-gray-800 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-white">
              <div className="space-y-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setJobType("all")}
                >
                  All Types
                </Button>
                {jobTypes.map((type) => (
                  <Button
                    key={type}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                      jobType === type &&
                        "bg-indigo-50/80 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
                    )}
                    onClick={() => setJobType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Location Type Dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "h-9 gap-1.5 rounded-full border-indigo-200/60 bg-white text-sm text-gray-600 backdrop-blur-sm hover:bg-gray-50 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                  locationType !== "all" &&
                    "border-indigo-400/30 bg-indigo-50/50 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-900/30 dark:text-white",
                )}
              >
                <Globe className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
                {locationType === "all" ? "Location Type" : locationType}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 border-indigo-200/60 bg-white p-2 text-gray-800 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-white">
              <div className="space-y-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setLocationType("all")}
                >
                  All Types
                </Button>
                {locationTypes.map((type) => (
                  <Button
                    key={type}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full justify-start rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                      locationType === type &&
                        "bg-indigo-50/80 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
                    )}
                    onClick={() => setLocationType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Experience Level Dropdown */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "h-9 gap-1.5 rounded-full border-indigo-200/60 bg-white text-sm text-gray-600 backdrop-blur-sm hover:bg-gray-50 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                  experienceLevel !== "all" &&
                    "border-indigo-400/30 bg-indigo-50/50 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-900/30 dark:text-white",
                )}
              >
                <Clock className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                {experienceLevel === "all" ? "Experience" : experienceLevel}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 border-indigo-200/60 bg-white p-2 text-gray-800 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-white">
              <div className="space-y-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setExperienceLevel("all")}
                >
                  Any Experience
                </Button>
                {["Entry Level", "Mid Level", "Senior", "Lead", "Manager"].map(
                  (level) => (
                    <Button
                      key={level}
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "w-full justify-start rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                        experienceLevel === level &&
                          "bg-indigo-50/80 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
                      )}
                      onClick={() => setExperienceLevel(level)}
                    >
                      {level}
                    </Button>
                  ),
                )}
              </div>
            </PopoverContent>
          </Popover>

          {/* Remote Switch */}
          <div className="flex items-center gap-1.5 rounded-full border border-indigo-200/60 bg-white px-3 py-1.5 shadow-md backdrop-blur-sm dark:border-indigo-900/30 dark:bg-gray-800">
            <Switch
              id="remote"
              checked={isRemote}
              onCheckedChange={setIsRemote}
              className="data-[state=checked]:bg-indigo-500 dark:data-[state=checked]:bg-indigo-600"
            />
            <Label
              htmlFor="remote"
              className="text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Remote
            </Label>
          </div>

          {/* Advanced Filters Button */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="ml-auto h-9 gap-1.5 rounded-full border-indigo-200/60 bg-white text-sm text-gray-600 shadow-md backdrop-blur-sm hover:bg-gray-50 hover:text-gray-900 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            <Sliders className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400" />
            Advanced Filters
          </Button>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Active filters:
            </span>
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="rounded-full bg-indigo-100/80 text-xs font-normal text-indigo-700 dark:bg-indigo-900/40 dark:text-white"
              >
                {filter}
              </Badge>
            ))}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 gap-1 rounded-full px-2 text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={clearAllFilters}
            >
              <RotateCcw className="h-3 w-3 text-gray-500 dark:text-gray-400" />
              Clear all
            </Button>
          </div>
        )}

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="rounded-xl border border-indigo-200/60 bg-white p-4 shadow-lg dark:border-indigo-900/30 dark:bg-gray-900/80">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="location" className="border-b-0">
                <AccordionTrigger className="py-2 text-sm font-medium text-gray-800 dark:text-white">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                    Location Settings
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-1 pt-1">
                  <div className="space-y-4 px-1 pb-2">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-500 dark:text-indigo-400" />
                      <Input
                        placeholder="City, country, or region..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="rounded-md border-indigo-200/60 bg-white pl-9 text-gray-800 placeholder:text-gray-500 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-white"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {["Remote", "Hybrid", "On-site"].map((type) => (
                        <Button
                          key={type}
                          type="button"
                          variant={
                            locationType === type ? "default" : "outline"
                          }
                          size="sm"
                          className={cn(
                            "rounded-full",
                            locationType === type
                              ? "bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                              : "border-indigo-200/60 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:border-indigo-900/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                          )}
                          onClick={() => setLocationType(type)}
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="salary" className="border-b-0">
                <AccordionTrigger className="py-2 text-sm font-medium text-gray-800 dark:text-white">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                    Salary Range
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-1 pt-1">
                  <div className="space-y-4 px-1 pb-2">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "0-50K",
                        "50K-100K",
                        "100K-150K",
                        "150K-200K",
                        "200K+",
                        "Any",
                      ].map((range) => (
                        <Button
                          key={range}
                          type="button"
                          variant={
                            salaryRange === range ? "default" : "outline"
                          }
                          size="sm"
                          className={cn(
                            "rounded-lg",
                            salaryRange === range
                              ? "bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                              : "border-indigo-200/60 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:border-border/40 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                          )}
                          onClick={() => setSalaryRange(range)}
                        >
                          {range}
                        </Button>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </form>
  );
}

export default JobSearchFilter;
