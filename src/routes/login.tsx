import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Car, Mail, Lock, Phone, ArrowRight, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — DriveX" }] }),
  component: Login,
});

function Login() {
  const [tab, setTab] = useState<"email" | "otp">("email");
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left visual */}
      <div className="relative hidden lg:block overflow-hidden">
        <img src={heroCar} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"><Car className="w-5 h-5 text-primary-foreground" /></div>
            <span className="font-display text-2xl font-bold">Drive<span className="text-gradient-primary">X</span></span>
          </Link>
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight">Premium cars,<br />zero compromise.</h2>
            <p className="mt-3 text-muted-foreground max-w-sm">Join 1M+ buyers and dealers using India's most trusted used car marketplace.</p>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center p-6 sm:p-12 relative">
        <div className="absolute inset-0 gradient-hero opacity-50 lg:hidden" />
        <div className="relative w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center"><Car className="w-5 h-5 text-primary-foreground" /></div>
            <span className="font-display text-xl font-bold">Drive<span className="text-gradient-primary">X</span></span>
          </Link>

          <h1 className="font-display text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to manage your listings, wishlist and offers.</p>

          <div className="mt-8 glass-strong rounded-xl p-1 grid grid-cols-2 gap-1">
            <button onClick={() => setTab("email")} className={`py-2 rounded-lg text-sm font-medium transition ${tab === "email" ? "gradient-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Email</button>
            <button onClick={() => setTab("otp")} className={`py-2 rounded-lg text-sm font-medium transition ${tab === "otp" ? "gradient-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>Phone OTP</button>
          </div>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {tab === "email" ? (
              <>
                <InputField icon={Mail} type="email" placeholder="you@example.com" label="Email" />
                <InputField icon={Lock} type="password" placeholder="••••••••" label="Password" />
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="accent-primary" />Remember me</label>
                  <Link to="/login" className="text-primary hover:underline">Forgot password?</Link>
                </div>
              </>
            ) : (
              <>
                <InputField icon={Phone} type="tel" placeholder="+91 98765 43210" label="Mobile number" />
                <InputField icon={KeyRound} type="text" placeholder="6-digit OTP" label="OTP" />
                <p className="text-xs text-muted-foreground">Didn't get the code? <button className="text-primary hover:underline">Resend</button></p>
              </>
            )}

            <Button className="w-full rounded-lg gradient-primary text-primary-foreground hover:opacity-90 shadow-glow" size="lg">
              Sign in <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" /> OR CONTINUE WITH <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="rounded-lg">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" /></svg>
              Google
            </Button>
            <Button variant="outline" className="rounded-lg">Apple</Button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            New to DriveX?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField({ icon: Icon, label, ...props }: any) {
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
