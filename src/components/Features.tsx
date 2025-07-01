import {
  Briefcase,
  Search,
  BookOpen,
  Target,
  Rocket,
  Server,
  Cloud,
  Users,
  DollarSign,
  CheckCircle,
  Filter,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Specialized Job Listings",
    description:
      "Curated DevOps and cloud computing positions from top tech companies.",
    color: "blue",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Smart Job Search",
    description:
      "Advanced filters for skills, experience level, and remote options.",
    color: "indigo",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Platforms",
    description:
      "Jobs across AWS, Azure, GCP, and other leading cloud providers.",
    color: "purple",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Infrastructure & SRE",
    description:
      "Opportunities in infrastructure automation and site reliability.",
    color: "pink",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Learning Resources",
    description: "Free guides and tutorials for DevOps career growth.",
    color: "orange",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Salary Insights",
    description: "Market-based salary data for DevOps and cloud roles.",
    color: "green",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Network",
    description: "Connect with DevOps professionals and industry experts.",
    color: "teal",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Career Growth",
    description: "Resources and tips for advancing your DevOps career.",
    color: "cyan",
  },
];

export default function Features() {
  const getColorClasses = (color: string) => {
    const colorMap: Record<
      string,
      { light: string; medium: string; dark: string }
    > = {
      blue: {
        light: "bg-blue-50 dark:bg-blue-950/40",
        medium: "bg-blue-100 dark:bg-blue-900/30",
        dark: "text-blue-600 dark:text-blue-400",
      },
      indigo: {
        light: "bg-indigo-50 dark:bg-indigo-950/40",
        medium: "bg-indigo-100 dark:bg-indigo-900/30",
        dark: "text-indigo-600 dark:text-indigo-400",
      },
      purple: {
        light: "bg-purple-50 dark:bg-purple-950/40",
        medium: "bg-purple-100 dark:bg-purple-900/30",
        dark: "text-purple-600 dark:text-purple-400",
      },
      pink: {
        light: "bg-pink-50 dark:bg-pink-950/40",
        medium: "bg-pink-100 dark:bg-pink-900/30",
        dark: "text-pink-600 dark:text-pink-400",
      },
      orange: {
        light: "bg-orange-50 dark:bg-orange-950/40",
        medium: "bg-orange-100 dark:bg-orange-900/30",
        dark: "text-orange-600 dark:text-orange-400",
      },
      green: {
        light: "bg-green-50 dark:bg-green-950/40",
        medium: "bg-green-100 dark:bg-green-900/30",
        dark: "text-green-600 dark:text-green-400",
      },
      teal: {
        light: "bg-teal-50 dark:bg-teal-950/40",
        medium: "bg-teal-100 dark:bg-teal-900/30",
        dark: "text-teal-600 dark:text-teal-400",
      },
      cyan: {
        light: "bg-cyan-50 dark:bg-cyan-950/40",
        medium: "bg-cyan-100 dark:bg-cyan-900/30",
        dark: "text-cyan-600 dark:text-cyan-400",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-full bg-gradient-to-t from-background to-transparent"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-20">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <CheckCircle className="mr-1.5 h-3.5 w-3.5" />
            <span>Everything you need in one place</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl">
            Platform Features
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
            Discover all the tools and resources you need to advance your DevOps
            and cloud computing career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);

            return (
              <div key={index} className="group relative">
                {/* Hover effect */}
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 blur-lg transition duration-300 group-hover:opacity-100"></div>

                <div className="relative flex h-full flex-col rounded-2xl border border-border/40 bg-background/50 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg sm:p-6">
                  <div
                    className={cn(
                      "mb-3 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:mb-5 sm:h-14 sm:w-14",
                      colors.light,
                    )}
                  >
                    <div
                      className={cn("rounded-lg p-1.5 sm:p-2", colors.medium)}
                    >
                      <div className={colors.dark}>{feature.icon}</div>
                    </div>
                  </div>

                  <h3 className="mb-1.5 text-lg font-semibold transition-colors group-hover:text-primary sm:mb-2 sm:text-xl">
                    {feature.title}
                  </h3>

                  <p className="flex-grow text-sm text-muted-foreground sm:text-base">
                    {feature.description}
                  </p>

                  <div className="mt-4 h-1 w-12 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-16 group-hover:bg-primary/40"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features Highlight */}
        <div className="mt-16 rounded-2xl border border-border/40 bg-background/50 p-5 backdrop-blur-sm sm:mt-24 sm:p-8 lg:p-12">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row lg:gap-16">
            <div className="md:w-1/2">
              <h3 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">
                Why Choose Our Platform?
              </h3>
              <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
                Our platform is designed specifically for DevOps and cloud
                professionals, providing specialized tools and resources to help
                you advance your career.
              </p>

              <div className="space-y-3 sm:space-y-5">
                {[
                  {
                    icon: <Filter className="h-4 w-4 sm:h-5 sm:w-5" />,
                    text: "Tailored job recommendations based on your skills",
                  },
                  {
                    icon: <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />,
                    text: "Transparent salary information for informed decisions",
                  },
                  {
                    icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" />,
                    text: "Fast application process with one-click apply",
                  },
                  {
                    icon: <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />,
                    text: "Verified employers and quality job listings",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-2 rounded-full bg-primary/10 p-1.5 text-primary sm:mr-3 sm:p-2">
                      {item.icon}
                    </div>
                    <span className="mt-0.5 text-sm sm:mt-1 sm:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center md:w-1/2">
              <div className="relative max-w-sm">
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/10 sm:-right-6 sm:-top-6 sm:h-24 sm:w-24"></div>
                <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-full bg-purple-500/10 sm:-bottom-4 sm:-left-4 sm:h-16 sm:w-16"></div>

                {/* Stats cards */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-background/80 p-3 backdrop-blur-sm sm:p-4">
                    <div>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Jobs Posted
                      </p>
                      <p className="text-xl font-bold sm:text-2xl">1,200+</p>
                    </div>
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30 sm:p-3">
                      <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400 sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-background/80 p-3 backdrop-blur-sm sm:p-4">
                    <div>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Hiring Companies
                      </p>
                      <p className="text-xl font-bold sm:text-2xl">350+</p>
                    </div>
                    <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/30 sm:p-3">
                      <Users className="h-5 w-5 text-blue-600 dark:text-blue-400 sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-background/80 p-3 backdrop-blur-sm sm:p-4">
                    <div>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Success Rate
                      </p>
                      <p className="text-xl font-bold sm:text-2xl">89%</p>
                    </div>
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900/30 sm:p-3">
                      <Target className="h-5 w-5 text-purple-600 dark:text-purple-400 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
