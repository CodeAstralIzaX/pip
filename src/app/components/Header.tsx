import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import whatsapp from "./assets/whatsapp.svg";
import logoHeader from "./assets/Group 5.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Insurances", path: "/insurances" },
    { name: "Claims", path: "/claims" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_3px_rgba(0,33,71,0.08)] backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={logoHeader} alt="Premier Insurance Partners" width={240} height={80} className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-lg text-base font-bold tracking-wide transition-all duration-200 font-sans ${
                  isActive(link.path)
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                }`}
                style={{ fontFamily: "var(--font-family-sans)" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 rounded-lg px-6">
              <a href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={whatsapp} alt="WhatsApp Icon" className="h-5 w-auto" />
                Enquire Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-6 text-gray-700" />
            ) : (
              <Menu className="size-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-bold transition-all duration-200 px-4 py-3 rounded-lg ${
                    isActive(link.path)
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-secondary text-white font-semibold hover:bg-secondary/90 mt-3 shadow-md">
                <a
                  href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img src={whatsapp} alt="WhatsApp Icon" className="h-5 w-auto" />
                  Enquire Now
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
