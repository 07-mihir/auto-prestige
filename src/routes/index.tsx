import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Sparkles,
  ShieldCheck,
  Car as CarIcon,
  CarFront,
  CarTaxiFront,
  Truck,
  Gem,
  TrendingUp,
  Bot,
  MapPin,
  ArrowRight,
  Gavel,
  Calculator,
  BadgeCheck,
  Star,
  Zap,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { cars, brands } from "@/lib/cars-data";
import { CarCard } from "@/components/site/car-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DriveX — India's premium AI-powered used car marketplace" },
      {
        name: "description",
        content:
          "Discover certified pre-owned luxury & everyday cars. AI pricing, instant EMI, verified dealers, live auctions.",
      },
    ],
  }),
  component: Home,
});

const bodyTypes = [
  { name: "SUV", count: 1240, Icon: Truck },
  { name: "Sedan", count: 980, Icon: CarFront },
  { name: "Hatchback", count: 1560, Icon: CarIcon },
  { name: "Coupe", count: 230, Icon: CarTaxiFront },
  { name: "Electric", count: 410, Icon: Zap },
  { name: "Luxury", count: 320, Icon: Gem },
];

const brandLogos: Record<string, string> = {
  BMW: "https://www.carlogos.org/car-logos/bmw-logo.png",
  "Mercedes-Benz": "https://www.carlogos.org/car-logos/mercedes-benz-logo.png",
  Audi: "https://www.carlogos.org/car-logos/audi-logo.png",
  Porsche: "https://www.carlogos.org/car-logos/porsche-logo.png",
  Volkswagen: "https://www.carlogos.org/car-logos/volkswagen-logo.png",
  Hyundai: "https://www.carlogos.org/car-logos/hyundai-logo.png",
  Toyota: "https://www.carlogos.org/car-logos/toyota-logo.png",
  Honda: "https://www.carlogos.org/car-logos/honda-logo.png",
  "Land Rover": "https://www.carlogos.org/car-logos/land-rover-logo.png",
  Tata: "https://www.carlogos.org/car-logos/tata-logo.png",
};

