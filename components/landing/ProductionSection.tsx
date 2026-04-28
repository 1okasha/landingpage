// export function ProductionSection() {
//   return (
//     <section className="section" id="production">
//       <div className="split">
//         <div className="copy-block">
//           <p className="eyebrow">Built for Production. Not Demos.</p>
//           <h2>Configure Once, Scale Forever.</h2>
//           <p>
//             Bridge the gap between vision and execution. Build resilient systems without manual
//             orchestration overhead.
//           </p>
//           <ul className="checklist">
//             <li>No-code workflow builder</li>
//             <li>Swap any BYOK provider</li>
//             <li>Real-time call analytics</li>
//             <li>Secrets stored in encrypted vault</li>
//           </ul>
//         </div>

//         <div className="mock-panel large" aria-hidden="true">
//           <div className="mock-grid">
//             <div className="mock-tile">
//               <h4>Integrations</h4>
//               <p>Connect voice, CRM, routing, and storage tools from one dashboard.</p>
//             </div>
//             <div className="mock-tile">
//               <h4>Monitoring</h4>
//               <p>Track calls, retries, uptime, and delivery status in real time.</p>
//             </div>
//             <div className="mock-tile wide">
//               <h4>Deployment</h4>
//               <p>Launch agents without code changes, then tune behavior with config updates only.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// Figma: Frame 2087326891 — bg #F4EFE7, 1345×1857px
// Section has two halves stacked vertically:
//   1. Section header (eyebrow + big heading)
//   2. Two content rows: [copy | mockup] and [mockup | copy]

// const devFeatures = [
//   {
//     icon: (
//       <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M1 1L9 9L1 17" stroke="#685C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "No-code workflow builder",
//     description: "Design complex logic visually without leaving your development environment.",
//   },
//   {
//     icon: (
//       <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M1 8H19M1 8L6 3M1 8L6 13M19 8L14 3M19 8L14 13" stroke="#685C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Swap any BYOK provider",
//     description: "Maintain complete sovereignty over your encryption keys and data residency.",
//   },
//   {
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="1" y="1" width="16" height="16" rx="2" stroke="#685C55" strokeWidth="2" />
//         <path d="M4 13L7 9L10 11L13 6" stroke="#685C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Real-time call analytics",
//     description: "Deep observability into every node and transition within your system's graph.",
//   },
//   {
//     icon: (
//       <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="1" y="7" width="14" height="12" rx="2" stroke="#685C55" strokeWidth="2" />
//         <path d="M4 7V5C4 2.8 5.8 1 8 1C10.2 1 12 2.8 12 5V7" stroke="#685C55" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     title: "Secrets stored in encrypted vault",
//     description: "Industrial-grade security for your most sensitive configuration parameters.",
//   },
// ];

// // Mock panel cards for "Developer Experience" mockup
// // Figma: bg #241C13, border 2px #362E25, border-radius 16px
// // Cards 2, 3 are 210×261px; card 4 is 439×119px (full width)
// const devMockCards = [
//   {
//     num: "2",
//     title: "Integrations",
//     desc: "Connect voice, CRM, routing, and storage tools from one dashboard.",
//     wide: false,
//   },
//   {
//     num: "3",
//     title: "Monitoring",
//     desc: "Track calls, retries, uptime, and delivery status in real time.",
//     wide: false,
//   },
//   {
//     num: "4",
//     title: "Deployment",
//     desc: "Launch agents without code changes, then tune behavior with configuration updates only.",
//     wide: true,
//   },
// ];

// export function ProductionSection() {
//   return (
//     // Figma: bg #F4EFE7, 1345×1857px
//     <section className="bg-[#F4EFE7] px-[65px] py-[69px]" id="production">
//       <div className="mx-auto flex max-w-[1216px] flex-col gap-[65px]">

//         {/* ── Section Header ──
//             Figma: IBM Plex Mono 400, 12px, ls 3.6px, uppercase, #E8410A
//                    Space Grotesk 400, 72px, lh 72px, ls -1.8px, color #2D241E */}
//         <div className="flex flex-col gap-4">
//           <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-normal uppercase leading-[16px] tracking-[3.6px] text-[#E8410A]">
//             UPLATFORM CAPABILITIES
//           </p>
//           <h2 className="font-[family-name:var(--font-space-grotesk)] text-[72px] font-normal leading-[72px] tracking-[-1.8px] text-[#2D241E]">
//             Built for Production. Not Demos.
//           </h2>
//         </div>

