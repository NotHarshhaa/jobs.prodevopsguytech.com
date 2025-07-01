import { Metadata } from "next";
import {
  Cloud,
  Server,
  Database,
  Package,
  Lock,
  DollarSign,
  BarChart,
  Globe,
  Layers,
  Network,
  ShieldCheck,
  PieChart,
  Workflow,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Check,
  FileText,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Cloud Computing - DevOps & Cloud Jobs Portal",
  description:
    "Learn about cloud computing platforms, services, and best practices for modern infrastructure deployment.",
};

const cloudProviders = [
  {
    name: "Amazon Web Services (AWS)",
    icon: <Cloud className="h-8 w-8" />,
    color: "bg-orange-100 text-orange-600",
    description: "The most comprehensive and widely adopted cloud platform",
    services: 200,
    regions: 31,
    market: "33%",
    keyServices: [
      "Amazon EC2",
      "Amazon S3",
      "AWS Lambda",
      "Amazon RDS",
      "Amazon ECS/EKS",
    ],
    strengths: [
      "Broadest service offering",
      "Global infrastructure",
      "Extensive partner network",
      "Mature services",
    ],
  },
  {
    name: "Microsoft Azure",
    icon: <Server className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-600",
    description: "Enterprise-ready cloud with strong Microsoft integration",
    services: 160,
    regions: 60,
    market: "22%",
    keyServices: [
      "Azure Virtual Machines",
      "Azure Blob Storage",
      "Azure Functions",
      "Azure SQL Database",
      "Azure Kubernetes Service",
    ],
    strengths: [
      "Microsoft ecosystem integration",
      "Hybrid cloud capabilities",
      "Enterprise agreements",
      "Strong identity services",
    ],
  },
  {
    name: "Google Cloud Platform (GCP)",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-green-100 text-green-600",
    description: "Known for data analytics and machine learning services",
    services: 120,
    regions: 34,
    market: "10%",
    keyServices: [
      "Google Compute Engine",
      "Google Cloud Storage",
      "Google Cloud Functions",
      "Cloud SQL",
      "Google Kubernetes Engine",
    ],
    strengths: [
      "Data analytics strengths",
      "Machine learning capabilities",
      "Network performance",
      "Pricing models",
    ],
  },
];

const serviceTypes = [
  {
    title: "Compute",
    icon: <Server className="h-6 w-6" />,
    color: "text-blue-500",
    examples: [
      "Virtual Machines",
      "Containers",
      "Serverless",
      "Kubernetes Services",
    ],
    providers: [
      "EC2 (AWS)",
      "Virtual Machines (Azure)",
      "Compute Engine (GCP)",
    ],
  },
  {
    title: "Storage",
    icon: <Database className="h-6 w-6" />,
    color: "text-amber-500",
    examples: [
      "Object Storage",
      "Block Storage",
      "File Storage",
      "Archival Storage",
    ],
    providers: ["S3 (AWS)", "Blob Storage (Azure)", "Cloud Storage (GCP)"],
  },
  {
    title: "Networking",
    icon: <Network className="h-6 w-6" />,
    color: "text-purple-500",
    examples: ["VPC", "Load Balancers", "CDN", "DNS Services"],
    providers: ["VPC (AWS)", "Virtual Network (Azure)", "VPC (GCP)"],
  },
  {
    title: "Databases",
    icon: <Layers className="h-6 w-6" />,
    color: "text-green-500",
    examples: ["Relational", "NoSQL", "In-Memory", "Graph Databases"],
    providers: ["RDS (AWS)", "Azure SQL", "Cloud SQL (GCP)"],
  },
  {
    title: "Security",
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "text-red-500",
    examples: [
      "Identity Management",
      "Encryption",
      "Firewall",
      "Security Assessment",
    ],
    providers: ["IAM (AWS)", "Azure Active Directory", "Cloud IAM (GCP)"],
  },
  {
    title: "Analytics",
    icon: <PieChart className="h-6 w-6" />,
    color: "text-indigo-500",
    examples: ["Data Warehousing", "BI Tools", "Big Data", "Machine Learning"],
    providers: [
      "Redshift (AWS)",
      "Synapse Analytics (Azure)",
      "BigQuery (GCP)",
    ],
  },
];

