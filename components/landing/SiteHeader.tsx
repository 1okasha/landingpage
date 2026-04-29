import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4EFE7]/95 backdrop-blur-[6px]">
      <div className="mx-auto flex h-[58px] w-full max-w-[1345px] items-center justify-between px-6 lg:px-8">
        <a className="flex shrink-0 items-center" href="#hero" aria-label="Home">
          <Image
            src="/logo1.svg"
            alt=""
            width={101}
            height={49}
            className="h-[49px] w-[101px]"
            priority
          />
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
          className="inline-flex h-11 items-center justify-center rounded-[10px] bg-[#2D241E] px-6 font-['Inter'] text-sm font-medium leading-5 text-[#FFFFFF]"
          style={{ color: "#FFFFFF" }}
          href="#pricing"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
