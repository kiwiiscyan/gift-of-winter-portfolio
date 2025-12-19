"use client";

import Link from "next/link";

export type NavItem = { label: string; href: string };

export default function SectionNav({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) {
  return (
    <div className="sticky top-0 z-20 border-b border-black/10 bg-christmas-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="min-w-0">
          <div className="h-font text-lg text-christmas-brown">{title}</div>
        </div>

        <nav className="hidden gap-2 md:flex">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-christmas-brown hover:border-christmas-green hover:text-christmas-green"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}