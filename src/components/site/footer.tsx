import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="DriveX logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              India's premium AI-powered marketplace for certified pre-owned cars. Buy, sell,
              auction and compare with confidence.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            {
              title: "Marketplace",
              links: [
                ["Buy used cars", "/buy"],
                ["Sell your car", "/sell"],
                ["Auctions", "/auctions"],
                ["Compare cars", "/compare"],
                ["Dealers", "/dealers"],
              ],
            },
            {
              title: "Company",
              links: [
                ["About", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
                ["Careers", "/about"],
              ],
            },
            {
              title: "Support",
              links: [
                ["FAQ", "/faq"],
                ["Pricing", "/pricing"],
                ["Privacy", "/privacy"],
                ["Terms", "/terms"],
              ],
            },
          ].map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 DriveX. All rights reserved.</p>
          <p>Made with precision for car enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
}
