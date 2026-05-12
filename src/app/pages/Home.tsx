import React from "react";
import { Link } from "react-router";
import { ArrowRight, Shield, Heart, ChevronRight, Compass, Handshake, ClipboardCheck, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactCTA } from "../components/ContactCTA";
import heroFamilyImg from "../components/assets/hero_family.jpg";
import lifeInsuranceImg from "../components/assets/card2.jpeg";
import homeInsuranceImg from "../components/assets/Home_Insurance.jpeg";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Who needs life insurance?",
    answer:
      "The income earners of the family and those who have dependants to support require Life Insurance. Loved ones are adversely impacted by an untimely demise and subsequent loss of income — Life Insurance plans ensure that this financial burden is protected. Having a life cover also helps your family pay off debts using the payout received against the insurance claim. In the event of the insured person's unfortunate demise, Life Insurance plans not only help financially but also become an avenue for sound long-term investment — helping meet goals such as children's education, retirement corpus or other long-term investments.",
  },
  {
    question: "Why Life Insurance?",
    answer:
      "Buying life insurance protects your dependents after you. It provides financial security, helps to pay off debts, and lets your family live life smoothly even after you. Life insurance can give you lasting peace of mind by ensuring you have provided a legacy. It offers guaranteed protection, income replacement, and guaranteed cash value growth.",
  },
  {
    question: "Why LIC Life Insurance Plans?",
    answer:
      "LIC is one of the largest insurance companies in India, offering a wide range of life insurance plans. LIC offers term plans with affordable premiums and high coverage and has a strong Claim Settlement ratio compared to other Life Insurance companies. It has raised trust over the years and, with its customer-centric approach, has become one of the top Life Insurers in India and the 5th largest in the world. For more details, call us on the number on the Contact Us page.",
  },
  {
    question: "Why Health Insurance?",
    answer:
      "Emergencies never knock — they come suddenly. Rising medical costs shouldn't be the hurdle to getting superior medical treatment. Health Insurance protects our savings during medical emergencies and provides cashless claim benefit, which allows you to take care of your health instead of worrying about hefty medical bills.",
  },
  {
    question: "How to change nomination in the policy?",
    answer:
      "Changing the nominee in an LIC policy is a simple process. You need to notify the Life Insurance Corporation of India by filing Form 3750. Documents required for nominee change: (1) Form 3750, (2) Relationship proof between the policyholder and the person being nominated, (3) Policy contract (for endorsement), (4) Photocopy of the LIC policy. You can make this change multiple times during your policy term.",
  },
  {
    question: "How to pay premium online?",
    answer:
      "You can pay your premium online by visiting https://licindia.in/Home/Pay-Premium-Online — this will redirect you to the LIC website. If you don't want to register you can select the 'Pay Direct' option: (1) Select Renewal from the drop-down, (2) Enter Policy No, DOB, Mobile Number, Email ID and Premium (without any tax), (3) Pay the premium.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = React.useState<number | null>(0);
  const pastels = [
    { bg: "#EFF6FF", border: "#BFDBFE", accent: "#2563EB" },
    { bg: "#F0FDF4", border: "#BBF7D0", accent: "#16A34A" },
    { bg: "#FEFCE8", border: "#FDE68A", accent: "#CA8A04" },
    { bg: "#FFF7ED", border: "#FED7AA", accent: "#EA580C" },
    { bg: "#FFF1F2", border: "#FECDD3", accent: "#E11D48" },
    { bg: "#FDF4FF", border: "#E9D5FF", accent: "#9333EA" },
  ];

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        const p = pastels[i % pastels.length];
        return (
          <div
            key={i}
            className="rounded-2xl border shadow-sm overflow-hidden transition-all"
            style={{ background: p.bg, borderColor: p.border }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              style={isOpen ? { borderLeft: `4px solid ${p.accent}` } : { borderLeft: "4px solid transparent" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${p.accent}18`, color: p.accent }}
                >
                  <HelpCircle className="size-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                  {item.question}
                </h3>
              </div>
              <ChevronDown
                className="size-6 shrink-0 transition-transform duration-200"
                style={{
                  color: isOpen ? p.accent : "#9CA3AF",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <p
                  className="text-base text-gray-700 leading-relaxed pl-5 border-l-2 py-1 ml-1"
                  style={{ borderColor: p.accent }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

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
      <section
        className="relative text-white overflow-hidden min-h-[560px]"
        style={{
          backgroundImage: `url(${heroFamilyImg})`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Lighter gradient — image visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="pointer-events-none absolute inset-0 section-pattern opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Tagline */}
              <div className="flex items-center gap-2 mb-6">
                <div className="gold-divider" />
                <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Trusted Insurance Partners</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                To serve as a sole, reliable source for addressing all{" "}
                <span className="text-secondary">insurance needs</span>
              </h1>

              {/* Prominent subtitle */}
              <p className="text-xl md:text-2xl text-secondary font-bold mb-3 font-sans leading-snug">
                Your trusted partner for life &amp; health coverage
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg font-sans">
                Identifying and delivering the best value solutions for individuals and associations across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold text-base px-8 py-5 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <Link to="/insurances">
                    Explore Our Policies
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white bg-white/10 text-white hover:bg-white hover:text-primary font-bold text-base px-8 py-5 rounded-lg backdrop-blur-sm"
                >
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* ── Trust Indicators ─────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5000+", label: "Happy Clients" },
              { value: "₹100Cr+", label: "Claims Settled" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat, i) => (
              <div key={i} className="py-4">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase font-sans mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">Our Insurance Services</h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-sans leading-relaxed">
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
                  className="group relative rounded-2xl overflow-hidden h-96 block shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Lighter gradient overlay — image more visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent group-hover:from-primary/90 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-3">
                      <div className="w-14 h-14 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                        <Icon className="size-7 text-secondary" />
                      </div>
                      <h3 className="text-3xl font-bold text-white leading-snug mb-2">{service.title}</h3>
                      <p className="text-white/80 text-base font-sans">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary text-base font-bold group-hover:gap-3 transition-all duration-300 font-sans mt-2">
                      View Plans
                      <ChevronRight className="size-5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Why Premier</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">Why Choose Us</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Expert Guidance",
                desc: "Our certified advisors help you navigate complex insurance options with personalized, unbiased advice.",
                Icon: Compass,
                pastel: { bg: "#EFF6FF", border: "#BFDBFE", icon: "#2563EB" },
              },
              {
                title: "Trusted Partnerships",
                desc: "We work with India's top insurers — LIC, Star Health, and more — to bring you the best coverage.",
                Icon: Handshake,
                pastel: { bg: "#F0FDF4", border: "#BBF7D0", icon: "#16A34A" },
              },
              {
                title: "Hassle-Free Claims",
                desc: "From filing to settlement, we guide you through every step to ensure smooth and timely claim processing.",
                Icon: ClipboardCheck,
                pastel: { bg: "#FFF7ED", border: "#FED7AA", icon: "#EA580C" },
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 card-premium text-center group border"
                style={{ background: item.pastel.bg, borderColor: item.pastel.border }}
              >
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ background: `${item.pastel.icon}18`, border: `1px solid ${item.pastel.icon}30`, color: item.pastel.icon }}
                >
                  <item.Icon className="size-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50 section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">Frequently Asked Questions</h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
              Answers to the most common questions about life and health insurance — and how to manage your policy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <ContactCTA />
    </div>
  );
}
