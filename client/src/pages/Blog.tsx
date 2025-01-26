import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Blog</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This blog section is currently under development. Check back soon for articles about
            machine learning, statistics, and technical insights from my research.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
