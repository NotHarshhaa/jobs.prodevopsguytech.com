import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Loader from "./Loader"

export default function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-lg bg-muted px-3 py-1">
            🚀{" "}
            <span className="ml-2 text-sm font-medium">
              Find Your Next DevOps & Cloud Opportunity
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Starting your{" "}
            <span className="inline-block rounded-lg bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
              Next Career
            </span>
            ?
          </h1>

          <h2 className="mt-6 text-2xl font-medium tracking-tight text-muted-foreground sm:text-3xl">
            Don&apos;t start from scratch
          </h2>

          <div className="my-12 flex justify-center">
            <Loader />
          </div>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Kickstart with{" "}
            <span className="font-semibold text-foreground">
              expertly curated
            </span>{" "}
            job opportunities built with{" "}
            <span className="font-semibold text-foreground">
              DevOps, Cloud Computing, SRE
            </span>
            , and{" "}
            <span className="font-semibold text-foreground">
              Platform Engineering
            </span>
            .
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Button size="lg" className="group" asChild>
              <Link href="/jobs" className="relative">
                Browse Jobs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
} 