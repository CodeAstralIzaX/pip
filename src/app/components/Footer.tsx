import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoHeader from "./assets/Group 5.svg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <span className="relative flex items-center justify-center">
                <span className="absolute inset-0 rounded-xl bg-secondary/20 blur-md scale-110 group-hover:bg-secondary/35 transition-all duration-300" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-secondary/30 group-hover:ring-secondary/60 transition-all duration-300" />
                <img
                  src={logoHeader}
                  alt="Premier Insurance Partners"
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={80}
                  className="relative h-20 w-auto drop-shadow-[0_0_10px_rgba(204,156,66,0.4)] group-hover:drop-shadow-[0_0_18px_rgba(204,156,66,0.7)] transition-all duration-300"
                />
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Protecting what matters most to you and your family with comprehensive insurance solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/18kKZfCW4S/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="size-5" />
              </a>
              <a href="https://www.instagram.com/premierinsurancepartners/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/insurances" className="hover:text-secondary transition-colors">Insurances</Link>
              </li>
              <li>
                <Link to="/claims" className="hover:text-secondary transition-colors">Claims</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/insurances" className="hover:text-secondary transition-colors">General Insurance</Link>
              </li>
              <li>
                <Link to="/insurances" className="hover:text-secondary transition-colors">Life Insurance</Link>
              </li>
              <li>
                <Link to="/insurances" className="hover:text-secondary transition-colors">Home Insurance</Link>
              </li>
              <li>
                <Link to="/insurances" className="hover:text-secondary transition-colors">Health Insurance</Link>
              </li>
              <li>
                <Link to="/insurances" className="hover:text-secondary transition-colors">Business Insurance</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-1 flex-shrink-0 text-secondary" />
                <span>First Floor, Dhasan Complex, No 292D/16, MS Rd, Vetturnimadam, Nagercoil, Tamil Nadu 629003</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 flex-shrink-0 text-secondary" />
                <a href="tel:+918778912704" className="hover:text-secondary transition-colors">
                  +91 87789 12704
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0 text-secondary" />
                <a href="mailto:info@premierinsurance-partners.in" className="hover:text-secondary transition-colors">
                  info@premierinsurance-partners.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Premier Insurance Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