//         {/* ── Row 1: Copy left / Mockup right ──
//             Figma: Frame 2087326917 — flex-row, gap 97px, items-center */}
//         <div className="flex items-center gap-[97px]">

//           {/* Left copy — Figma: w 544px, flex-col gap 48px */}
//           <div className="flex w-[544px] flex-shrink-0 flex-col gap-[48px]">

//             {/* Text block — Figma: flex-col gap 23.4px */}
//             <div className="flex flex-col gap-[23px]">
//               {/* Eyebrow — IBM Plex Mono 700, 12px, ls 3.6px, #E8410A */}
//               <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-bold uppercase leading-[16px] tracking-[3.6px] text-[#E8410A]">
//                 DEVELOPER EXPERIENCE
//               </p>

//               {/* Heading — Space Grotesk 500, 60px, lh 72px, ls 1.5px, color #31332C */}
//               <h3 className="font-[family-name:var(--font-space-grotesk)] text-[60px] font-medium leading-[72px] tracking-[1.5px] text-[#31332C]">
//                 Configure Once, Scale Forever.
//               </h3>

//               {/* Body — Inter 400, 18px, lh 29px, color #5E6058, max-w 512px */}
//               <p className="max-w-[512px] font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[29px] text-[#5E6058]">
//                 Bridge the gap between vision and execution. Our platform provides the architectural
//                 scaffolding needed to build resilient systems without the overhead of manual
//                 orchestration.
//               </p>
//             </div>

//             {/* Feature list — Figma: flex-col gap 32px */}
//             <ul className="flex flex-col gap-8">
//               {devFeatures.map((f) => (
//                 <li key={f.title} className="flex items-start gap-4">
//                   {/* Icon — Figma: 24×24 container, pt 4px */}
//                   <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center">
//                     {f.icon}
//                   </span>
//                   <div className="flex flex-col gap-1">
//                     {/* Title — Space Grotesk 700, 14px, lh 20px, color #31332C */}
//                     <span className="font-[family-name:var(--font-space-grotesk)] text-[14px] font-bold leading-[20px] text-[#31332C]">
//                       {f.title}
//                     </span>
//                     {/* Desc — Inter 400, 14px, lh 20px, color #5E6058 */}
//                     <span className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#5E6058]">
//                       {f.description}
//                     </span>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right mockup — Figma: 523×542px, bg #110D0B, border-radius 32px
//               box-shadow: 0 25 50 -12 rgba(0,0,0,0.25) */}
//           <div
//             className="flex flex-1 flex-col rounded-[32px] bg-[#110D0B] p-[48px_42px_55px]"
//             style={{ minHeight: 542 }}
//             aria-hidden="true"
//           >
//             {/* Top bar — "No-code builder" + "Live preview" pills */}
//             <div className="mb-4 flex items-center justify-between">
//               <span className="rounded-full bg-white/10 px-3 py-1 font-[family-name:var(--font-inter)] text-[10px] leading-[15px] tracking-[0.5px] text-white/60">
//                 No-code builder
//               </span>
//               <span className="rounded-full bg-white/10 px-3 py-1 font-[family-name:var(--font-inter)] text-[10px] leading-[15px] tracking-[0.5px] text-white/60">
//                 Live preview
//               </span>
//             </div>

//             {/* Card grid — Figma: flex-wrap, gap 20px 19px */}
//             <div className="flex flex-wrap gap-[19px]">
//               {devMockCards.map((c) => (
//                 <div
//                   key={c.title}
//                   className={[
//                     "relative rounded-[16px] border-2 border-[#362E25] bg-[#241C13] p-6",
//                     c.wide ? "w-full" : "w-[calc(50%-10px)]",
//                   ].join(" ")}
//                 >
//                   {/* Number badge — Figma: 35×35, bg #402011, rounded-full */}
//                   <span className="mb-[31px] flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#402011] font-[family-name:var(--font-dm-sans)] text-[14px] font-bold leading-[15px] text-[#FBF9F4]">
//                     {c.num}
//                   </span>
//                   {/* Card title — Space Grotesk 700, 20px, lh 20px, #FBF9F4 */}
//                   <h4 className="mb-[11px] font-[family-name:var(--font-space-grotesk)] text-[20px] font-bold leading-[20px] text-[#FBF9F4]">
//                     {c.title}
//                   </h4>
//                   {/* Card desc — Inter 400, 15px, lh 20px, #FBF9F4 */}
//                   <p className="font-[family-name:var(--font-inter)] text-[15px] font-normal leading-[20px] text-[#FBF9F4]">
//                     {c.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }





