import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, MapPin, Star, Phone, Car as CarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dealers")({
  head: () => ({ meta: [{ title: "Verified dealers — DriveX" }] }),
  component: Dealers,
});

const dealers = [
  { name: "Royal Auto Mart", city: "Mumbai", inv: 142, rating: 4.9 },
  { name: "Premier Pre-Owned", city: "Delhi NCR", inv: 98, rating: 4.8 },
  { name: "Drive Luxury", city: "Bengaluru", inv: 67, rating: 4.9 },
  { name: "Heritage Motors", city: "Pune", inv: 54, rating: 4.7 },
  { name: "Elite Auto Hub", city: "Hyderabad", inv: 121, rating: 4.8 },
  { name: "Sundaram Cars", city: "Chennai", inv: 88, rating: 4.6 },
];

function Dealers() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
          Trusted network
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold mt-2">
          12,000+ verified dealers
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Browse certified pre-owned dealers across 200+ Indian cities. Background-checked and rated
          by real buyers.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {dealers.map((d, i) => (
          <div key={i} className="gradient-card glass rounded-2xl p-6 hover-lift">
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center font-display text-xl font-bold text-primary-foreground shadow-glow">
                {d.name[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-semibold text-lg">{d.name}</h3>
                  <BadgeCheck className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {d.city}
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="glass rounded-lg p-2">
                <p className="font-display text-base font-bold text-foreground">{d.inv}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">
                  Cars
                </p>
              </div>
              <div className="glass rounded-lg p-2 flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-warning text-warning" />
                  <span className="font-bold text-base">{d.rating}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">
                  Rating
                </p>
              </div>
              <div className="glass rounded-lg p-2">
                <p className="font-display text-base font-bold text-success">98%</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">
                  Reply
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link to="/buy">
                <Button variant="outline" className="w-full rounded-lg" size="sm">
                  <CarIcon className="w-4 h-4 mr-2" />
                  Inventory
                </Button>
              </Link>
              <Button
                className="w-full rounded-lg gradient-primary text-primary-foreground"
                size="sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
