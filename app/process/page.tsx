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

      {/* Clickable image wrapper */}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={[
            "relative mt-3 w-full overflow-hidden rounded-xl border border-black/10 bg-christmas-cream",
            aspect,
          ].join(" ")}
        >
          <Image
            src={src}
            alt={title}
            fill
            className={fit}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
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

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-christmas-cream text-christmas-brown">
      {/* Premium warm header (same style as Research page) */}
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
          <h1 className="h-font text-3xl md:text-4xl">Design Process</h1>
          <p className="mt-2 max-w-3xl text-black/70 leading-relaxed">
            This section documents how the idea was developed through sketch exploration, storyboard sequencing, and UI storyboard planning.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        {/* Sketch (horizontal) */}
        <SectionBlock
          title="Sketch"
          description="Initial composition planning and refinement of the winter town, glowing tree, and focal elements."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <ThumbCard title="Sketch 1" src="/images/sketch-1.jpg" aspect="aspect-[3/4]" fit="object-contain" />
            <ThumbCard title="Sketch 2" src="/images/sketch-2.jpg" aspect="aspect-[3/4]" fit="object-contain" />
          </div>
        </SectionBlock>

        {/* Storyboard (horizontal style, single wide card) */}
        <SectionBlock
          title="Storyboard"
          description="Scene progression planning (tap trigger, snowfall, Santa flight, and the final message reveal)."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <ThumbCard
                title="Storyboard"
                src="/images/storyboard.jpg"
                aspect="aspect-video"
                fit="object-contain"
              />
            </div>
          </div>
        </SectionBlock>

        {/* UI Storyboard (horizontal) */}
        <SectionBlock
          title="UI Storyboard"
          description="Interface and interaction planning: audio notes, animation steps, interaction rules, and technical notes."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <ThumbCard title="UI Storyboard 1" src="/images/UI-storyboard-1.jpg" aspect="aspect-[3/4]" fit="object-contain" />
            <ThumbCard title="UI Storyboard 2" src="/images/UI-storyboard-2.jpg" aspect="aspect-[3/4]" fit="object-contain" />
            <ThumbCard title="UI Storyboard 3" src="/images/UI-storyboard-3.jpg" aspect="aspect-[3/4]" fit="object-contain" />
          </div>
        </SectionBlock>
      </section>
    </main>
  );
}