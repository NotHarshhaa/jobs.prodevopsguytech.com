import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, Building2, UserCircle, FileText, Bell, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div className="container max-w-6xl py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Get Started with ProDevOps Jobs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trusted platform for DevOps, Cloud, and Infrastructure Engineering opportunities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {/* Job Seekers Section */}
        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCircle className="h-6 w-6 text-primary" />
              For Job Seekers
            </CardTitle>
            <CardDescription>Explore verified DevOps opportunities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Browse Jobs</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore curated DevOps positions from verified companies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Verified Listings</h3>
                  <p className="text-sm text-muted-foreground">
                    All job listings are verified and posted by authorized administrators
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse the latest opportunities in DevOps and cloud computing
                  </p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full mt-4">
              <Link href="/jobs">
                Browse Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Admin Section */}
        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              Administrator Access
            </CardTitle>
            <CardDescription>Secure job posting platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Authorized Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Only verified administrators can post and manage job listings
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Quality Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring high-quality, legitimate job opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Verified Companies</h3>
                  <p className="text-sm text-muted-foreground">
                    All company listings are vetted and verified
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Administrator access is restricted to authorized personnel only. Please contact the system administrator for access.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center space-y-4">
        <h2 className="text-2xl font-semibold">Trusted DevOps Job Platform</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We prioritize security and quality. All job listings are posted by verified administrators to ensure legitimate opportunities for our users.
        </p>
        <Button asChild variant="outline" size="lg">
          <Link href="/about">
            Learn More About Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
} 