const stats = [
  { v: "50K+", l: "Verified cars" },
  { v: "12K+", l: "Trusted dealers" },
  { v: "200+", l: "Cities covered" },
  { v: "4.9★", l: "Customer rating" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "var(--gradient-glow)" }}
        />

        <div className="container mx-auto px-4 relative pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
                <Sparkles className="w-3.5 h-3.5" /> AI-powered pricing & recommendations
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Find your <span className="text-gradient-primary">dream car</span>
                <br />
                without compromise.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
                India's most premium marketplace for certified pre-owned cars. From everyday
                hatchbacks to luxury coupes — verified, financed and delivered.
              </p>

              {/* Search */}
              <div className="mt-8 glass-strong rounded-2xl p-2 sm:p-3 shadow-elegant">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-2">
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50">
                    <CarIcon className="w-4 h-4 text-muted-foreground shrink-0" />
                    <input
                      className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground"
                      placeholder="Brand, model or keyword"
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary/50">
                    <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                    <input
                      className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground"
                      placeholder="City or pincode"
                    />
                  </div>
                  <Link to="/buy">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto rounded-xl gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-full px-6"
                    >
                      <Search className="w-4 h-4 mr-2" /> Search
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 px-2">
                  <span className="text-xs text-muted-foreground">Popular:</span>
                  {["Under ₹5L", "Automatic", "Electric", "SUV", "Low km"].map((t) => (
                    <button
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                      {s.v}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl opacity-60 animate-glow-pulse" />
              <img
                src={heroCar}
                alt="Premium used luxury car on display"
                width={1920}
                height={1080}
                className="relative w-full animate-floaty drop-shadow-2xl"
              />

              <div
                className="absolute top-6 left-2 sm:left-6 glass-strong rounded-xl p-3 shadow-card animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                    <BadgeCheck className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Verified
                    </p>
                    <p className="text-xs font-semibold">200-pt inspection</p>
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-10 right-2 sm:right-6 glass-strong rounded-xl p-3 shadow-card animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      AI estimate
                    </p>
                    <p className="text-xs font-semibold">₹48.5L · fair price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Top brands
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Browse by manufacturer
            </h2>
          </div>
          <Link
            to="/buy"
            className="hidden sm:inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {brands.map((b) => {
            const url = brandLogos[b];
            return (
              <Link
                key={b}
                to="/buy"
                className="aspect-square glass rounded-xl flex flex-col items-center justify-center p-3 hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform p-2">
                  <img
                    src={url}
                    alt={`${b} logo`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <span className="text-[11px] text-center font-medium truncate w-full">{b}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BODY TYPES */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Categories
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Shop by body type
            </h2>
          </div>
          <Link
            to="/buy"
            className="hidden sm:inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            See all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {bodyTypes.map((b) => (
            <Link
              key={b.name}
              to="/buy"
              className="gradient-card glass rounded-xl p-5 hover-lift group"
            >
              <b.Icon className="w-7 h-7 text-primary mb-3" />
              <p className="font-display font-semibold">{b.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{b.count.toLocaleString()} cars</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Hand-picked
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Featured cars this week
            </h2>
          </div>
          <Link
            to="/buy"
            className="hidden sm:inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            Browse all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cars.slice(0, 6).map((c) => (
            <CarCard key={c.id} car={c} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/buy">
            <Button variant="outline" className="rounded-lg">
              Browse all cars
            </Button>
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS / VALUE PROPS */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Why DriveX
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">
            Built for the modern driver.
          </h2>
          <p className="mt-4 text-muted-foreground">
            An end-to-end experience powered by AI, real human inspections and the country's best
            dealer network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: "200-point inspection",
              desc: "Every certified car is inspected on engine, body, electricals, interiors and paperwork before listing.",
            },
            {
              icon: Bot,
              title: "AI fair-price engine",
              desc: "Get an instant price estimate on any model based on year, km, condition and live market data.",
            },
            {
              icon: Calculator,
              title: "Instant EMI & loans",
              desc: "Pre-approved loans from 12+ partner banks with rates from 8.49%. Apply in 60 seconds.",
            },
            {
              icon: Gavel,
              title: "Live dealer auctions",
              desc: "Bid on rare, vintage and luxury cars from verified sellers across India in real time.",
            },
            {
              icon: TrendingUp,
              title: "Sell at the best price",
              desc: "List free, get up to 8 offers from verified dealers within 24 hours of submitting.",
            },
            {
              icon: Zap,
              title: "Doorstep delivery",
              desc: "Free pickup, RC transfer assistance and 7-day money-back guarantee on every purchase.",
            },
          ].map((f, i) => (
            <div key={i} className="gradient-card glass rounded-2xl p-6 hover-lift">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mt-5">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELL CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl gradient-card glass-strong p-8 sm:p-14">
          <div
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Sell your car
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">
                The smarter way to sell — get the best price in 24 hours.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Free listing. AI valuation. Up to 8 instant offers from verified dealers. Pickup and
                paperwork handled by us.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/sell">
                  <Button
                    size="lg"
                    className="rounded-xl gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
                  >
                    Get free valuation
                  </Button>
                </Link>
                <Link to="/buy">
                  <Button size="lg" variant="outline" className="rounded-xl">
                    Browse cars
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "60s", l: "Free quote" },
                { v: "8x", l: "Avg offers" },
                { v: "₹0", l: "Listing fee" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4 text-center">
                  <p className="font-display text-2xl font-bold text-gradient-primary">{s.v}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-5">
          {[
            {
              name: "Aarav Sharma",
              role: "Bought BMW 5 Series",
              text: "The inspection report was incredibly detailed. Got my dream car at 12% below dealer price.",
            },
            {
              name: "Priya Nair",
              role: "Sold Honda City",
              text: "Listed in 60 seconds, sold in 18 hours. The AI valuation was spot on. Hassle-free!",
            },
            {
              name: "Royal Auto Garage",
              role: "Verified dealer",
              text: "DriveX brings serious buyers. Our inventory turnover improved 3x in the first quarter.",
            },
          ].map((t, i) => (
            <div key={i} className="gradient-card glass rounded-2xl p-6">
              <div className="flex gap-0.5 text-warning">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
