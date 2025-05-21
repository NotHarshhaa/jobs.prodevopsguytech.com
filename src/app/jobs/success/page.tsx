import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Posted Successfully - DevOps & Cloud Jobs",
  description: "Your job posting has been submitted successfully.",
};

export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-16">
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Job Posted Successfully!
          </h1>
          <p className="text-xl text-muted-foreground">
            Your job posting has been submitted and will be reviewed shortly.
          </p>
        </div>

        <Button asChild size="lg" className="gap-2">
          <Link href="/jobs">
            View All Jobs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
} 