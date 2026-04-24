"use client";

import { useState } from "react";

const faqItems = [
  {
    question: 'What does "BYOK" mean exactly?',
    answer:
      "BYOK means Bring Your Own Key. You connect your own providers for STT, TTS, LLM, storage, and SIP while keeping pricing transparent.",
  },
  {
    question: "Is my data safe? Can Opsode access my call recordings?",
    answer:
      "Recordings and transcripts can go directly to your own storage bucket, while API keys are stored in an encrypted vault.",
  },
  {
    question: "Can I switch providers mid-deployment?",
    answer:
      "Yes. Switching providers is a configuration change. Active calls finish normally, and new calls use updated providers.",
  },
  {
    question: "What SIP providers are supported?",
    answer:
      "Any SIP trunk that supports standard SIP/RTP. Common options include Twilio, Telnyx, Vonage, and others.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="section-title">
        <div>
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Got Questions</h2>
        </div>
        <p className="subtle">Quick answers to common questions about setup, reliability, and control.</p>
      </div>

      <div className="faq">
        {faqItems.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <article className="faq-item" key={item.question} data-open={isOpen}>
              <button
                className="faq-btn"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div>
                  <strong>{item.question}</strong>
                </div>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>

              <div className="faq-content" style={{ maxHeight: isOpen ? "180px" : "0px" }}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
