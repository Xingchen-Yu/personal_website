import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CV() {
  const sections = {
    experience: [
      {
        title: "Research Scientist",
        organization: "AI Research Lab",
        year: "2023-Present",
        details:
          "Leading research in LLM architectures and training methodologies",
      },
      {
        title: "Machine Learning Engineer",
        organization: "Tech Company",
        year: "2018-2020",
        details: "Developed production ML systems for recommendation engines",
      },
    ],
    education: [
      {
        degree: "Ph.D. in Statistical Science",
        institution: "University of California, Santa Cruz, CA",
        year: "2015-2020",
        details:
          "Dissertation: Spherical Latent Factor Model for Binary and Ordinal Data",
      },
      {
        degree: "M.S. in Applied Statistics",
        institution: "MIT",
        year: "2013-2015",
        details:
          "Thesis: Topic Uncovering and Image Annotation via Scalable Probit Normal Correlated Topic Models",
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Curriculum Vitae</h1>
        <Button>
          <FileDown className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <Card>
            <CardContent className="pt-6">
              {sections.education.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.degree}</h3>
                      <p className="text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm">{item.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <Card>
            <CardContent className="pt-6">
              {sections.experience.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.organization}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm">{item.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
