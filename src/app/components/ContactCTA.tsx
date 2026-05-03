import { Phone, Mail, MapPin, Clock } from "lucide-react";
import whatsappIcon from "./assets/whatsapp.svg";

/**
 * A premium, professional contact section placed on every page.
 * Uses the brand palette — deep navy + gold accents.
 */
export function ContactCTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #001a38 0%, #002147 50%, #003366 100%)" }}>
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 section-pattern opacity-20" />
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 translate-x-1/3 -translate-y-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/[0.02] -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-3">Need Assistance? Contact Us</h2>
          <div className="gold-divider mx-auto mb-5" />
          <p className="text-white/70 text-base max-w-lg mx-auto font-sans leading-relaxed">
            Our team of insurance experts is ready to help you find the perfect coverage.
          </p>
        </div>

        {/* Info cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {/* Address */}
          <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/20 flex items-center justify-center">
                <MapPin className="size-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-semibold tracking-[0.15em] uppercase mb-1.5 font-sans">Visit Us</p>
                <p className="text-white font-bold text-base leading-snug font-sans">First Floor, Dhasan Complex</p>
                <p className="text-white/70 text-base mt-0.5 font-sans">No 292D/16, MS Rd, Vetturnimadam</p>
                <p className="text-white/70 text-base font-sans">Nagercoil, Tamil Nadu 629003</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <a href="tel:+918778912704" className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 block">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/20 flex items-center justify-center">
                <Phone className="size-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-semibold tracking-[0.15em] uppercase mb-1.5 font-sans">Call Us</p>
                <p className="text-white font-bold text-base font-sans">+91 87789 12704</p>
                <p className="text-white/70 text-base mt-0.5 font-sans">Tap to call</p>
              </div>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:info@premierinsurance-partners.in" className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 block">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/20 flex items-center justify-center">
                <Mail className="size-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-semibold tracking-[0.15em] uppercase mb-1.5 font-sans">Email Us</p>
                <p className="text-white font-bold text-base font-sans">info@premierinsurance-partners.in</p>
              </div>
            </div>
          </a>

          {/* Hours */}
          <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/20 flex items-center justify-center">
                <Clock className="size-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-semibold tracking-[0.15em] uppercase mb-1.5 font-sans">Office Hours</p>
                <p className="text-white font-bold text-base font-sans">Mon – Fri · 8 AM – 6 PM</p>
                <p className="text-white/70 text-base mt-0.5 font-sans">Sat · 9 AM – 3 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg shadow-md bg-secondary font-sans"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
}
