import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bot, Camera, CheckCircle2, IndianRupee, Sparkles, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brands, cities } from "@/lib/cars-data";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Sell your car — DriveX" },
      { name: "description", content: "List your car for free, get an AI valuation and up to 8 instant offers from verified dealers in 24 hours." },
    ],
  }),
  component: SellPage,
});

const steps = ["Car details", "Condition", "Photos & price"];

function SellPage() {
  const [step, setStep] = useState(0);
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
          <Sparkles className="w-3.5 h-3.5" /> AI-powered fair price in 60 seconds
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">Sell your car the smart way.</h1>
        <p className="mt-3 text-muted-foreground">Free listing · Instant valuation · Up to 8 dealer offers</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        <div className="gradient-card glass-strong rounded-2xl p-6 sm:p-8">
          {/* Stepper */}
          <div className="flex items-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i <= step ? "gradient-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:inline ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
                {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Brand"><select className="input">{brands.map((b) => <option key={b}>{b}</option>)}</select></Field>
              <Field label="Model"><input className="input" placeholder="e.g. 5 Series" /></Field>
              <Field label="Variant"><input className="input" placeholder="e.g. 530i M Sport" /></Field>
              <Field label="Year"><input className="input" type="number" placeholder="2022" /></Field>
              <Field label="Fuel type"><select className="input"><option>Petrol</option><option>Diesel</option><option>Electric</option><option>Hybrid</option><option>CNG</option></select></Field>
              <Field label="Transmission"><select className="input"><option>Automatic</option><option>Manual</option></select></Field>
              <Field label="KM driven"><input className="input" type="number" placeholder="18200" /></Field>
              <Field label="City"><select className="input">{cities.map((c) => <option key={c}>{c}</option>)}</select></Field>
            </div>
          )}

          {step === 1 && (
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Owners"><select className="input"><option>1st owner</option><option>2nd owner</option><option>3rd owner</option></select></Field>
              <Field label="Accidental history"><select className="input"><option>Non-accidental</option><option>Minor repairs</option><option>Major repairs</option></select></Field>
              <Field label="Service history"><select className="input"><option>Full service available</option><option>Partial</option><option>Not available</option></select></Field>
              <Field label="Insurance valid till"><input className="input" type="month" /></Field>
              <Field label="RC status"><select className="input"><option>Original RC</option><option>Duplicate RC</option></select></Field>
              <Field label="Pollution certificate"><select className="input"><option>Valid</option><option>Expired</option></select></Field>
              <Field label="Color"><input className="input" placeholder="e.g. Mineral White" /></Field>
              <Field label="Body type"><select className="input"><option>Sedan</option><option>SUV</option><option>Hatchback</option><option>Coupe</option></select></Field>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <Field label="Upload photos">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary/40 hover:bg-primary/5 flex flex-col items-center justify-center cursor-pointer transition">
                      <Camera className="w-5 h-5 text-muted-foreground mb-1" />
                      <span className="text-[11px] text-muted-foreground">Photo {i}</span>
                    </div>
                  ))}
                </div>
              </Field>
              <Field label="Upload documents (RC, insurance)">
                <div className="rounded-xl border-2 border-dashed border-border p-6 text-center hover:border-primary/40 hover:bg-primary/5 cursor-pointer transition">
                  <Upload className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm">Drag & drop PDFs or click to browse</p>
                </div>
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Expected price (₹)">
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input className="input pl-9" type="number" placeholder="4500000" />
                  </div>
                </Field>
                <Field label="AI fair price">
                  <div className="px-3 py-2.5 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary" />
                    <span className="font-display font-bold text-gradient-primary">₹46.8 L – ₹49.2 L</span>
                  </div>
                </Field>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <Button variant="outline" className="rounded-lg" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</Button>
            {step < steps.length - 1 ? (
              <Button className="rounded-lg gradient-primary text-primary-foreground" onClick={() => setStep(step + 1)}>Continue</Button>
            ) : (
              <Button className="rounded-lg gradient-primary text-primary-foreground shadow-glow">Publish listing</Button>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="gradient-card glass rounded-2xl p-5">
            <h3 className="font-display font-semibold mb-3">Why sell on DriveX?</h3>
            <ul className="space-y-3 text-sm">
              {["Free listing — no hidden fees", "AI fair-price valuation", "Up to 8 dealer offers in 24h", "Free RC transfer assistance", "Verified buyers only"].map((x) => (
                <li key={x} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" /><span>{x}</span></li>
              ))}
            </ul>
          </div>
          <div className="gradient-card glass rounded-2xl p-5">
            <p className="text-xs text-muted-foreground">Need help?</p>
            <p className="font-semibold mt-1">Talk to a sales advisor</p>
            <Button variant="outline" className="w-full mt-3 rounded-lg">Schedule a call</Button>
          </div>
        </aside>
      </div>

      <style>{`.input{width:100%;background:var(--input);border:1px solid var(--border);border-radius:0.625rem;padding:0.625rem 0.75rem;font-size:0.875rem;color:var(--foreground);outline:none;transition:border-color .2s}.input:focus{border-color:var(--primary)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
