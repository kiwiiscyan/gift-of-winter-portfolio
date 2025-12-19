import Image from "next/image";

function RefThumb({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <h3 className="h-font text-base text-christmas-brown">{title}</h3>
        <span className="text-xs text-black/50">Visual</span>
      </div>

      {/* Clickable image wrapper */}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative mt-3 aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-christmas-cream">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </a>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-christmas-cream text-christmas-brown">
      {/* Premium warm header (consistent with your main page styling) */}
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
          <h1 className="h-font text-3xl md:text-4xl">Research &amp; Inspiration</h1>
          <p className="mt-2 max-w-3xl text-black/70 leading-relaxed">
            Design references and idea development that support the winter-belief theme and overall atmosphere.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        {/* Design Ideas (text block) */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="h-font text-2xl text-christmas-brown">Design Ideas</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-christmas-cream p-4">
              <p className="text-sm text-black/60">Total Time Duration</p>
              <p className="mt-1 text-base text-christmas-brown">10s</p>
            </div>

            <div className="rounded-xl border border-black/10 bg-christmas-cream p-4">
              <p className="text-sm text-black/60">Theme</p>
              <p className="mt-1 text-base text-christmas-brown">Winter belief and quiet magic</p>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-black/70 leading-relaxed">
            <div>
              <h3 className="h-font text-lg text-christmas-brown">Theme Expression</h3>
              <p className="mt-2">
                The scene expresses the magical atmosphere of winter through a peaceful Christmas night. Snow gently falls as
                Santa Claus flies across the sky, while a glowing Christmas tree becomes the centre of warmth and light.
                The animation conveys that winter is not only cold and silent, but also a season filled with wonder, belief,
                and quiet magic.
              </p>
            </div>

            <div>
              <h3 className="h-font text-lg text-christmas-brown">Cultural Symbols</h3>
              <p className="mt-2">
                Santa Claus, sleigh, reindeer, Christmas tree, star, Christmas gifts, snowman, wooden house, snowy pine trees,
                moonlight.
              </p>
            </div>

            <div>
              <h3 className="h-font text-lg text-christmas-brown">Emotional Expression</h3>
              <p className="mt-2">
                From calm and silence → warmth and joy → peaceful and comforting winter night, creating a sense of nostalgia
                and childlike wonder.
              </p>
            </div>

            <div>
              <h3 className="h-font text-lg text-christmas-brown">Sound</h3>
              <p className="mt-2">
                Soft winter wind ambience, gentle Christmas music, light sleigh bell sounds.
              </p>
            </div>
          </div>
        </div>

        {/* Visual References (horizontal layout) */}
        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="h-font text-2xl text-christmas-brown">Visual References</h2>
              <p className="mt-1 text-sm text-black/60">
                Key scene inspirations for snowy town mood, lighting, and Santa flight elements.
              </p>
            </div>
          </div>

          {/* Horizontal row on desktop; scrollable on small screens */}
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <RefThumb title="Visual Reference 1" src="/images/visualReference-1.jpg" />
            <RefThumb title="Visual Reference 2" src="/images/visualReference-2.jpg" />
            <RefThumb title="Visual Reference 3" src="/images/visualReference-3.jpg" />
            <RefThumb title="Visual Reference 4" src="/images/visualReference-4.jpg" />
          </div>
        </div>
      </section>
    </main>
  );
}