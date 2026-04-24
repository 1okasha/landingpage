const comparisonRows = [
  ["Platform pricing model", "Per-minute billing", "Per-minute markup", "Per-minute markup", "Per-character markup"],
  ["BYOK — STT", "Full BYOK", "Limited", "Limited", "No"],
  ["BYOK — TTS", "Full BYOK", "Partial", "Partial", "Platform only"],
  ["BYOK — LLM", "Any provider", "Partial", "Partial", "No"],
  ["BYOK — SIP Trunks", "Any SIP", "Twilio only", "Twilio/Vonage", "No"],
  ["BYOK — Storage", "Your bucket", "Platform storage", "Platform storage", "Platform storage"],
  ["Uptime SLA", "99.9% uptime", "Best effort", "99.5%", "Best effort"],
];

export function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="pricing-head">
        <p className="eyebrow">Pricing</p>
        <h2>Simple pricing for AI voice agents. Scale conversations without limits.</h2>
        <p>Choose the setup that matches your volume. No hidden fees, just clear pricing.</p>
      </div>

      <div className="pricing-grid">
        <article className="pricing-card">
          <h3>Standard BYOK</h3>
          <div className="price">
            $0.04 <small>/ min</small>
          </div>
          <ul>
            <li>All BYOK providers</li>
            <li>Unlimited concurrent calls</li>
            <li>70+ languages supported</li>
            <li>Standard support access</li>
          </ul>
          <div style={{ marginTop: 18 }}>
            <a className="btn btn-light" href="#contact">
              Join Waitlist
            </a>
          </div>
        </article>

        <article className="pricing-card featured">
          <span className="badge">SCALABLE</span>
          <h3>Enterprise</h3>
          <div className="price">
            $0.02 <small>/ min</small>
          </div>
          <ul>
            <li>Everything in Standard</li>
            <li>On-premises deployment</li>
            <li>Dedicated infrastructure</li>
            <li>Custom development services</li>
            <li>SOC 2 / HIPAA / GDPR support</li>
          </ul>
          <div style={{ marginTop: 18 }}>
            <a className="btn btn-orange" href="#contact">
              Talk To Our Team
            </a>
          </div>
        </article>
      </div>

      <div className="table-box" style={{ marginTop: 20 }}>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>LeapDev</th>
              <th>Retell AI</th>
              <th>Vapi</th>
              <th>ElevenLabs Agents</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
