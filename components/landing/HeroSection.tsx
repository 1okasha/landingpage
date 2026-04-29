// export function HeroSection() {
//   return (
//     <section className="hero" id="contact">
//       <div className="hero-copy">
//         <p className="eyebrow">Voice AI Infra</p>
//         <h1>
//           The Voice AI infra <span className="accent">enterprises actually</span> trust.
//         </h1>
//         <p>
//           Launch production-grade voice agents, orchestration, telephony, and analytics from one
//           stack. Built for teams that need reliability, speed, and control without the complexity.
//         </p>

//         <div className="social-row">
//           <div className="avatars" aria-hidden="true">
//             <span className="avatar" />
//             <span className="avatar" />
//             <span className="avatar" />
//           </div>
//           <span>Join 240+ teams on the waitlist</span>
//         </div>

//         <div className="wave" aria-hidden="true">
//           {Array.from({ length: 10 }).map((_, index) => (
//             <span key={index} />
//           ))}
//         </div>
//       </div>

//       <div className="hero-form">
//         <div className="form-card">
//           <h2>Request Early Access</h2>
//           <p>
//             Tell us about your use case and we&apos;ll follow up with a tailored plan, timeline,
//             and platform overview.
//           </p>
//           <form className="grid">
//             <div className="field-grid">
//               <input className="field" type="text" placeholder="First name" aria-label="First name" />
//               <input className="field" type="text" placeholder="Last name" aria-label="Last name" />
//               <input className="field" type="email" placeholder="Work email" aria-label="Work email" />
//               <input className="field" type="text" placeholder="Company / Project Name" aria-label="Company / Project Name" />
//               <input className="field" type="text" placeholder="Primary use case" aria-label="Primary use case" />
//               <input className="field" type="text" placeholder="Monthly call volume" aria-label="Monthly call volume" />
//             </div>

//             <textarea className="textarea" placeholder="Anything else?" aria-label="Anything else?" />
//             <button className="submit" type="button">
//               REQUEST EARLY ACCESS
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }


// tsilwind+inlinecss

"use client";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

// ─── Exact waveform bars from Figma layer specs ───────────────────────────────
const waveBars = [
  { left: 0,   height: 31,  top: 45,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 16,  height: 83,  top: 26,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 36,  height: 109, top: 13,  bg: "#F26D4D", opacity: 1,   shadow: true  },
  { left: 52,  height: 64,  top: 36,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 68,  height: 13,  top: 61,  bg: "#F9CBB5", opacity: 0.6, shadow: false },
  { left: 84,  height: 71,  top: 32,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 100, height: 135, top: 0,   bg: "#F26D4D", opacity: 1,   shadow: true  },
  { left: 116, height: 57,  top: 39,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 132, height: 16,  top: 60,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 148, height: 31,  top: 52,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 164, height: 17,  top: 59,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 180, height: 64,  top: 33,  bg: "#F9CBB5", opacity: 0.4, shadow: false },
  { left: 196, height: 52,  top: 42,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 212, height: 45,  top: 45,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 228, height: 83,  top: 26,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 244, height: 16,  top: 60,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 260, height: 58,  top: 39,  bg: "#F9CBB5", opacity: 0.4, shadow: false },
  { left: 274, height: 16,  top: 60,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 290, height: 58,  top: 39,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 306, height: 16,  top: 60,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 322, height: 32,  top: 52,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 338, height: 84,  top: 26,  bg: "#F26D4D", opacity: 1,   shadow: false },
  { left: 354, height: 109, top: 13,  bg: "#F26D4D", opacity: 1,   shadow: true  },
  { left: 370, height: 64,  top: 36,  bg: "#F9CBB5", opacity: 1,   shadow: false },
  { left: 386, height: 25,  top: 52,  bg: "#F9CBB5", opacity: 0.6, shadow: false },
] as const;

type EarlyAccessFormData = {
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  companyProjectName: string;
  primaryUseCase: string;
  monthlyCallVolume: string;
  anythingElse: string;
  website: string;
};

