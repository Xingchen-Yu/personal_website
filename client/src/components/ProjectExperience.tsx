import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectExperience() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first major project showcasing your ML/software engineering skills.",
      technologies: ["Python", "TensorFlow", "Docker", "GitHub Actions"],
      link: "https://github.com/yourusername/project-1"
    },
    {
      title: "Project 2",
      description: "Description of your second major project demonstrating practical implementation skills.",
      technologies: ["Python", "PyTorch", "FastAPI", "Redis"],
      link: "https://github.com/yourusername/project-2"
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