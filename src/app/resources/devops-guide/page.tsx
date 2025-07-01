import { Metadata } from "next";
import {
  Server,
  GitBranch,
  Workflow,
  Terminal,
  MonitorCheck,
  Clock,
  Layers,
  Cpu,
  BarChart,
  Puzzle,
  Wrench,
  FileCode,
  Cloud,
  Database,
  ArrowRight,
  Code,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "DevOps Guide - DevOps & Cloud Jobs Portal",
  description:
    "Comprehensive guide to DevOps practices, tools, and methodologies for modern software development and operations.",
};

// DevOps Tools data
const devopsTools = {
  versionControl: [
    { name: "Git", desc: "Distributed version control system", popular: true },
    { name: "GitHub", desc: "Git repository hosting service", popular: true },
    { name: "GitLab", desc: "Complete DevOps platform", popular: true },
    { name: "Bitbucket", desc: "Git solution for teams", popular: false },
  ],
  cicd: [
    { name: "Jenkins", desc: "Open-source automation server", popular: true },
    { name: "GitHub Actions", desc: "CI/CD built into GitHub", popular: true },
    { name: "GitLab CI", desc: "CI/CD integrated with GitLab", popular: true },
    {
      name: "CircleCI",
      desc: "Cloud-native CI/CD platform",
      popular: false,
    },
    {
      name: "Travis CI",
      desc: "CI service for open source projects",
      popular: false,
    },
  ],
  containerization: [
    {
      name: "Docker",
      desc: "Platform for container management",
      popular: true,
    },
    {
      name: "Kubernetes",
      desc: "Container orchestration system",
      popular: true,
    },
    {
      name: "OpenShift",
      desc: "Enterprise Kubernetes platform",
      popular: false,
    },
    { name: "Podman", desc: "Daemonless container engine", popular: false },
  ],
  configuration: [
    { name: "Ansible", desc: "Simple IT automation", popular: true },
    { name: "Terraform", desc: "Infrastructure as code tool", popular: true },
    { name: "Puppet", desc: "Configuration management tool", popular: false },
    { name: "Chef", desc: "Infrastructure automation", popular: false },
  ],
  monitoring: [
    {
      name: "Prometheus",
      desc: "Monitoring and alerting toolkit",
      popular: true,
    },
    { name: "Grafana", desc: "Observability platform", popular: true },
    {
      name: "ELK Stack",
      desc: "Elasticsearch, Logstash, Kibana",
      popular: true,
    },
    { name: "Datadog", desc: "Cloud monitoring as a service", popular: false },
    { name: "New Relic", desc: "Observability platform", popular: false },
  ],
};

// DevOps Learning Journey
const learningJourney = [
  {
    phase: "Foundation",
    icon: <Layers className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-700",
    description: "Build your basic understanding and skills",
    skills: [
      "Linux fundamentals",
      "Git version control",
      "Bash scripting basics",
      "Cloud computing concepts",
    ],
  },
  {
    phase: "Core Skills",
    icon: <Cpu className="h-8 w-8" />,
    color: "bg-purple-100 text-purple-700",
    description: "Master the essential DevOps tools and processes",
    skills: [
      "Docker & containerization",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Configuration management",
    ],
  },
  {
    phase: "Advanced",
    icon: <BarChart className="h-8 w-8" />,
    color: "bg-green-100 text-green-700",
    description: "Specialize and expand your expertise",
    skills: [
      "Kubernetes orchestration",
      "Microservices architecture",
      "Monitoring & observability",
      "Site Reliability Engineering",
    ],
  },
  {
    phase: "Expert",
    icon: <Puzzle className="h-8 w-8" />,
    color: "bg-amber-100 text-amber-700",
    description: "Lead and innovate in the field",
    skills: [
      "Advanced security practices",
      "Multi-cloud strategies",
      "DevOps culture transformation",
      "Platform engineering",
    ],
  },
];

