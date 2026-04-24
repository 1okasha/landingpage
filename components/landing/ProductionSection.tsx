export function ProductionSection() {
  return (
    <section className="section" id="production">
      <div className="split">
        <div className="copy-block">
          <p className="eyebrow">Built for Production. Not Demos.</p>
          <h2>Configure Once, Scale Forever.</h2>
          <p>
            Bridge the gap between vision and execution. Build resilient systems without manual
            orchestration overhead.
          </p>
          <ul className="checklist">
            <li>No-code workflow builder</li>
            <li>Swap any BYOK provider</li>
            <li>Real-time call analytics</li>
            <li>Secrets stored in encrypted vault</li>
          </ul>
        </div>

        <div className="mock-panel large" aria-hidden="true">
          <div className="mock-grid">
            <div className="mock-tile">
              <h4>Integrations</h4>
              <p>Connect voice, CRM, routing, and storage tools from one dashboard.</p>
            </div>
            <div className="mock-tile">
              <h4>Monitoring</h4>
              <p>Track calls, retries, uptime, and delivery status in real time.</p>
            </div>
            <div className="mock-tile wide">
              <h4>Deployment</h4>
              <p>Launch agents without code changes, then tune behavior with config updates only.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
