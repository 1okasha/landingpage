// const comparisonRows = [
//   ["Platform pricing model", "Per-minute billing", "Per-minute markup", "Per-minute markup", "Per-character markup"],
//   ["BYOK — STT", "Full BYOK", "Limited", "Limited", "No"],
//   ["BYOK — TTS", "Full BYOK", "Partial", "Partial", "Platform only"],
//   ["BYOK — LLM", "Any provider", "Partial", "Partial", "No"],
//   ["BYOK — SIP Trunks", "Any SIP", "Twilio only", "Twilio/Vonage", "No"],
//   ["BYOK — Storage", "Your bucket", "Platform storage", "Platform storage", "Platform storage"],
//   ["Uptime SLA", "99.9% uptime", "Best effort", "99.5%", "Best effort"],
// ];

// export function PricingSection() {
//   return (
//     <section className="section" id="pricing">
//       <div className="pricing-head">
//         <p className="eyebrow">Pricing</p>
//         <h2>Simple pricing for AI voice agents. Scale conversations without limits.</h2>
//         <p>Choose the setup that matches your volume. No hidden fees, just clear pricing.</p>
//       </div>

//       <div className="pricing-grid">
//         <article className="pricing-card">
//           <h3>Standard BYOK</h3>
//           <div className="price">
//             $0.04 <small>/ min</small>
//           </div>
//           <ul>
//             <li>All BYOK providers</li>
//             <li>Unlimited concurrent calls</li>
//             <li>70+ languages supported</li>
//             <li>Standard support access</li>
//           </ul>
//           <div style={{ marginTop: 18 }}>
//             <a className="btn btn-light" href="#contact">
//               Join Waitlist
//             </a>
//           </div>
//         </article>

//         <article className="pricing-card featured">
//           <span className="badge">SCALABLE</span>
//           <h3>Enterprise</h3>
//           <div className="price">
//             $0.02 <small>/ min</small>
//           </div>
//           <ul>
//             <li>Everything in Standard</li>
//             <li>On-premises deployment</li>
//             <li>Dedicated infrastructure</li>
//             <li>Custom development services</li>
//             <li>SOC 2 / HIPAA / GDPR support</li>
//           </ul>
//           <div style={{ marginTop: 18 }}>
//             <a className="btn btn-orange" href="#contact">
//               Talk To Our Team
//             </a>
//           </div>
//         </article>
//       </div>

//       <div className="table-box" style={{ marginTop: 20 }}>
//         <table>
//           <thead>
//             <tr>
//               <th>Feature</th>
//               <th>LeapDev</th>
//               <th>Retell AI</th>
//               <th>Vapi</th>
//               <th>ElevenLabs Agents</th>
//             </tr>
//           </thead>
//           <tbody>
//             {comparisonRows.map((row) => (
//               <tr key={row[0]}>
//                 <td>{row[0]}</td>
//                 <td>{row[1]}</td>
//                 <td>{row[2]}</td>
//                 <td>{row[3]}</td>
//                 <td>{row[4]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }





const comparisonRows = [
  {
    feature: "Platform pricing model",
    leapdev: { text: "Per-minute billing", highlight: true },
    retell: "Per-minute markup",
    vapi: "Per-minute markup",
    eleven: "Per-character markup",
  },
  {
    feature: "BYOK — STT",
    leapdev: { text: "Full BYOK", highlight: true, icon: true },
    retell: "Limited",
    vapi: "Limited",
    eleven: "No",
  },
  {
    feature: "BYOK — TTS",
    leapdev: { text: "Full BYOK", highlight: true, icon: true },
    retell: "Partial",
    vapi: "Partial",
    eleven: "Platform only",
  },
  {
    feature: "BYOK — LLM",
    leapdev: { text: "Any provider", highlight: true, icon: true },
    retell: "Partial",
    vapi: "Partial",
    eleven: "No",
  },
  {
    feature: "BYOK — SIP Trunks",
    leapdev: { text: "Any SIP", highlight: true, icon: true },
    retell: "Twilio only",
    vapi: "Twilio/Vonage",
    eleven: "No",
  },
  {
    feature: "BYOK — Storage",
    leapdev: { text: "Your bucket", highlight: true, icon: true },
    retell: "Platform storage",
    vapi: "Platform storage",
    eleven: "Platform storage",
  },
  {
    feature: "Uptime SLA",
    leapdev: { text: "99.9% uptime", highlight: true },
    retell: "Best effort",
    vapi: "99.5%",
    eleven: "Best effort",
  },
];

