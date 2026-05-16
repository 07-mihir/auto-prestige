import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { cars, formatPrice } from "@/lib/cars-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/compare")({
  head: () => ({ meta: [{ title: "Compare cars — DriveX" }] }),
  component: Compare,
});

function Compare() {
  const [selected, setSelected] = useState<string[]>(["1", "2", "5"]);
  const items = selected.map((id) => cars.find((c) => c.id === id)!).filter(Boolean);
  const slots = [0, 1, 2, 3].map((i) => items[i] ?? null);

  const rows: { l: string; key: keyof (typeof cars)[0] | ((c: (typeof cars)[0]) => string) }[] = [
    { l: "Price", key: (c) => formatPrice(c.price) },
    { l: "Year", key: "year" },
    { l: "KM driven", key: (c) => `${c.km.toLocaleString()} km` },
    { l: "Fuel", key: "fuel" },
    { l: "Transmission", key: "transmission" },
    { l: "Body type", key: "bodyType" },
    { l: "Owners", key: (c) => `${c.owners}st` },
    { l: "City", key: "city" },
    { l: "Color", key: "color" },
    { l: "EMI/mo", key: (c) => `₹${(c.emi / 1000).toFixed(0)}k` },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center max-w-xl mx-auto mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
          Side-by-side
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">
          Compare your shortlisted cars
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Add up to 4 cars and see specs, price and features at a glance.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[820px]">
          <div className="grid grid-cols-[160px_repeat(4,minmax(0,1fr))] gap-4 mb-6">
            <div />
            {slots.map((c, i) =>
              c ? (
                <div key={i} className="gradient-card glass rounded-2xl p-3 relative">
                  <button
                    onClick={() => setSelected(selected.filter((id) => id !== c.id))}
                    className="absolute top-2 right-2 w-7 h-7 rounded-md glass-strong flex items-center justify-center hover:text-destructive"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <img
                    src={c.image}
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                    alt=""
                  />
                  <p className="mt-2 font-semibold text-sm truncate">
                    {c.brand} {c.model}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{c.variant}</p>
                </div>
              ) : (
                <div
                  key={i}
                  className="rounded-2xl border-2 border-dashed border-border min-h-[200px] flex flex-col items-center justify-center hover:border-primary/40 hover:bg-primary/5 cursor-pointer transition"
                >
                  <Plus className="w-6 h-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground mt-1">Add car</span>
                </div>
              ),
            )}
          </div>

          <div className="gradient-card glass rounded-2xl overflow-hidden">
            {rows.map((r, idx) => (
              <div
                key={r.l}
                className={`grid grid-cols-[160px_repeat(4,minmax(0,1fr))] gap-4 px-4 py-3 text-sm ${idx < rows.length - 1 ? "border-b border-border/40" : ""}`}
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold self-center">
                  {r.l}
                </div>
                {slots.map((c, i) => (
                  <div key={i} className="font-medium self-center">
                    {c ? (
                      typeof r.key === "function" ? (
                        r.key(c)
                      ) : (
                        (c[r.key as keyof typeof c] as string | number)
                      )
                    ) : (
                      <span className="text-muted-foreground/50">—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button className="rounded-lg gradient-primary text-primary-foreground shadow-glow">
          Get AI buying recommendation
        </Button>
      </div>
    </div>
  );
}
