import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ResearchInterests() {
  const interests = [
    {
      title: "Large Language Models",
      description:
        "Exploring architectural innovations and training methodologies for more efficient and capable language models.",
    },
    {
      title: "Statistical Learning Theory",
      description:
        "Developing theoretical frameworks for understanding deep learning generalization and optimization.",
    },
    {
      title: "Explainable Deep Learning Systems",
      description:
        "Building scalable and efficient deep learning systems for real-world applications.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">
        Research Interests
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{interest.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{interest.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
