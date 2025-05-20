"use client"

import Link from "next/link";
import { FaTelegramPlane, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Post a Job", href: "/post-job" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "DevOps Guide", href: "/resources/devops-guide" },
  { name: "Cloud Computing", href: "/resources/cloud-computing" },
  { name: "Career Tips", href: "/resources/career-tips" },
  { name: "Learning Path", href: "/resources/learning-path" },
];

const technologies = [
  { name: "Docker & Kubernetes", href: "/technologies/containers" },
  { name: "AWS & Cloud", href: "/technologies/cloud" },
  { name: "CI/CD", href: "/technologies/cicd" },
  { name: "Infrastructure as Code", href: "/technologies/iac" },
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
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {/* About Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-lg font-semibold">DevOps & Cloud Jobs</h3>
            <p className="text-sm text-muted-foreground">
              Your gateway to DevOps and cloud computing career opportunities. 
              Find the perfect role in the world of modern infrastructure and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Technologies</h3>
            <ul className="space-y-2">
              {technologies.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ProDevOpsGuy Tech Community. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
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
                      w-8 h-8 flex items-center justify-center rounded-full
                      bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300
                      transition-all duration-200 shadow-sm hover:shadow-md
                      ${color}
                    `}
                  >
                    {icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Built with love */}
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              Built with <span className="text-red-500">❤️</span> for the DevOps community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
