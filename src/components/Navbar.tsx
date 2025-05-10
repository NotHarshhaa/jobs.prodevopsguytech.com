import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-transparent backdrop-blur-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + Title */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <Image 
              src={logo} 
              width={40} 
              height={40} 
              alt="Flow Jobs logo"
              className="object-cover transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            DevOps & Cloud Jobs Portal
          </span>
        </Link>

        {/* Right Side: GitHub Button + Theme Toggle */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <Button
            asChild
            className="
              bg-gray-900 dark:bg-white
              text-white dark:text-gray-900
              hover:bg-gray-800 dark:hover:bg-gray-200
              transition-all duration-200
              shadow-sm rounded-full px-4 py-2 flex items-center gap-2
            "
          >
            <Link
              href="https://github.com/NotHarshhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="transition-transform duration-300 hover:scale-110"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.287-.012-1.243-.018-2.253-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.087 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.02.005 2.047.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.432.372.816 1.102.816 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.192.698.798.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="font-medium">Follow me on GitHub</span>
            </Link>
          </Button>

          {/* Theme Toggle Button */}
          <div className="transition-transform duration-300 hover:scale-110 ml-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