import Image from "next/image";

const EYEBROW = "DEVELOPER EXPERIENCE";
const SECTION_LABEL = "UPLATFORM CAPABILITIES";

const features = [
  {
    icon: (
      <svg width="11" height="18" viewBox="0 0 11 18" fill="none">
        <path d="M5.5 0L11 18H0L5.5 0Z" fill="#685C55" />
      </svg>
    ),
    title: "No-code workflow builder",
    desc: "Design complex logic visually without leaving your development environment.",
  },
  {
    icon: (
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
        <path d="M0 8H20M12 1L19 8L12 15" stroke="#685C55" strokeWidth="2" />
      </svg>
    ),
    title: "Swap any BYOK provider",
    desc: "Maintain complete sovereignty over your encryption keys and data residency.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="16" height="16" rx="2" stroke="#685C55" strokeWidth="2" />
        <path d="M4 12L7 8L10 10L14 6" stroke="#685C55" strokeWidth="1.5" />
      </svg>
    ),
    title: "Real-time call analytics",
    desc: "Deep observability into every node and transition within your system's graph.",
  },
  {
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <rect x="2" y="4" width="12" height="14" rx="2" stroke="#685C55" strokeWidth="2" />
        <path d="M5 4V3C5 1.895 5.895 1 7 1H9C10.105 1 11 1.895 11 3V4" stroke="#685C55" strokeWidth="2" />
      </svg>
    ),
    title: "Secrets stored in encrypted vault",
    desc: "Industrial-grade security for your most sensitive configuration parameters.",
  },
];

