import { Link } from "react-router";
import { ChevronRight, FileText, ClipboardCheck, Search, CheckCircle2 } from "lucide-react";
import { ContactCTA } from "../components/ContactCTA";
import heroFamilyImg from "../components/assets/hero_family.jpg";


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
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroFamilyImg} alt="Insurance Claims" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>
        <div className="pointer-events-none absolute inset-0 section-pattern opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-8 font-sans" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-white font-medium">Claims</span>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="gold-divider" />
              <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase font-sans">Claims Process</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Insurance Claims</h1>
            <p className="text-base text-white/70 leading-relaxed font-sans">
              A claim is a formal request made by the policyholder or nominee to receive the benefits promised under the insurance policy. It is initiated when an insured event occurs, such as illness, accident, damage, or loss of life.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* What is a Claim Section */}
      <section className="py-14 md:py-18 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 card-premium">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Understanding Claims</h2>
              <p className="text-gray-500 leading-relaxed mb-6 font-sans">
                Once the claim is submitted along with the required documents, the insurer reviews and verifies the details before processing and settling the claim as per the policy terms.
              </p>
              <ul className="space-y-3">
                {[
                  "Claims can be filed for health emergencies, accidents, property damage, or loss of life",
                  "Required documents vary based on the type of insurance and event",
                  "Settlement is processed as per the terms and conditions of your policy",
                  "Our team guides you through every step to ensure a smooth process",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Process Steps */}
      <section className="py-14 md:py-18 bg-gray-50 section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase font-sans">Step by Step</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-3">How to File a Claim</h2>
            <div className="gold-divider mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto font-sans text-sm">Follow these simple steps to file and track your insurance claim.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {claimSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative bg-white rounded-2xl p-6 card-premium group">
                  <div className="absolute top-4 right-4 text-3xl font-black text-primary/5 group-hover:text-secondary/20 transition-colors">{step.step}</div>
                  <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">{step.description}</p>
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
