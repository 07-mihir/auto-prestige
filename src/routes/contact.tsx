import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — DriveX" }] }),
  component: () => (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Get in touch</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3">We're here to help.</h1>
      <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          {[
            { icon: Mail, l: "Email us", v: "hello@drivex.in" },
            { icon: Phone, l: "Call us", v: "+91 1800-123-DRIVE" },
            { icon: MapPin, l: "Visit", v: "Bandra Kurla Complex, Mumbai 400051" },
          ].map((c) => (
            <div key={c.l} className="gradient-card glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.l}</p>
                <p className="font-semibold mt-0.5">{c.v}</p>
              </div>
            </div>
          ))}
        </div>
        <form
          className="gradient-card glass-strong rounded-2xl p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="bg-input border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary"
              placeholder="Name"
            />
            <input
              className="bg-input border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary"
              placeholder="Email"
            />
          </div>
          <input
            className="bg-input border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary w-full"
            placeholder="Subject"
          />
          <textarea
            className="bg-input border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary w-full min-h-[140px]"
            placeholder="How can we help?"
          />
          <Button className="rounded-lg gradient-primary text-primary-foreground shadow-glow">
            Send message
          </Button>
        </form>
      </div>
    </div>
  ),
});
