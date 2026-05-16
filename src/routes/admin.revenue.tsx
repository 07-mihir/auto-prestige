import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { adminItems } from "@/lib/admin-nav";

export const Route = createFileRoute("/admin/revenue")({
  head: () => ({ meta: [{ title: "Revenue — Admin" }] }),
  component: () => (
    <DashboardShell title="Platform Admin" subtitle="Control center" items={adminItems}>
      <h1 className="font-display text-2xl font-bold mb-5">Revenue</h1>
      <div className="gradient-card glass rounded-2xl p-6">
        <p className="text-muted-foreground">
          Subscriptions, listing fees, and auction commissions.
        </p>
      </div>
    </DashboardShell>
  ),
});
