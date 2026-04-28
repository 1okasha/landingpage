// const steps = [
//   {
//     number: "01",
//     title: "Connect Your Keys",
//     description:
//       "Add API keys for your STT, TTS, LLM, storage, and SIP provider in a secure vault.",
//   },
//   {
//     number: "02",
//     title: "Build Your Agent",
//     description:
//       "Define conversation flows, prompts, tools, and escalation paths using no-code builder or API.",
//   },
//   {
//     number: "03",
//     title: "Assign a Number",
//     description:
//       "Map your SIP trunk or provider number directly to the agent for inbound and outbound calls.",
//   },
//   {
//     number: "04",
//     title: "Go Live",
//     description:
//       "Launch with orchestration, websocket handling, failover, and live monitoring around the clock.",
//   },
// ];

// export function HowItWorksSection() {
//   return (
//     <section className="section dark" id="how-it-works">
//       <div className="section-title">
//         <div>
//           <p className="eyebrow">How It Works</p>
//           <h2>How It Works</h2>
//         </div>
//         <p className="subtle">
//           Getting started requires no engineering team. Connect your API keys and deploy your first
//           agent in minutes.
//         </p>
//       </div>

//       <div className="steps">
//         {steps.map((step) => (
//           <article className="step" key={step.number}>
//             <div className="num">{step.number}</div>
//             <h3>{step.title}</h3>
//             <p>{step.description}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }




const steps = [
  {
    number: "01",
    title: "Connect Your\nKeys",
    description:
      "Add API keys for your STT, TTS, LLM, storage, and SIP provider in our secure vault dashboard.",
  },
  {
    number: "02",
    title: "Build Your Agent",
    description:
      "Define conversation flows, prompts, tools, and escalation paths using our no-code builder or REST API.",
  },
  {
    number: "03",
    title: "Assign a Number",
    description:
      "Map your SIP trunk or Twilio number directly to the agent. Inbound and outbound calls both work.",
  },
  {
    number: "04",
    title: "Go Live",
    description:
      "Deploy. We handle orchestration, WebSocket connections, failover, and live monitoring 24/7.",
  },
];

export function HowItWorksSection() {
  return (
    // Figma: bg #1A1208 (same as FeaturesSection — visually continuous)
    // px 79px, pb 72px (no top padding — shares bg with Features above)
    <section className="bg-[#1A1208] px-[79px] pb-[72px] pt-0" id="how-it-works">
      <div className="mx-auto max-w-[1187px]">

        {/* ── Header row ──
            Figma: Frame 2087326903 — flex-row, items-center, gap 135px, py 57px */}
        <div className="flex items-center gap-[135px] py-[57px]">

          {/* Left: eyebrow + heading — Figma: flex-col gap 8px, w 477px */}
          <div className="flex w-[477px] shrink-0 flex-col gap-2">
            {/* Figma: IBM Plex Mono 600, 12px, lh 18px, ls 1.8px, uppercase, #E8410A */}
            <p className="font-(family-name:--font-ibm-plex-mono) text-[12px] font-semibold uppercase leading-[18px] tracking-[1.8px] text-[#E8410A]">
              SETUP IN MINUTES
            </p>

            {/* Figma: Space Grotesk 400, 74px, lh 84px, color #FBF9F4 */}
            <h2 className="font-(family-name:--font-space-grotesk) text-[74px] font-normal leading-[84px] text-[#FBF9F4]">
              How It Works
            </h2>
          </div>

          {/* Right: subtext — Figma: Inter 400, 18px, lh 27px, color #FBF9F4, w 574px */}
          <p className="max-w-[574px] font-(family-name:--font-inter) text-[18px] font-normal leading-[27px] text-[#FBF9F4]">
            Getting started requires no engineering team. Connect your API keys through our
            dashboard and deploy your first agent in under 10 minutes.
          </p>
        </div>

        {/* ── Steps row ──
            Figma: StepsGrid — 4 equal cols, each ~248–259px */}
        <div className="grid grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">

              {/* Step number — Figma: Space Grotesk 400, 80px, lh 80px, ls -4px, #FBF9F4 */}
              <span className="font-(family-name:--font-space-grotesk) text-[80px] font-normal leading-[80px] tracking-[-4px] text-[#FBF9F4]">
                {step.number}
              </span>

              {/* Arrow between steps — Figma: small → icon at ~17.85% top, right edge */}
              {i < steps.length - 1 && (
                <span
                  className="absolute right-[-18px] top-[17.85%] text-sm leading-none text-[#FBF9F4]"
                  aria-hidden="true"
                >
                  →
                </span>
              )}

              {/* Title — Figma: Space Grotesk 400, 30px, lh 30px, color #FBF9F4, pt 16px pb 12px */}
              <h3 className="whitespace-pre-line pb-3 pt-4 font-(family-name:--font-space-grotesk) text-[30px] font-normal leading-[30px] text-[#FBF9F4]">
                {step.title}
              </h3>

              {/* Description — Figma: Inter 400, 16px, lh 24px, color #8A837A */}
              <p className="font-(family-name:--font-inter) text-[16px] font-normal leading-[24px] text-[#8A837A]">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}