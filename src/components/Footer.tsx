"use client"

import Link from "next/link";
import { FaTelegramPlane, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-4 bg-transparent sm:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          w-full max-w-[95%] sm:max-w-4xl mx-auto
          bg-gradient-to-br from-white/30 to-gray-100/10 dark:from-black/30 dark:to-gray-900/10
          backdrop-blur-xl
          rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg
          px-4 py-4 sm:px-8 sm:py-6
          flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6
          border border-gray-200 dark:border-gray-700
          transition-all duration-300
        "
      >
        {/* Left: Brand Title */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            DevOps & Cloud Jobs Space
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            Connecting talents with opportunities
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 sm:gap-6 text-gray-600 dark:text-gray-400 text-xl sm:text-2xl">
          {[{
            href: "https://t.me/prodevopsguy",
            icon: <FaTelegramPlane />,
            label: "Telegram"
          }, {
            href: "https://www.linkedin.com/in/harshhaa-vardhan-reddy/",
            icon: <FaLinkedin />,
            label: "LinkedIn"
          }, {
            href: "https://github.com/NotHarshhaa",
            icon: <FaGithub />,
            label: "GitHub"
          }, {
            href: "https://notharshhaa.site",
            icon: <FaGlobe />,
            label: "Website"
          }].map(({ href, icon, label }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400"
      >
        © {new Date().getFullYear()} ProDevOpsGuy Tech Community, Inc. All rights reserved.
      </motion.div>
    </footer>
  );
}
