import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Calendar,
  Calculator,
  Car as CarIcon,
  Download,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  Settings2,
  Star,
  Users,
} from "lucide-react";
import { cars, formatPrice } from "@/lib/cars-data";
import { CarCard } from "@/components/site/car-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/car/$id")({
  loader: ({ params }) => {
    const car = cars.find((c) => c.id === params.id);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.car.year} ${loaderData.car.brand} ${loaderData.car.model} — DriveX`,
          },
          {
            name: "description",
            content: `${loaderData.car.variant} · ${loaderData.car.km.toLocaleString()} km · ${loaderData.car.fuel} · ${loaderData.car.city}. Certified pre-owned at ${formatPrice(loaderData.car.price)}.`,
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Car not found</h1>
      <Link to="/buy">
        <Button className="mt-6 rounded-lg gradient-primary text-primary-foreground">
          Browse cars
        </Button>
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CarDetails,
});

function CarDetails() {
  const { car } = Route.useLoaderData();
  const [tenure, setTenure] = useState(60);
  const [downPayment, setDownPayment] = useState(Math.round(car.price * 0.2));
  const rate = 0.0099; // ~8.49% annual / 12 (approx)
  const principal = car.price - downPayment;
  const emi = Math.round(
    (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1),
  );

  const similar = cars.filter((c) => c.id !== car.id && c.bodyType === car.bodyType).slice(0, 3);

  const specs = [
    { icon: Calendar, l: "Year", v: car.year },
    { icon: Gauge, l: "KM driven", v: `${car.km.toLocaleString()} km` },
    { icon: Fuel, l: "Fuel", v: car.fuel },
    { icon: Settings2, l: "Transmission", v: car.transmission },
    { icon: Users, l: "Owners", v: `${car.owners}st owner` },
    { icon: MapPin, l: "Location", v: car.city },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <Link
        to="/buy"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to listings
      </Link>

      <div className="grid lg:grid-cols-[1fr_380px] gap-6">
        <div>
          {/* Gallery */}
          <div className="relative gradient-card glass rounded-2xl overflow-hidden">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {car.badge && (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold gradient-primary text-primary-foreground uppercase tracking-wide">
                  {car.badge}
                </span>
              )}
              {car.verified && (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-success/90 text-success-foreground uppercase tracking-wide flex items-center gap-1">
                  <BadgeCheck className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="w-10 h-10 rounded-lg glass-strong flex items-center justify-center hover:text-primary">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-lg glass-strong flex items-center justify-center hover:text-primary">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {[car.image, car.image, car.image, car.image].map((src, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg overflow-hidden glass cursor-pointer hover:border-primary/40"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>

          {/* Title */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-wider text-primary font-semibold">
              {car.brand}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mt-1">
              {car.year} {car.model}
            </h1>
            <p className="text-muted-foreground mt-1">
              {car.variant} · {car.color}
            </p>
            <div className="mt-3 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="font-semibold">{car.rating}</span>
              </div>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{car.seller}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {car.city}
              </span>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {specs.map((s) => (
              <div key={s.l} className="glass rounded-xl p-4">
                <s.icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
                <p className="text-sm font-semibold mt-0.5">{s.v}</p>
              </div>
            ))}
          </div>

          {/* Inspection report */}
          <div className="mt-8 gradient-card glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold">200-point inspection report</h2>
                <p className="text-xs text-muted-foreground">
                  Verified by DriveX certified inspectors
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Engine & transmission", "Excellent"],
                ["Exterior & paint", "Very Good"],
                ["Interior & upholstery", "Excellent"],
                ["Tyres (avg life)", "85%"],
                ["Service history", "Available"],
                ["Accidental history", "Non-accidental"],
                ["RC verification", "Verified"],
                ["Insurance valid till", "Mar 2027"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{k}</span>
                  <span className="text-sm font-medium text-success">{v}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-5 rounded-lg w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download full report (PDF)
            </Button>
          </div>

          {/* Similar */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold mb-5">Similar cars</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similar.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </div>
        </div>

        {/* Sticky sidebar */}
        <aside>
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="gradient-card glass-strong rounded-2xl p-6 shadow-elegant">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Price</p>
              <p className="font-display text-4xl font-bold text-gradient mt-1">
                {formatPrice(car.price)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                EMI from ₹{(car.emi / 1000).toFixed(0)}k/mo · 0% processing fee
              </p>

              <div className="mt-5 space-y-2">
                <Button
                  className="w-full rounded-lg gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
                  size="lg"
                >
                  Book test drive
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="rounded-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="rounded-lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat
                  </Button>
                </div>
                <Button variant="ghost" className="w-full rounded-lg">
                  Make an offer
                </Button>
              </div>

              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {car.seller[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">
                    {car.seller === "Dealer" ? "Royal Auto Mart" : "Verified owner"}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 text-primary" />
                    Verified · {car.city}
                  </p>
                </div>
              </div>
            </div>

            {/* EMI calculator */}
            <div className="gradient-card glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold">EMI calculator</h3>
              </div>
              <label className="text-xs text-muted-foreground">
                Down payment: ₹{(downPayment / 100000).toFixed(1)} L
              </label>
              <input
                type="range"
                min={car.price * 0.1}
                max={car.price * 0.5}
                step={10000}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-primary mt-1"
              />
              <label className="text-xs text-muted-foreground mt-3 block">
                Tenure: {tenure} months
              </label>
              <input
                type="range"
                min={12}
                max={84}
                step={12}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-primary mt-1"
              />
              <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-xs text-muted-foreground">Estimated monthly EMI</p>
                <p className="font-display text-2xl font-bold text-gradient-primary">
                  ₹{emi.toLocaleString("en-IN")}
                </p>
              </div>
              <Button variant="outline" className="w-full mt-3 rounded-lg">
                Check loan eligibility
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
