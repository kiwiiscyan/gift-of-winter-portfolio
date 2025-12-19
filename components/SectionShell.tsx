import SectionNav, { NavItem } from "./SectionNav";

export default function SectionShell({
  id,
  title,
  nav,
  children,
}: {
  id: string;
  title: string;
  nav: NavItem[];
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      <SectionNav title={title} items={nav} />
      <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
    </section>
  );
}