export default function DevOpsGuidePage() {
  return (
    <div className="container max-w-6xl py-8 sm:py-12">
      {/* Hero Section */}
      <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-background p-6 sm:mb-16 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Badge className="mb-1 sm:mb-2" variant="outline">
              Complete Guide
            </Badge>
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
              DevOps Guide
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              A comprehensive resource for understanding DevOps methodologies,
              tools, and best practices for modern software delivery.
            </p>
            <div className="flex flex-wrap gap-3 pt-3 sm:gap-4 sm:pt-4">
              <Button className="group text-sm sm:text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="text-sm sm:text-base">
                <FileCode className="mr-2 h-4 w-4" /> Download PDF
              </Button>
            </div>
          </div>
          <div className="relative hidden justify-end md:flex">
            <div className="relative h-56 w-56">
              <div className="absolute left-4 top-4 h-40 w-40 rounded-full bg-primary/20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-full bg-secondary/20 blur-xl"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-xl border bg-background p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Code className="h-8 w-8" />
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <Workflow className="h-8 w-8" />
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <Server className="h-8 w-8" />
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <GitBranch className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 h-px w-1/2 bg-gradient-to-r from-transparent to-primary/20"></div>
        <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
      </div>

      {/* What is DevOps Section */}
      <section className="mb-8 overflow-hidden rounded-xl border sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-3 p-5 sm:space-y-4 sm:p-8">
            <Badge variant="outline">Definition</Badge>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              What is DevOps?
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              DevOps is a set of practices that combines software development
              (Dev) and IT operations (Ops). It aims to shorten the systems
              development life cycle and provide continuous delivery with high
              software quality.
            </p>
            <div className="pt-3 sm:pt-4">
              <div className="mb-3 flex items-center sm:mb-4">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 sm:mr-3 sm:h-8 sm:w-8">
                  <Clock className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium sm:text-base">
                    Faster Time to Market
                  </h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Reduce development cycles and deploy faster
                  </p>
                </div>
              </div>
              <div className="mb-3 flex items-center sm:mb-4">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 sm:mr-3 sm:h-8 sm:w-8">
                  <Wrench className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium sm:text-base">
                    Increased Reliability
                  </h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Ensure application stability and performance
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 sm:mr-3 sm:h-8 sm:w-8">
                  <MonitorCheck className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium sm:text-base">
                    Improved Collaboration
                  </h4>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    Break down silos between development and operations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-muted/30 p-8">
            <div className="relative mx-auto h-full max-w-md">
              <div className="relative mx-auto">
                {/* DevOps Infinity Symbol */}
                <svg
                  viewBox="0 0 320 160"
                  className="h-auto w-full max-w-xs"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 80C40 57.9086 57.9086 40 80 40C102.091 40 120 57.9086 120 80C120 102.091 102.091 120 80 120C57.9086 120 40 102.091 40 80Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-primary/60"
                  />
                  <path
                    d="M200 80C200 57.9086 217.909 40 240 40C262.091 40 280 57.9086 280 80C280 102.091 262.091 120 240 120C217.909 120 200 102.091 200 80Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-primary/60"
                  />
                  <path
                    d="M120 80C120 48.4021 151.684 26.3147 180 46.4551"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-primary"
                  />
                  <path
                    d="M200 80C200 111.598 168.316 133.685 140 113.545"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-primary"
                  />
                </svg>
                <div className="absolute -left-4 top-1/4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -right-4 top-1/4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform rounded-full border bg-background px-4 py-2 font-medium shadow-md">
                  Continuous Integration & Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core DevOps Practices */}
      <section className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Methodologies
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Core DevOps Practices
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
            These essential practices form the foundation of DevOps culture and
            implementation
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-xl border bg-card shadow transition-all duration-300 hover:shadow-md">
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-blue-500/10 blur-xl"></div>
            <div className="p-4 sm:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 sm:mb-4 sm:h-12 sm:w-12">
                <GitBranch className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-1 text-sm font-medium sm:mb-2 sm:text-base">
                Continuous Integration (CI)
              </h3>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Automatically integrate code changes into a shared repository
                multiple times a day, verifying each integration with automated
                builds and tests.
              </p>
            </div>
            <div className="flex border-t bg-muted/50 p-3 sm:p-4">
              <span className="text-xs font-medium text-muted-foreground">
                Related tools: Jenkins, GitHub Actions, GitLab CI
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border bg-card shadow transition-all duration-300 hover:shadow-md">
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-purple-500/10 blur-xl"></div>
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                <Workflow className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-medium">Continuous Delivery (CD)</h3>
              <p className="text-sm text-muted-foreground">
                Automatically prepare code changes for release to production and
                deploy with a single click when ready.
              </p>
            </div>
            <div className="flex border-t bg-muted/50 p-4">
              <span className="text-xs font-medium text-muted-foreground">
                Related tools: ArgoCD, Spinnaker, Octopus Deploy
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border bg-card shadow transition-all duration-300 hover:shadow-md">
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-green-500/10 blur-xl"></div>
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <FileCode className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-medium">Infrastructure as Code</h3>
              <p className="text-sm text-muted-foreground">
                Manage and provision infrastructure through code instead of
                manual processes.
              </p>
            </div>
            <div className="flex border-t bg-muted/50 p-4">
              <span className="text-xs font-medium text-muted-foreground">
                Related tools: Terraform, Ansible, CloudFormation
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border bg-card shadow transition-all duration-300 hover:shadow-md">
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-amber-500/10 blur-xl"></div>
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <MonitorCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-medium">Monitoring and Logging</h3>
              <p className="text-sm text-muted-foreground">
                Monitor applications and infrastructure to ensure availability
                and performance.
              </p>
            </div>
            <div className="flex border-t bg-muted/50 p-4">
              <span className="text-xs font-medium text-muted-foreground">
                Related tools: Prometheus, Grafana, ELK Stack
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tools Section */}
      <section className="mb-8 overflow-hidden rounded-xl border p-5 sm:mb-16 sm:p-8">
        <div className="mb-6 sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Toolchain
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Essential DevOps Tools
          </h2>
          <p className="mt-1 text-sm text-muted-foreground sm:mt-2 sm:text-base">
            Explore the key tools used in modern DevOps workflows
          </p>
        </div>

        <Tabs defaultValue="versionControl" className="w-full">
          <TabsList className="mb-4 grid w-full auto-cols-fr grid-flow-col text-xs sm:mb-6 sm:text-sm">
            <TabsTrigger value="versionControl">Version Control</TabsTrigger>
            <TabsTrigger value="cicd">CI/CD</TabsTrigger>
            <TabsTrigger value="containerization">Containerization</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="versionControl" className="border-none p-0">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
              {devopsTools.versionControl.map((tool, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-3 pb-1 sm:p-4 sm:pb-2">
                    <CardTitle className="flex items-center text-base sm:text-lg">
                      {tool.name}
                      {tool.popular && (
                        <Badge className="ml-2" variant="secondary">
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0">
                    <CardDescription className="text-xs sm:text-sm">
                      {tool.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cicd" className="border-none p-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {devopsTools.cicd.map((tool, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      {tool.name}
                      {tool.popular && (
                        <Badge className="ml-2" variant="secondary">
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="containerization" className="border-none p-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {devopsTools.containerization.map((tool, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      {tool.name}
                      {tool.popular && (
                        <Badge className="ml-2" variant="secondary">
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="configuration" className="border-none p-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {devopsTools.configuration.map((tool, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      {tool.name}
                      {tool.popular && (
                        <Badge className="ml-2" variant="secondary">
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="border-none p-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {devopsTools.monitoring.map((tool, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      {tool.name}
                      {tool.popular && (
                        <Badge className="ml-2" variant="secondary">
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Learning Journey */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-2">
            Learning Path
          </Badge>
          <h2 className="text-3xl font-semibold">DevOps Learning Journey</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Follow this structured learning path to build your DevOps career
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-muted md:hidden"></div>

          <div className="grid gap-8 md:grid-cols-4">
            {learningJourney.map((phase, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center md:items-start"
              >
                {/* Phase Icon */}
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${phase.color} shadow-sm md:mb-6`}
                >
                  {phase.icon}
                </div>

                {/* Horizontal connector (desktop) */}
                {index < learningJourney.length - 1 && (
                  <div className="absolute left-full top-8 hidden h-0.5 w-full -translate-x-full -translate-y-1/2 transform bg-muted md:block"></div>
                )}

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold">{phase.phase}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {phase.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {phase.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center text-sm"
                      >
                        <ChevronRight className="mr-1 h-4 w-4 text-primary" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 rounded-xl border p-8">
        <div className="mb-8">
          <Badge variant="outline" className="mb-2">
            FAQ
          </Badge>
          <h2 className="text-3xl font-semibold">Common Questions</h2>
          <p className="mt-2 text-muted-foreground">
            Answers to frequently asked questions about DevOps
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What's the difference between DevOps and SRE?
            </AccordionTrigger>
            <AccordionContent>
              DevOps is a set of practices that combines software development
              and IT operations, while Site Reliability Engineering (SRE) is
              considered an implementation of DevOps. SRE uses software
              engineering approaches to solve operations problems and automate
              IT operations tasks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I get started with DevOps?
            </AccordionTrigger>
            <AccordionContent>
              Start by learning core development and operations concepts, such
              as programming basics, version control with Git, and Linux
              fundamentals. Then move on to learning CI/CD concepts,
              containerization with Docker, and infrastructure as code. Practice
              these skills by building small projects and gradually expand into
              more complex implementations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Which certifications are valuable for DevOps engineers?
            </AccordionTrigger>
            <AccordionContent>
              Valuable certifications include AWS Certified DevOps Engineer,
              Google Cloud Professional DevOps Engineer, Microsoft Azure DevOps
              Engineer, Certified Kubernetes Administrator (CKA), and HashiCorp
              Terraform Associate. The best certification depends on your career
              goals and which technologies your target companies use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How does DevOps improve software delivery?
            </AccordionTrigger>
            <AccordionContent>
              DevOps improves software delivery by fostering collaboration
              between development and operations teams, automating repetitive
              tasks, implementing continuous integration and delivery pipelines,
              improving visibility across the software lifecycle, and
              establishing a culture of continuous improvement. This results in
              faster releases, higher quality code, and more reliable systems.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Is DevOps only for large organizations?
            </AccordionTrigger>
            <AccordionContent>
              No, DevOps practices can benefit organizations of all sizes. While
              some tooling may be complex, the core principles of automation,
              collaboration, and continuous improvement apply to teams of any
              size. Small teams can often implement DevOps practices more
              quickly due to fewer organizational barriers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Ready to Master DevOps?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Explore our learning paths and resources to build your DevOps career
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="group">
            View Learning Paths
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Browse Job Listings
          </Button>
        </div>
      </section>
    </div>
  );
}
