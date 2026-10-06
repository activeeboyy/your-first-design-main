import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is this class really 100% free?',
    answer:
      'Yes, it is completely free. The class takes place on 18th October 2026 at 8:00 PM WAT.',
  },
  {
    question: 'Do I need previous Photoshop experience?',
    answer:
      'Not at all. This class is designed specifically for complete beginners who have never touched Photoshop before. Franklin will guide you step by step.',
  },
  {
    question: 'What if I don’t have Photoshop installed yet?',
    answer:
      'Don’t worry! That is covered in Step 02 of the class. Franklin will walk you through how to get Adobe Photoshop set up properly so you can follow along.',
  },
  {
    question: 'Where will the class take place?',
    answer:
      'The class takes place live on WhatsApp inside our private group. You’ll receive updates, links, and direct guidance inside the group.',
  },
  {
    question: 'What time does the class start?',
    answer:
      'The class starts at 8:00 PM West Africa Time (WAT) on Sunday, 18th October 2026. Make sure to join the WhatsApp group ahead of time so you are ready when we start.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-[#090A0F] text-[#F3F4F6] relative border-t border-white/5 overflow-hidden w-full max-w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight break-words">
            GOT QUESTIONS? 🤔
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Everything you need to know about YOUR FIRST DESIGN free WhatsApp class.
          </p>
        </div>

        <div className="space-y-3.5 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#121422] border border-white/5 hover:border-orange-500/30 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#181a2c] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-400' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
