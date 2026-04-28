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




const features = [
  {
    icon: (
      <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="0" width="9" height="16" rx="4.5" fill="#E8410A" />
        <path d="M2 12C2 17.523 6.477 22 12 22C17.523 22 21 17.523 21 12" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
        <line x1="10.5" y1="22" x2="10.5" y2="28" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="28" x2="15" y2="28" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Speech-to-Text",
    description:
      "Real-time transcription with sub-second latency. Optimized for diverse accents and noisy environments.",
  },
  {
    icon: (
      <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9H7L13 4V22L7 17H3V9Z" fill="#E8410A" />
        <path d="M17 7C19.5 9 19.5 17 17 19" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 4C24 7.5 24 18.5 20 22" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Text-to-Speech",
    description:
      "Human-grade neural synthesis. Latency so low, your users won't know they're talking to an AI.",
  },
  {
    icon: (
      <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14.5" cy="15" r="5" stroke="#E8410A" strokeWidth="2" />
        <circle cx="14.5" cy="15" r="12" stroke="#E8410A" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="14.5" cy="3" r="2" fill="#E8410A" />
        <circle cx="14.5" cy="27" r="2" fill="#E8410A" />
        <circle cx="2.5" cy="15" r="2" fill="#E8410A" />
        <circle cx="26.5" cy="15" r="2" fill="#E8410A" />
      </svg>
    ),
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
    icon: (
      <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16.5" cy="16" r="4" fill="#E8410A" />
        <path d="M8 8C11 11 11 21 8 24" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 8C22 11 22 21 25 24" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 4C8.5 8 8.5 24 4 28" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
        <path d="M29 4C24.5 8 24.5 24 29 28" stroke="#E8410A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "SIP Trunks",
    description:
      "Carrier-grade connectivity. Scale from one line to thousands of concurrent calls instantly.",
  },
  {
    icon: (
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="17.5" r="5" fill="#E8410A" />
        <circle cx="5" cy="5" r="3" fill="#E8410A" />
        <circle cx="31" cy="5" r="3" fill="#E8410A" />
        <circle cx="5" cy="30" r="3" fill="#E8410A" />
        <circle cx="31" cy="30" r="3" fill="#E8410A" />
        <line x1="8" y1="5" x2="13" y2="13" stroke="#E8410A" strokeWidth="1.5" />
        <line x1="28" y1="5" x2="23" y2="13" stroke="#E8410A" strokeWidth="1.5" />
        <line x1="8" y1="30" x2="13" y2="22" stroke="#E8410A" strokeWidth="1.5" />
        <line x1="28" y1="30" x2="23" y2="22" stroke="#E8410A" strokeWidth="1.5" />
      </svg>
    ),
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
                <div className="flex-shrink-0">{f.icon}</div>

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