import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - DevOps & Cloud Jobs Portal",
  description: "Learn more about the DevOps & Cloud Jobs Portal - Your gateway to DevOps and cloud computing career opportunities.",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">About DevOps & Cloud Jobs Portal</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            We connect talented DevOps engineers and cloud professionals with innovative companies. 
            Our platform serves as a bridge between skilled professionals and organizations leading 
            the digital transformation through DevOps and cloud technologies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Curated DevOps and cloud computing job opportunities</li>
            <li>Resources for career development and skill enhancement</li>
            <li>Industry insights and best practices</li>
            <li>Community of DevOps professionals</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Choose Us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Specialized Focus</h3>
              <p className="text-sm text-muted-foreground">
                We exclusively focus on DevOps and cloud roles, ensuring quality 
                opportunities in these domains.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Every job posting is verified to maintain high standards and 
                relevance.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Career Growth</h3>
              <p className="text-sm text-muted-foreground">
                Access to learning resources and career guidance to help you grow.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Community</h3>
              <p className="text-sm text-muted-foreground">
                Join a growing community of DevOps and cloud professionals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 