const features = [
  {
    icon: "S",
    title: "Speech-to-Text",
    description:
      "Real-time transcription with sub-second latency. Optimized for diverse accents and noisy environments.",
  },
  {
    icon: "T",
    title: "Text-to-Speech",
    description:
      "Human-grade neural synthesis. Latency so low, your users won't know they're talking to an AI.",
  },
  {
    icon: "L",
    title: "LLM / AI Brain",
    description:
      "Orchestrate state-of-the-art models or bring your own fine-tuned weights for vertical-specific logic.",
  },
  {
    icon: "S",
    title: "Storage Bucket",
    description:
      "Persistent storage for logs, audio, and training data. Encrypted at rest and in transit by default.",
  },
  {
    icon: "S",
    title: "SIP Trunks",
    description:
      "Carrier-grade connectivity. Scale from one line to thousands of concurrent calls instantly.",
  },
  {
    icon: "U",
    title: "Architecture & Uptime",
    description:
      "99.9% SLA guaranteed. We handle load balancing and geographic distribution so you do not have to.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section dark" id="features">
      <div className="section-title">
        <div>
          <p className="eyebrow">Every Component</p>
          <h2>Every Component Your Provider</h2>
        </div>
        <p className="subtle">
          A unified platform for speech-to-text, text-to-speech, agent logic, call handling,
          monitoring, and production infrastructure.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
