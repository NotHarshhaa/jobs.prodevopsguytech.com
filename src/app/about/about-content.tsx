"use client";

import { motion } from "framer-motion";
import {
  Code,
  Code2,
  Cpu,
  Rocket,
  Server,
  Cloud,
  Users,
  Target,
  CheckCircle,
  Award,
  Zap,
  Heart,
  Building2,
  Clock,
  GraduationCap,
  Layers,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutContent() {
  const [isVisible, setIsVisible] = useState(false);

  // Force overflow-x hidden to prevent horizontal scrollbar
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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  const stats = [
    {
      label: "Job Listings",
      value: "1,000+",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      label: "Companies",
      value: "350+",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      label: "Professionals",
      value: "15,000+",
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Success Rate",
      value: "89%",
      icon: <Target className="h-5 w-5" />,
    },
  ];

  const values = [
    {
      icon: <Rocket className="h-6 w-6 text-purple-500" />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and approaches in DevOps and cloud computing",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Quality",
      description:
        "We maintain high standards for job listings and ensure relevant opportunities",
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Community",
      description:
        "We foster a supportive network of DevOps and cloud professionals",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Growth",
      description:
        "We facilitate continuous learning and career advancement in the field",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & DevOps Advocate",
      avatar: "SC",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    },
    {
      name: "Miguel Rodriguez",
      role: "Cloud Solutions Expert",
      avatar: "MR",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    },
    {
      name: "Alex Johnson",
      role: "Community Manager",
      avatar: "AJ",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    },
    {
      name: "Jamie Taylor",
      role: "Technical Content Creator",
      avatar: "JT",
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    },
  ];

  return (
    <div className="relative">
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

      <div className="container mx-auto w-full max-w-6xl px-4 py-8 sm:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge
            variant="outline"
            className="mb-3 inline-flex items-center rounded-full border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary sm:mb-4 sm:px-4 sm:py-1 sm:text-sm"
          >
            <Heart className="mr-1 h-3.5 w-3.5" />
            <span>About Our Platform</span>
          </Badge>
          <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            About DevOps & Cloud Jobs{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Portal
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl">
            Your trusted platform for DevOps and cloud computing career
            opportunities, connecting talented professionals with innovative
            companies.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 sm:mb-20"
        >
          <div className="flex flex-col gap-6 rounded-xl border border-border/60 bg-background/60 p-4 backdrop-blur-sm sm:gap-8 sm:rounded-3xl sm:p-6 md:flex-row md:p-8 lg:p-12">
            <div className="md:w-2/5">
              <div className="relative mx-auto h-full w-full max-w-[280px] overflow-hidden rounded-xl border border-border/60 bg-primary/5 sm:rounded-2xl md:max-w-none">
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl"></div>
                <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl"></div>
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="rounded-full bg-primary/10 p-3 sm:p-4">
                    <Rocket className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
                  </div>
                  <h2 className="mt-3 text-xl font-bold sm:mt-6 sm:text-2xl">
                    Our Mission
                  </h2>
                  <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-4">
                    <div className="flex flex-col items-center rounded-lg border border-border/60 bg-background/80 p-2 text-center backdrop-blur-sm sm:p-3">
                      <Server className="h-5 w-5 text-primary/70 sm:h-6 sm:w-6" />
                      <span className="mt-1 text-[10px] font-medium sm:mt-2 sm:text-xs">
                        DevOps
                      </span>
                    </div>
                    <div className="flex flex-col items-center rounded-lg border border-border/60 bg-background/80 p-2 text-center backdrop-blur-sm sm:p-3">
                      <Cloud className="h-5 w-5 text-primary/70 sm:h-6 sm:w-6" />
                      <span className="mt-1 text-[10px] font-medium sm:mt-2 sm:text-xs">
                        Cloud
                      </span>
                    </div>
                    <div className="flex flex-col items-center rounded-lg border border-border/60 bg-background/80 p-2 text-center backdrop-blur-sm sm:p-3">
                      <Code2 className="h-5 w-5 text-primary/70 sm:h-6 sm:w-6" />
                      <span className="mt-1 text-[10px] font-medium sm:mt-2 sm:text-xs">
                        Infrastructure
                      </span>
                    </div>
                    <div className="flex flex-col items-center rounded-lg border border-border/60 bg-background/80 p-2 text-center backdrop-blur-sm sm:p-3">
                      <Cpu className="h-5 w-5 text-primary/70 sm:h-6 sm:w-6" />
                      <span className="mt-1 text-[10px] font-medium sm:mt-2 sm:text-xs">
                        Containers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:w-3/5">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Connecting Talent with Opportunity
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                We connect talented DevOps engineers and cloud professionals
                with innovative companies. Our platform serves as a bridge
                between skilled professionals and organizations leading the
                digital transformation through DevOps and cloud technologies.
              </p>
              <p className="text-base text-muted-foreground sm:text-lg">
                Our goal is to help shape the future of infrastructure and
                operations by facilitating meaningful career connections. We
                believe in empowering both companies and professionals with the
                right resources and opportunities.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button
                  size="sm"
                  className="sm:size-default group w-full rounded-full text-xs sm:w-auto sm:text-sm"
                  asChild
                >
                  <Link href="/jobs">
                    Browse Jobs
                    <Rocket className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:ml-2 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="sm:size-default w-full rounded-full border-primary/20 bg-primary/5 text-xs hover:bg-primary/10 sm:w-auto sm:text-sm"
                  asChild
                >
                  <Link href="/get-started">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 sm:mb-20"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-background/60 p-4 text-center backdrop-blur-sm sm:p-6"
              >
                <div className="rounded-full bg-primary/10 p-2 text-primary sm:p-3">
                  {stat.icon}
                </div>
                <div className="mt-2 text-2xl font-bold sm:mt-4 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What We Offer Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 sm:mb-20"
        >
          <div className="mb-6 text-center sm:mb-10">
            <Badge
              variant="outline"
              className="mb-2 inline-flex items-center rounded-full border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary sm:mb-4 sm:px-4 sm:py-1 sm:text-sm"
            >
              <Award className="mr-1 h-3.5 w-3.5" />
              <span>Our Services</span>
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What We Offer
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground sm:mt-4 sm:text-base">
              Comprehensive services designed specifically for DevOps and cloud
              professionals
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/60 p-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:rounded-2xl sm:p-6">
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-2 rounded-lg bg-blue-100 p-1.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 sm:mb-4 sm:p-3">
                  <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-1 text-base font-semibold sm:mb-2 sm:text-lg">
                  Curated Job Listings
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Quality DevOps and cloud computing opportunities from verified
                  companies
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-6">
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-purple-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-4 rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Career Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Resources for skill enhancement and professional growth
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-6">
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-green-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Industry Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  Latest trends, best practices, and technology insights
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-6">
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-orange-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-4 rounded-lg bg-orange-100 p-3 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Professional Network
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Connect with a community of DevOps and cloud professionals
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 sm:mb-20"
        >
          <div className="mb-10 text-center">
            <Badge
              variant="outline"
              className="mb-2 inline-flex items-center rounded-full border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary sm:mb-4 sm:px-4 sm:py-1 sm:text-sm"
            >
              <CheckCircle className="mr-1 h-3.5 w-3.5" />
              <span>Our Strengths</span>
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why Choose Us
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground sm:mt-4 sm:text-base">
              Key reasons our platform stands out in the DevOps job market
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-border/60 bg-background/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-6"
              >
                <div className="mb-2 sm:mb-4">{value.icon}</div>
                <h3 className="mb-1 text-base font-semibold sm:mb-2 sm:text-lg">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
                <div className="mt-auto pt-4">
                  <div className="h-1 w-12 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-20 group-hover:bg-primary/40"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10 sm:mb-20"
        >
          <div className="mb-10 text-center">
            <Badge
              variant="outline"
              className="mb-2 inline-flex items-center rounded-full border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary sm:mb-4 sm:px-4 sm:py-1 sm:text-sm"
            >
              <Users className="mr-1 h-3.5 w-3.5" />
              <span>Our People</span>
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground sm:mt-4 sm:text-base">
              The passionate people behind our platform
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/60 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-6"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-background shadow-md sm:mb-4 sm:h-20 sm:w-20 sm:border-4">
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-full text-base font-semibold sm:text-lg ${member.color}`}
                    >
                      {member.avatar}
                    </div>
                  </div>
                  <h3 className="mb-0.5 text-base font-semibold sm:mb-1 sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center sm:rounded-3xl sm:p-8 md:p-12">
            <h2 className="mb-2 text-lg font-bold sm:mb-4 sm:text-2xl md:text-3xl">
              Ready to Find Your Next DevOps Opportunity?
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-xs text-muted-foreground sm:mb-6 sm:text-sm md:mb-8 md:text-base">
              Join our platform to discover the best DevOps and cloud computing
              jobs from leading companies.
            </p>
            <div className="flex w-full flex-col space-y-2 sm:flex-row sm:justify-center sm:gap-4 sm:space-y-0">
              <Button
                size="sm"
                className="sm:size-default md:size-lg w-full rounded-full px-4 text-xs sm:w-auto sm:px-6 sm:text-sm md:px-8 md:text-base"
                asChild
              >
                <Link href="/jobs">
                  Browse Jobs
                  <ArrowRight className="ml-1.5 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="sm:size-default md:size-lg w-full rounded-full border-primary/20 px-4 text-xs sm:w-auto sm:px-6 sm:text-sm md:px-8 md:text-base"
                asChild
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
