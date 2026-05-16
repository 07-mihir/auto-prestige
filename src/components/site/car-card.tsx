import { Link } from "@tanstack/react-router";
import { Heart, Fuel, Gauge, MapPin, Settings2, ShieldCheck, Star } from "lucide-react";
import type { Car } from "@/lib/cars-data";
import { formatPrice } from "@/lib/cars-data";
import { Button } from "@/components/ui/button";

export function CarCard({ car }: { car: Car }) {
  return (
    <Link to="/car/$id" params={{ id: car.id }} className="group block">
      <div className="relative gradient-card glass rounded-2xl overflow-hidden hover-lift">
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          {car.badge && (
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase ${
                car.badge === "Featured"
                  ? "gradient-primary text-primary-foreground"
                  : car.badge === "Certified"
                    ? "bg-success/90 text-success-foreground"
                    : car.badge === "Hot Deal"
                      ? "bg-destructive/90 text-destructive-foreground"
                      : car.badge === "Auction"
                        ? "bg-accent/90 text-accent-foreground"
                        : "bg-warning/90 text-primary-foreground"
              }`}
            >
              {car.badge}
            </span>
          )}
          <button
            className="absolute top-3 right-3 w-9 h-9 rounded-lg glass-strong flex items-center justify-center hover:text-primary transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
            <span className="px-2 py-1 rounded-md glass-strong">{car.year}</span>
            <span className="px-2 py-1 rounded-md glass-strong flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {car.city}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {car.brand}
              </p>
              <h3 className="font-display font-semibold text-base sm:text-lg truncate">
                {car.model}
              </h3>
              <p className="text-xs text-muted-foreground truncate">{car.variant}</p>
            </div>
            {car.verified && (
              <div className="flex items-center gap-1 text-[11px] text-primary">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" />
              {(car.km / 1000).toFixed(0)}k km
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5" />
              {car.fuel}
            </div>
            <div className="flex items-center gap-1.5">
              <Settings2 className="w-3.5 h-3.5" />
              {car.transmission.slice(0, 4)}.
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border flex items-end justify-between">
            <div>
              <p className="font-display text-xl sm:text-2xl font-bold text-gradient">
                {formatPrice(car.price)}
              </p>
              <p className="text-[11px] text-muted-foreground">
                EMI ₹{(car.emi / 1000).toFixed(0)}k/mo
              </p>
            </div>
            <Button
              size="sm"
              className="rounded-lg gradient-primary text-primary-foreground hover:opacity-90"
            >
              View
            </Button>
          </div>

          <div className="mt-3 flex items-center gap-1 text-[11px] text-muted-foreground">
            <Star className="w-3 h-3 fill-warning text-warning" />
            <span className="text-foreground font-medium">{car.rating}</span>
            <span>·</span>
            <span>{car.seller}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