export function ProductionSection() {
  return (
    <section className="bg-[#F4EFE7] py-0" id="production">
      {/* Section label */}
      <div className="px-[65px] pt-[69px] pb-0">
        <p
          className="font-(family-name:--font-ibm-plex-mono) text-[12px] font-normal tracking-[3.6px] uppercase text-[#E8410A] mb-[16px]"
        >
          UPLATFORM CAPABILITIES
        </p>
        <h2
          className="font-(family-name:--font-space-grotesk) font-normal text-[72px] leading-[72px] tracking-[-1.8px] text-[#2D241E] mb-[65px]"
          style={{ fontFamily: "var(--font-space-grotesk)", fontWeight: 400 }}
        >
          Built for Production.
          <br />
          Not Demos.
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="px-[65px] pb-[69px] flex flex-row items-center gap-[97px]">
        {/* LEFT: Copy */}
        <div className="flex flex-col gap-0 w-[544px] shrink-0">
          {/* Eyebrow + heading + body */}
          <div className="flex flex-col gap-[23.4px] mb-[48px]">
            <p
              className="font-(family-name:--font-ibm-plex-mono) text-[12px] font-bold tracking-[3.6px] uppercase text-[#E8410A]"
            >
              {EYEBROW}
            </p>
            <h3
              className="font-(family-name:--font-space-grotesk) font-medium text-[60px] leading-[72px] tracking-[1.5px] text-[#31332C]"
            >
              Configure Once, Scale Forever.
            </h3>
            <p className="font-(family-name:--font-inter) font-normal text-[18px] leading-[29px] text-[#5E6058] max-w-[512px]">
              Bridge the gap between vision and execution. Our platform provides the architectural scaffolding needed to build resilient systems without the overhead of manual orchestration.
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-[32px]">
            {features.map((f) => (
              <div key={f.title} className="flex flex-row items-start gap-[16px]">
                <div className="pt-[4px] w-[24px] h-[28px] flex items-start justify-center shrink-0">
                  <div className="flex items-center justify-center w-[24px] h-[24px]">
                    {f.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-(family-name:--font-space-grotesk) font-bold text-[14px] leading-[20px] text-[#31332C]">
                    {f.title}
                  </p>
                  <p className="font-(family-name:--font-inter) font-normal text-[14px] leading-[20px] text-[#5E6058]">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: UI Mockup panel */}
        <div
          className="w-[523px] h-[542px] rounded-[32px] flex flex-col justify-center items-center px-[42px] pt-[48px] pb-[55px] shrink-0"
          style={{
            background: "linear-gradient(0deg, rgba(255,255,255,0.002), rgba(255,255,255,0.002)), #110D0B",
            boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
          }}
        >
          <div className="w-[439px] h-[439px] flex flex-col">
            {/* Top bar */}
            <div className="flex flex-row justify-between items-center mb-[16px]">
              <div className="bg-white/10 rounded-full px-[12px] py-[4px]">
                <span className="font-(family-name:--font-inter) text-[10px] leading-[15px] tracking-[0.5px] text-white/60">
                  No-code builder
                </span>
              </div>
              <div className="bg-white/10 rounded-full px-[12px] py-[4px]">
                <span className="font-(family-name:--font-inter) text-[10px] leading-[15px] tracking-[0.5px] text-white/60">
                  Live preview
                </span>
              </div>
            </div>

            {/* Grid of cards */}
            <div className="flex flex-row flex-wrap gap-x-[19px] gap-y-[20px] w-[439px]">
              {/* Card 2: Integrations */}
              <div
                className="w-[210px] h-[261px] rounded-[16px] relative"
                style={{ background: "#241C13", border: "2px solid #362E25" }}
              >
                <div className="absolute left-[24px] top-[24px] flex flex-col gap-[31px] w-[162px]">
                  <div className="w-[35px] h-[35px] rounded-full bg-[#402011] flex items-center justify-center">
                    <span className="font-(family-name:--font-dm-sans) font-bold text-[14px] leading-[15px] text-[#FBF9F4]/80">2</span>
                  </div>
                  <div className="flex flex-col gap-[11px]">
                    <p className="font-(family-name:--font-space-grotesk) font-bold text-[20px] leading-[20px] text-[#FBF9F4]">Integrations</p>
                    <p className="font-(family-name:--font-inter) font-normal text-[15px] leading-[20px] text-[#FBF9F4]">
                      Connect voice, CRM, routing, and storage tools from one dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Monitoring */}
              <div
                className="w-[210px] h-[261px] rounded-[16px] relative"
                style={{ background: "#241C13", border: "2px solid #362E25" }}
              >
                <div className="absolute left-[24px] top-[24px] flex flex-col gap-[31px] w-[162px]">
                  <div className="w-[35px] h-[35px] rounded-full bg-[#402011] flex items-center justify-center">
                    <span className="font-(family-name:--font-dm-sans) font-bold text-[14px] leading-[15px] text-[#FBF9F4]/80">3</span>
                  </div>
                  <div className="flex flex-col gap-[11px]">
                    <p className="font-(family-name:--font-space-grotesk) font-bold text-[20px] leading-[20px] text-[#FBF9F4]">Monitoring</p>
                    <p className="font-(family-name:--font-inter) font-normal text-[15px] leading-[20px] text-[#FBF9F4]">
                      Track calls, retries, uptime, and delivery status in real time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Deployment (wide) */}
              <div
                className="w-[439px] h-[119px] rounded-[16px] relative"
                style={{ background: "#241C13", border: "2px solid #362E25" }}
              >
                <div
                  className="absolute flex flex-col gap-[11px] w-[381px]"
                  style={{ left: 24, top: "50%", transform: "translateY(-50%)" }}
                >
                  <div className="flex flex-row items-center gap-[31px]">
                    <div className="w-[35px] h-[35px] rounded-full bg-[#402011] flex items-center justify-center shrink-0">
                      <span className="font-(family-name:--font-dm-sans) font-bold text-[14px] leading-[15px] text-[#FBF9F4]/80">4</span>
                    </div>
                    <p className="font-(family-name:--font-space-grotesk) font-bold text-[20px] leading-[20px] text-[#FBF9F4]">Deployment</p>
                  </div>
                  <p className="font-(family-name:--font-inter) font-normal text-[15px] leading-[20px] text-[#FBF9F4]">
                    Launch agents without code changes, then tune behavior with configuration updates only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}