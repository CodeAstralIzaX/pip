import { Link } from "react-router";
import { ArrowRight, Shield, Heart, ChevronRight, Compass, Handshake, ClipboardCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactCTA } from "../components/ContactCTA";
import heroFamilyImg from "../components/assets/hero_family.jpg";
import lifeInsuranceImg from "../components/assets/card2.jpeg";
import homeInsuranceImg from "../components/assets/Home_Insurance.jpeg";

export default function Home() {
  const services = [
    {
      title: "Life Insurance",
      description: "Secure your family's future with comprehensive life coverage plans.",
      image: lifeInsuranceImg,
      slug: "life",
      icon: Shield,
    },
    {
      title: "Health Insurance",
      description: "Protection against medical expenses for you and your loved ones.",
      image: homeInsuranceImg,
      slug: "health",
      icon: Heart,
    },
  ];

  return (
    <div className="w-full">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative text-white overflow-hidden min-h-[520px]" style={{
        backgroundImage: `url(${heroFamilyImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        {/* Faded overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        {/* Subtle texture overlay */}
        <div className="pointer-events-none absolute inset-0 section-pattern opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Tagline */}
              <div className="flex items-center gap-2 mb-6">
                <div className="gold-divider" />
                <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase font-sans">Trusted Insurance Partners</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-6 leading-tight">
                To serve as a sole, reliable source for addressing all{" "}
                <span className="text-secondary">insurance needs</span>
              </h1>

              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg font-sans">
                Identifying and delivering the best value solutions for individuals and associations across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-base px-8 py-5 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                  <Link to="/insurances">
                    Explore Our Policies
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary font-semibold text-base px-8 py-5 rounded-lg backdrop-blur-sm">
                  <Link to="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center" />
          </div>
        </div>

        {/* Bottom gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* ── Trust Indicators ─────────────────────────────────────── */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5000+", label: "Happy Clients" },
              { value: "₹100Cr+", label: "Claims Settled" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat, i) => (
              <div key={i} className="py-3">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-gray-500 font-medium tracking-wide uppercase font-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gray-50 section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase font-sans">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">Our Insurance Services</h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-base text-gray-500 max-w-2xl mx-auto font-sans">
              Comprehensive coverage options designed to protect every aspect of your life, backed by India's most trusted insurers.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={`/insurances/${service.slug}`}
                  className="group relative rounded-2xl overflow-hidden h-80 block shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent group-hover:from-primary/90 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <div className="mb-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-3 group-hover:bg-secondary/30 transition-colors">
                        <Icon className="size-6 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-snug mb-1">{service.title}</h3>
                      <p className="text-white/70 text-sm font-sans">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary text-sm font-semibold group-hover:gap-3 transition-all duration-300 font-sans">
                      View Plans
                      <ChevronRight className="size-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase font-sans">Why Premier</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">Why Choose Us</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Expert Guidance",
                desc: "Our certified advisors help you navigate complex insurance options with personalized, unbiased advice.",
                Icon: Compass,
              },
              {
                title: "Trusted Partnerships",
                desc: "We work with India's top insurers — LIC, Star Health, and more — to bring you the best coverage.",
                Icon: Handshake,
              },
              {
                title: "Hassle-Free Claims",
                desc: "From filing to settlement, we guide you through every step to ensure smooth and timely claim processing.",
                Icon: ClipboardCheck,
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 card-premium text-center group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-colors duration-300">
                  <item.Icon className="size-7 text-primary group-hover:text-secondary transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <ContactCTA />
    </div>
  );
}
