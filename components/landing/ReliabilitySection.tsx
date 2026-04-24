export function ReliabilitySection() {
  return (
    <section className="section">
      <div className="split alt">
        <div className="mock-panel large" aria-hidden="true">
          <div className="mock-grid">
            <div className="mock-tile">
              <h4>Routing</h4>
              <p>Requests are automatically distributed across healthy regions.</p>
            </div>
            <div className="mock-tile">
              <h4>Health Checks</h4>
              <p>Connections are monitored continuously during every call.</p>
            </div>
            <div className="mock-tile">
              <h4>Fall Backs</h4>
              <p>Provider issues trigger automatic failover and alerting.</p>
            </div>
            <div className="mock-tile">
              <h4>Uptime</h4>
              <p>Platform monitoring keeps production traffic stable and reliable.</p>
            </div>
          </div>
        </div>

        <div className="copy-block">
          <p className="eyebrow">99.9% Uptime. Real SLA.</p>
          <h3>Reliable by design, not by accident.</h3>
          <p>
            We obsess over reliability: multi-region failover, automatic retries, and proactive
            alerts so your agents never go silent.
          </p>
          <ul className="checklist">
            <li>Multi-region deployment and automatic failover</li>
            <li>Websocket health monitoring in real time</li>
            <li>Integrated alerting</li>
            <li>99.9% contractual uptime SLA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
