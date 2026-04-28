export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4EFE7]/95 backdrop-blur-[6px]">
      <div className="mx-auto flex h-[58px] w-full max-w-[1345px] items-center justify-between px-6 lg:px-8">
        <a
          className="font-['Inter'] text-2xl font-black uppercase leading-8 tracking-[2.4px] text-[#2D241E]"
          href="#hero"
        >
          LEAPS DEV
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          <a className="font-['Inter'] text-lg font-medium leading-[29px] text-[#93846D]" href="#hero">
            BYOK
          </a>
          <a className="font-['Inter'] text-lg font-medium leading-[29px] text-[#93846D]" href="#how-it-works">
            How It Works
          </a>
          <a className="font-['Inter'] text-lg font-medium leading-[29px] text-[#93846D]" href="#pricing">
            Pricing
          </a>
          <a className="font-['Inter'] text-lg font-medium leading-[29px] text-[#93846D]" href="#industries">
            Use Cases
          </a>
          <a className="font-['Inter'] text-lg font-medium leading-[29px] text-[#93846D]" href="#faq">
            FAQ
          </a>
        </nav>

        <a
          className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#2D241E] px-6 font-['Inter'] text-sm font-medium leading-5 text-white"
          href="#pricing"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}
