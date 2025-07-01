import { jobFilterSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    // Parse search params
    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const { q, type, location, remote } = jobFilterSchema.parse(searchParams);

    // Build the where clause for the prisma query
    const where = {
      approved: true,
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { locationType: "Remote" }),
      ...(q && {
        OR: [
          { title: { contains: q, mode: "insensitive" as Prisma.QueryMode } },
          {
            companyName: {
              contains: q,
              mode: "insensitive" as Prisma.QueryMode,
            },
          },
          { type: { contains: q, mode: "insensitive" as Prisma.QueryMode } },
          {
            locationType: {
              contains: q,
              mode: "insensitive" as Prisma.QueryMode,
            },
          },
          {
            location: { contains: q, mode: "insensitive" as Prisma.QueryMode },
          },
        ],
      }),
    } satisfies Prisma.JobWhereInput;

    // Get jobs from database
    try {
      const jobs = await prisma.job.findMany({
        where,
        orderBy: [{ createdAt: "desc" }],
      });

      // Ensure we always return an array
      return NextResponse.json(Array.isArray(jobs) ? jobs : []);
    } catch (dbError) {
      console.error("Database query error:", dbError);
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
    // Always return an empty array instead of an error object
    return NextResponse.json([], { status: 500 });
  }
}
