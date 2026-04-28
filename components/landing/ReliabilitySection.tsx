// export function ReliabilitySection() {
//   return (
//     <section className="section">
//       <div className="split alt">
//         <div className="mock-panel large" aria-hidden="true">
//           <div className="mock-grid">
//             <div className="mock-tile">
//               <h4>Routing</h4>
//               <p>Requests are automatically distributed across healthy regions.</p>
//             </div>
//             <div className="mock-tile">
//               <h4>Health Checks</h4>
//               <p>Connections are monitored continuously during every call.</p>
//             </div>
//             <div className="mock-tile">
//               <h4>Fall Backs</h4>
//               <p>Provider issues trigger automatic failover and alerting.</p>
//             </div>
//             <div className="mock-tile">
//               <h4>Uptime</h4>
//               <p>Platform monitoring keeps production traffic stable and reliable.</p>
//             </div>
//           </div>
//         </div>

//         <div className="copy-block">
//           <p className="eyebrow">99.9% Uptime. Real SLA.</p>
//           <h3>Reliable by design, not by accident.</h3>
//           <p>
//             We obsess over reliability: multi-region failover, automatic retries, and proactive
//             alerts so your agents never go silent.
//           </p>
//           <ul className="checklist">
//             <li>Multi-region deployment and automatic failover</li>
//             <li>Websocket health monitoring in real time</li>
//             <li>Integrated alerting</li>
//             <li>99.9% contractual uptime SLA</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }





const reliabilityFeatures = [
  {
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M9 1L17 5V10C17 14.418 13.418 18.5 9 19C4.582 18.5 1 14.418 1 10V5L9 1Z" stroke="#685C55" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Multi-region deployment",
    desc: "Automatic failover across 3 global regions",
  },
  {
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
        <rect x="1" y="1" width="18" height="14" rx="2" stroke="#685C55" strokeWidth="2" />
        <path d="M1 5H19" stroke="#685C55" strokeWidth="1.5" />
      </svg>
    ),
    title: "WebSocket health monitoring",
    desc: "Real-time connection tracking per active call",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#685C55" strokeWidth="2" />
        <path d="M10 5V10L13 13" stroke="#685C55" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Integrated alerting",
    desc: "Native PagerDuty and Slack incident reporting",
  },
  {
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path d="M8 1L15 4V10C15 14.5 11.5 18.5 8 19C4.5 18.5 1 14.5 1 10V4L8 1Z" stroke="#685C55" strokeWidth="2" fill="none" />
        <path d="M5 10L7 12L11 8" stroke="#685C55" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "99.9% Uptime SLA",
    desc: "Contractual guarantee across the orchestration layer",
  },
];

const mockCards = [
  { num: "1", title: "Routing", desc: "Requests are automatically distributed across healthy regions." },
  { num: "2", title: "Health Checks", desc: "Connections are monitored continuously during every call." },
  { num: "3", title: "Fall Backs", desc: "Provider issues trigger automatic failover and alerting." },
  { num: "4", title: "Uptime", desc: "transparent incident handling and platform monitoring keep operations stable for production traffic." },
];

export function ReliabilitySection() {
  return (
    <section className="bg-[#F4EFE7] py-0">
      <div className="px-[65px] py-[69px] flex flex-row items-center gap-[97px]">
        {/* LEFT: UI Mockup */}
        <div
          className="w-[523px] h-[668px] rounded-[32px] relative shrink-0"
          style={{ background: "#110D0B", boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)" }}
        >
          {/* Top bar */}
          <div className="absolute top-[48px] left-[42px] right-[42px] flex flex-row justify-between items-center">
            <div className="bg-white/10 rounded-full px-[12px] py-[4px]">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.5px] text-white/60">Multi Region</span>
            </div>
            <div className="bg-white/10 rounded-full px-[12px] py-[4px]">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.5px] text-white/60">Failover on</span>
            </div>
          </div>

          {/* 2x2 grid of tiles */}
          <div
            className="absolute flex flex-row flex-wrap gap-x-[19px] gap-y-[20px] w-[439px]"
            style={{ left: "50%", transform: "translateX(-50%)", top: 87 }}
          >
            {mockCards.map((c) => (
              <div
                key={c.num}
                className="w-[210px] h-[261px] rounded-[16px] relative"
                style={{ background: "#241C13", border: "2px solid #362E25" }}
              >
                <div className="absolute left-[24px] top-[24px] flex flex-col gap-[31px] w-[162px]">
                  <div className="w-[35px] h-[35px] rounded-full bg-[#402011] flex items-center justify-center">
                    <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[14px] text-[#FBF9F4]/80">{c.num}</span>
                  </div>
                  <div className="flex flex-col gap-[11px]">
                    <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[20px] leading-[20px] text-[#FBF9F4]">{c.title}</p>
                    <p className="font-[family-name:var(--font-inter)] text-[15px] leading-[20px] text-[#FBF9F4]">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Copy */}
        <div className="flex flex-col gap-[48px] w-[544px] shrink-0">
          <div className="flex flex-col gap-[23.4px]">
            <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-bold tracking-[3.6px] uppercase text-[#E8410A]">
              RELIABILITY
            </p>
            <h3 className="heading-section text-[#31332C]">
              99.9% Uptime. 
              <br />
              Real  SLA.
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-[18px] leading-[29px] text-[#5E6058] max-w-[512px]">
              We obsess over the thing you can't BYOK: infrastructure reliability. Multi-region failover, automatic retries, and proactive alerts so your agents never go silent.
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-[24px]">
            {reliabilityFeatures.map((f) => (
              <div key={f.title} className="flex flex-row items-center gap-0 w-[544px] h-[36px]">
                <div className="shrink-0 w-[18px] flex items-center justify-center mr-[16px]">
                  {f.icon}
                </div>
                <div className="flex flex-col gap-0">
                  <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[14px] leading-[20px] text-[#31332C]">
                    {f.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[14px] leading-[16px] text-[#5E6058]">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
