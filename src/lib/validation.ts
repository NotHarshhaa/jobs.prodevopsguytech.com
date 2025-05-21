import { z } from "zod";
import { jobTypes, locationTypes } from "./job-types";

const requiredString = z.string().min(1, "Required");
const numericRequiredString = requiredString.regex(/^\d+$/, "Must be a number");

const companyLogoSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be an image file",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");

const applicationSchema = z
  .object({
    applicationEmail: z.string().max(100).email().optional().or(z.literal("")),
    applicationUrl: z.string().max(100).url().optional().or(z.literal("")),
  })
  .refine((data) => data.applicationEmail || data.applicationUrl, {
    message: "Email or url is required",
    path: ["applicationEmail"],
  });

const locationSchema = z
  .object({
    locationType: requiredString.refine(
      (value) => locationTypes.includes(value),
      "Invalid location type",
    ),
    location: z.string().max(100).optional(),
  })
  .refine(
    (data) =>
      !data.locationType || data.locationType === "Remote" || data.location,
    {
      message: "Location is required for on-site jobs",
      path: ["location"],
    },
  );

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;

export const createJobSchema = z.object({
  title: z.string().min(1, "Required"),
  type: z.string().refine((value) => jobTypes.includes(value), {
    message: "Please select a valid job type"
  }),
  companyName: z.string().min(1, "Required"),
  locationType: z.string().refine((value) => locationTypes.includes(value), {
    message: "Please select a valid location type"
  }),
  location: z.string().min(1, "Required").optional(),
  experience: z.string().min(1, "Required"),
  applicationEmail: z.string().email().optional().or(z.literal("")),
  applicationUrl: z.string().url().optional().or(z.literal("")),
});

export type CreateJobValues = z.infer<typeof createJobSchema>;
