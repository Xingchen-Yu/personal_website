import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TechnicalSkills() {
  const skills = {
    "Machine Learning": ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
    "Languages": ["Python", "R", "Julia", "C++"],
    "Tools": ["Git", "Docker", "Linux", "AWS"],
    "LLM Development": ["LangChain", "OpenAI API", "Vector Databases", "Prompt Engineering"]
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category}>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
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
