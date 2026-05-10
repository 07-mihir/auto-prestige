import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing & plans — DriveX" }] }),
  component: Pricing,
});

const plans = [
  { name: "Starter", price: "Free", desc: "For individual sellers", icon: Zap, features: ["1 active listing", "AI valuation", "Email support", "Standard placement"], cta: "Get started" },
  { name: "Pro Dealer", price: "₹4,999", per: "/mo", desc: "For growing garages", icon: Star, features: ["Unlimited listings", "Featured placements (5)", "Lead inbox", "Analytics dashboard", "Priority support"], cta: "Start 14-day trial", popular: true },
  { name: "Enterprise", price: "Custom", desc: "For large dealer networks", icon: Crown, features: ["Bulk uploads & API", "Dedicated CSM", "Custom integrations", "Multi-staff accounts", "White-glove onboarding"], cta: "Talk to sales" },
];

function Pricing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Plans</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3">Pricing for every seller.</h1>
        <p className="mt-4 text-muted-foreground">Free to list. Upgrade when you're ready to grow your inventory.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div key={p.name} className={`relative gradient-card glass rounded-2xl p-7 ${p.popular ? "border-primary/40 shadow-glow" : ""}`}>
            {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold gradient-primary text-primary-foreground uppercase tracking-wider">Most popular</span>}
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center"><p.icon className="w-5 h-5 text-primary-foreground" /></div>
            <h3 className="font-display text-xl font-bold mt-4">{p.name}</h3>
            <p className="text-xs text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-gradient">{p.price}</span>
              {p.per && <span className="text-sm text-muted-foreground">{p.per}</span>}
            </div>
            <ul className="mt-5 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm"><Check className="w-4 h-4 text-success shrink-0 mt-0.5" /><span>{f}</span></li>
              ))}
            </ul>
            <Button className={`w-full mt-6 rounded-lg ${p.popular ? "gradient-primary text-primary-foreground shadow-glow" : ""}`} variant={p.popular ? "default" : "outline"}>{p.cta}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
