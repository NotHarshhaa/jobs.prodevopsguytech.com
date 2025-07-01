"use client";

import Link from "next/link";
import { FaTelegramPlane, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  Mail,
  ChevronRight,
  ArrowRight,
  MapPin,
  Building2,
  GraduationCap,
  Zap,
  BookOpen,
  Server,
  Cloud,
  Puzzle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import logo from "@/assets/logo.png";

const quickLinks = [
  {
    name: "Browse Jobs",
    href: "/jobs",
    icon: <Briefcase className="h-4 w-4" />,
  },
  { name: "Post a Job", href: "/post-job", icon: <Zap className="h-4 w-4" /> },
  { name: "About Us", href: "/about", icon: <Heart className="h-4 w-4" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" /> },
];

const resources = [
  {
    name: "DevOps Guide",
    href: "/resources/devops-guide",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    name: "Cloud Computing",
    href: "/resources/cloud-computing",
    icon: <Cloud className="h-4 w-4" />,
  },
  {
    name: "Career Tips",
    href: "/resources/career-tips",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    name: "Learning Path",
    href: "/resources/learning-path",
    icon: <MapPin className="h-4 w-4" />,
  },
];

const technologies = [
  {
    name: "Docker & Kubernetes",
    href: "/technologies/containers",
    icon: <Puzzle className="h-4 w-4" />,
  },
  {
    name: "AWS & Cloud",
    href: "/technologies/cloud",
    icon: <Cloud className="h-4 w-4" />,
  },
  {
    name: "CI/CD",
    href: "/technologies/cicd",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    name: "Infrastructure as Code",
    href: "/technologies/iac",
    icon: <Server className="h-4 w-4" />,
  },
];

const locations = [
  "San Francisco",
  "New York",
  "London",
  "Berlin",
  "Singapore",
  "Remote",
];

const socials = [
  {
    href: "https://t.me/prodevopsguy",
    icon: <FaTelegramPlane />,
    label: "Telegram",
    color: "hover:bg-[#0088cc]/10 hover:text-[#0088cc]",
  },
  {
    href: "https://www.linkedin.com/in/harshhaa-vardhan-reddy/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]",
  },
  {
    href: "https://github.com/NotHarshhaa",
    icon: <FaGithub />,
    label: "GitHub",
    color: "hover:bg-gray-800/10 hover:text-gray-800 dark:hover:text-white",
  },
  {
    href: "https://notharshhaa.site",
    icon: <FaGlobe />,
    label: "Website",
    color: "hover:bg-[#4CAF50]/10 hover:text-[#4CAF50]",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Subscribe logic here
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background/30 backdrop-blur-xl">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Newsletter */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary/5 p-6 sm:p-10 md:p-16">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Get DevOps job alerts in your inbox
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Stay updated with the latest opportunities. Join our community
                of DevOps professionals and never miss a career-changing
                position.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {["DevOps", "Cloud", "Kubernetes", "AWS", "SRE"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="flex items-center">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-grow">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full border-border/50 bg-background pl-10 shadow-sm focus-visible:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="group shadow-md transition-all hover:shadow-lg"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
          {/* About Section */}
          <div className="col-span-2 space-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <div className="flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src={logo}
                  alt="DevOps & Cloud Jobs Portal"
                  className="object-cover"
                  fill
                />
              </div>
              <span className="font-heading ml-2 text-lg font-bold tracking-tight">
                DevOps & Cloud Jobs
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your gateway to DevOps and cloud computing career opportunities.
              Find the perfect role in the world of modern infrastructure and
              automation.
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon, label, color }, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`
                      flex h-8 w-8 items-center justify-center rounded-full
                      bg-background text-muted-foreground
                      transition-all duration-200 hover:shadow-sm
                      ${color}
                    `}
                  >
                    {icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 space-y-3 sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="font-medium">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="mr-2 text-primary/70">{link.icon}</span>
                    {link.name}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 space-y-3 sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="font-medium">Resources</h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="mr-2 text-primary/70">{link.icon}</span>
                    {link.name}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="col-span-1 space-y-3 sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="font-medium">Technologies</h3>
            <ul className="space-y-2.5">
              {technologies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="mr-2 text-primary/70">{link.icon}</span>
                    {link.name}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="col-span-1 space-y-3 sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="font-medium">Locations</h3>
            <ul className="space-y-2.5">
              {locations.map((location, idx) => (
                <li key={idx}>
                  <Link
                    href={`/jobs?location=${location}`}
                    className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <MapPin className="mr-2 h-4 w-4 text-primary/70" />
                    {location}
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border/30 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ProDevOpsGuy Tech Community. All
                rights reserved.
              </p>
              <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-foreground">
                  Cookies Policy
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col items-center text-center sm:items-end sm:text-right">
              <div className="flex items-center">
                <Building2 className="mr-1.5 h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  DevOps & Cloud Technologies
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Built with <span className="text-red-500">❤️</span> for the
                DevOps community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