const cloudBenefits = [
  {
    title: "Cost Efficiency",
    icon: <DollarSign className="h-10 w-10" />,
    color: "bg-green-100 text-green-600",
    description: "Pay only for what you use with reduced capital expenses",
  },
  {
    title: "Scalability",
    icon: <BarChart className="h-10 w-10" />,
    color: "bg-blue-100 text-blue-600",
    description: "Easily scale resources up or down based on demand",
  },
  {
    title: "Reliability",
    icon: <ShieldCheck className="h-10 w-10" />,
    color: "bg-purple-100 text-purple-600",
    description: "Redundant systems across multiple availability zones",
  },
  {
    title: "Global Reach",
    icon: <Globe className="h-10 w-10" />,
    color: "bg-amber-100 text-amber-600",
    description: "Deploy applications close to users around the world",
  },
  {
    title: "Security",
    icon: <Lock className="h-10 w-10" />,
    color: "bg-red-100 text-red-600",
    description: "Enterprise-grade security and compliance capabilities",
  },
  {
    title: "Innovation",
    icon: <Workflow className="h-10 w-10" />,
    color: "bg-indigo-100 text-indigo-600",
    description: "Access to latest technologies without major investment",
  },
];

export default function CloudComputingPage() {
  return (
    <div className="container max-w-6xl py-8 sm:py-12">
      {/* Hero Section */}
      <div className="relative mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-background p-6 sm:mb-16 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Badge className="mb-1 sm:mb-2" variant="outline">
              Cloud Technology
            </Badge>
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
              Cloud Computing Guide
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Explore the world of cloud platforms, services, and deployment
              models that power modern digital infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 pt-3 sm:gap-4 sm:pt-4">
              <Button className="group text-sm sm:text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="text-sm sm:text-base">
                <FileText className="mr-2 h-4 w-4" /> Download Resources
              </Button>
            </div>
          </div>
          <div className="hidden justify-center md:flex">
            <div className="relative">
              {/* Cloud Platform Illustration */}
              <div className="relative flex h-64 w-64 items-center justify-center">
                <div className="absolute h-56 w-56 rounded-full bg-blue-500/10 blur-xl"></div>
                <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-xl"></div>

                <div className="relative flex h-40 w-40 items-center justify-center rounded-xl border bg-card p-4 shadow-lg">
                  <Cloud className="h-20 w-20 text-primary" />
                </div>

                {/* Orbiting Elements */}
                <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-md">
                  <Server className="h-8 w-8 text-blue-500" />
                </div>

                <div className="absolute bottom-4 left-4 flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-md">
                  <Database className="h-8 w-8 text-amber-500" />
                </div>

                <div className="absolute right-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg border bg-background shadow-md">
                  <Lock className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-blue-500/5 blur-xl"></div>
        <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-purple-500/5 blur-xl"></div>
      </div>

      {/* Introduction Section */}
      <section className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Overview
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Introduction to Cloud Computing
          </h2>
          <p className="mx-auto mt-1 max-w-3xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
            Cloud computing is the delivery of computing services—including
            servers, storage, databases, networking, software, analytics, and
            intelligence—over the Internet ("the cloud") to offer faster
            innovation, flexible resources, and economies of scale.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
          {/* What is Cloud Computing */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30 p-4 pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg">
                What is Cloud Computing?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-4 sm:pt-6">
              <p className="mb-3 text-sm text-muted-foreground sm:mb-4 sm:text-base">
                Cloud computing enables organizations to consume computing
                resources as a utility - just like electricity - rather than
                having to build and maintain computing infrastructures in-house.
              </p>
              <p className="text-sm text-muted-foreground sm:text-base">
                This model offers ways to increase capacity or add capabilities
                on the fly without investing in new infrastructure, training new
                personnel, or licensing new software.
              </p>
            </CardContent>
          </Card>

          {/* Key Characteristics */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30 p-4 pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg">
                Key Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-4 sm:pt-6">
              <ul className="space-y-1 sm:space-y-2">
                {[
                  "On-demand self-service provisioning",
                  "Broad network access from anywhere",
                  "Resource pooling across multiple customers",
                  "Rapid elasticity to scale with demand",
                  "Measured service with pay-as-you-go pricing",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-1.5 h-4 w-4 text-primary sm:mr-2 sm:h-5 sm:w-5" />
                    <span className="text-xs text-muted-foreground sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cloud Service Models */}
      <section className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Service Models
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Cloud Service Models
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
            The three main service models that define how cloud resources are
            provided to users
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {/* IaaS */}
          <Card className="relative overflow-hidden border-t-4 border-t-blue-500">
            <div className="absolute right-4 top-4 opacity-10">
              <Server className="h-16 w-16 sm:h-24 sm:w-24" />
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-base sm:text-lg">
                Infrastructure as a Service (IaaS)
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Virtual computing resources over the internet
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="space-y-3 text-muted-foreground sm:space-y-4">
                <p className="text-xs sm:text-sm">
                  Provides virtualized computing resources like virtual
                  machines, storage, and networks. You manage the operating
                  systems and applications.
                </p>
                <div>
                  <h4 className="mb-1 text-sm font-medium sm:mb-2 sm:text-base">
                    Examples:
                  </h4>
                  <ul className="list-inside list-disc space-y-0.5 pl-2 text-xs sm:space-y-1 sm:text-sm">
                    <li>AWS EC2</li>
                    <li>Azure Virtual Machines</li>
                    <li>Google Compute Engine</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/30 p-3 sm:px-6 sm:py-3">
              <div className="flex items-center text-xs sm:text-sm">
                <span className="font-medium">Control Level:</span>
                <span className="ml-2">
                  High (OS, middleware, applications)
                </span>
              </div>
            </CardFooter>
          </Card>

          {/* PaaS */}
          <Card className="relative overflow-hidden border-t-4 border-t-purple-500">
            <div className="absolute right-4 top-4 opacity-10">
              <Package className="h-24 w-24" />
            </div>
            <CardHeader>
              <CardTitle>Platform as a Service (PaaS)</CardTitle>
              <CardDescription>
                Development and deployment environment in the cloud
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Provides platforms for developing, running, and managing
                  applications without the complexity of building and
                  maintaining infrastructure.
                </p>
                <div>
                  <h4 className="mb-2 font-medium">Examples:</h4>
                  <ul className="list-inside list-disc space-y-1 pl-2 text-sm">
                    <li>Heroku</li>
                    <li>Google App Engine</li>
                    <li>AWS Elastic Beanstalk</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/30 px-6 py-3">
              <div className="flex items-center text-sm">
                <span className="font-medium">Control Level:</span>
                <span className="ml-2">Medium (applications only)</span>
              </div>
            </CardFooter>
          </Card>

          {/* SaaS */}
          <Card className="relative overflow-hidden border-t-4 border-t-green-500">
            <div className="absolute right-4 top-4 opacity-10">
              <Monitor className="h-24 w-24" />
            </div>
            <CardHeader>
              <CardTitle>Software as a Service (SaaS)</CardTitle>
              <CardDescription>
                Complete applications delivered over the web
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Delivers software applications over the internet, on a
                  subscription basis. The provider manages everything, you just
                  use the software.
                </p>
                <div>
                  <h4 className="mb-2 font-medium">Examples:</h4>
                  <ul className="list-inside list-disc space-y-1 pl-2 text-sm">
                    <li>Salesforce</li>
                    <li>Microsoft 365</li>
                    <li>Google Workspace</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/30 px-6 py-3">
              <div className="flex items-center text-sm">
                <span className="font-medium">Control Level:</span>
                <span className="ml-2">Low (user-specific settings only)</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Cloud Benefits */}
      <section className="mb-8 sm:mb-16">
        <div className="mb-6 text-center sm:mb-8">
          <Badge variant="outline" className="mb-1 sm:mb-2">
            Advantages
          </Badge>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Benefits of Cloud Computing
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-sm text-muted-foreground sm:mt-2 sm:text-base">
            Key advantages that make cloud computing a compelling choice for
            modern businesses
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cloudBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl border p-4 text-center sm:p-6"
            >
              <div
                className={`mb-3 rounded-full p-3 sm:mb-4 sm:p-4 ${benefit.color}`}
              >
                {benefit.icon}
              </div>
              <h3 className="mb-1 text-lg font-medium sm:mb-2 sm:text-xl">
                {benefit.title}
              </h3>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Major Cloud Providers */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-2">
            Providers
          </Badge>
          <h2 className="text-3xl font-semibold">Major Cloud Providers</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Comparing the leading cloud platforms in the industry
          </p>
        </div>

        <Tabs defaultValue="comparison" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value="aws">AWS</TabsTrigger>
            <TabsTrigger value="azure">Azure</TabsTrigger>
            <TabsTrigger value="gcp">GCP</TabsTrigger>
          </TabsList>

          <TabsContent value="comparison" className="border-none p-0">
            <div className="overflow-hidden rounded-xl border">
              <div className="grid grid-cols-4 border-b bg-muted/50 p-4">
                <div className="col-span-1 font-medium">Provider</div>
                <div className="col-span-1 font-medium">Market Share</div>
                <div className="col-span-1 font-medium">Services</div>
                <div className="col-span-1 font-medium">Regions</div>
              </div>
              {cloudProviders.map((provider, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 border-b p-4 last:border-0"
                >
                  <div className="col-span-1 flex items-center">
                    <div className={`mr-3 rounded-full p-1 ${provider.color}`}>
                      {provider.icon}
                    </div>
                    <span className="font-medium">
                      {provider.name.split(" ")[0]}
                    </span>
                  </div>
                  <div className="col-span-1">{provider.market}</div>
                  <div className="col-span-1">{provider.services}+</div>
                  <div className="col-span-1">{provider.regions}</div>
                </div>
              ))}
            </div>
          </TabsContent>

          {cloudProviders.map((provider, index) => (
            <TabsContent
              key={index}
              value={provider.name.split(" ")[0].toLowerCase()}
              className="border-none p-0"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <div className={`mr-4 rounded-full p-2 ${provider.color}`}>
                      {provider.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        {provider.name}
                      </CardTitle>
                      <CardDescription>{provider.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-medium">Key Services</h4>
                      <ul className="space-y-2">
                        {provider.keyServices.map((service, i) => (
                          <li key={i} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-medium">Strengths</h4>
                      <ul className="space-y-2">
                        {provider.strengths.map((strength, i) => (
                          <li key={i} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">
                              {strength}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Common Cloud Services */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-2">
            Services
          </Badge>
          <h2 className="text-3xl font-semibold">Common Cloud Services</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Essential service categories available across major cloud providers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3 border-b p-4">
                <div className={`rounded-full p-2 ${service.color}/10`}>
                  <div className={service.color}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                    Common Examples
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, i) => (
                      <Badge key={i} variant="secondary">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                    Provider Services
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {service.providers.map((provider, i) => (
                      <li key={i}>{provider}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cloud Key Concepts */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-2">
            Concepts
          </Badge>
          <h2 className="text-3xl font-semibold">Key Cloud Concepts</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Important concepts and principles to understand in cloud computing
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-blue-500" />
                <span>Scalability</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-7">
                <p className="mb-2 text-muted-foreground">
                  The ability to increase or decrease IT resources as needed to
                  meet changing demand. Scalability involves handling growing or
                  shrinking resources to maintain performance in an economical
                  manner.
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-muted/30 p-3">
                    <h4 className="mb-1 font-medium">
                      Vertical Scaling (Scaling Up)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Adding more resources (CPU, RAM) to existing
                      infrastructure
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted/30 p-3">
                    <h4 className="mb-1 font-medium">
                      Horizontal Scaling (Scaling Out)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Adding more instances of resources to your infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-green-500" />
                <span>High Availability</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-7">
                <p className="mb-2 text-muted-foreground">
                  System design ensuring maximum system uptime and
                  accessibility. High availability systems aim to remain
                  operational even when components fail through redundancy and
                  failover mechanisms.
                </p>
                <div className="mt-4">
                  <h4 className="mb-2 font-medium">Key Components:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Redundant infrastructure across multiple availability
                        zones
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Automated failover mechanisms that detect and respond to
                        failures
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Load balancing to distribute traffic across multiple
                        resources
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-red-500" />
                <span>Security</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-7">
                <p className="mb-2 text-muted-foreground">
                  Protection of data, applications, and infrastructure in the
                  cloud. Cloud security encompasses a broad set of policies,
                  technologies, and controls deployed to protect data,
                  applications, and infrastructure.
                </p>
                <div className="mt-4">
                  <h4 className="mb-2 font-medium">Security Layers:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>Identity and Access Management (IAM)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Network security with firewalls and private networks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>Data encryption at rest and in transit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-amber-500" />
                <span>Cost Optimization</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-7">
                <p className="mb-2 text-muted-foreground">
                  Strategies to manage and optimize cloud spending effectively.
                  Cost optimization is about finding the right balance between
                  performance, reliability, and cost for your specific
                  workloads.
                </p>
                <div className="mt-4">
                  <h4 className="mb-2 font-medium">Best Practices:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Right-sizing resources to match workload needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>Implementing auto-scaling to match demand</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Using reserved instances for predictable workloads
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>
                        Monitoring and analyzing cost with cloud-native tools
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Ready to Start Your Cloud Journey?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Explore our learning paths and resources to build your cloud computing
          skills
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="group">
            View Cloud Certifications
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Browse Cloud Jobs
          </Button>
        </div>
      </section>
    </div>
  );
}
