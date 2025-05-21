import { prisma } from "@/lib/prisma";
import { JobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";

export async function getJobs(filterValues: JobFilterValues, showAll: boolean = false) {
  const { q, type, location, remote } = filterValues;

  const where: Prisma.JobWhereInput = {
    ...(showAll ? {} : { approved: true }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { locationType: "Remote" }),
    ...(q && {
      OR: [
        { title: { contains: q, mode: "insensitive" as Prisma.QueryMode } },
        { companyName: { contains: q, mode: "insensitive" as Prisma.QueryMode } },
        { type: { contains: q, mode: "insensitive" as Prisma.QueryMode } },
        { locationType: { contains: q, mode: "insensitive" as Prisma.QueryMode } },
        { location: { contains: q, mode: "insensitive" as Prisma.QueryMode } },
      ],
    }),
  };

  const jobs = await prisma.job.findMany({
    where,
    orderBy: [
      { createdAt: "desc" }
    ],
  });

  return jobs;
} 