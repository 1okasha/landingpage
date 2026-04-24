const industries = [
  {
    icon: "S",
    title: "Sales Outreach & SDR",
    description:
      "Automate cold calling and lead qualification while booking meetings directly in your calendar.",
  },
  {
    icon: "H",
    title: "Healthcare & Scheduling",
    description:
      "Manage appointment bookings, follow-ups, and patient coordination with consistent call quality.",
  },
  {
    icon: "R",
    title: "Real Estate",
    description:
      "Vet property leads in real time and schedule home tours while your team focuses on closings.",
  },
  {
    icon: "E",
    title: "E-commerce Support",
    description:
      "Resolve order issues and shipment queries via voice with personalized customer support.",
  },
  {
    icon: "F",
    title: "Financial Services",
    description:
      "Handle sensitive communication with reliable orchestration and secure data handling.",
  },
  {
    icon: "U",
    title: "Higher Education",
    description:
      "Streamline admissions outreach and answer common administrative questions instantly.",
  },
];

export function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="section-title">
        <div>
          <p className="eyebrow">Use Cases</p>
          <h2>Built for Any Industry That Talks to Customers</h2>
        </div>
        <p className="subtle">
          From sales outreach to patient scheduling, if it involves a phone call, this platform can
          run it at scale.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((item) => (
          <article className="industry-card" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
