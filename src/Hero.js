const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <p className="hero__eyebrow">Check careers</p>
        <h1 id="hero-heading">Find work that fits your life</h1>
        <p>
          Browse roles from trusted sources, filter by what matters to you, and
          save listings to apply when you are ready.
        </p>
        <div className="hero__actions">
          <a className="hero__cta hero__cta--primary" href="#job-search">
            Search roles
          </a>
          <a className="hero__cta hero__cta--secondary" href="#browse-jobs">
            View listings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
