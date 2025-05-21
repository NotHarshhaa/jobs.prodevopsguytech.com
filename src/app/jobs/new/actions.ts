"use server";

import { createJobSchema } from "@/lib/validation";
import { nanoid } from "nanoid";
import { put } from "@vercel/blob";
import path from "path";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function createJobPosting(formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Not authenticated");
  }

  const values = Object.fromEntries(formData.entries());

  const {
    title,
    type,
    companyName,
    locationType,
    location,
    applicationEmail,
    applicationUrl,
    experience,
  } = createJobSchema.parse(values);

  await prisma.job.create({
    data: {
      slug: `${title.toLowerCase().replace(/\s+/g, "-")}-${nanoid(8)}`,
      title,
      type,
      companyName,
      locationType,
      location,
      applicationEmail,
      applicationUrl,
      approved: session.user.isAdmin,
      userId: session.user.id,
      experience,
    },
  });

  redirect("/jobs/success");
}
