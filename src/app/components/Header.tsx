import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Shield } from "lucide-react";
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
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}

          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            {/* <img src={logo} alt="Premier Insurance Partners Logo" className="h-15 w-auto" /> */}
            <img src={logoHeader} alt="Premier Insurance Partners Header" className="h-20 w-auto" />
            {/* <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">PREMIER</span>
              <span className="text-xs text-blue-600 leading-tight">INSURANCE PARTNERS</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors hover:text-secondary ${
                isActive(link.path) ? "text-secondary text-lg" : "text-gray-700 text-base"
              }`}
              >
              {link.name}
              </Link>
            ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="outline" className="border-secondary-600 text-base font-medium text-white bg-secondary hover:bg-secondary-foreground hover:text-white">
              <a href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <img src={whatsapp} alt="WhatsApp Icon" className="h-5 w-auto" />
              Enquire Now
              </a>
            </Button>
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
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
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-secondary px-2 py-2 rounded-md ${
                    isActive(link.path) ? "text-secondary font-semibold" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="outline" className="border-secondary text-white bg-secondary hover:bg-secondary-foreground hover:text-white mt-3">
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
