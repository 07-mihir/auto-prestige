import { createFileRoute } from "@tanstack/react-router";
import car1 from "@/assets/car-1.jpg";
import car3 from "@/assets/car-3.jpg";
import car5 from "@/assets/car-5.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog & news — DriveX" }] }),
  component: () => {
    const posts = [
      { img: car1, tag: "Buying guide", title: "How to inspect a used luxury sedan in 10 minutes", date: "May 2, 2026" },
      { img: car3, tag: "Trends", title: "Why hot-hatches are the smartest used buys of 2026", date: "Apr 28, 2026" },
      { img: car5, tag: "Expert review", title: "Pre-owned SUVs under ₹70 lakh: a buyer's shortlist", date: "Apr 21, 2026" },
    ];
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Stories</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3">Blog & news</h1>
        <p className="mt-3 text-muted-foreground max-w-xl">Buying guides, expert reviews and the latest from the DriveX newsroom.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <article key={i} className="gradient-card glass rounded-2xl overflow-hidden hover-lift cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden"><img src={p.img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
              <div className="p-5">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-primary/15 text-primary font-semibold uppercase tracking-wider">{p.tag}</span>
                <h2 className="mt-3 font-display font-semibold text-lg leading-snug">{p.title}</h2>
                <p className="text-xs text-muted-foreground mt-2">{p.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  },
});
