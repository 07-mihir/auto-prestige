import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Heart,
  Car,
  MessageCircle,
  Calendar,
  Settings,
  Bell,
  TrendingDown,
  Tag,
  ShieldCheck,
} from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";

export const Route = createFileRoute("/dashboard/notifications")({
  head: () => ({ meta: [{ title: "Notifications — DriveX" }] }),
  component: NotifsPage,
});

const items = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/wishlist", label: "Wishlist", icon: Heart },
  { to: "/dashboard/listings", label: "My listings", icon: Car },
  { to: "/dashboard/inbox", label: "Messages", icon: MessageCircle },
  { to: "/dashboard/test-drives", label: "Test drives", icon: Calendar },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

const tone: Record<string, string> = {
  success: "bg-success/15 text-success",
  primary: "bg-primary/15 text-primary",
  accent: "bg-accent/15 text-accent",
  warning: "bg-warning/15 text-warning",
};

const notifs = [
  {
    icon: TrendingDown,
    color: "success",
    title: "Price dropped on BMW 5 Series",
    time: "2h ago",
    desc: "Now ₹47.5L (was ₹48.5L)",
  },
  {
    icon: MessageCircle,
    color: "primary",
    title: "New message from Royal Auto Mart",
    time: "5h ago",
    desc: "Sure, you can come tomorrow at 11am.",
  },
  {
    icon: Tag,
    color: "accent",
    title: "Auction ending soon",
    time: "Yesterday",
    desc: "Mercedes C-Class — 4 hours left",
  },
  {
    icon: ShieldCheck,
    color: "warning",
    title: "Inspection report ready",
    time: "2d ago",
    desc: "Hyundai Ioniq 5 passed 198/200 checks",
  },
];

function NotifsPage() {
  return (
    <DashboardShell title="John Doe" subtitle="Buyer account" items={items}>
      <h1 className="font-display text-2xl font-bold mb-5">Notifications</h1>
      <div className="gradient-card glass rounded-2xl divide-y divide-border/40">
        {notifs.map((n, i) => (
          <div key={i} className="p-5 flex items-start gap-4 hover:bg-secondary/30 transition">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${tone[n.color]}`}
            >
              <n.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{n.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
            </div>
            <span className="text-[11px] text-muted-foreground">{n.time}</span>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
