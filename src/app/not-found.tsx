import Link from "next/link";
import { Home, ArrowLeft, Search, Users } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Icon */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full flex items-center justify-center">
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">404</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-md mx-auto">
          <Link
            href="/"
            className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
          >
            <Home className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Home</span>
          </Link>
          
          <Link
            href="/"
            className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
          >
            <Search className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Browse Jobs</span>
          </Link>
          
          <Link
            href="/about"
            className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
          >
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">About Us</span>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back Home
          </Link>
          
          <Link
            href="/contact"
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-xl transition-colors"
          >
            Contact Support
          </Link>
        </div>

        {/* Help Text */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
