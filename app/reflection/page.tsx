// app/reflection/page.tsx
export default function ReflectionPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
      {/* Page Header */}
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
          Reflection
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          What I Learned From This Project
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
          A short reflection on my process, challenges, and improvements I want to
          make next time.
        </p>
      </header>

      {/* Content Card */}
      <section className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur md:p-8">
        <div className="prose prose-neutral max-w-none">
          <p>
            At the beginning of this assignment, I felt very confused and unsure
            about what to do. Even though I had learned how to use some Adobe
            applications in class, I still found them very challenging when I
            had to apply everything on my own in an actual assignment. Without
            step-by-step guidance, I often did not know where to start or how to
            fix my mistakes.
          </p>

          <p>
            Honestly, one of the main problems was my poor time management. I
            did not plan my work properly, and as a result, I only had a few
            days left to complete the assignment. This made the process much
            more stressful, and I constantly felt rushed while working. I am
            aware that this was my own mistake, and it affected both my workflow
            and confidence during the project.
          </p>

          <p>
            Because of the limited time, I struggled to fully explore the
            features of the Adobe applications. Some parts of the assignment did
            not turn out exactly how I wanted, but I still tried my best to
            complete it within the deadline. Through this experience, I realised
            how important time management is, especially when working with
            unfamiliar software.
          </p>

          <p>
            Although the process was difficult, this assignment helped me
            reflect on my weaknesses and areas for improvement. In the future, I
            hope to manage my time better and practise more so that I can feel
            more confident when using Adobe applications independently.
          </p>
        </div>

        {/* Small footer note */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-5 text-sm text-neutral-600">
          <span>Thank you for viewing my portfolio.</span>
          <span className="italic">— Jiaen</span>
        </div>
      </section>
    </main>
  );
}
