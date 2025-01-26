import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectExperience() {
  const projects = [
    {
      title: "Enterprise ML Pipeline",
      description: "Developed and maintained production-grade machine learning pipelines for processing large-scale data.",
      technologies: ["Python", "TensorFlow", "Kubernetes", "GitLab CI/CD"],
      link: "https://gitlab.com/company-projects/ml-pipeline"
    },
    {
      title: "Automated Trading System",
      description: "Built a high-frequency trading system with real-time market data processing and automated decision making.",
      technologies: ["Python", "NumPy", "PostgreSQL", "Redis"],
      link: "https://gitlab.com/company-projects/trading-system"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Project Experience</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="text-muted-foreground mt-2 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
