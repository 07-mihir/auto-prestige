import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy policy — DriveX" }] }),
  component: () => (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-invert">
      <h1 className="font-display text-4xl font-bold">Privacy policy</h1>
      <p className="text-muted-foreground mt-3">Last updated May 2026.</p>
      <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
        <p>DriveX respects your privacy. We collect only the data needed to provide our marketplace services — your account info, listings, search activity and communications with sellers.</p>
        <p>We never sell your personal data. We share it only with verified dealers when you explicitly initiate a conversation, and with regulators when legally required.</p>
        <p>You can export or delete your data at any time from your account settings.</p>
      </div>
    </div>
  ),
});
