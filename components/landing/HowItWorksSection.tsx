const steps = [
  {
    number: "01",
    title: "Connect Your Keys",
    description:
      "Add API keys for your STT, TTS, LLM, storage, and SIP provider in a secure vault.",
  },
  {
    number: "02",
    title: "Build Your Agent",
    description:
      "Define conversation flows, prompts, tools, and escalation paths using no-code builder or API.",
  },
  {
    number: "03",
    title: "Assign a Number",
    description:
      "Map your SIP trunk or provider number directly to the agent for inbound and outbound calls.",
  },
  {
    number: "04",
    title: "Go Live",
    description:
      "Launch with orchestration, websocket handling, failover, and live monitoring around the clock.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section dark" id="how-it-works">
      <div className="section-title">
        <div>
          <p className="eyebrow">How It Works</p>
          <h2>How It Works</h2>
        </div>
        <p className="subtle">
          Getting started requires no engineering team. Connect your API keys and deploy your first
          agent in minutes.
        </p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <article className="step" key={step.number}>
            <div className="num">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
