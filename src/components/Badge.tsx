import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-full border px-3 py-1.5
        text-xs font-semibold tracking-wide
        border-gray-200 dark:border-gray-700
        bg-gradient-to-r from-gray-100 via-white to-gray-50
        dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
        text-gray-800 dark:text-gray-100
        shadow-inner
        hover:shadow-lg hover:scale-105
        hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50
        dark:hover:from-blue-900 dark:hover:to-gray-900
        transition-all duration-200 ease-in-out
        ${className}
      `}
    >
      {children}
    </span>
  );
}
