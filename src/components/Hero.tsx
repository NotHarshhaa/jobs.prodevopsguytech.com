import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight, Search, MapPin, Briefcase } from "lucide-react"
import { Input } from "./ui/input"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-primary">
            <span className="mr-2 rounded-full bg-primary/20 p-1">🚀</span>
            <span className="text-sm font-medium">
              Find Your Next DevOps & Cloud Opportunity
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Find your{" "}
            <span className="inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              dream job
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl">
            Browse through hundreds of jobs in the tech industry
          </h2>

          {/* Search Bar */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-6 text-lg rounded-full border-2 border-muted hover:border-primary/50 focus:border-primary transition-colors"
              />
            </div>
            <Button size="lg" className="w-full sm:w-auto rounded-full text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-colors" asChild>
              <Link href="/jobs">
                Search Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Job Stats */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center justify-center space-x-2 rounded-2xl bg-background/80 p-4 shadow-lg backdrop-blur">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-lg font-medium">1000+ Jobs</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-2xl bg-background/80 p-4 shadow-lg backdrop-blur">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg font-medium">Remote Friendly</span>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-2xl bg-background/80 p-4 shadow-lg backdrop-blur">
              <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-lg font-medium">Instant Alerts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background gradient effect */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/30 to-purple-600/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
} 