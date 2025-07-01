"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Search,
  Building2,
  UserCircle,
  FileText,
  Bell,
  ShieldCheck,
  Lock,
  CheckCircle,
  Rocket,
  Zap,
  Cpu,
  Cloud,
  Code,
  Users,
  Server,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function GetStartedPage() {
  const [activeTab, setActiveTab] = useState("jobseekers");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    setIsVisible(true);

    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
      },
    },
  };

  const technologies = [
    { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
    { name: "Docker", icon: <Server className="h-4 w-4" /> },
    { name: "Kubernetes", icon: <Cpu className="h-4 w-4" /> },
    { name: "Terraform", icon: <Code className="h-4 w-4" /> },
    { name: "CI/CD", icon: <Rocket className="h-4 w-4" /> },
    { name: "Ansible", icon: <Zap className="h-4 w-4" /> },
  ];

  return (
    <div className="relative overflow-x-hidden py-8 sm:py-12">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -left-64 bottom-0 h-[400px] w-[500px] rounded-full bg-purple-500/5 blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto w-full max-w-6xl space-y-8 px-3 sm:space-y-12 sm:px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center rounded-full border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary sm:px-4 sm:py-1 sm:text-sm"
          >
            <Rocket className="mr-1 h-3.5 w-3.5" />
            <span>Launch your DevOps career</span>
          </Badge>
          <h1 className="text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-6xl">
            Get Started with{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              ProDevOps Jobs
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
            Your trusted platform for DevOps, Cloud, and Infrastructure
            Engineering opportunities
          </p>

          {/* Tech Icons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:mt-6 sm:gap-2 md:mt-8 md:gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-0.5 rounded-full border border-border/50 bg-background/80 px-1.5 py-0.5 text-[10px] backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-primary/5 sm:gap-1 sm:px-2 sm:py-1 sm:text-xs md:gap-1.5 md:px-3 md:py-1.5 md:text-sm"
              >
                <span className="text-primary/70">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="mx-auto max-w-[95%] sm:max-w-md">
          <div className="flex items-center rounded-full border border-border/60 bg-background/60 p-0.5 text-[10px] backdrop-blur-sm sm:p-1 sm:text-xs md:text-sm">
            <button
              onClick={() => setActiveTab("jobseekers")}
              className={`flex w-1/2 items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-medium transition-all sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                activeTab === "jobseekers"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-muted/50"
              }`}
            >
              <UserCircle className="h-4 w-4" />
              Job Seekers
            </button>
            <button
              onClick={() => setActiveTab("admins")}
              className={`flex w-1/2 items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-medium transition-all sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                activeTab === "admins"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-muted/50"
              }`}
            >
              <Lock className="h-4 w-4" />
              Administrators
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {/* Left Card */}
          {activeTab === "jobseekers" ? (
            <motion.div variants={item}>
              <Card className="group relative overflow-hidden border-border/60 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                      <UserCircle className="h-5 w-5" />
                    </div>
                    For Job Seekers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="rounded-full bg-blue-100 p-1.5 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 sm:p-2">
                        <Search className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium sm:text-base">
                          Browse Jobs
                        </h3>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          Explore curated DevOps positions from verified
                          companies
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="rounded-full bg-green-100 p-1.5 text-green-600 dark:bg-green-900/20 dark:text-green-400 sm:p-2">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium sm:text-base">
                          Verified Listings
                        </h3>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          All job listings are verified and posted by authorized
                          administrators
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="rounded-full bg-purple-100 p-1.5 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 sm:p-2">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium sm:text-base">
                          Stay Updated
                        </h3>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          Browse the latest opportunities in DevOps and cloud
                          computing
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/80 p-3 backdrop-blur-sm sm:p-4">
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      <span className="text-xs sm:text-sm">
                        Join <span className="font-medium">2,500+</span> DevOps
                        professionals
                      </span>
                    </div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-6 w-6 rounded-full border-2 border-background bg-primary/10 sm:h-8 sm:w-8 ${
                            i % 2 === 0 ? "bg-purple-100" : "bg-blue-100"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="group w-full sm:w-auto">
                    <Link href="/jobs">
                      Browse Jobs
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div variants={item}>
              <Card className="group relative overflow-hidden border-border/60 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-purple-500/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                      <Lock className="h-5 w-5" />
                    </div>
                    Administrator Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="rounded-full bg-blue-100 p-1.5 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 sm:p-2">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium sm:text-base">
                          Authorized Access
                        </h3>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          Only verified administrators can post and manage job
                          listings
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="rounded-full bg-green-100 p-1.5 text-green-600 dark:bg-green-900/20 dark:text-green-400 sm:p-2">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium sm:text-base">
                          Quality Control
                        </h3>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          Ensuring high-quality, legitimate job opportunities
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={item}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="rounded-full bg-purple-100 p-1.5 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 sm:p-2">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium sm:text-base">
                          Verified Companies
                        </h3>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          All company listings are vetted and verified
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 sm:p-4">
                    <div className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
                      <Lock className="h-4 w-4 text-primary" />
                      <span>
                        Administrator access is restricted to authorized
                        personnel only. Please contact the system administrator
                        for access.
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="group w-full border-primary/20 bg-primary/5 hover:bg-primary/10 sm:w-auto"
                  >
                    Request Admin Access
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Right Side: Features */}
          <motion.div variants={item}>
            <Card className="group relative overflow-hidden border-border/60 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  Platform Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    variants={item}
                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="rounded-full bg-amber-100 p-1.5 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 sm:p-2">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium sm:text-base">
                        Specialized Job Board
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Exclusively focused on DevOps, Cloud, and Infrastructure
                        roles
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="rounded-full bg-blue-100 p-1.5 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 sm:p-2">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium sm:text-base">
                        Career Resources
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Access guides, tutorials, and best practices for DevOps
                        careers
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="rounded-full bg-green-100 p-1.5 text-green-600 dark:bg-green-900/20 dark:text-green-400 sm:p-2">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium sm:text-base">
                        Technology Focus
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Find opportunities in Kubernetes, Terraform, Docker, and
                        other DevOps tools
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
                  <div className="flex flex-col items-center justify-center rounded-lg border border-border/50 bg-background/80 p-3 backdrop-blur-sm sm:p-4">
                    <span className="text-xl font-bold text-primary sm:text-2xl">
                      100%
                    </span>
                    <span className="text-[10px] text-muted-foreground sm:text-xs">
                      Verified Jobs
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-border/50 bg-background/80 p-3 backdrop-blur-sm sm:p-4">
                    <span className="text-xl font-bold text-primary sm:text-2xl">
                      350+
                    </span>
                    <span className="text-[10px] text-muted-foreground sm:text-xs">
                      Companies
                    </span>
                  </div>
                </div>

                <Button asChild variant="outline" className="group w-full">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Testimonials / Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-center sm:rounded-2xl sm:p-5 md:p-8"
        >
          <h2 className="text-xl font-semibold sm:text-2xl">
            Trusted DevOps Job Platform
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base">
            We prioritize security and quality. All job listings are posted by
            verified administrators to ensure legitimate opportunities for our
            users.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-4 md:mt-8 md:gap-8">
            {["AWS", "Google Cloud", "Microsoft", "Docker", "Kubernetes"].map(
              (company, idx) => (
                <div
                  key={idx}
                  className="flex h-8 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-10 md:h-12"
                >
                  <span className="text-sm font-bold sm:text-base md:text-xl">
                    {company}
                  </span>
                </div>
              ),
            )}
          </div>

          <div className="mt-4 flex w-full flex-col space-y-2 sm:mt-6 sm:flex-row sm:justify-center sm:gap-2 sm:space-y-0 md:mt-8 md:gap-3">
            <Button
              asChild
              className="w-full rounded-full text-xs sm:w-auto sm:text-sm"
              size="sm"
            >
              <Link href="/jobs">
                Find Your Next Role
                <ArrowRight className="ml-1.5 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full rounded-full border-primary/20 text-xs sm:w-auto sm:text-sm"
              size="sm"
            >
              <Link href="/about">About Our Platform</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
