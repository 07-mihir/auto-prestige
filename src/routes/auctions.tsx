import { createFileRoute } from "@tanstack/react-router";
import { Gavel, Clock, TrendingUp } from "lucide-react";
import { cars, formatPrice } from "@/lib/cars-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/auctions")({
  head: () => ({ meta: [{ title: "Live auctions — DriveX" }] }),
  component: Auctions,
});

function Auctions() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="relative overflow-hidden rounded-3xl gradient-card glass-strong p-8 sm:p-12 mb-10">
        <div
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
            <Gavel className="w-3.5 h-3.5" /> Live now
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
            Bid on rare & luxury cars.
          </h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Verified dealer auctions running 24/7. From vintage classics to modern supercars — bid
            in real time.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cars.slice(0, 6).map((c, i) => (
          <div key={c.id} className="gradient-card glass rounded-2xl overflow-hidden hover-lift">
            <div className="relative aspect-[16/10]">
              <img src={c.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-destructive text-destructive-foreground uppercase tracking-wide animate-glow-pulse">
                LIVE
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md glass-strong text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {["02:14:33", "00:45:12", "12:08:55", "04:21:09", "00:12:01", "06:55:30"][i]}
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.brand}</p>
              <h3 className="font-display font-semibold text-lg">{c.model}</h3>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                    Current bid
                  </p>
                  <p className="font-display text-2xl font-bold text-gradient">
                    {formatPrice(Math.round(c.price * 0.78))}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1 justify-end">
                    <TrendingUp className="w-3 h-3" />
                    {12 + i * 4} bids
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Reserve {formatPrice(c.price)}
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4 rounded-lg gradient-primary text-primary-foreground shadow-glow">
                Place bid
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
