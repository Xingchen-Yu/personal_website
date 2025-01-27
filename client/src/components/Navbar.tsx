import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

function getBasePath() {
  if (import.meta.env.DEV) return "";
  return import.meta.env.BASE_URL || "";
}

export default function Navbar() {
  const [location] = useLocation();
  const base = getBasePath();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/publications", label: "Publications" },
    { href: "/blog", label: "Blog" }
  ];

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={`${base}/`} className="text-xl font-bold text-primary">
            Dr. Xingchen Yu
          </Link>

          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={`${base}${item.href}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === `${base}${item.href}` ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}