import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoHeader from "./assets/Group 5.svg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #001a38 0%, #001229 100%)" }}>
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center mb-5 group">
              <img
                src={logoHeader}
                alt="Premier Insurance Partners"
                loading="lazy"
                decoding="async"
                width={180}
                height={70}
                className="h-16 w-auto brightness-[2] contrast-[0.9] saturate-[0.3] drop-shadow-[0_0_12px_rgba(204,156,66,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(204,156,66,0.6)] transition-all duration-300"
              />
            </Link>
            <p className="text-sm text-white/40 mb-5 leading-relaxed font-sans">
              Protecting what matters most to you and your family with comprehensive insurance solutions.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/share/18kKZfCW4S/?mibextid=wwXIfr", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/premierinsurancepartners/", icon: Instagram, label: "Instagram" },
                { href: "https://x.com/PremierInsIndia", icon: Twitter, label: "X" },
                { href: "https://www.linkedin.com/company/premier-insurance-partners", icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:border-secondary/30 hover:text-secondary transition-all duration-200 text-white/50"
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {[
                { to: "/", label: "Home" },
                { to: "/insurances", label: "Insurances" },
                { to: "/claims", label: "Claims" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/40 hover:text-secondary transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wide">Our Services</h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {[
                { to: "/insurances/life", label: "Life Insurance" },
                { to: "/insurances/health", label: "Health Insurance" },
                { to: "/claims", label: "Claims Assistance" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/40 hover:text-secondary transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm tracking-wide">Contact Us</h3>
            <ul className="space-y-3.5 text-sm font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-white/40 leading-relaxed">First Floor, Dhasan Complex, No 292D/16, MS Rd, Vetturnimadam, Nagercoil, Tamil Nadu 629003</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 flex-shrink-0 text-secondary" />
                <a href="tel:+918778912704" className="text-white/40 hover:text-secondary transition-colors">
                  +91 87789 12704
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 flex-shrink-0 text-secondary" />
                <a href="mailto:info@premierinsurance-partners.in" className="text-white/40 hover:text-secondary transition-colors break-all">
                  info@premierinsurance-partners.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 font-sans">&copy; {new Date().getFullYear()} Premier Insurance Partners. All rights reserved.</p>
          <p className="text-xs text-white/35 font-sans">Designed with care for your financial security.</p>
        </div>
      </div>
    </footer>
  );
}
