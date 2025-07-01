"use client";

import * as React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import {
  Github,
  Menu,
  LogOut,
  Search,
  Bell,
  User,
  ChevronDown,
  Briefcase,
  BookOpen,
  GraduationCap,
  Rocket,
  Zap,
  Heart,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

const resourcesItems = [
  {
    title: "DevOps Guide",
    href: "/resources/devops-guide",
    description: "A comprehensive guide to DevOps practices and tools.",
    icon: <BookOpen className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Cloud Computing",
    href: "/resources/cloud-computing",
    description: "Learn about cloud platforms and services.",
    icon: <Rocket className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Career Tips",
    href: "/resources/career-tips",
    description: "Tips and advice for your DevOps career.",
    icon: <GraduationCap className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Learning Path",
    href: "/resources/learning-path",
    description: "Structured learning paths for DevOps and cloud roles.",
    icon: <Zap className="h-4 w-4 text-orange-500" />,
  },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [scrolled, setScrolled] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/95 shadow-sm backdrop-blur-lg"
          : "bg-background/50 backdrop-blur-sm",
      )}
    >
      <nav className="container flex h-14 max-w-7xl items-center justify-between px-2 pr-1 sm:h-16 sm:px-3 md:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="relative h-7 w-7 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 sm:h-8 sm:w-8 md:h-9 md:w-9">
              <Image
                src={logo}
                alt="DevOps & Cloud Jobs Portal"
                className="object-cover"
                fill
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-1">
                <span className="font-heading text-[11px] font-bold tracking-tight sm:text-sm md:text-base">
                  DevOps & Cloud
                </span>
                <Badge
                  variant="outline"
                  className="rounded-full border-primary/20 bg-primary/5 px-1 py-0 text-[8px] font-medium text-primary sm:px-1.5 sm:text-[10px] md:px-2 md:text-xs"
                >
                  Beta
                </Badge>
              </span>
              <span className="hidden text-xs text-muted-foreground sm:inline-block">
                Find your next opportunity
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/jobs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "group rounded-full bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary",
                    )}
                  >
                    <Briefcase className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
                    Jobs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "group rounded-full bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary",
                    )}
                  >
                    <Heart className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "group rounded-full bg-transparent px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary data-[state=open]:bg-primary/5 data-[state=open]:text-primary",
                  )}
                >
                  <BookOpen className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="resources-dropdown-content w-full p-4 md:w-[520px]">
                    <div className="mb-3 border-b pb-3">
                      <div className="text-sm font-medium text-muted-foreground">
                        Explore our resources to boost your DevOps career
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      {resourcesItems.map((item, index) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={cn(
                              "navigation-menu-item block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-background p-1.5 shadow-sm">
                                {item.icon}
                              </div>
                              <span className="text-sm font-medium leading-none">
                                {item.title}
                              </span>
                            </div>
                            <p className="line-clamp-2 pt-1 text-xs leading-relaxed text-muted-foreground">
                              {item.description}
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full text-muted-foreground hover:bg-primary/5 hover:text-primary sm:h-7 sm:w-7 md:h-8 md:w-8"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search className="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <div className="hidden items-center gap-2 sm:flex sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full text-muted-foreground hover:bg-[#333]/10 hover:text-[#333] dark:hover:bg-white/10 dark:hover:text-white sm:h-7 sm:w-7 md:h-8 md:w-8"
              asChild
            >
              <Link
                href="https://github.com/NotHarshhaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>

          {status === "authenticated" && session ? (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative h-6 w-6 rounded-full text-muted-foreground hover:bg-primary/5 hover:text-primary sm:h-7 sm:w-7 md:h-8 md:w-8"
              >
                <Bell className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="sr-only">Notifications</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-6 w-6 overflow-hidden rounded-full p-0 transition-transform hover:scale-105 sm:h-7 sm:w-7 md:h-8 md:w-8"
                  >
                    <Avatar className="h-6 w-6 border border-border/50 shadow-sm sm:h-7 sm:w-7 md:h-8 md:w-8">
                      <AvatarImage src={session.user?.image || undefined} />
                      <AvatarFallback className="bg-primary/5 text-primary">
                        {session.user?.name?.[0] || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-60 overflow-hidden rounded-xl p-0"
                >
                  <div className="border-b px-4 py-3 pb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-border/50 shadow-sm">
                        <AvatarImage src={session.user?.image || undefined} />
                        <AvatarFallback className="bg-primary/5 text-primary">
                          {session.user?.name?.[0] || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col space-y-0.5 leading-none">
                        {session.user?.name && (
                          <p className="font-medium">{session.user.name}</p>
                        )}
                        {session.user?.email && (
                          <p className="w-[170px] truncate text-xs text-muted-foreground">
                            {session.user.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer rounded-lg"
                    >
                      <Link href="/jobs/new">
                        <Briefcase className="mr-2 h-4 w-4 text-primary" />
                        Post a Job
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer rounded-lg"
                    >
                      <Link href="/admin">
                        <User className="mr-2 h-4 w-4 text-purple-500" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer rounded-lg"
                    >
                      <Link href="/settings">
                        <span className="flex w-full items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          Settings
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  </div>

                  <div className="border-t p-2">
                    <DropdownMenuItem
                      className="cursor-pointer rounded-lg text-red-500 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-950/50"
                      onClick={handleSignOut}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center">
              <Button
                variant="ghost"
                className="mr-1 rounded-full px-1.5 py-1 text-[10px] font-medium hover:bg-primary/5 hover:text-primary sm:mr-2 sm:px-3 sm:py-1.5 sm:text-sm"
                onClick={() => signIn()}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="relative overflow-hidden rounded-full bg-primary px-2 py-1 text-[10px] font-medium shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg sm:px-4 sm:py-2 sm:text-sm"
                asChild
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-1 h-7 w-7 rounded-full hover:bg-primary/5 sm:h-7 sm:w-7 md:h-8 md:w-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5"
                  >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] p-0 sm:w-72 md:w-80"
              >
                <div className="border-b px-4 py-3 sm:px-5 sm:py-4">
                  <div className="flex items-center">
                    <div className="relative h-7 w-7 overflow-hidden rounded-lg sm:h-8 sm:w-8">
                      <Image
                        src={logo}
                        alt="DevOps & Cloud Jobs Portal"
                        className="object-cover"
                        fill
                      />
                    </div>
                    <span className="font-heading ml-2 text-sm font-bold tracking-tight sm:text-base">
                      DevOps & Cloud Jobs
                    </span>
                  </div>
                </div>

                {status === "authenticated" && session ? (
                  <div className="border-b px-4 py-3 sm:px-5 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                        <AvatarImage src={session.user?.image || undefined} />
                        <AvatarFallback>
                          {session.user?.name?.[0] || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col space-y-0.5 leading-none">
                        {session.user?.name && (
                          <p className="text-sm font-medium sm:text-base">
                            {session.user.name}
                          </p>
                        )}
                        {session.user?.email && (
                          <p className="w-[150px] truncate text-[10px] text-muted-foreground sm:w-[170px] sm:text-xs">
                            {session.user.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 border-b px-4 py-3 sm:px-5 sm:py-4">
                    <Button
                      className="h-8 w-full justify-center rounded-lg text-xs sm:h-9 sm:text-sm"
                      onClick={() => signIn()}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant="outline"
                      className="h-8 w-full justify-center rounded-lg text-xs sm:h-9 sm:text-sm"
                      asChild
                    >
                      <Link href="/get-started">Get Started</Link>
                    </Button>
                  </div>
                )}

                <div className="flex flex-col px-2 py-2 md:py-4">
                  <Link
                    href="/jobs"
                    className="flex items-center rounded-lg px-2 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:text-sm md:px-3 md:py-2"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Jobs
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center rounded-lg px-2 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:text-sm md:px-3 md:py-2"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    About
                  </Link>

                  <div className="mt-1 border-t pt-1 sm:pt-2">
                    <p className="px-3 py-1.5 text-[10px] font-medium uppercase text-muted-foreground sm:py-2 sm:text-xs sm:normal-case">
                      Resources
                    </p>
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center rounded-lg px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:py-1.5 sm:text-sm md:px-3 md:py-2"
                      >
                        <div className="mr-1.5 h-3.5 w-3.5 text-muted-foreground sm:mr-2 sm:h-4 sm:w-4">
                          {React.cloneElement(item.icon, {
                            className: "h-3.5 w-3.5 sm:h-4 sm:w-4",
                          })}
                        </div>
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  {status === "authenticated" && (
                    <div className="mt-1 border-t pt-1 sm:pt-2">
                      <p className="px-3 py-1.5 text-[10px] font-medium uppercase text-muted-foreground sm:py-2 sm:text-xs sm:normal-case">
                        Account
                      </p>
                      <Link
                        href="/jobs/new"
                        className="flex items-center rounded-lg px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:py-1.5 sm:text-sm md:px-3 md:py-2"
                      >
                        <Briefcase className="mr-2 h-4 w-4 text-primary" />
                        Post a Job
                      </Link>
                      <Link
                        href="/admin"
                        className="flex items-center rounded-lg px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:py-1.5 sm:text-sm md:px-3 md:py-2"
                      >
                        <User className="mr-2 h-4 w-4 text-purple-500" />
                        Admin Dashboard
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center rounded-lg px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:py-1.5 sm:text-sm md:px-3 md:py-2"
                      >
                        <svg
                          className="mr-2 h-4 w-4 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        Settings
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex w-full items-center rounded-lg px-2 py-1 text-xs font-medium text-red-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/50 sm:py-1.5 sm:text-sm md:px-3 md:py-2"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  )}

                  <div className="mt-1 border-t pt-1 sm:pt-2">
                    <p className="px-3 py-1.5 text-[10px] font-medium uppercase text-muted-foreground sm:py-2 sm:text-xs sm:normal-case">
                      Connect
                    </p>
                    <Link
                      href="https://github.com/NotHarshhaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-lg px-2 py-1 text-xs font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary sm:py-1.5 sm:text-sm md:px-3 md:py-2"
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
                      GitHub
                    </Link>
                    <div className="flex items-center rounded-lg px-2 py-1 text-xs font-medium text-foreground sm:py-1.5 sm:text-sm md:px-3 md:py-2">
                      <ThemeToggle />
                      <span className="ml-1.5 sm:ml-2">Theme</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Search panel */}
      {showSearch && (
        <div className="animate-fadein container overflow-hidden border-t border-border/50 bg-background/95 py-1.5 backdrop-blur-lg sm:py-2 md:py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground sm:left-2.5 sm:h-3.5 sm:w-3.5 md:left-3 md:h-4 md:w-4" />
              <Input
                type="text"
                placeholder="Search for jobs, companies, or keywords..."
                className="h-7 w-full rounded-full border-border/50 pl-6 text-xs focus-visible:ring-primary sm:h-8 sm:pl-7 sm:text-sm md:h-9 md:pl-9 md:text-base"
                autoFocus
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-7 rounded-full px-2 text-xs sm:h-8 sm:px-3 md:h-9 md:text-sm"
              onClick={() => setShowSearch(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
