import Image from "next/image";

type ImgItem = {
  title: string;
  src: string;
};

function ClickableImageCard({
  title,
  src,
  aspect = "aspect-[4/3]", // good default for screenshots
}: {
  title: string;
  src: string;
  aspect?: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="h-font text-base text-christmas-brown">{title}</h3>
        <span className="text-xs text-black/50">Click image to view</span>
      </div>

      {/* Click on image itself to open */}
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className="group block"
        aria-label={`Open ${title} in new tab`}
        title="Click to open full image"
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
            className="object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
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
      <h2 className="h-font text-2xl text-christmas-brown">{title}</h2>
      {description ? <p className="mt-1 text-sm text-black/60">{description}</p> : null}
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function ARPage() {
  const arComposition: ImgItem[] = [
    { title: "Design 1", src: "/images/designInteraction-1.jpg" },
    { title: "Design 2", src: "/images/designInteraction-2.jpg" },
    { title: "Design 3", src: "/images/designInteraction-3.jpg" },
    { title: "Design 4", src: "/images/designInteraction-4.jpg" },
  ];

  return (
    <main className="min-h-screen bg-christmas-cream text-christmas-brown">
      {/* Header */}
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
          <h1 className="h-font text-3xl md:text-4xl">AR</h1>
          <p className="mt-2 max-w-3xl text-black/70 leading-relaxed">
            AR planning, testing outcomes, and final composition assets for the interactive winter scene.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <SectionBlock
          title="Design Development"
          description="Stages showing how the scene elements were layered and prepared."
        >
          <div className="grid gap-4 md:grid-cols-4">
            {arComposition.map((img) => (
              <ClickableImageCard
                key={img.src}
                title={img.title}
                src={img.src}
                aspect="aspect-[3/4]" // poster-like, prevents cropping while keeping nice frame
              />
            ))}
          </div>
        </SectionBlock>
      </section>
    </main>
  );
}