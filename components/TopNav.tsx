"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Introduction", href: "/" },
  { label: "Research & Inspiration", href: "/research" },
  { label: "Design Process", href: "/process" },
  { label: "Design Development", href: "/poster-development" }, // NEW
  { label: "AR", href: "/ar" },
  { label: "About Me", href: "/about" },
  { label: "Reflection", href: "/reflection" },
];

export default function TopNav() {
  const pathname = usePathname(); 

  return (
    <div className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="h-font text-lg text-christmas-brown hover:text-christmas-green"
        >
          The Gift of Winter
        </Link>

        <nav className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href; // ✅ now valid

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-3 py-1 text-sm transition",
                  active
                    ? "bg-amber-200 text-white shadow-sm"
                    : "border border-black/10 bg-white text-christmas-brown hover:border-christmas-green hover:text-christmas-green",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}