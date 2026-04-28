import Image from "next/image";

const industries = [
  {
    title: "Sales Outreach & SDR",
    description:
      "Automate cold calling and lead qualification. Our agents handle objections and book appointments directly in your calendar without skipping a beat.",
    iconBg: "#F0DFD6",
    icon: <Image src="/phone icon.svg" alt="Sales Outreach & SDR icon" width={18} height={18} />,
  },
  {
    title: "Healthcare & Scheduling",
    description:
      "HIPAA-compliant patient coordination. Seamlessly manage appointment bookings, follow-ups, and prescription reminders with empathetic vocal delivery.",
    iconBg: "#FE8B70",
    icon: <Image src="/healthcare bag icon.svg" alt="Healthcare & Scheduling icon" width={20} height={20} />,
  },
  {
    title: "Real Estate",
    description:
      "Vet property leads in real-time. From initial inquiry to scheduling home tours, keep your pipeline moving while you focus on closing the deal.",
    iconBg: "#F9F3E6",
    icon: <Image src="/realstate building icon.svg" alt="Real Estate icon" width={18} height={18} />,
  },
  {
    title: "E-commerce Support" ,
    description:
      "Resolve order issues and track shipments via phone. Enhance customer loyalty with proactive outreach and personalized support at any scale.",
    iconBg: "#ECE0D8",
    icon: <Image src="/ecomerce basket icon.svg" alt="E-commerce Support icon" width={20} height={20} />,
  },
  {
    title: "Financial Services",
    description:
      "Secure and professional client communication. Handle mortgage inquiries, insurance claims, and portfolio updates with high-precision accuracy.",
    iconBg: "#FFEDE4",
    icon: <Image src="/financial service icon.svg" alt="Financial Services icon" width={20} height={20} />,
  },
  {
    title: "Higher Education",
    description:
      "Streamline student admissions and enrollment. Conduct outreach to prospective students and answer common administrative questions instantly.",
    iconBg: "#E2E3D9",
    icon: <Image src="/higher education degree icon.svg" alt="Higher Education icon" width={22} height={18} />,
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
              className="flex h-12 w-12 items-center justify-center rounded-[12px]"
              style={{ backgroundColor: item.iconBg }}
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
