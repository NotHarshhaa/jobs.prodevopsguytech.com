import { Metadata } from "next";
import {
  Briefcase,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Star,
  MessageSquare,
  ArrowRight,
  PenTool,
  GraduationCap,
  Network,
  LineChart,
  Clock,
  FileCode,
  LucideIcon,
  BadgeCheck,
  Sparkles,
  LightbulbIcon,
  Cloud,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Career Tips - DevOps & Cloud Jobs Portal",
  description:
    "Expert career advice and guidance for DevOps engineers and cloud professionals to advance their careers.",
};

// Career path milestones
const careerMilestones = [
  {
    title: "Junior DevOps Engineer",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-700",
    years: "0-2 years",
    skills: [
      "Basic Linux & scripting",
      "CI/CD fundamentals",
      "Docker basics",
      "Cloud platform essentials",
    ],
    salary: "$70,000 - $95,000",
    tips: "Focus on building a strong technical foundation and hands-on experience with core tools",
  },
  {
    title: "DevOps Engineer",
    icon: FileCode,
    color: "bg-purple-100 text-purple-700",
    years: "2-4 years",
    skills: [
      "Advanced CI/CD pipelines",
      "Infrastructure as Code",
      "Kubernetes",
      "Monitoring systems",
    ],
    salary: "$95,000 - $125,000",
    tips: "Develop specialized knowledge in key areas and contribute to end-to-end automation",
  },
  {
    title: "Senior DevOps Engineer",
    icon: Network,
    color: "bg-green-100 text-green-700",
    years: "4-7 years",
    skills: [
      "Architecture design",
      "Cloud cost optimization",
      "Security integration",
      "Team leadership",
    ],
    salary: "$125,000 - $155,000",
    tips: "Lead projects, mentor junior team members, and develop advanced system designs",
  },
  {
    title: "DevOps Architect / Manager",
    icon: LineChart,
    color: "bg-amber-100 text-amber-700",
    years: "7+ years",
    skills: [
      "Enterprise architecture",
      "Multi-cloud strategies",
      "Team management",
      "Strategic planning",
    ],
    salary: "$155,000 - $200,000+",
    tips: "Focus on business alignment, building high-performing teams, and strategic initiatives",
  },
];

// Top certifications
const topCertifications = [
  {
    name: "AWS Certified DevOps Engineer - Professional",
    provider: "Amazon Web Services",
    difficulty: "Advanced",
    cost: "$300",
    duration: "6-9 months preparation",
    value: 5,
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    provider: "Cloud Native Computing Foundation",
    difficulty: "Intermediate-Advanced",
    cost: "$375",
    duration: "3-6 months preparation",
    value: 5,
  },
  {
    name: "Microsoft Azure DevOps Engineer Expert",
    provider: "Microsoft",
    difficulty: "Advanced",
    cost: "$165",
    duration: "4-8 months preparation",
    value: 4,
  },
  {
    name: "Google Professional Cloud DevOps Engineer",
    provider: "Google Cloud",
    difficulty: "Advanced",
    cost: "$200",
    duration: "4-6 months preparation",
    value: 4,
  },
  {
    name: "HashiCorp Terraform Associate",
    provider: "HashiCorp",
    difficulty: "Intermediate",
    cost: "$70",
    duration: "1-3 months preparation",
    value: 4,
  },
  {
    name: "Docker Certified Associate (DCA)",
    provider: "Docker",
    difficulty: "Intermediate",
    cost: "$195",
    duration: "2-4 months preparation",
    value: 3,
  },
];

// Industry Experts
const industryExperts = [
  {
    name: "Sarah Smith",
    title: "DevOps Director at Netflix",
    avatar: "/avatars/sarah.jpg",
    advice:
      "Focus on learning one cloud platform deeply before expanding to others. Depth in one area is more valuable than shallow knowledge in many.",
  },
  {
    name: "Michael Chen",
    title: "SRE Lead at Google",
    avatar: "/avatars/michael.jpg",
    advice:
      "Develop strong coding skills. Even in operations roles, your ability to automate and build tools will set you apart.",
  },
  {
    name: "Priya Patel",
    title: "Cloud Architect at Microsoft",
    avatar: "/avatars/priya.jpg",
    advice:
      "Always connect your technical decisions to business outcomes. The most successful engineers understand the 'why' behind their work.",
  },
];

// Interview tips
const interviewTips = [
  {
    title: "Technical Preparation",
    icon: <FileCode className="h-10 w-10" />,
    color: "bg-blue-100 text-blue-600",
    tips: [
      "Practice common infrastructure scenarios",
      "Be ready to diagram architectures",
      "Prepare for troubleshooting questions",
      "Review security best practices",
    ],
  },
  {
    title: "Behavioral Questions",
    icon: <MessageSquare className="h-10 w-10" />,
    color: "bg-purple-100 text-purple-600",
    tips: [
      "Use the STAR method for responses",
      "Prepare stories about collaboration",
      "Highlight problem-solving abilities",
      "Show continuous learning mindset",
    ],
  },
  {
    title: "Remote Interview Success",
    icon: <Users className="h-10 w-10" />,
    color: "bg-green-100 text-green-600",
    tips: [
      "Test your technical setup beforehand",
      "Have a clean, professional background",
      "Prepare notes but don't read from them",
      "Follow up with a thank-you email",
    ],
  },
];

