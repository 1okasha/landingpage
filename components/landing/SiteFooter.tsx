export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ color: "#f6efe8" }}>
              <span className="brand-mark" />
              OPSODE
            </div>
            <p style={{ maxWidth: "46ch", margin: "16px 0 0", lineHeight: 1.7 }}>
              Voice infrastructure for teams that want modern conversations without fragile
              plumbing.
            </p>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright 2026 by Opsode</span>
          <span>Built for production voice experiences</span>
        </div>
      </div>
    </footer>
  );
}
