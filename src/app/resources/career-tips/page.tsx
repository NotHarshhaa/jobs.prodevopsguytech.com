import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Tips - DevOps & Cloud Jobs Portal",
  description: "Expert career advice and guidance for DevOps engineers and cloud professionals to advance their careers.",
}

export default function CareerTipsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Career Tips for DevOps & Cloud Professionals</h1>
      
      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Building Your Career Path</h2>
          <p className="text-muted-foreground">
            A successful career in DevOps and cloud computing requires a combination of technical skills, 
            soft skills, and continuous learning. Here's your guide to building a rewarding career in this 
            dynamic field.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Essential Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Technical Skills</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Programming and scripting</li>
                <li>Cloud platforms expertise</li>
                <li>Container orchestration</li>
                <li>CI/CD implementation</li>
                <li>Infrastructure as Code</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Soft Skills</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Problem-solving abilities</li>
                <li>Communication skills</li>
                <li>Team collaboration</li>
                <li>Time management</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Career Development Strategies</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Certifications</h3>
              <p className="text-sm text-muted-foreground">
                Pursue relevant certifications from AWS, Azure, GCP, Kubernetes (CKA), and other platforms 
                to validate your skills and increase your market value.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Networking</h3>
              <p className="text-sm text-muted-foreground">
                Join professional communities, attend conferences, and participate in online forums to build 
                your network and stay updated with industry trends.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Portfolio Building</h3>
              <p className="text-sm text-muted-foreground">
                Create and maintain personal projects, contribute to open source, and document your 
                achievements to showcase your expertise.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Interview Preparation</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Technical Interview Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Practice common DevOps scenarios</li>
                <li>Review system design principles</li>
                <li>Prepare for hands-on demonstrations</li>
                <li>Study cloud architecture patterns</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-medium">Behavioral Interview Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Prepare STAR method responses</li>
                <li>Document past project successes</li>
                <li>Highlight leadership experiences</li>
                <li>Showcase problem-solving abilities</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 