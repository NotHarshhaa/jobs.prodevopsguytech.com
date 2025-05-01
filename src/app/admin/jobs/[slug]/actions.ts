"use server";

import { isAdmin } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = { error?: string } | undefined;

// Instead of DB, jobs would be managed via a JSON file (e.g., src/data/jobs.json)
// For now, these actions will just revalidate paths after approval/deletion
// You will implement JSON updates separately.

export async function approveSubmission(
  formData: FormData,
): Promise<FormState> {
  try {
    const jobId = parseInt(formData.get("jobId") as string);
    const user = await currentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Not authorized");
    }

    // TODO: Update job approval in your JSON source

    revalidatePath("/"); // Revalidate home page (job listings)
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}

export async function deleteJob(
  formData: FormData,
): Promise<FormState> {
  try {
    const jobId = parseInt(formData.get("jobId") as string);
    const user = await currentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("Not authorized");
    }

    // TODO: Find and delete the job from your JSON file
    // TODO: If the job has a companyLogoUrl, delete it from blob storage

    // Skipping actual logo deletion for now — you can add that later

    revalidatePath("/"); // Revalidate home page (job listings)
    redirect("/admin"); // Redirect back to admin page after deletion
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}
