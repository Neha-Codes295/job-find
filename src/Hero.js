const Hero = () => {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0f2d6b] via-brand-600 to-brand-800 px-5 py-10 text-center text-white shadow-md sm:py-14"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(255,255,255,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-xl">
        <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/95">
          Check careers
        </p>
        <h1
          id="hero-heading"
          className="mb-3 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Find work that fits your life
        </h1>
        <p className="mx-auto mb-6 max-w-lg text-balance text-base leading-relaxed text-white/90 sm:text-lg">
          Browse roles from trusted sources, filter by what matters to you, and
          save listings to apply when you are ready.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0f2d6b] shadow-md transition hover:bg-slate-50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="#job-search"
          >
            Search roles
          </a>
          <a
            className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="#browse-jobs"
          >
            View listings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
