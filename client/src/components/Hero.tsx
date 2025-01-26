import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 items-center mb-16">
      <div className="flex-1">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Advancing Machine Learning Research
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Specializing in Large Language Models, Statistical Learning Theory, and Deep Learning
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Contact Me
          </a>
          <a href="/cv" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            View CV
          </a>
        </div>
      </div>
      
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
          alt="Professional headshot"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
