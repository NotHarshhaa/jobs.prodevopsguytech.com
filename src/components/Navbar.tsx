"use client";

import * as React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { Github, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const resourcesItems = [
  {
    title: "DevOps Guide",
    href: "/resources/devops-guide",
    description: "A comprehensive guide to DevOps practices and tools.",
  },
  {
    title: "Cloud Computing",
    href: "/resources/cloud-computing",
    description: "Learn about cloud platforms and services.",
  },
  {
    title: "Career Tips",
    href: "/resources/career-tips",
    description: "Tips and advice for your DevOps career.",
  },
  {
    title: "Learning Path",
    href: "/resources/learning-path",
    description: "Structured learning paths for DevOps and cloud roles.",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 max-w-7xl items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image
                src={logo}
                alt="DevOps & Cloud Jobs Portal"
                className="rounded-lg"
                fill
              />
            </div>
            <span className="flex items-center gap-1">
              <span className="font-semibold hidden sm:inline">DevOps & Cloud Jobs</span>
              <span className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-xs font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                Beta
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/jobs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Jobs
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground bg-transparent hover:text-foreground hover:bg-transparent focus:bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resourcesItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/NotHarshhaa"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 py-4">
                  <Link
                    href="/jobs"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Jobs
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2 pt-4">
                    <Button variant="ghost" asChild>
                      <Link
                        href="https://github.com/NotHarshhaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-75 hover:opacity-100"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
