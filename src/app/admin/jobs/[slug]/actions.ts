"use server";

import { updateJobSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateJob(slug: string, formData: FormData) {
  const session = await getServerSession(authOptions);

  if (!session?.user.isAdmin) {
    throw new Error("Not authorized");
  }

  const values = Object.fromEntries(formData.entries());
  const validatedData = updateJobSchema.parse(values);

  await prisma.job.update({
    where: { slug },
    data: validatedData,
  });

  revalidatePath("/");
}

export async function deleteJob(slug: string) {
  const session = await getServerSession(authOptions);

  if (!session?.user.isAdmin) {
    throw new Error("Not authorized");
  }

  await prisma.job.delete({
    where: { slug },
  });

  revalidatePath("/");
}
