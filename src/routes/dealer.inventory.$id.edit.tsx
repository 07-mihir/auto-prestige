import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft,
  LayoutDashboard,
  Car,
  Users,
  BarChart3,
  MessageCircle,
  Calendar,
  Settings,
  Crown,
} from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cars } from "@/lib/cars-data";

export const Route = createFileRoute("/dealer/inventory/$id/edit")({
  loader: ({ params }) => {
    const car = cars.find((c) => c.id === params.id);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `Edit ${loaderData.car.brand} ${loaderData.car.model} — DriveX Dealer`
          : "Edit listing — DriveX Dealer",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold">Listing not found</h1>
      <Link to="/dealer/inventory">
        <Button className="mt-6 rounded-lg gradient-primary text-primary-foreground">
          Back to inventory
        </Button>
      </Link>
    </div>
  ),
  component: EditCarPage,
});

const items = [
  { to: "/dealer", label: "Overview", icon: LayoutDashboard },
  { to: "/dealer/inventory", label: "Inventory", icon: Car },
  { to: "/dealer/leads", label: "Leads", icon: Users },
  { to: "/dealer/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dealer/inbox", label: "Messages", icon: MessageCircle },
  { to: "/dealer/appointments", label: "Test drives", icon: Calendar },
  { to: "/dealer/subscription", label: "Subscription", icon: Crown },
  { to: "/dealer/settings", label: "Settings", icon: Settings },
];

function EditCarPage() {
  const { car } = Route.useLoaderData();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    brand: car.brand,
    model: car.model,
    variant: car.variant,
    year: car.year,
    price: car.price,
    km: car.km,
    city: car.city,
    color: car.color,
    fuel: car.fuel,
    transmission: car.transmission,
    description:
      "Single-owner, regularly serviced at authorized service center. All documents up to date.",
  });

  const set = (k: string, v: string | number) => setForm((f) => ({ ...f, [k]: v }));

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Listing updated", {
      description: `${form.brand} ${form.model} changes saved.`,
    });
    navigate({ to: "/dealer/inventory" });
  };

  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <Link
        to="/dealer/inventory"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to inventory
      </Link>
      <h1 className="font-display text-2xl font-bold mb-5">Edit car details</h1>
      <form onSubmit={save} className="gradient-card glass rounded-2xl p-6 space-y-5 max-w-3xl">
        <div className="flex items-center gap-4">
          <img src={car.image} alt="" className="w-24 h-24 rounded-xl object-cover" />
          <Button type="button" variant="outline" className="rounded-lg">
            Replace photos
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="brand">Brand</Label>
            <Input id="brand" value={form.brand} onChange={(e) => set("brand", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="model">Model</Label>
            <Input id="model" value={form.model} onChange={(e) => set("model", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="variant">Variant</Label>
            <Input
              id="variant"
              value={form.variant}
              onChange={(e) => set("variant", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              type="number"
              value={form.year}
              onChange={(e) => set("year", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="price">Price (₹)</Label>
            <Input
              id="price"
              type="number"
              value={form.price}
              onChange={(e) => set("price", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="km">KM driven</Label>
            <Input
              id="km"
              type="number"
              value={form.km}
              onChange={(e) => set("km", Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" value={form.city} onChange={(e) => set("city", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="color">Color</Label>
            <Input id="color" value={form.color} onChange={(e) => set("color", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="fuel">Fuel</Label>
            <Input id="fuel" value={form.fuel} onChange={(e) => set("fuel", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="trans">Transmission</Label>
            <Input
              id="trans"
              value={form.transmission}
              onChange={(e) => set("transmission", e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="desc">Description</Label>
          <Textarea
            id="desc"
            rows={5}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
          />
        </div>
        <div className="flex gap-3 justify-end pt-2">
          <Link to="/dealer/inventory">
            <Button type="button" variant="outline" className="rounded-lg">
              Cancel
            </Button>
          </Link>
          <Button type="submit" className="rounded-lg gradient-primary text-primary-foreground">
            Save changes
          </Button>
        </div>
      </form>
    </DashboardShell>
  );
}