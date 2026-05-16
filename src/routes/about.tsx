import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DriveX" },
      {
        name: "description",
        content:
          "DriveX is rebuilding India's used-car market with AI, transparency and premium service.",
      },
    ],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3">
        Rebuilding the used-car market for the modern buyer.
      </h1>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        DriveX is on a mission to make buying and selling pre-owned cars in India transparent, fast
        and joyful. We combine cutting-edge AI with a human-first experience and a network of
        12,000+ verified dealers across 200+ cities.
      </p>
      <div className="mt-12 grid sm:grid-cols-3 gap-5">
        {[
          ["1M+", "Customers"],
          ["50K+", "Cars listed"],
          ["₹4,800Cr", "GMV in 2025"],
        ].map(([v, l]) => (
          <div key={l} className="gradient-card glass rounded-2xl p-6 text-center">
            <p className="font-display text-3xl font-bold text-gradient-primary">{v}</p>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{l}</p>
          </div>
        ))}
      </div>
    </div>
  ),
});
