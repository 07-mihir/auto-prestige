import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { adminItems } from "@/lib/admin-nav";

export const Route = createFileRoute("/admin/fraud")({
  head: () => ({ meta: [{ title: "Fraud monitor — Admin" }] }),
  component: () => (
    <DashboardShell title="Platform Admin" subtitle="Control center" items={adminItems}>
      <h1 className="font-display text-2xl font-bold mb-5">Fraud monitor</h1>
      <div className="gradient-card glass rounded-2xl p-6"><p className="text-muted-foreground">Track suspicious activity, multi-account signals, and AI deepfake detections.</p></div>
    </DashboardShell>
  ),
});