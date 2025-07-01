"use client";

import {
  Container,
  Database,
  Cloud,
  Monitor,
  Shield,
  GitBranch,
  Terminal,
  Settings,
  Network,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    icon: <Container className="h-6 w-6" />,
    name: "Docker & Containers",
    tools: ["Docker", "Kubernetes", "OpenShift", "Podman"],
    color: "blue",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    name: "Cloud Platforms",
    tools: ["AWS", "Azure", "GCP", "Oracle Cloud"],
    color: "purple",
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    name: "Infrastructure as Code",
    tools: ["Terraform", "CloudFormation", "Ansible", "Puppet"],
    color: "amber",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    name: "CI/CD",
    tools: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
    color: "green",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    name: "Monitoring",
    tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    color: "red",
  },
  {
    icon: <Database className="h-6 w-6" />,
    name: "Databases",
    tools: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
    color: "indigo",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    name: "Security",
    tools: ["Vault", "SonarQube", "Snyk", "Aqua"],
    color: "teal",
  },
  {
    icon: <Network className="h-6 w-6" />,
    name: "Networking",
    tools: ["Service Mesh", "Istio", "Envoy", "Traefik"],
    color: "cyan",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    name: "Configuration",
    tools: ["Helm", "Kustomize", "Consul", "Etcd"],
    color: "pink",
  },
];

export default function JobCategories() {
  // Function to get color classes based on color name
  const getColorClasses = (color: string) => {
    const colorMap: Record<
      string,
      { bg: string; border: string; text: string; hover: string }
    > = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/10",
        border: "border-blue-200 dark:border-blue-800/30",
        text: "text-blue-600 dark:text-blue-400",
        hover: "group-hover:bg-blue-100 dark:group-hover:bg-blue-800/20",
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/10",
        border: "border-purple-200 dark:border-purple-800/30",
        text: "text-purple-600 dark:text-purple-400",
        hover: "group-hover:bg-purple-100 dark:group-hover:bg-purple-800/20",
      },
      amber: {
        bg: "bg-amber-50 dark:bg-amber-900/10",
        border: "border-amber-200 dark:border-amber-800/30",
        text: "text-amber-600 dark:text-amber-400",
        hover: "group-hover:bg-amber-100 dark:group-hover:bg-amber-800/20",
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/10",
        border: "border-green-200 dark:border-green-800/30",
        text: "text-green-600 dark:text-green-400",
        hover: "group-hover:bg-green-100 dark:group-hover:bg-green-800/20",
      },
      red: {
        bg: "bg-red-50 dark:bg-red-900/10",
        border: "border-red-200 dark:border-red-800/30",
        text: "text-red-600 dark:text-red-400",
        hover: "group-hover:bg-red-100 dark:group-hover:bg-red-800/20",
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/10",
        border: "border-indigo-200 dark:border-indigo-800/30",
        text: "text-indigo-600 dark:text-indigo-400",
        hover: "group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/20",
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-900/10",
        border: "border-teal-200 dark:border-teal-800/30",
        text: "text-teal-600 dark:text-teal-400",
        hover: "group-hover:bg-teal-100 dark:group-hover:bg-teal-800/20",
      },
      cyan: {
        bg: "bg-cyan-50 dark:bg-cyan-900/10",
        border: "border-cyan-200 dark:border-cyan-800/30",
        text: "text-cyan-600 dark:text-cyan-400",
        hover: "group-hover:bg-cyan-100 dark:group-hover:bg-cyan-800/20",
      },
      pink: {
        bg: "bg-pink-50 dark:bg-pink-900/10",
        border: "border-pink-200 dark:border-pink-800/30",
        text: "text-pink-600 dark:text-pink-400",
        hover: "group-hover:bg-pink-100 dark:group-hover:bg-pink-800/20",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="relative py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-gradient-to-tl from-primary/10 via-blue-500/5 to-transparent blur-3xl"></div>

        {/* Dotted pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="mr-1.5 h-4 w-4" />
            <span>In-demand technologies</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            DevOps & Cloud Technologies
          </h2>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Find opportunities across the most in-demand DevOps and cloud
            computing technologies that are shaping the industry today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const colors = getColorClasses(category.color);

            return (
              <div key={index} className="group relative">
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/0 to-purple-600/0 opacity-0 blur transition duration-300 group-hover:from-primary/20 group-hover:to-purple-600/20 group-hover:opacity-100"></div>

                <div className="relative flex h-full flex-col rounded-xl border border-border/50 bg-background/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-primary/30">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className={`${colors.bg} ${colors.border} ${colors.hover} rounded-lg border p-3 transition-colors duration-200`}
                    >
                      <div className={colors.text}>{category.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                      {category.name}
                    </h3>
                  </div>

                  <div className="mb-4 flex flex-grow flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary/30 hover:text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Subtle call-to-action at bottom */}
                  <div className="mt-2 flex items-center text-sm text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                    <span className="mr-1">View jobs</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured technology section */}
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="md:w-2/3">
                <h3 className="mb-4 text-2xl font-bold">
                  Kubernetes Specialists In High Demand
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Companies are actively seeking professionals with Kubernetes
                  expertise. As container orchestration becomes essential for
                  modern applications, Kubernetes skills command premium
                  salaries.
                </p>
                <div className="mb-6 flex flex-wrap gap-4">
                  <div className="flex items-center rounded-lg border border-border/50 bg-background/80 px-4 py-2 backdrop-blur-sm">
                    <span className="mr-2 text-2xl font-bold">68%</span>
                    <span className="text-sm text-muted-foreground">
                      Salary premium
                    </span>
                  </div>
                  <div className="flex items-center rounded-lg border border-border/50 bg-background/80 px-4 py-2 backdrop-blur-sm">
                    <span className="mr-2 text-2xl font-bold">3x</span>
                    <span className="text-sm text-muted-foreground">
                      Job growth
                    </span>
                  </div>
                  <div className="flex items-center rounded-lg border border-border/50 bg-background/80 px-4 py-2 backdrop-blur-sm">
                    <span className="mr-2 text-2xl font-bold">Top 5</span>
                    <span className="text-sm text-muted-foreground">
                      Most wanted skill
                    </span>
                  </div>
                </div>
                <Button className="rounded-lg" asChild>
                  <Link href="/jobs?q=kubernetes">
                    Browse Kubernetes Jobs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center md:w-1/3">
                <div className="relative h-48 w-48">
                  {/* Kubernetes logo-inspired graphic */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-primary/30">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary/20">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                          <svg
                            className="h-12 w-12 text-primary"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 3L4.5 7.5V16.5L12 21L19.5 16.5V7.5L12 3Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 3V9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 21V15"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.5 7.5L12 12L19.5 7.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.5 16.5L12 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.5 16.5L12 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Animated spinning circles */}
                  <div className="animate-spin-slow absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"></div>
                    <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"></div>
                  </div>
                  <div
                    className="animate-spin-slow absolute inset-0"
                    style={{ animationDuration: "15s" }}
                  >
                    <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-purple-500"></div>
                    <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-purple-500"></div>
                  </div>
                  <div className="animate-spin-reverse-slow absolute inset-0">
                    <div className="absolute left-0 top-1/4 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="absolute bottom-1/4 right-0 h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add these animations to your globals.css or via inline styles */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
