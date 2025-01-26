import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const socials = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:john.doe@university.edu",
      value: "john.doe@university.edu"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/johndoe",
      value: "@johndoe"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://twitter.com/johndoe",
      value: "@johndoe"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/johndoe",
      value: "John Doe"
    }
  ];

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Contact</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors"
              >
                {social.icon}
                <div>
                  <div className="font-medium">{social.label}</div>
                  <div className="text-sm text-muted-foreground">{social.value}</div>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
