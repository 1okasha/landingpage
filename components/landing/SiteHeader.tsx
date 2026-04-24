export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark" />
        OPSODE
      </div>

      <nav className="nav" aria-label="Primary">
        <a href="#features">Why</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#industries">Use Cases</a>
        <a href="#faq">FAQ</a>
      </nav>

      <a className="btn btn-dark" href="#contact">
        Get Early Access
      </a>
    </header>
  );
}
