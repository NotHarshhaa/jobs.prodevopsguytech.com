import Link from "next/link";
import { FaTelegramPlane, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-4 bg-transparent">
      <div
        className="
          w-full max-w-[350px] sm:max-w-5xl mx-auto
          bg-white/30 dark:bg-black/30 backdrop-blur-lg
          rounded-2xl shadow-md
          px-6 py-4
          flex flex-col items-center gap-6
          border border-gray-200 dark:border-gray-700
          hover:border-gray-300 dark:hover:border-gray-500
          transition-all duration-300
        "
      >
        {/* Left: Brand Title */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            DevOps & Cloud Jobs Space
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            Connecting talents with opportunities
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-400 text-xl">
          <Link
            href="https://t.me/prodevopsguy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            href="https://www.linkedin.com/in/harshhaa-vardhan-reddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/NotHarshhaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://notharshhaa.site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <FaGlobe />
          </Link>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} ProDevOpsGuy Tech Community, Inc. All rights reserved.
      </div>
    </footer>
  );
}
