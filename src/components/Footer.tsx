"use client"

import Link from "next/link";
import { FaTelegramPlane, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-transparent backdrop-blur-md px-4 py-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand and copyright */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-center md:text-left">
          <span className="font-semibold text-gray-900 dark:text-white text-lg">
            DevOps & Cloud Jobs Space
          </span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} ProDevOpsGuy Tech Community. All rights reserved.
          </span>
        </div>
        {/* Social Icons */}
        <div className="flex gap-2 mt-2 md:mt-0">
          {socials.map(({ href, icon, label, color }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`
                  w-9 h-9 flex items-center justify-center rounded-full
                  bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300
                  transition-all duration-200 shadow-sm
                  ${color}
                `}
              >
                {icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 dark:text-gray-600 mt-2">
        Built with <span className="text-red-500">❤️</span> for the DevOps community
      </div>
    </footer>
  );
}