const CheckIcon = () => (
  <svg width="11.7" height="12.11" viewBox="0 0 12 13" fill="none" className="shrink-0">
    <path d="M1 6.5L4.5 10L11 2" stroke="#2D7A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIconWhite = () => (
  <svg width="16.67" height="15.83" viewBox="0 0 17 16" fill="none" className="shrink-0">
    <path d="M1 8L6 13L16 1" stroke="#FBF9F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIconDark = () => (
  <svg width="13.58" height="10.02" viewBox="0 0 14 11" fill="none" className="shrink-0">
    <path d="M1 5.5L5 9.5L13 1" stroke="#2D241E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function PricingSection() {
  return (
    <section className="bg-[#F4EFE7] py-0" id="pricing">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-10 px-6 py-12 sm:px-8 lg:gap-[57px] lg:py-[69px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <div className="flex flex-col items-center w-full">
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] tracking-[3.6px] uppercase text-[#E8410A] text-center">
              PRICING
            </p>
          </div>
          <div className="flex flex-col items-center gap-[6px] w-full">
            <h2 className="heading-display w-full text-center text-[#2D241E]">
              Simple pricing for AI voice agents.
            </h2>
            <h2 className="heading-display w-full text-center text-[#2D241E]">
              Scale conversations without limits.
            </h2>
          </div>
          <div className="pt-[16px]">
            <p className="font-[family-name:var(--font-dm-sans)] font-medium text-[18px] leading-[29px] text-[#93846D] text-center max-w-[672px]">
              Choose the plan that fits your volume. No hidden fees, just crystal clear AI interactions.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-[63px]">
          {/* Standard */}
          <div
            className="flex h-auto w-full rounded-[28px] p-6 sm:p-10 lg:h-[633px] lg:w-[463px] lg:rounded-[46px] lg:p-[56px] lg:flex-col lg:justify-between"
            style={{ background: "#FDFAF2", border: "1px solid #D1CCC0" }}
          >
            <div className="flex flex-col gap-[32px] pb-[48px]">
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] tracking-[1.4px] uppercase text-[#7D746D]">
                STANDARD BYOC
              </p>
              <div className="flex flex-row items-baseline gap-[8px]">
                <span className="font-[family-name:var(--font-dm-sans)] font-normal text-[60px] leading-[60px] text-[#2D241E]">$0.04</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[16px] leading-[24px] text-[#7D746D]">/ min</span>
              </div>
              <div className="flex flex-col gap-[24px] pt-[8px]">
                {["All BYOK providers", "Unlimited concurrent calls", "70+ languages supported", "Standard support access"].map((item) => (
                  <div key={item} className="flex flex-row items-start gap-[16px]">
                    <CheckIconDark />
                    <span className="font-[family-name:var(--font-inter)] text-[14px] leading-[20px] text-[#2D241E]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="w-full h-[50px] rounded-[41px] flex items-center justify-center font-[family-name:var(--font-inter)] font-extrabold text-[12px] tracking-[1.2px] uppercase text-[#2D241E]"
              style={{ border: "1px solid #2D241E" }}
            >
              JOIN WAITLIST
            </button>
          </div>

          {/* Enterprise */}
          <div
            className="relative flex h-auto w-full overflow-visible rounded-[28px] p-6 sm:p-10 lg:h-[633px] lg:w-[463px] lg:rounded-[46px] lg:p-[56px] lg:flex-col lg:justify-between"
            style={{ background: "#1A1208", border: "2px solid #2D241E", boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)" }}
          >
            {/* SCALABLE badge */}
            <div className="absolute right-6 top-[-14px] rounded-[12px] bg-[#E8410A] px-[16px] py-[4px] lg:right-[42px]">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[2px] uppercase text-white">SCALABLE</span>
            </div>

            <div className="flex flex-col gap-[32px] pb-[48px]">
              <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] tracking-[1.4px] uppercase text-[#FBF9F4]">
                ENTERPRISE
              </p>
              <div className="flex flex-row items-baseline gap-[8px]">
                <span className="font-[family-name:var(--font-dm-sans)] font-normal text-[60px] leading-[60px] text-[#FBF9F4]">$0.02</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[16px] leading-[24px] text-[#FBF9F4]">/ min</span>
              </div>
              <div className="flex flex-col gap-[24px] pt-[8px]">
                {[
                  { text: "Everything in Standard", star: true },
                  { text: "On-premises deployment" },
                  { text: "Dedicated infrastructure" },
                  { text: "Custom development services" },
                  { text: "SOC 2 / HIPAA / GDPR Compliance" },
                ].map((item) => (
                  <div key={item.text} className="flex flex-row items-start gap-[16px]">
                    {item.star ? <CheckIconWhite /> : (
                      <svg width="13.58" height="10.02" viewBox="0 0 14 11" fill="none" className="shrink-0 mt-[3px]">
                        <path d="M1 5.5L5 9.5L13 1" stroke="#FBF9F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    <span className="font-[family-name:var(--font-inter)] text-[14px] leading-[20px] text-[#FBF9F4]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full h-[48px] rounded-[41px] bg-[#E8410A] flex items-center justify-center font-[family-name:var(--font-inter)] font-extrabold text-[12px] tracking-[1.2px] uppercase text-white">
              TALK TO OUR TEAM
            </button>
          </div>
        </div>

        {/* Comparison table */}
        <div className="flex w-full flex-col gap-[23px]">
          <p className="font-[family-name:var(--font-ibm-plex-mono)] font-normal text-[12px] leading-[16px] tracking-[3.6px] uppercase text-[#E8410A] w-full">
            WHY LEAPS DEV VS COMPETITORS
          </p>
          <div
            className="w-full overflow-x-auto rounded-[24px]"
            style={{ background: "rgba(239,235,228,0.6)", border: "1px solid #D9D5CE" }}
          >
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid #D9D5CE" }}>
                  <th className="text-left px-[32px] py-[24px] w-[276px]">
                    <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[11px] tracking-[1.1px] uppercase text-[#93846D]">FEATURE</span>
                  </th>
                  {["LEAPDEV", "RETELL AI", "VAPI", "ELEVENLABS AGENTS"].map((h) => (
                    <th key={h} className="text-left px-[24px] py-[24px]">
                      <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-[11px] tracking-[1.1px] uppercase text-[#93846D]">{h}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: i < comparisonRows.length - 1 ? "1px solid #D9D5CE" : undefined,
                      background: i % 2 === 0 ? "#F9F7F4" : undefined,
                    }}
                  >
                    <td className="px-[32px] py-[24.5px]">
                      <span className="font-[family-name:var(--font-inter)] font-bold text-[14px] leading-[17px] text-[#2D241E]">{row.feature}</span>
                    </td>
                    <td className="px-[24px] py-[24px]">
                      <div className="flex flex-row items-center gap-[6px]">
                        {row.leapdev.icon && <CheckIcon />}
                        <span className="font-[family-name:var(--font-inter)] font-bold text-[14px] leading-[17px] text-[#2D7A4D]">{row.leapdev.text}</span>
                      </div>
                    </td>
                    {[row.retell, row.vapi, row.eleven].map((val, j) => (
                      <td key={j} className="px-[24px] py-[24.5px]">
                        <span className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[17px] text-[#93846D]">{val}</span>
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Summary row */}
                <tr style={{ background: "#EFEBE4" }}>
                  <td className="px-[32px] py-[33.5px]">
                    <span className="font-[family-name:var(--font-inter)] font-bold text-[14px] text-[#2D241E]">Est. cost for 10k min/mo</span>
                  </td>
                  <td className="px-[24px] py-[24px]">
                    <span className="font-[family-name:var(--font-inter)] font-bold text-[14px] text-[#2D7A4D] leading-[17px]">Per-minute + vendor bills</span>
                  </td>
                  <td className="px-[24px] py-[33.5px]">
                    <span className="font-[family-name:var(--font-inter)] text-[14px] text-[#93846D]">~$800–1,200</span>
                  </td>
                  <td className="px-[24px] py-[33.5px]">
                    <span className="font-[family-name:var(--font-inter)] text-[14px] text-[#93846D]">~$700–1,000</span>
                  </td>
                  <td className="px-[24px] py-[33.5px]">
                    <span className="font-[family-name:var(--font-inter)] text-[14px] text-[#93846D]">~$600–900</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-[family-name:var(--font-inter)] italic text-[12px] leading-[20px] text-[#93846D]">
            Estimates based on publicly available pricing as of early 2026. Your actual API costs depend on providers chosen.
          </p>
        </div>
      </div>
    </section>
  );
}