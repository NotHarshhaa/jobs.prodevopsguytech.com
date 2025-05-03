import { jobTypes } from "@/lib/job-types";
import { JobFilterValues, jobFilterSchema } from "@/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "@/components/ui/select";

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

async function filterJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { q, type, location, remote } = jobFilterSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });

  redirect(`/?${searchParams.toString()}`);
}

interface JobFilterSidebarProps {
  defaultValues: JobFilterValues;
}

export default async function JobFilterSidebar({
  defaultValues,
}: JobFilterSidebarProps) {
  return (
    <aside className="w-full md:sticky md:top-4 md:w-[260px] rounded-xl border border-muted bg-background p-4 shadow-sm">
      <form action={filterJobs} key={JSON.stringify(defaultValues)} className="space-y-5">
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
    </aside>
  );
}
