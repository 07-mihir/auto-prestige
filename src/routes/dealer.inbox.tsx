import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Car, Users, BarChart3, MessageCircle, Calendar, Settings, Crown, Send } from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/dealer/inbox")({
  head: () => ({ meta: [{ title: "Messages — DriveX Dealer" }] }),
  component: DealerInbox,
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

const threads = [
  { name: "Aarav Sharma", car: "BMW 5 Series", last: "Can I see it tomorrow?", unread: 3 },
  { name: "Priya Nair", car: "Mercedes GLE", last: "What's the best price?", unread: 1 },
  { name: "Rahul Mehta", car: "VW Polo", last: "Service history?", unread: 0 },
];

function DealerInbox() {
  const [active, setActive] = useState(0);
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <h1 className="font-display text-2xl font-bold mb-5">Customer messages</h1>
      <div className="grid md:grid-cols-[300px_1fr] gap-4 h-[600px]">
        <div className="gradient-card glass rounded-2xl p-3 overflow-y-auto">
          {threads.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-full text-left p-3 rounded-xl mb-1 transition ${active === i ? "bg-primary/15" : "hover:bg-secondary/60"}`}>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">{t.name}</p>
                {t.unread > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground font-bold">{t.unread}</span>}
              </div>
              <p className="text-[11px] text-primary mt-0.5">{t.car}</p>
              <p className="text-xs text-muted-foreground truncate mt-1">{t.last}</p>
            </button>
          ))}
        </div>
        <div className="gradient-card glass rounded-2xl p-5 flex flex-col">
          <div className="border-b border-border pb-3 mb-4">
            <p className="font-display font-semibold">{threads[active].name}</p>
            <p className="text-xs text-muted-foreground">About {threads[active].car}</p>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3">
            <div className="max-w-[70%] glass rounded-2xl rounded-tl-sm p-3 text-sm">{threads[active].last}</div>
            <div className="max-w-[70%] ml-auto gradient-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 text-sm">Sure! Available 10am - 6pm.</div>
          </div>
          <div className="flex gap-2 mt-4">
            <input className="flex-1 bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary" placeholder="Reply..." />
            <Button className="rounded-lg gradient-primary text-primary-foreground"><Send className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}