import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Car } from "@/lib/cars-data";
import { formatPrice } from "@/lib/cars-data";

export function BookTestDriveDialog({
  car,
  open,
  onOpenChange,
}: {
  car: Car;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !name || !phone) {
      toast.error("Please complete all fields");
      return;
    }
    onOpenChange(false);
    toast.success("Test drive booked", {
      description: `${car.brand} ${car.model} on ${new Date(date).toLocaleString()} — we'll call ${phone} to confirm.`,
    });
    setDate("");
    setName("");
    setPhone("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a test drive</DialogTitle>
          <DialogDescription>
            {car.year} {car.brand} {car.model} · {car.city}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="td-name">Your name</Label>
              <Input
                id="td-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="td-phone">Phone</Label>
              <Input
                id="td-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="td-date">Preferred date & time</Label>
            <Input
              id="td-date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="rounded-lg gradient-primary text-primary-foreground"
            >
              Confirm booking
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function MakeOfferDialog({
  car,
  open,
  onOpenChange,
}: {
  car: Car;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [amount, setAmount] = useState(Math.round(car.price * 0.95));
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    toast.success("Offer sent", {
      description: `Your offer of ${formatPrice(amount)} was sent to the seller.`,
    });
    setMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make an offer</DialogTitle>
          <DialogDescription>
            Listed at {formatPrice(car.price)} — sellers usually respond within 24h.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <Label htmlFor="of-amount">Your offer (₹)</Label>
            <Input
              id="of-amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <p className="text-xs text-muted-foreground mt-1">{formatPrice(amount)}</p>
          </div>
          <div>
            <Label htmlFor="of-msg">Message (optional)</Label>
            <Textarea
              id="of-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi, I'm seriously interested..."
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="rounded-lg gradient-primary text-primary-foreground"
            >
              Send offer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function LoanEligibilityDialog({
  car,
  open,
  onOpenChange,
}: {
  car: Car;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [income, setIncome] = useState(80000);
  const [employment, setEmployment] = useState("Salaried");
  const [result, setResult] = useState<null | { eligible: boolean; max: number }>(null);

  const check = (e: React.FormEvent) => {
    e.preventDefault();
    const max = Math.round(income * 60);
    setResult({ eligible: max >= car.price * 0.8, max });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Check loan eligibility</DialogTitle>
          <DialogDescription>
            Instant pre-approval from 12+ partner banks at 8.49% onwards.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={check} className="space-y-4">
          <div>
            <Label htmlFor="le-income">Monthly income (₹)</Label>
            <Input
              id="le-income"
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Employment type</Label>
            <div className="flex gap-2 mt-1">
              {["Salaried", "Self-employed", "Business"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setEmployment(t)}
                  className={`px-3 py-1.5 rounded-md text-xs border ${employment === t ? "bg-primary/10 border-primary text-primary" : "border-border text-muted-foreground"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          {result && (
            <div
              className={`rounded-xl p-4 border ${result.eligible ? "bg-success/10 border-success/30" : "bg-warning/10 border-warning/30"}`}
            >
              <p className="text-sm font-semibold">
                {result.eligible ? "You're pre-approved!" : "Limited eligibility"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Max loan: {formatPrice(result.max)} · Car price: {formatPrice(car.price)}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button
              type="submit"
              className="rounded-lg gradient-primary text-primary-foreground"
            >
              Check now
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}