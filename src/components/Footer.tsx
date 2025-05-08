"use client"

import Link from "next/link";
import { FaTelegramPlane, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    href: "https://t.me/prodevopsguy",
    icon: <FaTelegramPlane />,
    label: "Telegram",
  },
  {
    href: "https://www.linkedin.com/in/harshhaa-vardhan-reddy/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/NotHarshhaa",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://notharshhaa.site",
    icon: <FaGlobe />,
    label: "Website",
  },
];

export default function Footer() {
  return (
    <footer className="py-6 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full max-w-[95%] sm:max-w-5xl mx-auto
          bg-white/30 dark:bg-black/30 backdrop-blur-md
          border border-gray-200 dark:border-gray-700
          shadow-xl rounded-3xl
          px-6 py-6 sm:px-10 sm:py-8
          flex flex-col sm:flex-row justify-between items-center gap-6
        "
      >
        {/* Brand */}
        <div className="text-center sm:text-left space-y-1">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
            DevOps & Cloud Jobs Space
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Connecting talents with opportunities
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-gray-700 dark:text-gray-300 text-2xl">
          {socials.map(({ href, icon, label }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition-colors"
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-primary dark:hover:text-white hover:drop-shadow-lg"
              >
                {icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400"
      >
        © {new Date().getFullYear()} ProDevOpsGuy Tech Community. All rights reserved.
      </motion.div>
    </footer>
  );
}
