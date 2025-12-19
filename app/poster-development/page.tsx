// app/poster-development/page.tsx
import Image from "next/image";

function ThumbCard({
  title,
  src,
  aspect = "aspect-[3/4]",
  fit = "object-contain",
}: {
  title: string;
  src: string;
  aspect?: string;
  fit?: "object-contain" | "object-cover";
}) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <h3 className="h-font text-base text-christmas-brown">{title}</h3>
        <span className="text-xs text-black/50">Asset</span>
      </div>

      {/* CLICKABLE IMAGE – layout unchanged */}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "relative mt-3 block w-full overflow-hidden rounded-xl border border-black/10 bg-christmas-cream",
          aspect,
        ].join(" ")}
      >
        <Image
          src={src}
          alt={title}
          fill
          className={fit}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </a>
    </div>
  );
}

function SectionBlock({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="h-font text-2xl text-christmas-brown">{title}</h2>
          {description ? (
            <p className="mt-1 text-sm text-black/60">{description}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function PosterDevelopmentPage() {
  return (
    <main className="min-h-screen bg-christmas-cream text-christmas-brown">
      {/* Premium warm header (consistent with Research/Process pages) */}
      <header className="relative overflow-hidden border-b border-black/10 bg-white">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(900px 320px at 12% 18%, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0) 60%)," +
              "radial-gradient(900px 320px at 82% 12%, rgba(185,28,28,0.14) 0%, rgba(185,28,28,0) 55%)," +
              "radial-gradient(700px 280px at 75% 82%, rgba(22,101,52,0.12) 0%, rgba(22,101,52,0) 55%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-10">
          <h1 className="h-font text-3xl md:text-4xl">Poster Design Development</h1>
          <p className="mt-2 max-w-3xl text-black/70 leading-relaxed">
            Development snapshots showing the progressive build-up of the final poster composition.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionBlock
          title="Poster Design Development"
          description="Step-by-step progress of the poster composition and elements."
        >
          {/* Horizontal grid (not vertical); includes the 5th image */}
          <div className="grid gap-4 md:grid-cols-5">
            <ThumbCard
              title="Design 1"
              src="/images/designInteraction-1.jpg"
              aspect="aspect-[3/4]"
              fit="object-contain"
            />
            <ThumbCard
              title="Design 2"
              src="/images/designInteraction-2.jpg"
              aspect="aspect-[3/4]"
              fit="object-contain"
            />
            <ThumbCard
              title="Design 3"
              src="/images/designInteraction-3.jpg"
              aspect="aspect-[3/4]"
              fit="object-contain"
            />
            <ThumbCard
              title="Design 4"
              src="/images/designInteraction-4.jpg"
              aspect="aspect-[3/4]"
              fit="object-contain"
            />
            <ThumbCard
              title="Design 5"
              src="/images/designInteraction-5.jpg"
              aspect="aspect-[3/4]"
              fit="object-contain"
            />
          </div>
        </SectionBlock>
      </section>
    </main>
  );
}