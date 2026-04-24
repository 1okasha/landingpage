export function HeroSection() {
  return (
    <section className="hero" id="contact">
      <div className="hero-copy">
        <p className="eyebrow">Voice AI Infra</p>
        <h1>
          The Voice AI infra <span className="accent">enterprises actually</span> trust.
        </h1>
        <p>
          Launch production-grade voice agents, orchestration, telephony, and analytics from one
          stack. Built for teams that need reliability, speed, and control without the complexity.
        </p>

        <div className="social-row">
          <div className="avatars" aria-hidden="true">
            <span className="avatar" />
            <span className="avatar" />
            <span className="avatar" />
          </div>
          <span>Join 240+ teams on the waitlist</span>
        </div>

        <div className="wave" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>

      <div className="hero-form">
        <div className="form-card">
          <h2>Request Early Access</h2>
          <p>
            Tell us about your use case and we&apos;ll follow up with a tailored plan, timeline,
            and platform overview.
          </p>
          <form className="grid">
            <div className="field-grid">
              <input className="field" type="text" placeholder="First name" aria-label="First name" />
              <input className="field" type="text" placeholder="Last name" aria-label="Last name" />
              <input className="field" type="email" placeholder="Work email" aria-label="Work email" />
              <input className="field" type="text" placeholder="Company / Project Name" aria-label="Company / Project Name" />
              <input className="field" type="text" placeholder="Primary use case" aria-label="Primary use case" />
              <input className="field" type="text" placeholder="Monthly call volume" aria-label="Monthly call volume" />
            </div>

            <textarea className="textarea" placeholder="Anything else?" aria-label="Anything else?" />
            <button className="submit" type="button">
              REQUEST EARLY ACCESS
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
