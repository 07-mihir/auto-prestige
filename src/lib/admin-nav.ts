import {
  LayoutDashboard,
  Users,
  Building2,
  Car,
  Shield,
  BarChart3,
  IndianRupee,
  Settings,
  Megaphone,
} from "lucide-react";

export const adminItems = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/dealers", label: "Dealers", icon: Building2 },
  { to: "/admin/listings", label: "Listings", icon: Car },
  { to: "/admin/fraud", label: "Fraud monitor", icon: Shield },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/revenue", label: "Revenue", icon: IndianRupee },
  { to: "/admin/ads", label: "Ads", icon: Megaphone },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];
