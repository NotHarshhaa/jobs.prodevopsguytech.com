"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const applyTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      applyTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark")
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light")
      }
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    applyTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="ml-auto h-9 w-9 rounded-full bg-white/80 dark:bg-neutral-800 shadow-md backdrop-blur flex items-center justify-center transition-all hover:bg-white dark:hover:bg-neutral-700"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="absolute text-gray-800"
          >
            <Moon size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
            className="absolute text-yellow-400"
          >
            <Sun size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
