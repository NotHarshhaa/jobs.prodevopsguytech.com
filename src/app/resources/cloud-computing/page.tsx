import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cloud Computing - DevOps & Cloud Jobs Portal",
  description: "Learn about cloud computing platforms, services, and best practices for modern infrastructure deployment.",
}

export default function CloudComputingPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Cloud Computing Guide</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction to Cloud Computing</h2>
          <p className="text-muted-foreground">
            Cloud computing is the delivery of computing services—including servers, storage, databases, 
            networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer 
            faster innovation, flexible resources, and economies of scale.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cloud Service Models</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Infrastructure as a Service (IaaS)</h3>
              <p className="text-sm text-muted-foreground">
                Provides virtualized computing resources over the internet. Examples: AWS EC2, Azure VMs.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Platform as a Service (PaaS)</h3>
              <p className="text-sm text-muted-foreground">
                Provides a platform allowing customers to develop, run, and manage applications. Examples: Heroku, Google App Engine.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Software as a Service (SaaS)</h3>
              <p className="text-sm text-muted-foreground">
                Delivers software applications over the internet. Examples: Salesforce, Microsoft 365.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Major Cloud Providers</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Amazon Web Services (AWS)</h3>
              <p className="text-sm text-muted-foreground">
                The most comprehensive and widely adopted cloud platform, offering over 200 fully featured services.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Microsoft Azure</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-ready cloud platform with strong integration with Microsoft products and services.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Google Cloud Platform (GCP)</h3>
              <p className="text-sm text-muted-foreground">
                Known for strong data analytics, machine learning, and container technologies.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Cloud Concepts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Scalability</h3>
              <p className="text-sm text-muted-foreground">
                The ability to increase or decrease resources based on demand.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">High Availability</h3>
              <p className="text-sm text-muted-foreground">
                System design ensuring maximum system uptime and accessibility.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Security</h3>
              <p className="text-sm text-muted-foreground">
                Protection of data, applications, and infrastructure in the cloud.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Cost Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Strategies to manage and optimize cloud spending effectively.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 