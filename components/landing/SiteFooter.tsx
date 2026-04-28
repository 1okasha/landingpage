export function SiteFooter() {
  return (
    <footer className="w-full bg-[#1A1208] px-6 py-10 lg:px-8 lg:py-[22px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[51px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <div className="flex max-w-[320px] flex-col gap-[23px] pt-1">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8410A]" />
              <span className="font-['Inter'] text-3xl font-normal italic leading-8 tracking-[-1.2px] text-[#FBF9F4]">
                LeapDev
              </span>
            </div>
            <p className="max-w-[268px] font-['Inter'] text-sm font-normal leading-[23px] text-[#FBF9F4]">
              The only AI voice agent platform where you control every minute, every key, and every workflow.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-[85px]">
            <div className="flex flex-col gap-6 text-[#FBF9F4]">
              <p className="font-['Inter'] text-xs font-bold uppercase leading-4 tracking-[1.2px] text-[#FBF9F4]">Product</p>
              <nav className="flex flex-col gap-4">
                <a className="font-['Inter'] text-sm font-normal leading-5 text-inherit visited:text-inherit" href="#hero">
                  BYOK Overview
                </a>
                <a className="font-['Inter'] text-sm font-normal leading-5 text-inherit visited:text-inherit" href="#pricing">
                  Pricing
                </a>
                <a className="font-['Inter'] text-sm font-normal leading-5 text-inherit visited:text-inherit" href="#how-it-works">
                  How It Works
                </a>
                <a className="font-['Inter'] text-sm font-normal leading-5 text-inherit visited:text-inherit" href="#features">
                  Features
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-['Inter'] text-xs font-bold uppercase leading-4 tracking-[1.2px] text-[#FBF9F4]">Get in Touch</p>
              <div className="flex flex-col gap-4">
                <p className="font-['Inter'] text-sm font-normal leading-5 text-[#FBF9F4]">Phone: (+1) 786 9520-251</p>
                <p className="font-['Inter'] text-sm font-normal leading-5 text-[#FBF9F4]">WhatsApp: (+92) 327-1080-439</p>
                <p className="font-['Inter'] text-sm font-normal leading-5 text-[#FBF9F4]">Email: Contact@leapsdev.com</p>
                <p className="font-['Inter'] text-sm font-normal leading-5 text-[#FBF9F4]">4CCX+FW, Railway Rd, Kasur, 55050</p>
                <p className="font-['Inter'] text-sm font-normal leading-5 text-[#FBF9F4]">Miami, Florida(FL), 33162, United Stats</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-['Plus_Jakarta_Sans'] text-sm font-normal leading-5 text-[#FBF9F4]">© 2026 LeapDev. All rights reserved.</span>

          <div className="flex items-center gap-4">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(251,249,244,0.05)] text-[#FBF9F4]"
              href="#"
              aria-label="Share"
            >
              <svg viewBox="0 0 24 24" className="h-[17px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M14 5h5v5" />
                <path d="M10 14 19 5" />
                <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
              </svg>
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(251,249,244,0.05)] text-[#FBF9F4]"
              href="#"
              aria-label="Social"
            >
              <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" />
                <circle cx="8.5" cy="8.5" r="2.5" />
                <circle cx="15.5" cy="8.5" r="2.5" />
                <circle cx="8.5" cy="15.5" r="2.5" />
                <circle cx="15.5" cy="15.5" r="2.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