const initialFormData: EarlyAccessFormData = {
  firstName: "",
  lastName: "",
  workEmail: "",
  phoneNumber: "",
  companyProjectName: "",
  primaryUseCase: "",
  monthlyCallVolume: "",
  anythingElse: "",
  website: "",
};

export function HeroSection() {
  const [formData, setFormData] = useState<EarlyAccessFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(240);

  useEffect(() => {
    let isMounted = true;

    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch("/api/early-access", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as { count?: number };
        if (isMounted && typeof payload.count === "number") {
          setWaitlistCount(payload.count);
        }
      } catch {
        // Keep fallback value when count request fails.
      }
    };

    void fetchWaitlistCount();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(null);

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.workEmail.trim() ||
      !formData.companyProjectName.trim() ||
      !formData.primaryUseCase.trim() ||
      !formData.monthlyCallVolume.trim()
    ) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to submit your request right now.");
      }

      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Unable to submit your request right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Figma: Frame 2087326890 — bg #F4EFE7, height 976px, split 673 / 672
    <section className="flex min-h-screen flex-col lg:flex-row" id="contact">

      {/* ════════════════════════════════════════════
          LEFT — Beige Intro Section
          Figma: padding 96px 80px, bg #F4EFE7, width 673px
          ════════════════════════════════════════════ */}
      <div className="flex w-full flex-col justify-center bg-[#F4EFE7] px-6 py-12 sm:px-8 md:px-12 lg:max-w-[673px] lg:px-16 lg:py-20 xl:px-20 xl:py-24">
        {/* Container — gap 32px, max-width 513px */}
        <div className="mx-auto flex w-full max-w-[513px] flex-col gap-8">

          {/* ── Beta Badge ──
              Figma: bg rgba(255,255,255,0.5), border #E8E2D9,
                     shadow 0 1 2 rgba(0,0,0,.05), backdrop-blur 2px,
                     padding 6px 16px 6px 12px, gap 8px, h 27px, rounded-full
                     font: IBM Plex Mono 12px, color #93846D */}
          <div
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E8E2D9] px-4 py-1.5"
            style={{
              background: "rgba(255,255,255,0.5)",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
              backdropFilter: "blur(2px)",
            }}
          >
            {/* Green dot — Figma: bg #10B981, 8×8px */}
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#10B981]" />
            <span
              className="text-[12px] leading-5 text-[#93846D]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Private beta — accepting applications
            </span>
          </div>

          {/* ── Headline ──
              Figma: Space Grotesk 700, 72px, line-height 91px,
                     letter-spacing -1.92px, color #2D241E */}
          <h1
            className="text-[40px] font-bold leading-[1.15] text-[#2D241E] sm:text-[52px] lg:text-[72px] lg:leading-[91px]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-1.92px",
            }}
          >
            The Voice AI infra{" "}
            {/* Figma: accent is same color #2D241E, "enterprises actually" is just part of the text */}
            <span className="text-[#E8410A]">enterprises</span>
            <br />
            <span className="text-[#E8410A]">actually</span> trust.
          </h1>

          {/* ── Subtext ──
              Figma: Inter 500, 16px, line-height 29px, color #93846D */}
          <p
            className="text-[16px] font-medium leading-[29px] text-[#93846D]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sub-500ms latency. Bring your own LLM, TTS, and STT. On-premises or cloud. Every call
            scenario — automated.
          </p>

          {/* ── Social Proof ──
              Figma: flex-row, items-center, padding 16px 0 0, gap 16px, h 58px */}
          <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center">
            {/* Avatar stack — Figma: 42×42, border 2px #F5F4ED, -12px margin */}
            <div className="flex">
              {["#A87878", "#7AA987", "#8899BB"].map((bg, i) => (
                <span
                  key={i}
                  className="h-[42px] w-[42px] rounded-full border-2 border-[#F5F4ED]"
                  style={{ background: bg, marginLeft: i === 0 ? 0 : -12 }}
                />
              ))}
              {/* +240 chip — Figma: bg #E2E3D9, border #F5F4ED, Plus Jakarta Sans 700 10px, color #5E6058 */}
              <span
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#F5F4ED] bg-[#E2E3D9] text-[10px] font-bold text-[#5E6058]"
                style={{ marginLeft: -12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                +{waitlistCount}
              </span>
            </div>

            {/* Text — Figma: Inter 400, 22px, line-height 18px, letter-spacing -0.3px, color #665E57 */}
            <span
              className="text-[18px] leading-[22px] text-[#665E57] sm:text-[22px] sm:leading-[18px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.3px",
              }}
            >
              Join <strong className="font-bold">{waitlistCount}+ teams</strong> on the waitlist
            </span>
          </div>

          {/* ── Waveform ──
              Figma: Frame 2087326934 — 513×171px container
                     Group 5 inside — absolute 392×135, centered */}
          <div className="relative h-[171px] w-full max-w-[513px] overflow-hidden" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-[135px] w-[392px] -translate-x-1/2 -translate-y-1/2 scale-[0.82] sm:scale-100">
              {waveBars.map((bar, i) => (
                <span
                  key={i}
                  className="absolute rounded-[9999px]"
                  style={{
                    left: bar.left,
                    top: bar.top,
                    width: 6,
                    height: bar.height,
                    background: bar.bg,
                    opacity: bar.opacity,
                    boxShadow: bar.shadow
                      ? "0px 0px 20px rgba(242,109,77,0.3)"
                      : undefined,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════
          RIGHT — Dark Form Section
          Figma: bg #1A1208, padding 96px 80px,
                 flex-col justify-center, flex-1
          ════════════════════════════════════════════ */}
      <div className="flex w-full flex-1 flex-col justify-center bg-[#1A1208] px-6 py-12 sm:px-8 md:px-12 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
        {/* Container — Figma: gap 16px, max-width 512px, pb 16px */}
        <div className="mx-auto flex w-full max-w-[512px] flex-col gap-4">

          {/* ── Form Heading ──
              Figma: Space Grotesk 400, 30px, line-height 72px,
                     letter-spacing -1.8px, color #FBF9F4 */}
          <h2
            className="text-[30px] font-normal leading-none text-[#FBF9F4]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-1.8px",
            }}
          >
            Request Early Access
          </h2>

          {/* ── Form Subtext ──
              Figma: Inter 400, 14px, line-height 27px, color #FBF9F4 */}
          <p
            className="text-[14px] leading-[27px] text-[#FBF9F4]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join the waitlist for the modern digital ledger. We process requests in the order
            received based on infrastructure availability.
          </p>

          {/* ── Form ── Figma: gap 27px */}
          <form
            className="flex flex-col gap-[27px]"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            {/* Row 1: First + Last — Figma: Name Row, relative, h 71px */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <FormField
                label="FIRST NAME"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <FormField
                label="LAST NAME"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <FormField
                label="WORK EMAIL"
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
              />
              <FormField
                label="PHONE NUMBER"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Row 3: Company — full width */}
            <FormField
              label="COMPANY/PROJECT NAME"
              type="text"
              fullWidth
              name="companyProjectName"
              value={formData.companyProjectName}
              onChange={handleInputChange}
            />

            {/* Row 4: Selects */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <FormSelect
                label="PRIMARY USE CASE"
                placeholder="Select an option"
                options={["Customer Support", "Sales Outreach", "Scheduling", "Other"]}
                name="primaryUseCase"
                value={formData.primaryUseCase}
                onChange={handleInputChange}
              />
              <FormSelect
                label="MONTHLY CALL VOLUME"
                placeholder="Select volume range"
                options={["< 1,000", "1,000 – 10,000", "10,000 – 100,000", "100,000+"]}
                name="monthlyCallVolume"
                value={formData.monthlyCallVolume}
                onChange={handleInputChange}
              />
            </div>

            {/* Row 5: Textarea — Figma: h 96px, bg rgba(49,51,44,0.5), border-radius 10px */}
            <div className="flex flex-col gap-2">
              <FieldLabel>ANYTHING ELSE?</FieldLabel>
              <textarea
                name="anythingElse"
                value={formData.anythingElse}
                onChange={handleInputChange}
                rows={4}
                className="w-full resize-none rounded-[10px] px-3.5 py-3 text-[16px] leading-6 text-[#FFF6F2] outline-none transition-colors"
                style={{
                  background: "rgba(49,51,44,0.5)",
                  fontFamily: "'Inter', sans-serif",
                  minHeight: 96,
                }}
              />
            </div>

            {/* ── CTA Button ──
                Figma: bg #E8410A, border-radius 41px, h 48px, w 512px
                       Inter 800, 12px, letter-spacing 1.2px, uppercase, color #fff */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center rounded-[41px] bg-[#E8410A] py-3 text-[12px] font-extrabold uppercase tracking-[1.2px] text-white transition-colors hover:bg-[#c93709] disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
              style={{ fontFamily: "'Inter', sans-serif", minHeight: 48 }}
            >
              {isSubmitting ? "SUBMITTING..." : "REQUEST EARLY ACCESS"}
            </button>
            {submitError && (
              <p
                className="text-[13px] leading-5 text-[#ffb5b5]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {submitError}
              </p>
            )}
            {submitSuccess && (
              <p
                className="text-[13px] leading-5 text-[#9bffbe]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Thanks! Your request has been received.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────────── */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    // Figma: Space Grotesk 400, 10px, line-height 15px,
    //        letter-spacing 1px, uppercase, color #FBF9F4
    <label
      className="block text-[10px] font-normal uppercase leading-[15px] tracking-[1px] text-[#FBF9F4]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {children}
    </label>
  );
}

function FormField({
  label,
  type,
  fullWidth,
  name,
  value,
  onChange,
}: {
  label: string;
  type: string;
  fullWidth?: boolean;
  name: keyof EarlyAccessFormData;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    // Figma: container gap 8px, h 71px
    <div className={`flex flex-col gap-2${fullWidth ? " col-span-2" : ""}`}>
      <FieldLabel>{label}</FieldLabel>
      {/* Input — Figma: h 48px, bg rgba(49,51,44,0.5), border-radius 10px */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-[48px] w-full rounded-[10px] px-3.5 text-[16px] text-[#FFF6F2] outline-none transition-colors"
        style={{
          background: "rgba(49,51,44,0.5)",
          fontFamily: "'Inter', sans-serif",
        }}
      />
    </div>
  );
}

function FormSelect({
  label,
  placeholder,
  options,
  name,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: string[];
  name: keyof EarlyAccessFormData;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    // Figma: container gap 8px
    <div className="flex flex-col gap-2">
      <FieldLabel>{label}</FieldLabel>
      {/* Options — Figma: h ~49px, bg rgba(49,51,44,0.5), border-radius 10px,
                           Inter 400, 16px, color #FFF6F2 */}
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="h-[48px] w-full appearance-none rounded-[10px] px-3.5 pr-10 text-[16px] text-[#FFF6F2] outline-none transition-colors"
          style={{
            background: "rgba(49,51,44,0.5)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} style={{ background: "#1A1208", color: "#FFF6F2" }}>
              {o}
            </option>
          ))}
        </select>
        {/* Figma: chevron SVG, border 1.8px solid #6B7280 */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="#6B7280"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}





// pure tailwind 
// "use client";

// const waveBars = [
//   { left: 0, height: 31, top: 45, bg: "#F9CBB5", opacity: 1, shadow: false },
//   { left: 16, height: 83, top: 26, bg: "#F26D4D", opacity: 1, shadow: false },
//   { left: 36, height: 109, top: 13, bg: "#F26D4D", opacity: 1, shadow: true },
//   { left: 52, height: 64, top: 36, bg: "#F9CBB5", opacity: 1, shadow: false },
//   { left: 68, height: 13, top: 61, bg: "#F9CBB5", opacity: 60, shadow: false },
//   { left: 84, height: 71, top: 32, bg: "#F26D4D", opacity: 1, shadow: false },
//   { left: 100, height: 135, top: 0, bg: "#F26D4D", opacity: 1, shadow: true },
// ] as const;

// export function HeroSection() {
//   return (
//     <section className="flex min-h-screen">

//       {/* LEFT */}
//       <div className="w-[673px] shrink-0 flex flex-col justify-center bg-[#F4EFE7] px-20 py-24">
//         <div className="flex flex-col gap-8 max-w-[513px]">

//           {/* Badge */}
//           <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E8E2D9] px-4 py-1.5 bg-[rgba(255,255,255,0.5)] shadow-sm backdrop-blur-[2px]">
//             <span className="h-2 w-2 rounded-full bg-[#10B981]" />
//             <span className="text-[12px] leading-5 text-[#93846D] font-mono">
//               Private beta — accepting applications
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-[72px] font-bold leading-[91px] tracking-[-1.92px] text-[#2D241E] font-space">
//             The Voice AI infra{" "}
//             <span className="text-[#E8410A]">enterprises</span>
//             <br />
//             <span className="text-[#E8410A]">actually</span> trust.
//           </h1>

//           {/* Subtext */}
//           <p className="text-[16px] font-medium leading-[29px] text-[#93846D] font-inter">
//             Sub-500ms latency. Bring your own LLM, TTS, and STT.
//           </p>

//           {/* Social */}
//           <div className="flex items-center gap-4 pt-4">
//             <div className="flex">
//               {["#A87878", "#7AA987", "#8899BB"].map((bg, i) => (
//                 <span
//                   key={i}
//                   className={`h-[42px] w-[42px] rounded-full border-2 border-[#F5F4ED] ${i !== 0 ? "-ml-3" : ""}`}
//                   style={{ backgroundColor: bg }}
//                 />
//               ))}
//               <span className="-ml-3 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#F5F4ED] bg-[#E2E3D9] text-[10px] font-bold text-[#5E6058]">
//                 +240
//               </span>
//             </div>

//             <span className="text-[22px] leading-[18px] tracking-[-0.3px] text-[#665E57]">
//               Join <strong>240+ teams</strong>
//             </span>
//           </div>

//           {/* Wave */}
//           <div className="relative w-[513px] h-[171px]">
//             <div className="absolute left-1/2 top-1/2 w-[392px] h-[135px] -translate-x-1/2 -translate-y-1/2">
//               {waveBars.map((bar, i) => (
//                 <span
//                   key={i}
//                   className={`absolute w-[6px] rounded-full`}
//                   style={{
//                     left: bar.left,
//                     top: bar.top,
//                     height: bar.height,
//                     backgroundColor: bar.bg,
//                     opacity: bar.opacity === 60 ? 0.6 : 1,
//                     boxShadow: bar.shadow
//                       ? "0 0 20px rgba(242,109,77,0.3)"
//                       : undefined,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="flex-1 flex flex-col justify-center bg-[#1A1208] px-20 py-24">
//         <div className="flex flex-col gap-4 max-w-[512px]">

//           <h2 className="text-[30px] tracking-[-1.8px] text-[#FBF9F4] font-space">
//             Request Early Access
//           </h2>

//           <p className="text-[14px] leading-[27px] text-[#FBF9F4] font-inter">
//             Join the waitlist.
//           </p>

//           <form className="flex flex-col gap-[27px]">

//             <div className="grid grid-cols-2 gap-8">
//               <FormField label="FIRST NAME" />
//               <FormField label="LAST NAME" />
//             </div>

//             <div className="grid grid-cols-2 gap-8">
//               <FormField label="EMAIL" />
//               <FormField label="PHONE" />
//             </div>

//             <FormField label="COMPANY" full />

//             <button className="w-full rounded-[41px] bg-[#E8410A] py-3 text-[12px] font-extrabold tracking-[1.2px] text-white hover:bg-[#c93709] active:scale-95">
//               REQUEST ACCESS
//             </button>

//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Components */

// function FormField({ label, full }: any) {
//   return (
//     <div className={`flex flex-col gap-2 ${full ? "col-span-2" : ""}`}>
//       <label className="text-[10px] uppercase tracking-[1px] text-[#FBF9F4]">
//         {label}
//       </label>
//       <input className="h-[48px] rounded-[10px] px-3.5 text-white bg-[rgba(49,51,44,0.5)] outline-none" />
//     </div>
//   );
// }