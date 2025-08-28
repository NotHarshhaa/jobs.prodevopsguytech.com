"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md px-4 py-4 sticky top-0 z-50 shadow-sm dark:shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-12 h-12 overflow-hidden rounded-2xl flex items-center justify-center">
            <Image 
              src={logo} 
              width={48} 
              height={48} 
              alt="ProDevOpsGuy Tech logo"
              className="object-cover transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ProDevOpsGuy Tech
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-300 -mt-1">
              DevOps & Cloud Jobs
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
          >
            Jobs
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side: Social Links + Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Social Links - Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-2 h-9 w-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Link
                href="https://github.com/NotHarshhaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-2 h-9 w-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="p-2 h-9 w-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 h-9 w-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            {/* Mobile Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-500 dark:text-gray-400">Follow us:</span>
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="p-2 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link
                    href="https://github.com/NotHarshhaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-3 h-3" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="p-2 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3 h-3" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="p-2 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
