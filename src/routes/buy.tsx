import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, Grid3x3, List, SlidersHorizontal, X } from "lucide-react";
import { cars, brands, cities } from "@/lib/cars-data";
import { CarCard } from "@/components/site/car-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy used cars — DriveX" },
      {
        name: "description",
        content:
          "Browse 50,000+ verified used cars by brand, price, body type, fuel and city. Certified pre-owned with 200-point inspection.",
      },
    ],
  }),
  component: BuyPage,
});

const fuels = ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"];
const transmissions = ["Manual", "Automatic"];
const bodies = ["Sedan", "SUV", "Hatchback", "Coupe", "MUV"];

function BuyPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [brand, setBrand] = useState<string | null>(null);
  const [fuel, setFuel] = useState<string | null>(null);
  const [body, setBody] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "year-desc" | "km-asc">(
    "price-asc",
  );

  const filtered = useMemo(() => {
    let arr = cars.filter(
      (c) =>
        (!brand || c.brand === brand) &&
        (!fuel || c.fuel === fuel) &&
        (!body || c.bodyType === body) &&
        (!city || c.city === city) &&
        c.price <= maxPrice,
    );
    arr = [...arr].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "year-desc") return b.year - a.year;
      return a.km - b.km;
    });
    return arr;
  }, [brand, fuel, body, city, maxPrice, sort]);

  const clear = () => {
    setBrand(null);
    setFuel(null);
    setBody(null);
    setCity(null);
    setMaxPrice(10000000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Marketplace
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">Used cars for sale</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filtered.length} cars available · sorted by best match
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden rounded-lg"
            onClick={() => setShowFilters(true)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
          </Button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "price-asc" | "price-desc" | "year-desc" | "km-asc")}
            className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Newest first</option>
            <option value="km-asc">Lowest km</option>
          </select>
          <div className="hidden sm:flex glass rounded-lg p-1">
            <button
              onClick={() => setView("grid")}
              className={`p-1.5 rounded-md ${view === "grid" ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-1.5 rounded-md ${view === "list" ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-6">
        {/* Filter sidebar */}
        <aside
          className={`${showFilters ? "fixed inset-0 z-50 bg-background/95 backdrop-blur-xl p-4 overflow-auto" : "hidden"} lg:block lg:static lg:bg-transparent lg:p-0`}
        >
          <div className="lg:sticky lg:top-24 space-y-5">
            <div className="flex items-center justify-between lg:hidden">
              <h3 className="font-display font-semibold text-lg">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 rounded-lg hover:bg-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <FilterBlock title="Brand">
              <ChipList items={brands} value={brand} onChange={setBrand} />
            </FilterBlock>
            <FilterBlock title="Body type">
              <ChipList items={bodies} value={body} onChange={setBody} />
            </FilterBlock>
            <FilterBlock title="Fuel">
              <ChipList items={fuels} value={fuel} onChange={setFuel} />
            </FilterBlock>
            <FilterBlock title="City">
              <ChipList items={cities} value={city} onChange={setCity} />
            </FilterBlock>
            <FilterBlock title={`Max price: ₹${(maxPrice / 100000).toFixed(0)} L`}>
              <input
                type="range"
                min={300000}
                max={10000000}
                step={50000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                <span>₹3L</span>
                <span>₹1Cr</span>
              </div>
            </FilterBlock>

            <Button variant="outline" className="w-full rounded-lg" onClick={clear}>
              <Filter className="w-4 h-4 mr-2" />
              Clear filters
            </Button>
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="glass rounded-2xl p-16 text-center">
              <p className="text-muted-foreground">No cars match your filters.</p>
              <Button variant="outline" className="mt-4 rounded-lg" onClick={clear}>
                Clear filters
              </Button>
            </div>
          ) : view === "grid" ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
        {title}
      </p>
      {children}
    </div>
  );
}

function ChipList({
  items,
  value,
  onChange,
}: {
  items: string[];
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((i) => {
        const active = value === i;
        return (
          <button
            key={i}
            onClick={() => onChange(active ? null : i)}
            className={`text-xs px-2.5 py-1.5 rounded-md border transition-all ${active ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/50 border-border hover:border-primary/40"}`}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
}
