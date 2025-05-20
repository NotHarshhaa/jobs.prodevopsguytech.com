import { 
  Container, 
  Database, 
  Cloud,
  Monitor,
  Shield,
  GitBranch,
  Terminal,
  Settings,
  Network
} from "lucide-react";

const categories = [
  {
    icon: <Container className="h-6 w-6" />,
    name: "Docker & Containers",
    tools: ["Docker", "Kubernetes", "OpenShift", "Podman"],
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    name: "Cloud Platforms",
    tools: ["AWS", "Azure", "GCP", "Oracle Cloud"],
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    name: "Infrastructure as Code",
    tools: ["Terraform", "CloudFormation", "Ansible", "Puppet"],
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    name: "CI/CD",
    tools: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    name: "Monitoring",
    tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    icon: <Database className="h-6 w-6" />,
    name: "Databases",
    tools: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    icon: <Shield className="h-6 w-6" />,
    name: "Security",
    tools: ["Vault", "SonarQube", "Snyk", "Aqua"],
  },
  {
    icon: <Network className="h-6 w-6" />,
    name: "Networking",
    tools: ["Service Mesh", "Istio", "Envoy", "Traefik"],
  },
  {
    icon: <Settings className="h-6 w-6" />,
    name: "Configuration",
    tools: ["Helm", "Kustomize", "Consul", "Etcd"],
  },
];

export default function JobCategories() {
  return (
    <section className="relative py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">DevOps & Cloud Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find opportunities across the most in-demand DevOps and cloud computing technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-background/50 backdrop-blur-xl rounded-lg p-6 hover:shadow-xl transition-all duration-200 border border-border/50 hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 text-sm bg-background/80 backdrop-blur rounded-full border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
} 