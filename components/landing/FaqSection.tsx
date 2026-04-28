 'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: 'What does "BYOK" mean exactly?',
    answer:
      "BYOK stands for Bring Your Own Key. Instead of using Opsode's pre-negotiated accounts with voice AI vendors, you connect your own API keys for each provider - STT (e.g. Deepgram), TTS (e.g. ElevenLabs), LLM (e.g. OpenAI), storage (e.g. S3), and SIP trunking. Your usage bills go directly from those vendors to you, at your rates. We only charge a flat platform fee for the orchestration layer.",
  },
  {
    question: "Is my data safe? Can Opsode access my call recordings?",
    answer:
      "Because recordings and transcripts go directly to your own storage bucket, Opsode never has access to them. Your API keys are stored in an encrypted secrets vault and are never logged or included in error reports. We process the real-time audio in-memory for orchestration but do not retain it after the call ends.",
  },
  {
    question: "Can I switch providers mid-deployment?",
    answer:
      "Yes. Swapping any BYOK component (e.g. changing from Deepgram to AssemblyAI for STT) is a configuration change that takes effect within seconds. Existing calls in progress complete normally; new calls pick up the updated provider instantly. No redeployment required.",
  },
  {
    question: "How does Opsode compare to Retell AI or Vapi on cost?",
    answer:
      "Retell and Vapi both charge a per-minute platform fee on top of the API costs they pass through (at a markup). With Opsode, pricing is also per minute, but the platform layer stays separate from your vendor invoices - so your costs stay transparent and predictable as volume grows.",
  },
  {
    question: "What SIP providers are supported?",
    answer:
      "Any SIP trunk that supports standard SIP/RTP. We've tested and documented integrations with Twilio (SIP), Telnyx, Vonage, Bandwidth, SignalWire, and several regional carriers. If you have an existing SIP contract, we'll help you connect it during onboarding.",
  },
  {
    question: "Do you support outbound calling?",
    answer:
      "Yes. Opsode supports both inbound (agents answer calls to your DID) and outbound (agents initiate calls to a list or on-demand via API). Outbound campaigns can be scheduled, throttled, and combined with CRM webhooks for real-time lead status updates.",
  },
  {
    question: "What's included in the 99.9% uptime SLA?",
    answer:
      "The SLA covers the Opsode orchestration platform - WebSocket gateway, call routing, webhook delivery, and the control plane. It does not cover third-party providers you've connected (e.g. Deepgram downtime), since those are your own accounts.",
  },
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#F4EFE7] px-6 py-10 md:py-12 lg:px-10 lg:py-[42px]" id="faq">
      <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-[58px]">
        <header className="flex flex-col gap-4">
          <p className="font-['IBM_Plex_Mono'] text-xs font-normal uppercase leading-4 tracking-[3.6px] text-[#E8410A]">
            Frequently Asked
          </p>
          <h2 className="heading-display text-[#2D241E]">
            Got Questions
          </h2>
        </header>

        <div className="flex flex-col">
          {faqItems.map((item, index) => (
            <article className="border-b border-[rgba(177,179,169,0.5)]" key={item.question}>
              <button
                className="flex w-full items-center justify-between gap-6 py-8 text-left"
                type="button"
                aria-expanded={openItem === index}
                aria-label={openItem === index ? `Hide answer for: ${item.question}` : `Show answer for: ${item.question}`}
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-['Inter'] text-[20px] font-normal leading-7 text-[#31332C]">{item.question}</h3>
                <span className="shrink-0 font-['Inter'] text-[26px] font-normal leading-none text-[#31332C]" aria-hidden="true">
                  {openItem === index ? '-' : '+'}
                </span>
              </button>
              {openItem === index ? (
                <p className="pb-8 font-['Inter'] text-sm font-normal leading-[23px] text-[#665E57]">{item.answer}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
