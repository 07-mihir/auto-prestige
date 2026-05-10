import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & conditions — DriveX" }] }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="font-display text-4xl font-bold">Terms & conditions</h1>
      <p className="text-muted-foreground mt-3">Effective May 2026.</p>
      <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
        <p>By using DriveX you agree to list accurate vehicle information, honor your communications with buyers and abide by our community guidelines.</p>
        <p>DriveX acts as a marketplace facilitator and does not own the vehicles listed. Inspection reports represent the condition at the time of inspection and may not reflect later changes.</p>
        <p>For disputes, our resolution team is available 24/7 at support@drivex.in.</p>
      </div>
    </div>
  ),
});
