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
        text-xs font-medium
        border-gray-300 bg-gray-100 text-gray-700
        hover:bg-gray-200
        dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700
        transition-all duration-200 ease-in-out
        shadow-sm hover:shadow-md
        ${className}
      `}
    >
      {children}
    </span>
  );
}
