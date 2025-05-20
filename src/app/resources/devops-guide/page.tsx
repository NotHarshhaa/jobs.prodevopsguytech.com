import { Metadata } from "next"

export const metadata: Metadata = {
  title: "DevOps Guide - DevOps & Cloud Jobs Portal",
  description: "Comprehensive guide to DevOps practices, tools, and methodologies for modern software development and operations.",
}

export default function DevOpsGuidePage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">DevOps Guide</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What is DevOps?</h2>
          <p className="text-muted-foreground">
            DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
            It aims to shorten the systems development life cycle and provide continuous delivery with high 
            software quality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Core DevOps Practices</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Continuous Integration (CI)</h3>
              <p className="text-sm text-muted-foreground">
                Automatically integrate code changes into a shared repository multiple times a day, 
                verifying each integration with automated builds and tests.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Continuous Delivery (CD)</h3>
              <p className="text-sm text-muted-foreground">
                Automatically prepare code changes for release to production and deploy with a single click 
                when ready.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Infrastructure as Code</h3>
              <p className="text-sm text-muted-foreground">
                Manage and provision infrastructure through code instead of manual processes.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Monitoring and Logging</h3>
              <p className="text-sm text-muted-foreground">
                Monitor applications and infrastructure to ensure availability and performance.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Essential DevOps Tools</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Version Control</h3>
              <p className="text-sm text-muted-foreground">Git, GitHub, GitLab, Bitbucket</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">CI/CD Tools</h3>
              <p className="text-sm text-muted-foreground">Jenkins, GitLab CI, GitHub Actions, CircleCI</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Configuration Management</h3>
              <p className="text-sm text-muted-foreground">Ansible, Puppet, Chef, Terraform</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Containerization</h3>
              <p className="text-sm text-muted-foreground">Docker, Kubernetes, OpenShift</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Getting Started with DevOps</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Learn the fundamentals of programming and scripting</li>
            <li>Master version control with Git</li>
            <li>Understand CI/CD principles and tools</li>
            <li>Learn containerization and orchestration</li>
            <li>Study cloud platforms (AWS, Azure, GCP)</li>
            <li>Practice Infrastructure as Code</li>
          </ol>
        </section>
      </div>
    </div>
  )
} 