export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-black/10 bg-white">
      <div className="absolute inset-0 warm-hero opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 py-10">
        {eyebrow ? (
          <p className="text-sm text-christmas-green">{eyebrow}</p>
        ) : null}

        <h1 className="h-font mt-2 text-3xl md:text-4xl text-christmas-brown">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-2 max-w-2xl text-black/70 leading-relaxed">
            {subtitle}
          </p>
        ) : null}

        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </header>
  );
}