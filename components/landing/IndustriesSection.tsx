const industries = [
  {
    title: "Sales Outreach & SDR",
    description:
      "Automate cold calling and lead qualification. Our agents handle objections and book appointments directly in your calendar without skipping a beat.",
    iconBg: "#F0DFD6",
    iconColor: "#685C55",
    icon: (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8 9.83a16 16 0 0 0 6.17 6.17l1.38-1.34a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    title: "Healthcare & Scheduling",
    description:
      "HIPAA-compliant patient coordination. Seamlessly manage appointment bookings, follow-ups, and prescription reminders with empathetic vocal delivery.",
    iconBg: "#FE8B70",
    iconColor: "#742410",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M8 6h8l1 2h3v12H4V8h3l1-2Z" />
        <path d="M12 10v6M9 13h6" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    description:
      "Vet property leads in real-time. From initial inquiry to scheduling home tours, keep your pipeline moving while you focus on closing the deal.",
    iconBg: "#F9F3E6",
    iconColor: "#5F5C52",
    icon: (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "E-commerce Support",
    description:
      "Resolve order issues and track shipments via phone. Enhance customer loyalty with proactive outreach and personalized support at any scale.",
    iconBg: "#ECE0D8",
    iconColor: "#58504A",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 6h15l-1.2 6H8L6 3H3" />
        <circle cx="9" cy="19" r="1.7" />
        <circle cx="18" cy="19" r="1.7" />
      </svg>
    ),
  },
  {
    title: "Financial Services",
    description:
      "Secure and professional client communication. Handle mortgage inquiries, insurance claims, and portfolio updates with high-precision accuracy.",
    iconBg: "#FFEDE4",
    iconColor: "#5B5048",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 10h18M5 10v8h14v-8M12 6v12M7 14h2M15 14h2" />
        <path d="M4 10 12 4l8 6" />
      </svg>
    ),
  },
  {
    title: "Higher Education",
    description:
      "Streamline student admissions and enrollment. Conduct outreach to prospective students and answer common administrative questions instantly.",
    iconBg: "#E2E3D9",
    iconColor: "#5E6058",
    icon: (
      <svg className="h-[18px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M2 8 12 3l10 5-10 5L2 8Z" />
        <path d="M6 10.5V15c0 1 2.7 3 6 3s6-2 6-3v-4.5" />
      </svg>
    ),
  },
];

export function IndustriesSection() {
  return (
    <section className="w-full bg-[#F4EFE7] px-6 py-16 md:py-20 lg:px-10 lg:py-[31px]" id="industries">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-[39px]">
        <div className="flex flex-col gap-4">
          <p className="font-['IBM_Plex_Mono'] text-xs font-normal uppercase leading-4 tracking-[3.6px] text-[#E8410A]">
            USE CASES
          </p>
          <h2 className="heading-display max-w-[1216px] text-[#2D241E]">
            Built for Any Industry That Talks to Customers
          </h2>
          <p className="max-w-[650px] font-['Inter'] text-base font-medium leading-[29px] text-[#93846D] lg:text-lg">
            From sales outreach to patient scheduling - if it involves a phone call, LeapDev agents can handle it at scale.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[39px] grid w-full max-w-[1216px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {industries.map((item) => (
          <article
            className="flex min-h-[267px] flex-col gap-6 rounded-xl bg-white p-8 shadow-[0px_4px_24px_rgba(49,51,44,0.04)]"
            key={item.title}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-lg"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-['Space_Grotesk'] text-[20px] font-bold leading-7 text-[#31332C]">
                {item.title}
              </h3>
              <p className="font-['Inter'] text-sm font-normal leading-[23px] text-[#665E57]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
