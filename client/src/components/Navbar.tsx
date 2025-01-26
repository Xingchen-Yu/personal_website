import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "Resume/CV" },
    { href: "/publications", label: "Publications" },
    { href: "/blog", label: "Blog" }
  ];

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            {/* Change the name below to your name */}
            <a className="text-xl font-bold text-primary">Dr. John Doe</a>
          </Link>

          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}