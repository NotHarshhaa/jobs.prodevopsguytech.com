import { prisma } from "@/lib/prisma";
import { JobFilterValues } from "@/lib/validation";
import type { Prisma } from "@prisma/client";

export async function getJobs(filterValues: JobFilterValues, showAll: boolean = false) {
  const { q, type, location, remote } = filterValues;

  const where = {
    ...(showAll ? {} : { approved: true }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { locationType: "Remote" }),
    ...(q && {
      OR: [
        { title: { contains: q, mode: "insensitive" } },
        { companyName: { contains: q, mode: "insensitive" } },
        { type: { contains: q, mode: "insensitive" } },
        { locationType: { contains: q, mode: "insensitive" } },
        { location: { contains: q, mode: "insensitive" } },
      ],
    }),
  } satisfies Prisma.JobWhereInput;

  const jobs = await prisma.job.findMany({
    where,
    orderBy: [
      { createdAt: "desc" }
    ],
  });

  return jobs;
} 