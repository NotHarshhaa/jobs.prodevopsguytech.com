import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About - DevOps & Cloud Jobs Portal",
  description:
    "Learn more about the DevOps & Cloud Jobs Portal - Your gateway to DevOps and cloud computing career opportunities.",
};

export default function AboutPage() {
  return <AboutContent />;
}
