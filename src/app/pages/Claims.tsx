import { Link } from "react-router";
import { ChevronRight, FileText, ClipboardCheck, Search, CheckCircle2 } from "lucide-react";
import { ContactCTA } from "../components/ContactCTA";
import claimsFormImg from "../components/assets/claims_form.jpg";

const STEP_PASTELS = [
  { bg: "#EFF6FF", border: "#BFDBFE", icon: "#2563EB", num: "#DBEAFE" },
  { bg: "#F0FDF4", border: "#BBF7D0", icon: "#16A34A", num: "#DCFCE7" },
  { bg: "#FFF7ED", border: "#FED7AA", icon: "#EA580C", num: "#FFEDD5" },
  { bg: "#FFF1F2", border: "#FECDD3", icon: "#E11D48", num: "#FFE4E6" },
];

export default function Claims() {
  const claimSteps = [
    {
      icon: FileText,
      step: "01",
      title: "Intimate the Claim",
      description: "Notify us about the insured event as soon as possible with basic details.",
    },
    {
      icon: ClipboardCheck,
      step: "02",
      title: "Submit Documents",
      description: "Provide the required documents such as policy copy, ID proof, medical bills, or FIR as applicable.",
    },
    {
      icon: Search,
      step: "03",
      title: "Verification & Processing",
      description: "The insurer reviews and verifies the submitted details and documents as per the policy terms.",
    },
    {
      icon: CheckCircle2,
      step: "04",
      title: "Claim Settlement",
      description: "Once approved, the claim amount is disbursed to the policyholder or nominee as per the policy.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px]">
        <div className="absolute inset-0">
          <img
            src={claimsFormImg}
            alt="Insurance Claims"
            className="w-full h-full object-cover"
            style={{ objectPosition: "right top" }}
          />
          {/* Lighter gradient — image visible on right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20" />
        </div>
        <div className="pointer-events-none absolute inset-0 section-pattern opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-base text-white/50 mb-8 font-sans" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-4 shrink-0" />
            <span className="text-white font-semibold">Claims</span>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="gold-divider" />
              <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Claims Process</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">Insurance Claims</h1>
            {/* Prominent tagline */}
            <p className="text-2xl md:text-3xl text-secondary font-bold mb-6 font-sans leading-snug">
              &ldquo;We guide you every step of the way&rdquo;
            </p>
            <p className="text-base text-white/80 leading-relaxed font-sans max-w-xl">
              A claim is a formal request made by the policyholder or nominee to receive the benefits promised under the insurance policy. It is initiated when an insured event occurs, such as illness, accident, damage, or loss of life.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* What is a Claim Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-10 card-premium">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">Understanding Claims</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-7 font-sans">
                Once the claim is submitted along with the required documents, the insurer reviews and verifies the details before processing and settling the claim as per the policy terms.
              </p>
              <ul className="space-y-4">
                {[
                  "Claims can be filed for health emergencies, accidents, property damage, or loss of life",
                  "Required documents vary based on the type of insurance and event",
                  "Settlement is processed as per the terms and conditions of your policy",
                  "Our team guides you through every step to ensure a smooth process",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-secondary shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700 font-sans leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Process Steps */}
      <section className="py-16 md:py-20 bg-gray-50 section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Step by Step</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">How to File a Claim</h2>
            <div className="gold-divider mx-auto mb-5" />
            <p className="text-base text-gray-500 max-w-xl mx-auto font-sans leading-relaxed">Follow these simple steps to file and track your insurance claim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {claimSteps.map((step, index) => {
              const p = STEP_PASTELS[index];
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative rounded-2xl p-7 card-premium group border"
                  style={{ background: p.bg, borderColor: p.border }}
                >
                  <div
                    className="absolute top-5 right-5 text-4xl font-black"
                    style={{ color: p.num }}
                  >
                    {step.step}
                  </div>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors"
                    style={{ background: `${p.icon}18`, color: p.icon }}
                  >
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-sans">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
