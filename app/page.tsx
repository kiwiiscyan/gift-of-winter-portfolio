import SectionShell from "@/components/SectionShell";

export default function Page() {
  return (
    <main className="min-h-screen bg-christmas-cream text-christmas-brown">
      {/* HERO */}
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm text-christmas-green">Interactive Immersive Animation Project</p>
          <h1 className="h-font mt-2 text-4xl md:text-6xl">
            The Gift of Winter
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed">
            “The true gift of winter is belief.” Reimagining childlike wonder through an interactive AR poster.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-christmas-red px-5 py-2 text-white hover:opacity-90" href="#introduction">
              Start Portfolio
            </a>
            <a className="rounded-full border border-black/15 bg-white px-5 py-2 hover:border-christmas-green" href="#reflection">
              Reflection
            </a>
          </div>
        </div>
      </header>

      {/* INTRODUCTION */}
      <SectionShell
        id="introduction"
        title="Introduction"
        nav={[
          { label: "Poster", href: "#intro-poster" },
          { label: "Description", href: "#intro-desc" },
        ]}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div id="intro-poster" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-2xl">Poster</h2>
            <p className="mt-2 text-sm text-black/70">
              Insert your final poster image here.
            </p>
            <div className="mt-4 h-64 rounded-xl bg-christmas-cream" />
          </div>

          <div id="intro-desc" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-2xl">Description</h2>
            <p className="mt-3 leading-relaxed">
              Christmas has become a season of lights and gifts, but it has lost its wonder as fewer people truly believe
              in Santa Claus anymore. This project invites users to rediscover that lost belief through an interactive AR poster.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* RESEARCH & INSPIRATION */}
      <SectionShell
        id="research"
        title="Research & Inspiration"
        nav={[
          { label: "Moodboard", href: "#moodboard" },
          { label: "Visual refs", href: "#visual-refs" },
          { label: "Notes", href: "#concept-notes" },
        ]}
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div id="moodboard" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-xl">Moodboard</h2>
            <div className="mt-4 h-56 rounded-xl bg-christmas-cream" />
          </div>
          <div id="visual-refs" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-xl">Visual references</h2>
            <div className="mt-4 h-56 rounded-xl bg-christmas-cream" />
          </div>
          <div id="concept-notes" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-xl">Concept notes</h2>
            <p className="mt-3 text-sm leading-relaxed text-black/75">
              Summarise why winter wonder + belief is your core theme, and what emotions you want the user to feel.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* DESIGN PROCESS */}
      <SectionShell
        id="process"
        title="Design Process"
        nav={[
          { label: "Sketch", href: "#sketch" },
          { label: "Storyboard", href: "#storyboard" },
          { label: "UI Storyboard", href: "#ui-storyboard" },
        ]}
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div id="sketch" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-xl">Sketch</h2>
            <div className="mt-4 h-56 rounded-xl bg-christmas-cream" />
          </div>
          <div id="storyboard" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-xl">Storyboard</h2>
            <div className="mt-4 h-56 rounded-xl bg-christmas-cream" />
          </div>
          <div id="ui-storyboard" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-xl">UI Storyboard</h2>
            <p className="mt-3 text-sm leading-relaxed text-black/75">
              Include key interaction: tap to begin → snow falls → tree glows → Santa trail → text fades in.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* ABOUT ME */}
      <SectionShell
        id="about"
        title="About Me"
        nav={[
          { label: "Profile", href: "#profile" },
          { label: "Contact", href: "#contact" },
        ]}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div id="profile" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-2xl">Hi, I’m Jiaen</h2>
            <p className="mt-3 leading-relaxed">
              I’m currently studying Digital Media Production. I poured effort into this project and hope you enjoy it.
            </p>
          </div>
          <div id="contact" className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="h-font text-2xl">Contact</h2>
            <p className="mt-3 text-sm text-black/75">
              Add email / socials here.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* REFLECTION */}
      <SectionShell
        id="reflection"
        title="Reflection"
        nav={[
          { label: "Challenges", href: "#challenges" },
          { label: "What I learned", href: "#learned" },
          { label: "Next time", href: "#next-time" },
        ]}
      >
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="h-font text-2xl" id="challenges">Challenges</h2>
          <p className="mt-3 leading-relaxed">
            Summarise: lack of step-by-step guidance, time management pressure, limited time to explore Adobe features.
          </p>

          <h2 className="h-font mt-8 text-2xl" id="learned">What I learned</h2>
          <p className="mt-3 leading-relaxed">
            Summarise: planning matters, practise builds confidence, workflow improves with time allocation.
          </p>

          <h2 className="h-font mt-8 text-2xl" id="next-time">Next time</h2>
          <p className="mt-3 leading-relaxed">
            Summarise: start earlier, practise tools, refine animation/audio integration, polish details.
          </p>
        </div>
      </SectionShell>

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60">
          © {new Date().getFullYear()} The Gift of Winter — Portfolio
        </div>
      </footer>
    </main>
  );
}