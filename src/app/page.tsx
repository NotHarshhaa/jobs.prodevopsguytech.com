import Hero from "@/components/Hero";
import Features from "@/components/Features";
import JobCategories from "@/components/JobCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps & Cloud Jobs Portal | Find Your Next Career Opportunity",
  description: "Find the best DevOps and cloud computing jobs. Connect with top companies hiring DevOps engineers, SRE, and cloud professionals.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <JobCategories />
    </main>
  );
}
