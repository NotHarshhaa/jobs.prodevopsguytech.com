import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Server,
  Cloud,
  GitBranch,
  Shield,
  Database,
  Terminal,
  Network,
  LineChart,
  CheckCircle2,
  Users,
  Trophy,
  Sparkles,
  GraduationCap,
  BookOpen,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Path - DevOps & Cloud Jobs Portal",
  description:
    "Structured learning paths to help you build a successful career in DevOps and cloud computing.",
};

const learningPaths = [
  {
    title: "DevOps Engineer Path",
    icon: <Server className="h-6 w-6" />,
    color: "bg-blue-500/10 text-blue-500",
    description: "Master the core DevOps practices and tools",
    jobGrowth: "+24% yearly",
    avgSalary: "$110,000 - $160,000",
    levels: [
      {
        level: "Beginner",
        skills: [
          "Linux Fundamentals",
          "Git Basics",
          "Basic Scripting",
          "Docker Basics",
        ],
      },
      {
        level: "Intermediate",
        skills: [
          "Kubernetes",
          "CI/CD Pipelines",
          "Infrastructure as Code",
          "Monitoring Basics",
        ],
      },
      {
        level: "Advanced",
        skills: [
          "Advanced Kubernetes",
          "GitOps",
          "Service Mesh",
          "Advanced Monitoring",
        ],
      },
    ],
  },
  {
    title: "Cloud Engineer Path",
    icon: <Cloud className="h-6 w-6" />,
    color: "bg-purple-500/10 text-purple-500",
    description: "Become proficient in cloud platforms and services",
    jobGrowth: "+21% yearly",
    avgSalary: "$105,000 - $155,000",
    levels: [
      {
        level: "Beginner",
        skills: [
          "Cloud Basics",
          "AWS/Azure Core Services",
          "Cloud Storage",
          "Networking Basics",
        ],
      },
      {
        level: "Intermediate",
        skills: [
          "Auto Scaling",
          "Load Balancing",
          "Cloud Security",
          "Serverless",
        ],
      },
      {
        level: "Advanced",
        skills: [
          "Multi-Cloud",
          "Cloud Architecture",
          "Cost Optimization",
          "Cloud Native",
        ],
      },
    ],
  },
  {
    title: "SRE Path",
    icon: <LineChart className="h-6 w-6" />,
    color: "bg-green-500/10 text-green-500",
    description: "Learn Site Reliability Engineering practices",
    jobGrowth: "+22% yearly",
    avgSalary: "$120,000 - $170,000",
    levels: [
      {
        level: "Beginner",
        skills: [
          "System Administration",
          "Monitoring Basics",
          "Incident Response",
          "Basic SLOs",
        ],
      },
      {
        level: "Intermediate",
        skills: [
          "Advanced Monitoring",
          "Performance Tuning",
          "Chaos Engineering",
          "Advanced SLOs",
        ],
      },
      {
        level: "Advanced",
        skills: [
          "Distributed Systems",
          "Scalability",
          "Reliability Patterns",
          "Advanced SRE",
        ],
      },
    ],
  },
  {
    title: "Security Engineer Path",
    icon: <Shield className="h-6 w-6" />,
    color: "bg-red-500/10 text-red-500",
    description: "Focus on DevSecOps and cloud security",
    jobGrowth: "+26% yearly",
    avgSalary: "$115,000 - $165,000",
    levels: [
      {
        level: "Beginner",
        skills: [
          "Security Basics",
          "Identity & Access",
          "Network Security",
          "Basic Threats",
        ],
      },
      {
        level: "Intermediate",
        skills: [
          "Container Security",
          "Cloud Security",
          "Compliance",
          "Security Automation",
        ],
      },
      {
        level: "Advanced",
        skills: [
          "Advanced DevSecOps",
          "Threat Modeling",
          "Security Architecture",
          "Zero Trust",
        ],
      },
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Senior DevOps Engineer at Netflix",
    avatar: "/avatars/sarah.jpg",
    quote:
      "Following the DevOps learning path helped me transition from a traditional sysadmin role to a senior DevOps position in just 18 months.",
  },
  {
    name: "Michael Chen",
    title: "Cloud Solutions Architect at Amazon",
    avatar: "/avatars/michael.jpg",
    quote:
      "The structured approach to cloud technologies helped me understand how different services fit together, which was critical for my AWS certification.",
  },
  {
    name: "Priya Patel",
    title: "SRE Lead at Google",
    avatar: "/avatars/priya.jpg",
    quote:
      "I credit the SRE learning path for helping me develop the right mindset to tackle complex reliability problems at scale.",
  },
];

export default function LearningPathPage() {
  return (
    <div className="container max-w-7xl py-8 sm:py-12">
      {/* Hero Section */}
      <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 p-6 sm:mb-16 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="mb-1 inline-flex rounded-full border px-2 py-0.5 text-xs sm:mb-2 sm:px-3 sm:py-1 sm:text-sm">
              Career Growth
            </div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
              Master Your DevOps & Cloud Journey
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Follow our structured learning paths to build in-demand skills and
              accelerate your career in cloud and DevOps.
            </p>
            <div className="flex flex-wrap gap-3 pt-3 sm:gap-4 sm:pt-4">
              <Button size="default" className="sm:size-lg group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="default" className="sm:size-lg">
                <BookOpen className="mr-2 h-4 w-4" /> Browse Courses
              </Button>
            </div>
          </div>
          <div className="hidden justify-end md:flex">
            <div className="relative h-64 w-64">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-lg bg-blue-500/30"></div>
              <div className="absolute left-16 top-16 h-40 w-40 rounded-lg bg-purple-500/30"></div>
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-lg bg-green-500/30"></div>
              <div className="absolute left-8 top-8 flex h-48 w-48 items-center justify-center rounded-lg border bg-background shadow-lg">
                <GraduationCap className="h-20 w-20 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10"></div>
        <div className="absolute -right-12 top-1/2 h-36 w-36 rounded-full bg-secondary/20"></div>
        <div className="absolute -left-12 bottom-1/3 h-28 w-28 rounded-full bg-accent/20"></div>
      </div>

      {/* Stats Section */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-16 sm:gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-l-4 border-l-blue-500 p-3 sm:p-4">
          <div className="text-xl font-semibold sm:text-2xl">30,000+</div>
          <div className="text-muted-foreground">
            Professionals have followed our learning paths
          </div>
        </div>
        <div className="rounded-lg border border-l-4 border-l-purple-500 p-3 sm:p-4">
          <div className="text-xl font-semibold sm:text-2xl">85%</div>
          <div className="text-muted-foreground">
            Report significant career advancement within a year
          </div>
        </div>
        <div className="rounded-lg border border-l-4 border-l-green-500 p-3 sm:p-4">
          <div className="text-xl font-semibold sm:text-2xl">22%</div>
          <div className="text-muted-foreground">
            Average salary increase after completing a learning path
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="mb-8 text-center sm:mb-12">
        <div className="mb-3 inline-flex rounded-full border px-2 py-0.5 text-xs sm:mb-4 sm:px-3 sm:py-1 sm:text-sm">
          Structured Learning
        </div>
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
          Choose Your Path
        </h2>
        <p className="mx-auto max-w-3xl text-sm text-muted-foreground sm:text-base md:text-lg">
          Each learning path is designed by industry experts to help you
          progress from fundamentals to advanced topics with practical,
          real-world skills that employers value.
        </p>
      </div>

      {/* Learning Paths Grid */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-16 sm:gap-8 md:grid-cols-2">
        {learningPaths.map((path, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            {/* Background Pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,0,0,1)_0%,transparent_50%)] opacity-[0.03]"></div>

            {/* Header */}
            <div className="mb-4 flex items-start gap-3 sm:mb-6 sm:gap-4">
              <div className={`rounded-lg p-2 sm:p-3 ${path.color}`}>
                {path.icon}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold sm:text-xl">
                  {path.title}
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {path.description}
                </p>
              </div>
            </div>

            {/* Job Stats */}
            <div className="mb-4 flex flex-wrap gap-3 sm:mb-6 sm:gap-4">
              <div className="flex items-center rounded-lg bg-muted p-2 text-xs">
                <Trophy className="mr-1 h-4 w-4 text-amber-500" />
                <span>Job Growth: {path.jobGrowth}</span>
              </div>
              <div className="flex items-center rounded-lg bg-muted p-2 text-xs">
                <Sparkles className="mr-1 h-4 w-4 text-emerald-500" />
                <span>Salary: {path.avgSalary}</span>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="relative mb-8 py-2">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-muted"></div>
              {path.levels.map((level, levelIndex) => (
                <div
                  key={levelIndex}
                  className="relative ml-4 pb-6 pl-8 last:pb-0"
                >
                  <div
                    className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full
                    ${
                      levelIndex === 0
                        ? "bg-blue-100 text-blue-600"
                        : levelIndex === 1
                          ? "bg-purple-100 text-purple-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {levelIndex + 1}
                  </div>
                  <h4 className="text-sm font-medium">{level.level}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {level.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="flex items-center rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Start Learning Button */}
            <div className="mt-6">
              <Button asChild className="group w-full">
                <Link
                  href={`/resources/learning-path/${path.title.toLowerCase().replace(/ /g, "-")}`}
                >
                  Start This Path
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <div className="mb-3 inline-flex rounded-full border px-2 py-0.5 text-xs sm:mb-4 sm:px-3 sm:py-1 sm:text-sm">
            Success Stories
          </div>
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
            From Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border p-4 sm:p-6"
            >
              <div className="relative z-10 pb-2">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-muted sm:h-12 sm:w-12">
                    {/* Fallback avatar if image doesn't load */}
                    <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground sm:text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-2">
                <div className="text-xs italic text-muted-foreground sm:text-sm">
                  "{testimonial.quote}"
                </div>
              </div>
              <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform text-muted/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="mb-8 rounded-xl bg-muted/30 p-5 sm:mb-16 sm:p-8">
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex rounded-full border px-2 py-0.5 text-xs sm:mb-4 sm:px-3 sm:py-1 sm:text-sm">
            Ready to Start?
          </div>
          <h2 className="mb-2 text-xl font-bold sm:mb-4 sm:text-2xl md:text-3xl">
            Your Learning Journey Begins Here
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-muted-foreground sm:text-sm">
            Join thousands of professionals who have accelerated their careers
            with our structured learning paths.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4 text-center sm:p-6">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 sm:mb-4 sm:h-12 sm:w-12">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-sm font-medium sm:text-base">
              Join Community
            </div>
            <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
              Connect with peers and mentors who are on the same journey
            </p>
          </div>

          <div className="rounded-lg border bg-card p-4 text-center sm:p-6">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 sm:mb-4 sm:h-12 sm:w-12">
              <Lightbulb className="h-6 w-6" />
            </div>
            <div className="text-sm font-medium sm:text-base">
              Learn by Doing
            </div>
            <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
              Hands-on projects and real-world scenarios to build practical
              skills
            </p>
          </div>

          <div className="rounded-lg border bg-card p-4 text-center sm:p-6">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 sm:mb-4 sm:h-12 sm:w-12">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="text-sm font-medium sm:text-base">
              Track Progress
            </div>
            <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
              Measure your growth and celebrate milestones along the way
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center sm:mt-8">
          <Button size="default" className="sm:size-lg group">
            Create Free Account
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="text-center">
        <div className="mb-3 inline-flex rounded-full border px-2 py-0.5 text-xs sm:mb-4 sm:px-3 sm:py-1 sm:text-sm">
          More To Explore
        </div>
        <h2 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
          Additional Resources
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-xs text-muted-foreground sm:mb-8 sm:text-sm">
          Complement your learning path with these specialized resources
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button
            variant="outline"
            size="default"
            asChild
            className="sm:size-lg group"
          >
            <Link href="/resources/devops-guide">
              <Terminal className="mr-2 h-4 w-4" /> DevOps Guide
              <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="default"
            asChild
            className="sm:size-lg group"
          >
            <Link href="/resources/cloud-computing">
              <Cloud className="mr-2 h-4 w-4" /> Cloud Computing
              <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="default"
            asChild
            className="sm:size-lg group"
          >
            <Link href="/resources/career-tips">
              <Sparkles className="mr-2 h-4 w-4" /> Career Tips
              <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
