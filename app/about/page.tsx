import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-christmas-cream">
      {/* Page header area (keeps your premium warm feel) */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-8">
        <div className="rounded-2xl border border-[#eadcc9] bg-white/60 p-6 shadow-sm backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm tracking-wide text-[#7a3b2e]">
                Interactive Immersive Animation Project
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#1f2a22] md:text-4xl">
                About Me
              </h1>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#3b2a22]">
                Hi everyone! I&apos;m Jiaen and I&apos;m currently studying Digital Media Production.
                I&apos;ve tried my best and poured a lot of effort into this project. Although it
                may not be perfect, I hope you&apos;ll like it!
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-8 md:grid-cols-[360px_1fr]">
          {/* Photo card */}
          <div className="rounded-2xl border border-[#eadcc9] bg-white p-4 shadow-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/me.jpg"
                alt="Photo of Jiaen"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-4 rounded-xl bg-[#fbf3e7] p-4">
              <p className="text-sm font-medium text-[#1f2a22]">
                Jiaen
              </p>
              <p className="mt-1 text-sm text-[#3b2a22]">
                Digital Media Production
              </p>
              <div className="mt-3 h-px w-full bg-[#eadcc9]" />
              <p className="mt-3 text-xs leading-relaxed text-[#6b4b3c]">
                Thank you for viewing my portfolio.
              </p>
            </div>
          </div>

          {/* Description / highlights */}
          <div className="rounded-2xl border border-[#eadcc9] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1f2a22]">
              A little note
            </h2>

            <p className="mt-3 text-base leading-relaxed text-[#3b2a22]">
              This portfolio documents my design thinking, creative decisions, and production process
              for <span className="font-medium text-[#7a3b2e]">The Gift of Winter</span>. I focused on
              building a calm, magical winter atmosphere through visual storytelling and AR interaction.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#eadcc9] bg-[#fbf3e7] p-4">
                <p className="text-sm font-semibold text-[#1f2a22]">What I focused on</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#3b2a22]">
                  <li>Warm lighting and winter atmosphere</li>
                  <li>Clear storytelling beats (tap → magic → message)</li>
                  <li>Clean composition and premium spacing</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[#eadcc9] bg-[#fbf3e7] p-4">
                <p className="text-sm font-semibold text-[#1f2a22]">Tools used</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#3b2a22]">
                  <li>Adobe Illustrator (assets)</li>
                  <li>Adobe Animate (animation)</li>
                  <li>Web-AR Studio (AR experience)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}