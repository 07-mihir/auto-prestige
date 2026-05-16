import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, Heart, User, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/buy", label: "Buy" },
  { to: "/sell", label: "Sell" },
  { to: "/auctions", label: "Auctions" },
  { to: "/dealers", label: "Dealers" },
  { to: "/compare", label: "Compare" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`glass-strong rounded-2xl flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16 transition-all ${scrolled ? "shadow-elegant" : ""}`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="DriveX logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            <Link to="/buy">
              <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Search">
                <Search className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/dashboard/wishlist">
              <Button variant="ghost" size="icon" className="rounded-lg" aria-label="Wishlist">
                <Heart className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm" className="rounded-lg">
                <User className="w-4 h-4 mr-2" />
                Sign in
              </Button>
            </Link>
            <Link to="/sell">
              <Button
                size="sm"
                className="rounded-lg gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
              >
                Sell Car
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              onClick={toggle}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg hover:bg-secondary/60"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary/60"
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link to="/login">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Sign in
                </Button>
              </Link>
              <Link to="/sell">
                <Button className="w-full gradient-primary text-primary-foreground">
                  Sell your car
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
