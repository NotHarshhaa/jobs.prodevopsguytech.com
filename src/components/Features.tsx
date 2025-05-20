import { Briefcase, Search, BookOpen, Target, Rocket, Server, Cloud, Users } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Specialized Job Listings",
    description: "Curated DevOps and cloud computing positions from top tech companies.",
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Smart Job Search",
    description: "Advanced filters for skills, experience level, and remote options.",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Platforms",
    description: "Jobs across AWS, Azure, GCP, and other leading cloud providers.",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Infrastructure & SRE",
    description: "Opportunities in infrastructure automation and site reliability.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Learning Resources",
    description: "Free guides and tutorials for DevOps career growth.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Salary Insights",
    description: "Market-based salary data for DevOps and cloud roles.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Network",
    description: "Connect with DevOps professionals and industry experts.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Career Growth",
    description: "Resources and tips for advancing your DevOps career.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Platform Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to advance your DevOps and cloud computing career, all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background/50 backdrop-blur-xl rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-border/50 hover:border-primary/20"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative right-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
} 