// const features = [
//   {
//     icon: "S",
//     title: "Speech-to-Text",
//     description:
//       "Real-time transcription with sub-second latency. Optimized for diverse accents and noisy environments.",
//   },
//   {
//     icon: "T",
//     title: "Text-to-Speech",
//     description:
//       "Human-grade neural synthesis. Latency so low, your users won't know they're talking to an AI.",
//   },
//   {
//     icon: "L",
//     title: "LLM / AI Brain",
//     description:
//       "Orchestrate state-of-the-art models or bring your own fine-tuned weights for vertical-specific logic.",
//   },
//   {
//     icon: "S",
//     title: "Storage Bucket",
//     description:
//       "Persistent storage for logs, audio, and training data. Encrypted at rest and in transit by default.",
//   },
//   {
//     icon: "S",
//     title: "SIP Trunks",
//     description:
//       "Carrier-grade connectivity. Scale from one line to thousands of concurrent calls instantly.",
//   },
//   {
//     icon: "U",
//     title: "Architecture & Uptime",
//     description:
//       "99.9% SLA guaranteed. We handle load balancing and geographic distribution so you do not have to.",
//   },
// ];

// export function FeaturesSection() {
//   return (
//     <section className="section dark" id="features">
//       <div className="section-title">
//         <div>
//           <p className="eyebrow">Every Component</p>
//           <h2>Every Component Your Provider</h2>
//         </div>
//         <p className="subtle">
//           A unified platform for speech-to-text, text-to-speech, agent logic, call handling,
//           monitoring, and production infrastructure.
//         </p>
//       </div>

//       <div className="feature-grid">
//         {features.map((feature) => (
//           <article className="feature" key={feature.title}>
//             <div className="icon">{feature.icon}</div>
//             <h3>{feature.title}</h3>
//             <p>{feature.description}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }




import Image from "next/image";

const features = [
  {
    icon: <Image src="/mic icon.svg" alt="Speech-to-Text icon" width={21} height={28} priority={false} />,
    title: "Speech-to-Text",
    description:
      "Real-time transcription with sub-second latency. Optimized for diverse accents and noisy environments.",
  },
  {
    icon: <Image src="/audio icon.svg" alt="Text-to-Speech icon" width={27} height={26} priority={false} />,
    title: "Text-to-Speech",
    description:
      "Human-grade neural synthesis. Latency so low, your users won't know they're talking to an AI.",
  },
  {
    icon: <Image src="/llm icon.svg" alt="LLM / AI Brain icon" width={29} height={30} priority={false} />,
    title: "LLM / AI Brain",
    description:
      "Orchestrate state-of-the-art models or bring your own fine-tuned weights for vertical-specific logic.",
  },
  {
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="13.5" cy="5" rx="11" ry="4" stroke="#E8410A" strokeWidth="2" />
        <path d="M2.5 5V13C2.5 15.2 7.4 17 13.5 17C19.6 17 24.5 15.2 24.5 13V5" stroke="#E8410A" strokeWidth="2" />
        <path d="M2.5 13V21C2.5 23.2 7.4 25 13.5 25C19.6 25 24.5 23.2 24.5 21V13" stroke="#E8410A" strokeWidth="2" />
      </svg>
    ),
    title: "Storage Bucket",
    description:
      "Persistent storage for logs, audio, and training data. Encrypted at rest and in transit by default.",
  },
  {
    icon: <Image src="/sip trunk icon.svg" alt="SIP Trunks icon" width={33} height={32} priority={false} />,
    title: "SIP Trunks",
    description:
      "Carrier-grade connectivity. Scale from one line to thousands of concurrent calls instantly.",
  },
  {
    icon: <Image src="/architechture icon.svg" alt="Architecture & Uptime icon" width={36} height={35} priority={false} />,
    title: "Architecture & Uptime —Ours",
    description:
      "99.99% SLA guaranteed. We handle the load balancing and geographic distribution so you don't have to.",
  },
];

export function FeaturesSection() {
  return (
    // Figma: bg #1A1208, px ~53px, py ~72px
    <section className="bg-[#1A1208] px-[53px] py-[72px]" id="features">
      <div className="mx-auto max-w-[1239px] flex flex-col gap-[27px]">

        {/* ── Section heading block ── */}
        <div className="flex flex-col gap-[25px]">
          {/* Figma: Space Grotesk 400, 72px, lh 88px, ls -1.8px, color #F5F0E8, max-w 717px */}
          <h2 className="max-w-[717px] font-(family-name:--font-space-grotesk)  text-[72px] font-normal leading-[88px] tracking-[-1.8px] text-[#F5F0E8]">
            Every Component Your Provider
          </h2>

          {/* Figma: Inter 400, 18px, lh 27px, color #F5F0E8, max-w 729px */}
          <p className="max-w-[729px] font-(family-name:--font-inter) text-[18px] font-normal leading-[27px] text-[#F5F0E8]">
            Join Unlike Retell, Vapi, or ElevenLabs Voice Agents — we don't lock you into our
            markups. Connect your own accounts for every part of the stack. You keep the cost
            savings, we keep the platform running.
          </p>
        </div>

        {/* ── 3-col card grid ──
            Figma: each card 413×355px, bg #1F170D, border 0.5px #443827, p 40px */}
        <div className="grid grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex min-h-[355px] flex-col justify-between border-[0.5px] border-[#443827] bg-[#1F170D] p-10 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            >
              {/* Top content block — Figma: flex-col gap 16px */}
              <div className="flex flex-col gap-4">
                {/* Icon — orange SVG */}
                <div className="shrink-0">{f.icon}</div>

                {/* Title — Figma: Space Grotesk 500, 30px, lh 32px, color #FBF9F4, pt 8px */}
                <h3 className="pt-2 font-(family-name:--font-space-grotesk) text-[30px] font-medium leading-[32px] text-[#FBF9F4]">
                  {f.title}
                </h3>

                {/* Description — Figma: Inter 400, 16px, lh 26px, color #8A837A */}
                <p className="font-(family-name:--font-inter) text-[16px] font-normal leading-[26px] text-[#8A837A]">
                  {f.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}