import Image from "next/image";

type ImgItem = {
  title: string;
  src: string;
};

function ClickableImageCard({
  title,
  src,
  aspect = "aspect-[4/3]",
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
            sizes="(max-width: 768px) 100vw, 70vw"
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
      {description ? (
        <p className="mt-2 text-sm text-black/70 leading-relaxed">{description}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function ARPage() {
  // --- DO NOT CHANGE: AR ASSET PLANNING SECTION (kept same as before) ---
  const arAssets: ImgItem[] = [
    { title: "AR Asset 1", src: "/images/arAsset-1.jpg" },
    { title: "AR Asset 2", src: "/images/arAsset-2.jpg" },
    { title: "AR Asset 3", src: "/images/arAsset-3.jpg" },
    { title: "AR Asset 4", src: "/images/arAsset-4.jpg" },
    { title: "AR Asset 5", src: "/images/arAsset-5.jpg" },
  ];

  // --- NEW: single AR composition image ---
  const composition = { title: "AR Composition", src: "/images/arComposition.jpg" };

  // --- NEW: tested video path ---
  const testVideoSrc = "/videos/arTestVideo.mp4";

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
            This section documents AR asset planning, testing, and composition for the Web-AR
            experience.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        {/* AR ASSET PLANNING (UNCHANGED) */}
        <SectionBlock
          title="AR Asset Planning"
          description={`During the asset preparation stage, I first used Adobe Illustrator to create and organize the necessary visual materials, which were then imported into Adobe Animate for animation production. Once the animation was completed, I exported it as a GIF file to be used in the subsequent development within Web-AR Studio.`}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {arAssets.map((img) => (
              <ClickableImageCard
                key={img.src}
                title={img.title}
                src={img.src}
                aspect="aspect-[16/10]"
              />
            ))}
          </div>
        </SectionBlock>

        {/* NEW: AR TESTED VIDEO */}
        <SectionBlock
          title="AR Tested Video"
          description="This video demonstrates the AR scene behavior after importing assets and configuring interactions in Web-AR Studio."
        >
          <div className="rounded-2xl border border-black/10 bg-christmas-cream p-4">
            <div className="relative w-full overflow-hidden rounded-xl border border-black/10 bg-black">
              {/* Keep aspect ratio stable */}
              <div className="aspect-video">
                <video
                  className="h-full w-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source src={testVideoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <p className="mt-3 text-xs text-black/60">
              If the video does not load, confirm the file path is{" "}
              <span className="font-mono">public/videos/arTestVideo.mp4</span>.
            </p>
          </div>
        </SectionBlock>

        {/* UPDATED: AR COMPOSITION (ONE IMAGE ONLY) */}
        <SectionBlock
          title="AR Composition"
          description="Final composition screenshot from Web-AR Studio showing the assembled scene and trigger setup."
        >
          <div className="grid gap-4 md:grid-cols-1">
            <ClickableImageCard
              title={composition.title}
              src={composition.src}
              aspect="aspect-[16/9]" // wide to suit UI screenshot
            />
          </div>
        </SectionBlock>
      </section>
    </main>
  );
}