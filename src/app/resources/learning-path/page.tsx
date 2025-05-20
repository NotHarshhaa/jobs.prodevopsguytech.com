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
  LineChart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Path - DevOps & Cloud Jobs Portal",
  description: "Structured learning paths to help you build a successful career in DevOps and cloud computing.",
};

const learningPaths = [
  {
    title: "DevOps Engineer Path",
    icon: <Server className="w-6 h-6" />,
    description: "Master the core DevOps practices and tools",
    levels: [
      {
        level: "Beginner",
        skills: ["Linux Fundamentals", "Git Basics", "Basic Scripting", "Docker Basics"],
      },
      {
        level: "Intermediate",
        skills: ["Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring Basics"],
      },
      {
        level: "Advanced",
        skills: ["Advanced Kubernetes", "GitOps", "Service Mesh", "Advanced Monitoring"],
      },
    ],
  },
  {
    title: "Cloud Engineer Path",
    icon: <Cloud className="w-6 h-6" />,
    description: "Become proficient in cloud platforms and services",
    levels: [
      {
        level: "Beginner",
        skills: ["Cloud Basics", "AWS/Azure Core Services", "Cloud Storage", "Networking Basics"],
      },
      {
        level: "Intermediate",
        skills: ["Auto Scaling", "Load Balancing", "Cloud Security", "Serverless"],
      },
      {
        level: "Advanced",
        skills: ["Multi-Cloud", "Cloud Architecture", "Cost Optimization", "Cloud Native"],
      },
    ],
  },
  {
    title: "SRE Path",
    icon: <LineChart className="w-6 h-6" />,
    description: "Learn Site Reliability Engineering practices",
    levels: [
      {
        level: "Beginner",
        skills: ["System Administration", "Monitoring Basics", "Incident Response", "Basic SLOs"],
      },
      {
        level: "Intermediate",
        skills: ["Advanced Monitoring", "Performance Tuning", "Chaos Engineering", "Advanced SLOs"],
      },
      {
        level: "Advanced",
        skills: ["Distributed Systems", "Scalability", "Reliability Patterns", "Advanced SRE"],
      },
    ],
  },
  {
    title: "Security Engineer Path",
    icon: <Shield className="w-6 h-6" />,
    description: "Focus on DevSecOps and cloud security",
    levels: [
      {
        level: "Beginner",
        skills: ["Security Basics", "Identity & Access", "Network Security", "Basic Threats"],
      },
      {
        level: "Intermediate",
        skills: ["Container Security", "Cloud Security", "Compliance", "Security Automation"],
      },
      {
        level: "Advanced",
        skills: ["Advanced DevSecOps", "Threat Modeling", "Security Architecture", "Zero Trust"],
      },
    ],
  },
];

export default function LearningPathPage() {
  return (
    <div className="container max-w-7xl py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">DevOps & Cloud Learning Paths</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose your learning path and follow a structured guide to build your career in DevOps and cloud computing.
          Each path includes recommended skills and resources for different experience levels.
        </p>
      </div>

      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {learningPaths.map((path, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-border"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {path.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{path.title}</h3>
                <p className="text-sm text-muted-foreground">{path.description}</p>
              </div>
            </div>

            {/* Skill Levels */}
            <div className="space-y-4">
              {path.levels.map((level, levelIndex) => (
                <div key={levelIndex} className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    {level.level}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {level.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Start Learning Button */}
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href={`/resources/learning-path/${path.title.toLowerCase().replace(/ /g, '-')}`}>
                  Start Learning
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <p className="text-muted-foreground mb-6">
          Explore our other resources to supplement your learning journey
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/resources/devops-guide">DevOps Guide</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources/cloud-computing">Cloud Computing</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources/career-tips">Career Tips</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 