import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — DriveX" }] }),
  component: FAQ,
});

const faqs = [
  [
    "How does DriveX verify cars?",
    "Every certified car undergoes a 200-point inspection by our trained engineers covering engine, body, interiors, electricals and paperwork.",
  ],
  [
    "Can I sell my car for free?",
    "Yes. Listing is 100% free. We charge a small success fee only when your car is sold through us.",
  ],
  [
    "Do you offer financing?",
    "Yes — instant loan offers from 12+ partner banks at rates from 8.49%, with approvals in under 60 seconds.",
  ],
  [
    "What's the 7-day money-back guarantee?",
    "If you're not satisfied within 7 days of delivery, return the car for a full refund (T&C apply).",
  ],
  [
    "How do dealer subscriptions work?",
    "Pro Dealer plans start at ₹4,999/mo with unlimited listings, featured placements and a lead inbox. Cancel anytime.",
  ],
  [
    "Is my data secure?",
    "We're ISO 27001 certified. All transactions are encrypted and personal data is never sold to third parties.",
  ],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Help</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3">
        Frequently asked questions
      </h1>
      <div className="mt-10 space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={i} className="gradient-card glass rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-5 flex items-center justify-between gap-4 text-left"
            >
              <span className="font-display font-semibold">{q}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform shrink-0 ${open === i ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-up">{a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
