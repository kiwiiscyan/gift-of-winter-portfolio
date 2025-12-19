import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-christmas-cream text-christmas-brown">
      <header className="relative overflow-hidden border-b border-black/10 bg-white">
        <div className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(900px 300px at 15% 20%, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0) 60%)," +
              "radial-gradient(900px 300px at 80% 10%, rgba(185,28,28,0.16) 0%, rgba(185,28,28,0) 55%)," +
              "radial-gradient(700px 260px at 70% 80%, rgba(22,101,52,0.14) 0%, rgba(22,101,52,0) 55%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm text-christmas-green">
            Interactive Immersive Animation Project
          </p>

          {/* Santa + reindeer decorations require parentheses */}
          <h1 className="christmas-header mt-3 text-4xl md:text-6xl text-christmas-red">
            (The Gift of Winter)
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70">
            “The true gift of winter is belief.” Reimagining childlike wonder through an interactive AR poster.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="h-font text-2xl">Poster</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-black/10 bg-white">
  <Image
    src="/images/poster.jpg"
    alt="Final Poster"
    width={1200}
    height={800}
    className="h-auto w-full object-cover"
    priority
  />
</div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="h-font text-2xl">Description</h2>
            <p className="mt-3 leading-relaxed text-black/70">
              Christmas has become a season of lights and gifts, but it has lost its wonder as few people truly believe in Santa Claus anymore.
            </p>
            <p className="mt-3 leading-relaxed text-black/70">
The Gift of Winter invites users to rediscover that lost belief (the childlike hope). Through this interactive AR poster, the legend of Santa Claus will comes alive once again.
            </p>
            <p className="mt-3 leading-relaxed text-black/70">
When users scan the poster, the still image transfroms into a living winter scene, showing that “The true gift of winter is belief.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}