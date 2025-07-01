"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Search,
  MapPin,
  Briefcase,
  Code2,
  Clock,
  Rocket,
} from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-section relative overflow-hidden">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-[10%] -top-[40%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-700/20 to-cyan-700/20 blur-3xl" />
        <div className="absolute -right-[5%] top-[20%] h-[400px] w-[700px] rounded-full bg-gradient-to-l from-primary/10 to-blue-600/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] h-[300px] w-[600px] rounded-full bg-gradient-to-tr from-pink-700/10 to-yellow-500/10 blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            {/* Animated badge */}
            <div className="group relative mb-8 inline-flex items-center overflow-hidden rounded-full border border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5 px-4 py-2.5 text-primary shadow-lg shadow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-purple-500/10 hover:shadow-primary/10">
              <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-500 p-1 text-white ring-2 ring-primary/20 ring-offset-1 ring-offset-background">
                <Rocket className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-medium tracking-wide transition-colors group-hover:text-primary">
                Find Your Next DevOps & Cloud Opportunity
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              Discover your
              <span className="relative">
                <span className="relative ml-3 inline-block bg-gradient-to-br from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  dream
                  <svg
                    className="absolute -bottom-4 left-0 w-full opacity-70"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="9"
                    viewBox="0 0 400 9"
                    fill="none"
                  >
                    <path
                      d="M1 5.5C63.3333 0.333333 72.6667 7.66667 135 4.5C197.333 1.33333 261.667 -2.83333 324 5.5C386.333 13.8333 399 5.5 399 5.5"
                      stroke="url(#paint0_linear)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="1"
                        y1="5"
                        x2="399"
                        y2="5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7c3aed" />
                        <stop offset="1" stopColor="#2563eb" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                <span className="relative inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  job
                </span>
              </span>
            </h1>

            <h2 className="mt-4 text-lg font-medium tracking-tight text-muted-foreground sm:mt-6 md:text-2xl">
              Browse through hundreds of{" "}
              <span className="font-semibold text-foreground">
                DevOps & Cloud
              </span>{" "}
              opportunities.
            </h2>

            {/* Search Bar */}
            <div className="group relative mt-6 sm:mt-10">
              <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-gradient-to-r from-primary/50 to-purple-600/50 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative rounded-lg bg-background p-1.5 shadow-xl">
                <div className="flex flex-col items-center gap-2 md:flex-row">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Job title or keyword"
                      className="w-full rounded-lg border-0 py-4 pl-10 pr-4 text-base ring-1 ring-border transition-all focus:ring-2 focus:ring-primary/50 sm:py-6 sm:text-lg"
                    />
                  </div>
                  <div className="relative w-full md:w-auto">
                    <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Location"
                      className="w-full rounded-lg border-0 py-4 pl-10 pr-4 text-base ring-1 ring-border transition-all focus:ring-2 focus:ring-primary/50 sm:py-6 sm:text-lg md:w-[200px]"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full transform rounded-lg bg-primary px-6 py-4 text-base shadow-lg shadow-primary/20 transition-colors hover:translate-y-[-1px] hover:bg-primary/90 hover:shadow-primary/30 sm:px-8 sm:py-6 sm:text-lg md:w-auto"
                    asChild
                  >
                    <Link href="/jobs">
                      Search Jobs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Job Stats */}
            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-3">
              <div className="group flex items-center justify-start space-x-2 rounded-xl border border-border/20 bg-background/80 p-2 shadow-lg backdrop-blur transition-colors hover:border-primary/20 sm:p-3">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary transition-colors group-hover:bg-primary/20 sm:p-2">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-sm font-medium sm:text-base">
                  1000+ Jobs
                </span>
              </div>
              <div className="group flex items-center justify-start space-x-2 rounded-xl border border-border/20 bg-background/80 p-2 shadow-lg backdrop-blur transition-colors hover:border-primary/20 sm:p-3">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary transition-colors group-hover:bg-primary/20 sm:p-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-sm font-medium sm:text-base">
                  Remote Friendly
                </span>
              </div>
              <div className="group flex items-center justify-start space-x-2 rounded-xl border border-border/20 bg-background/80 p-2 shadow-lg backdrop-blur transition-colors hover:border-primary/20 sm:p-3">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary transition-colors group-hover:bg-primary/20 sm:p-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-sm font-medium sm:text-base">
                  Fast Apply
                </span>
              </div>
            </div>
          </div>

          {/* Right side decorative illustration */}
          <div className="relative hidden w-full flex-shrink-0 justify-center md:flex lg:w-[40%] lg:justify-end">
            <div className="relative aspect-square w-full max-w-[500px]">
              {/* Main circle with floating tech icons */}
              <div className="animate-spin-slow absolute inset-0 rounded-full border-4 border-dashed border-primary/20">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-white p-3 shadow-lg dark:bg-gray-900">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30">
                    <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div className="absolute -right-6 top-1/4 rounded-full bg-white p-3 shadow-lg dark:bg-gray-900">
                  <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30">
                    <svg
                      className="h-8 w-8 text-purple-600 dark:text-purple-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.27002 6.96002L12 12L20.73 6.96002"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22.08V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute -right-6 top-3/4 rounded-full bg-white p-3 shadow-lg dark:bg-gray-900">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                    <svg
                      className="h-8 w-8 text-green-600 dark:text-green-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8 13.6L19.2 12L21 13.6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2 12L17.8 10.4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.89999 5L8.79999 7.4L6.19999 7.8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.1 5L15.2 7.4L17.8 7.8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5C15.87 5 19 8.13 19 12C19 13.93 18.22 15.68 16.95 16.95"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12C5 8.13 8.13 5 12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 19C8.13 19 5 15.87 5 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 19C13.93 19 15.68 18.22 16.95 16.95"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white p-3 shadow-lg dark:bg-gray-900">
                  <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-900/30">
                    <svg
                      className="h-8 w-8 text-orange-600 dark:text-orange-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9999 9.00001C21.0042 9.51631 20.7706 10.0126 20.3542 10.3671C19.9378 10.7217 19.3748 10.9103 18.7999 10.89C18.7055 10.89 18.6155 10.8825 18.5299 10.869C18.0533 10.8032 17.6216 10.5666 17.3156 10.2084C17.0096 9.85009 16.8513 9.39598 16.8699 8.94001C16.8581 8.56689 16.9451 8.19823 17.1219 7.87398C17.2988 7.54973 17.5582 7.28224 17.8729 7.10001C17.6037 6.4102 17.1477 5.80635 16.5499 5.35001C15.8606 4.83048 15.0288 4.5471 14.1699 4.54001C12.2799 4.54001 10.7799 5.75001 10.1899 7.42001C10.5248 7.50057 10.8281 7.67333 11.0626 7.91682C11.2971 8.16031 11.4532 8.46555 11.5123 8.79485C11.5714 9.12415 11.5311 9.46382 11.3959 9.77143C11.2607 10.079 11.0358 10.3425 10.7499 10.53C10.4589 10.7191 10.1194 10.8206 9.77231 10.822C9.42522 10.8235 9.08487 10.7248 8.79216 10.538C8.49944 10.3512 8.2719 10.0852 8.13662 9.77477C8.00135 9.46435 7.96365 9.12178 8.02679 8.79108C8.08994 8.46037 8.25102 8.15569 8.48991 7.91501C8.34991 7.84201 8.20991 7.77001 8.06991 7.70001C7.3899 7.37001 6.6499 7.16001 5.86991 7.11001C5.7899 7.10001 5.70991 7.10001 5.62991 7.10001C4.3999 7.10001 3.29992 7.71001 2.56992 8.63001C1.8399 9.55001 1.58991 10.73 1.86991 11.83C2.14991 12.94 2.94991 13.87 3.99991 14.33V18L11.9999 21L19.9999 18V14.33C20.5844 14.0815 21.0729 13.6537 21.3871 13.1085C21.7012 12.5633 21.8237 11.9353 21.7359 11.3183C21.6481 10.7014 21.3546 10.1291 20.9012 9.69491C20.4477 9.26072 19.8633 8.98622 19.2499 8.91001C19.4846 8.94891 19.7248 8.95246 19.9613 8.92055C20.1978 8.88864 20.4272 8.82172 20.6399 8.72201C20.8403 8.78791 21.0266 8.88586 21.1909 9.01129C21.3552 9.13672 21.4953 9.28767 21.6048 9.45747C21.7143 9.62728 21.7914 9.81315 21.8329 10.0079C21.8744 10.2027 21.8795 10.4029 21.8479 10.6C21.5739 11.58 21.0389 12.13 20.9999 12.13V9.00001Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute -left-6 top-1/4 rounded-full bg-white p-3 shadow-lg dark:bg-gray-900">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/30">
                    <svg
                      className="h-8 w-8 text-red-600 dark:text-red-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 3H16.5C17.8807 3 19 4.11929 19 5.5V18.5C19 19.8807 17.8807 21 16.5 21H7.5C6.11929 21 5 19.8807 5 18.5V5.5C5 4.11929 6.11929 3 7.5 3H12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute -left-6 top-3/4 rounded-full bg-white p-3 shadow-lg dark:bg-gray-900">
                  <div className="rounded-full bg-cyan-100 p-2 dark:bg-cyan-900/30">
                    <svg
                      className="h-8 w-8 text-cyan-600 dark:text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12.7593C5 16.3563 7.5 19.5 12 19.5C16.5 19.5 19 16.3563 19 12.7593V7.24074C19 3.64371 16.5 1.5 12 1.5C7.5 1.5 5 3.64371 5 7.24074V12.7593Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 19.5V22.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 13H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 13H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 19.5C10.3431 19.5 9 18.1569 9 16.5C9 14.8431 10.3431 13.5 12 13.5C13.6569 13.5 15 14.8431 15 16.5C15 18.1569 13.6569 19.5 12 19.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Inner content */}
              <div className="absolute left-1/2 top-1/2 flex h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 via-purple-600/80 to-blue-600/80 shadow-2xl">
                <div className="flex h-[85%] w-[85%] flex-col items-center justify-center rounded-full bg-background p-8 text-center">
                  <div className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
                    1000+
                  </div>
                  <div className="mt-2 text-lg font-medium">DevOps Jobs</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Ready for you
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating trusted companies logos */}
      <div className="container mx-auto px-6 pb-12 sm:pb-20">
        <div className="flex flex-col items-center">
          <p className="mb-6 text-sm font-medium text-muted-foreground">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-12">
            {["AWS", "Microsoft", "Google", "IBM", "Oracle"].map(
              (company, i) => (
                <div
                  key={i}
                  className="flex h-10 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-12"
                >
                  <span className="text-lg font-bold sm:text-xl">
                    {company}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Add animate-shimmer class to globals.css */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
