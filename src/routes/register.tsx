import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Car, User, Building2, ArrowRight, Mail, Lock, Phone, IdCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — DriveX" }] }),
  component: Register,
});

function Register() {
  const [type, setType] = useState<"user" | "dealer">("user");
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-10 relative">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative w-full max-w-2xl">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"><Car className="w-5 h-5 text-primary-foreground" /></div>
          <span className="font-display text-2xl font-bold">Drive<span className="text-gradient-primary">X</span></span>
        </Link>

        <div className="glass-strong rounded-2xl p-6 sm:p-10 shadow-elegant">
          <h1 className="font-display text-3xl font-bold text-center">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground text-center">Get started in less than 60 seconds.</p>

          {/* Type selector */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { id: "user", icon: User, title: "Buyer / Owner", desc: "Buy or sell occasionally" },
              { id: "dealer", icon: Building2, title: "Dealer / Garage", desc: "Manage inventory at scale" },
            ].map((t) => {
              const active = type === t.id;
              return (
                <button key={t.id} onClick={() => setType(t.id as any)} className={`text-left p-5 rounded-xl border-2 transition ${active ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`}>
                  <t.icon className={`w-6 h-6 ${active ? "text-primary" : "text-muted-foreground"}`} />
                  <p className="mt-3 font-display font-semibold">{t.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
                </button>
              );
            })}
          </div>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input icon={User} label="Full name" placeholder="John Doe" />
              <Input icon={Phone} label="Mobile" placeholder="+91 98765 43210" />
              <Input icon={Mail} label="Email" placeholder="you@example.com" />
              <Input icon={Lock} type="password" label="Password" placeholder="••••••••" />
              {type === "dealer" && (
                <>
                  <Input icon={Building2} label="Garage / business name" placeholder="Royal Auto Mart" />
                  <Input icon={IdCard} label="GST / PAN number" placeholder="ABCDE1234F" />
                </>
              )}
            </div>

            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="accent-primary mt-0.5" />
              <span>I agree to the <Link to="/terms" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</span>
            </label>

            <Button size="lg" className="w-full rounded-lg gradient-primary text-primary-foreground shadow-glow">
              Create account <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Input({ icon: Icon, label, ...props }: any) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="relative mt-1.5">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input {...props} className="w-full bg-input border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:border-primary transition" />
      </div>
    </label>
  );
}