export default function CareerTipsPage() {
  return (
    <div className="container max-w-6xl py-8 sm:py-12">
      {/* Hero Section */}
      <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 p-6 sm:mb-16 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2">
          <div className="space-y-3 sm:space-y-4">
            <Badge className="mb-1 sm:mb-2" variant="outline">
              Expert Guidance
            </Badge>
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
              Career Tips for DevOps & Cloud Professionals
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Accelerate your career growth with expert advice and strategies
              tailored for DevOps and cloud computing roles.
            </p>
            <div className="flex flex-wrap gap-3 pt-3 sm:gap-4 sm:pt-4">
              <Button className="group text-sm sm:text-base">
                Explore Career Paths
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="text-sm sm:text-base">
                <BookOpen className="mr-2 h-4 w-4" /> Browse Resources
              </Button>
            </div>
          </div>
          <div className="hidden justify-end md:flex">
            <div className="relative">
              {/* Career Growth Illustration */}
              <div className="relative flex h-64 w-64 items-center justify-center">
                <div className="absolute h-56 w-56 rounded-full bg-primary/10 blur-xl"></div>
                <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-secondary/10 blur-xl"></div>

                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border bg-card shadow-lg">
                  <LineChart className="h-16 w-16 text-primary" />
                </div>

                {/* Orbiting Elements */}
                <div className="absolute -bottom-6 -left-6 flex h-14 w-14 items-center justify-center rounded-full border bg-background shadow-md">
                  <BadgeCheck className="h-7 w-7 text-blue-500" />
                </div>

                <div className="absolute -right-4 bottom-12 flex h-14 w-14 items-center justify-center rounded-full border bg-background shadow-md">
                  <GraduationCap className="h-7 w-7 text-green-500" />
                </div>

                <div className="absolute left-12 top-0 flex h-14 w-14 items-center justify-center rounded-full border bg-background shadow-md">
                  <Sparkles className="h-7 w-7 text-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-primary/5 blur-xl"></div>
        <div className="absolute -left-12 top-1/3 h-32 w-32 rounded-full bg-secondary/5 blur-xl"></div>
      </div>

      {/* Career Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-16 sm:gap-6 md:grid-cols-3">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="p-3 pb-1 sm:p-4 sm:pb-2">
            <CardTitle className="text-xl sm:text-2xl">$145,000</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0">
            <CardDescription className="text-sm sm:text-base">
              Average salary for senior DevOps engineers in the US
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="p-3 pb-1 sm:p-4 sm:pb-2">
            <CardTitle className="text-xl sm:text-2xl">22%</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0">
            <CardDescription className="text-sm sm:text-base">
              Annual growth rate for cloud engineering positions
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="p-3 pb-1 sm:p-4 sm:pb-2">
            <CardTitle className="text-xl sm:text-2xl">4.2 years</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0">
            <CardDescription className="text-sm sm:text-base">
              Average time to reach senior level in DevOps careers
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Building Your Career Path */}
      <section className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Growth Trajectory
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Building Your Career Path
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
            A successful career in DevOps and cloud computing requires a
            combination of technical skills, soft skills, and continuous
            learning
          </p>
        </div>

        {/* Career Journey */}
        <div className="relative mb-8 sm:mb-12">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-muted md:hidden"></div>
          <div className="absolute left-0 top-20 hidden h-1 w-full bg-muted sm:top-24 md:block"></div>

          <div className="grid gap-8 sm:gap-12 md:grid-cols-4">
            {careerMilestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center md:items-start">
                  {/* Milestone Icon */}
                  <div
                    className={`relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full ${milestone.color} shadow-sm sm:mb-4 sm:h-16 sm:w-16 md:mb-6`}
                  >
                    <milestone.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>

                  {/* Years Badge */}
                  <Badge
                    variant="secondary"
                    className="mb-1 text-xs sm:mb-2 sm:text-sm md:absolute md:-top-2 md:left-16"
                  >
                    {milestone.years}
                  </Badge>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold sm:text-xl">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      Typical Salary: {milestone.salary}
                    </p>

                    <div className="mt-3 space-y-1 sm:mt-4 sm:space-y-2">
                      <h4 className="text-xs font-medium sm:text-sm">
                        Key Skills:
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {milestone.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs sm:text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-xs font-medium sm:text-sm">
                        Career Tip:
                      </h4>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        {milestone.tips}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Skills */}
      <section className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Skill Development
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Essential Skills
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
            Balance these key skill areas to advance your DevOps and cloud
            computing career
          </p>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-2 text-xs sm:mb-6 sm:text-sm">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="border-none p-0">
            <Card>
              <CardHeader className="p-4 pb-2 sm:p-6 sm:pb-3">
                <CardTitle className="text-base sm:text-lg">
                  Technical Skills for DevOps Excellence
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Master these technical competencies to excel in DevOps and
                  cloud roles
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2 sm:p-6 sm:pt-3">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                        <FileCode className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <h3 className="text-sm font-medium sm:text-base">
                        Programming & Scripting
                      </h3>
                    </div>
                    <ul className="space-y-0.5 text-xs text-muted-foreground sm:space-y-1 sm:text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-1 mt-0.5 h-3 w-3 text-primary sm:mr-2 sm:h-4 sm:w-4" />
                        <span>Python, Bash, PowerShell</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-1 mt-0.5 h-3 w-3 text-primary sm:mr-2 sm:h-4 sm:w-4" />
                        <span>Automation scripting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-1 mt-0.5 h-3 w-3 text-primary sm:mr-2 sm:h-4 sm:w-4" />
                        <span>Version control with Git</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1 text-green-600">
                        <Cloud className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Cloud Platforms</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>AWS, Azure, or GCP expertise</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Cloud-native architectures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Multi-cloud strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-amber-100 p-1 text-amber-600">
                        <Network className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Containerization</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Docker, Kubernetes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Container orchestration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Service mesh technologies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-purple-100 p-1 text-purple-600">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">CI/CD Implementation</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Jenkins, GitHub Actions, GitLab CI</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Pipeline design and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Test automation integration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-red-100 p-1 text-red-600">
                        <FileCode className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Infrastructure as Code</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Terraform, CloudFormation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Ansible, Puppet, Chef</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Infrastructure testing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-indigo-100 p-1 text-indigo-600">
                        <LineChart className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">
                        Monitoring & Observability
                      </h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Prometheus, Grafana, ELK Stack</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Logging and tracing systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Performance analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soft" className="border-none p-0">
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills & Professional Competencies</CardTitle>
                <CardDescription>
                  Equally important non-technical skills that set apart
                  successful DevOps professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-1 text-blue-600">
                        <LightbulbIcon className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Problem Solving</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Critical thinking abilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Troubleshooting methodology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Systems thinking approach</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1 text-green-600">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Communication</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Technical documentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Cross-team collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Explaining complex concepts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-amber-100 p-1 text-amber-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Collaboration</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Cross-functional teamwork</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Conflict resolution</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Mentoring and knowledge sharing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-purple-100 p-1 text-purple-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Time Management</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Prioritization skills</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Meeting deadlines consistently</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Balancing multiple tasks</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-red-100 p-1 text-red-600">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Continuous Learning</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Keeping up with technologies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Self-directed learning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Experimenting with new tools</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-indigo-100 p-1 text-indigo-600">
                        <PenTool className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">Adaptability</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Embracing change</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Quick learning in new situations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                        <span>Flexibility with tools and processes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Top Certifications */}
      <section className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Credentials
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Top Certifications
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
            Industry-recognized certifications that can boost your career and
            earnings
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topCertifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.provider}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Value:</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < cert.value
                            ? "fill-amber-500 text-amber-500"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Difficulty:</span>
                  <span className="text-sm text-muted-foreground">
                    {cert.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Preparation:</span>
                  <span className="text-sm text-muted-foreground">
                    {cert.duration}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-muted/30 px-6 py-3">
                <div className="flex w-full items-center justify-between">
                  <span className="text-sm font-medium">Cost:</span>
                  <span className="text-sm">{cert.cost}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Expert Advice */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-2">
            Industry Insights
          </Badge>
          <h2 className="text-3xl font-semibold">Expert Advice</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Wisdom from seasoned professionals in the field
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {industryExperts.map((expert, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="relative z-10 pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={expert.avatar} />
                    <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{expert.name}</CardTitle>
                    <CardDescription>{expert.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="italic text-muted-foreground">
                  "{expert.advice}"
                </div>
              </CardContent>
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
            </Card>
          ))}
        </div>
      </section>

      {/* Interview Tips */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-2">
            Interview Success
          </Badge>
          <h2 className="text-3xl font-semibold">Interview Preparation</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Strategies to help you shine in your next DevOps or cloud role
            interview
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {interviewTips.map((tip, index) => (
            <div key={index} className="rounded-xl border p-6">
              <div className="mb-6 flex justify-center">
                <div className={`rounded-full p-4 ${tip.color}`}>
                  {tip.icon}
                </div>
              </div>
              <h3 className="mb-4 text-center text-xl font-medium">
                {tip.title}
              </h3>
              <ul className="space-y-2">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Ready to Advance Your DevOps Career?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Explore our learning resources and job listings to take the next step
          in your professional journey
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="group">
            Browse Job Listings
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Explore Learning Paths
          </Button>
        </div>
      </section>
    </div>
  );
}
