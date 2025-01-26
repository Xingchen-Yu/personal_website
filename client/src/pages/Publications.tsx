import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Publications() {
  const publications = [
    {
      title: "Advancing Large Language Model Architectures: A Comprehensive Study",
      authors: "Doe, J., Smith, A., Johnson, B.",
      venue: "NeurIPS 2023",
      abstract: "This paper presents novel architectural improvements for large language models, demonstrating significant efficiency gains while maintaining performance.",
      link: "https://arxiv.org/abs/2023.12345"
    },
    {
      title: "Statistical Learning Theory for Deep Neural Networks",
      authors: "Doe, J., Brown, C.",
      venue: "ICML 2022",
      abstract: "We develop new theoretical frameworks for understanding generalization in deep neural networks, with practical implications for model design.",
      link: "https://arxiv.org/abs/2022.67890"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Publications</h1>
      
      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {publications.map((pub, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div>
                    <h3 className="font-semibold">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pub.authors} • {pub.venue}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <p className="text-sm">{pub.abstract}</p>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View Paper
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
