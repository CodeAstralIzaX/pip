import React from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ArrowRight, ChevronRight, Shield, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import whatsappIcon from "../components/assets/whatsapp.svg";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Plan {
  name: string;
  description: string;
}

interface SubCategory {
  id: string;
  label: string;
  plans: Plan[];
}

interface Category {
  id: string;
  label: string;
  tagline: string;
  heroGradient: string;
  subCategories: SubCategory[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  {
    id: "life",
    label: "Life Insurance",
    tagline: "Small steps today, strong future tomorrow",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #002E5F 62.5%, #0D5097 100%)",
    subCategories: [
      {
        id: "endowment",
        label: "Endowment Plans",
        plans: [
          { name: "Single Premium Endowment Plan", description: "A single-premium savings plan that provides life cover with a lump-sum maturity benefit." },
          { name: "New Endowment Plan", description: "Combines savings and protection; ideal for long-term financial goals with bonus participation." },
          { name: "New Jeevan Anand", description: "An endowment plan offering lifelong protection even after policy maturity along with bonuses." },
          { name: "Jeevan Lakshya", description: "Provides guaranteed annual income to family if the life assured passes away during the term." },
          { name: "Jeevan Labh Plan", description: "Limited premium endowment plan with attractive bonuses and a lump sum on maturity." },
          { name: "Amritbaal", description: "A child-focused endowment plan ensuring funds for key milestones like education and marriage." },
          { name: "Bima Jyoti", description: "Guaranteed additions-based endowment with predictable returns and life cover." },
          { name: "Nav Jeevan Shree", description: "Flexible premium payment option with guaranteed additions and maturity benefits." },
          { name: "Bima Lakshmi", description: "Women-centric endowment plan designed to address unique financial needs of women." },
        ],
      },
      {
        id: "wholelife",
        label: "Whole Life Plans",
        plans: [
          { name: "Whole Life Policy", description: "Provides lifelong coverage with premiums payable for a limited period and sum assured at age 100." },
          { name: "LIC Jeevan Umang", description: "Offers whole life cover with annual survival benefits from end of premium-paying term." },
          { name: "LIC Jeevan Utsav", description: "Whole life plan with guaranteed additions and flexible income or lump-sum payout." },
        ],
      },
      {
        id: "moneyback",
        label: "Money Back Plans",
        plans: [
          { name: "New Money Back Plan – 20 Years", description: "Provides periodic survival benefits during the term plus full sum assured at maturity." },
          { name: "New Money Back Plan – 25 Years", description: "25-year money-back plan with regular payouts every 5 years during the policy term." },
          { name: "Jeevan Tarun", description: "Child money-back plan with flexible survival benefits from age 20 to 24, ideal for education." },
          { name: "Bima Bachat", description: "Single premium money-back plan with survival benefits paid at regular intervals." },
        ],
      },
      {
        id: "term",
        label: "Term Assurance Plans",
        plans: [
          { name: "LIC Tech Term", description: "Online pure term plan with high sum assured at affordable premiums — no physical medical." },
          { name: "LIC Jeevan Amar", description: "Flexible term plan with increasing or level cover options to suit your changing needs." },
          { name: "LIC New Tech Term", description: "Updated online term plan with premium return option and wider sum assured bands." },
        ],
      },
      {
        id: "riders",
        label: "Riders",
        plans: [
          { name: "Accidental Death & Disability Benefit Rider", description: "Extra benefit paid on accidental death or permanent disability during the policy term." },
          { name: "Accident Benefit Rider", description: "Additional sum paid on accidental death; can be attached to select base plans." },
          { name: "New Critical Illness Benefit Rider", description: "Lump sum on diagnosis of any of the covered 15 critical illnesses." },
          { name: "Premium Waiver Benefit Rider", description: "Waives future premiums if the proposer dies during the term." },
        ],
      },
    ],
  },
  {
    id: "general",
    label: "General Insurance",
    tagline: "Comprehensive protection for every risk you face",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #003a1f 62.5%, #006b3a 100%)",
    subCategories: [
      {
        id: "motor",
        label: "Motor Insurance",
        plans: [
          { name: "Private Car Insurance", description: "Comprehensive and third-party cover for your personal car against accidents, theft, and natural calamities." },
          { name: "Two-Wheeler Insurance", description: "Mandatory and comprehensive policies to protect your bike or scooter on every ride." },
          { name: "Commercial Vehicle Insurance", description: "Cover for taxis, trucks, buses, and other commercial vehicles including goods in transit." },
        ],
      },
      {
        id: "health",
        label: "Health Insurance",
        plans: [
          { name: "Individual Health Plan", description: "Covers hospitalisation, day-care procedures, pre- and post-hospitalisation expenses." },
          { name: "Family Floater Plan", description: "A single sum insured shared by all family members — more economical than individual plans." },
          { name: "Critical Illness Plan", description: "Lump-sum payout on diagnosis of life-threatening illnesses like cancer, heart attack, or stroke." },
          { name: "Senior Citizen Health Plan", description: "Designed for individuals above 60 — covers pre-existing diseases after a short waiting period." },
        ],
      },
      {
        id: "travel",
        label: "Travel Insurance",
        plans: [
          { name: "Domestic Travel Insurance", description: "Covers trip cancellation, medical emergencies, and baggage loss during travel within India." },
          { name: "International Travel Insurance", description: "Comprehensive cover for overseas travel including medical, repatriation, and loss of passport." },
          { name: "Student Travel Insurance", description: "Specially designed for students studying abroad covering tuition fee protection and medical expenses." },
        ],
      },
      {
        id: "fire",
        label: "Fire & Property",
        plans: [
          { name: "Standard Fire & Special Perils", description: "Covers damage to buildings and contents due to fire, lightning, storm, and allied perils." },
          { name: "Householders Package", description: "All-in-one home insurance covering building, contents, burglary, and electronic equipment." },
          { name: "Shopkeepers Package", description: "Comprehensive cover for shop premises, stock, employees, and public liability." },
        ],
      },
    ],
  },
  {
    id: "home",
    label: "Home Insurance",
    tagline: "Your home is your sanctuary — keep it safe",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #4a1a00 62.5%, #9b3d00 100%)",
    subCategories: [
      {
        id: "structure",
        label: "Structure Cover",
        plans: [
          { name: "Building Structure Insurance", description: "Covers the physical structure of your home against fire, flood, storm, earthquake, and other perils." },
          { name: "Apartment Insurance", description: "Specifically designed for flat owners — covers the interior structure and common area liability." },
          { name: "Under-Construction Cover", description: "Protects your investment during the construction phase against unforeseen structural damage." },
        ],
      },
      {
        id: "contents",
        label: "Contents Cover",
        plans: [
          { name: "Household Contents Insurance", description: "Covers furniture, appliances, electronics, and valuables inside your home against theft and damage." },
          { name: "Jewellery & Valuables Floater", description: "All-risk cover for jewellery, watches, and portable valuables both at home and outside." },
          { name: "Electronic Equipment Cover", description: "Protection for laptops, home theatres, refrigerators, and other electronic appliances." },
        ],
      },
      {
        id: "liability",
        label: "Liability Cover",
        plans: [
          { name: "Owner's Liability Insurance", description: "Covers legal liability arising from bodily injury or property damage to third parties on your premises." },
          { name: "Domestic Servant Liability", description: "Protects you against legal claims by domestic workers injured while working in your home." },
        ],
      },
      {
        id: "addon",
        label: "Add-On Covers",
        plans: [
          { name: "Rent Compensation", description: "Pays alternative accommodation expenses if your home becomes uninhabitable due to an insured peril." },
          { name: "Key & Lock Replacement", description: "Covers cost of replacing locks and keys after a burglary or loss." },
          { name: "Pedal Cycle Cover", description: "Covers your bicycles against accidental damage, theft, and third-party claims." },
        ],
      },
    ],
  },
  {
    id: "health",
    label: "Health Insurance",
    tagline: "Your health is your greatest wealth — protect it",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #1a003f 62.5%, #4b0082 100%)",
    subCategories: [
      {
        id: "individual",
        label: "Individual Plans",
        plans: [
          { name: "Individual Health Insurance", description: "Covers hospitalisation and related medical expenses for a single person." },
          { name: "Personal Accident Plan", description: "Provides compensation for accidental death, disability, and medical expenses due to accidents." },
          { name: "Hospital Cash Benefit", description: "Daily cash allowance for each day of hospitalisation to cover incidental expenses." },
        ],
      },
      {
        id: "family",
        label: "Family Plans",
        plans: [
          { name: "Family Floater Plan", description: "One sum insured covers all family members — cost-effective and hassle-free." },
          { name: "Maternity Insurance", description: "Covers normal and C-section delivery expenses along with newborn baby cover." },
          { name: "Child Health Plan", description: "Tailored plan for children covering hospitalisation, vaccinations, and day-care procedures." },
        ],
      },
      {
        id: "senior",
        label: "Senior Citizen Plans",
        plans: [
          { name: "Senior Citizen Health Plan", description: "Comprehensive cover for individuals aged 60+ including pre-existing disease coverage." },
          { name: "Arogya Sanjeevani Policy", description: "Standard health plan with uniform features across all insurers — easy to understand and compare." },
        ],
      },
      {
        id: "critical",
        label: "Critical Illness",
        plans: [
          { name: "Cancer Care Plan", description: "Lump sum payout at various stages of cancer diagnosis to cover treatment and recovery." },
          { name: "Heart Care Plan", description: "Covers cardiac surgeries, heart attacks, and related hospitalisation." },
          { name: "Comprehensive Critical Illness", description: "Covers 30+ critical illnesses including cancer, stroke, organ failure, and more." },
        ],
      },
    ],
  },
  {
    id: "business",
    label: "Business Insurance",
    tagline: "Safeguard your business, secure your success",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #1a1a00 62.5%, #4d4d00 100%)",
    subCategories: [
      {
        id: "property",
        label: "Property & Assets",
        plans: [
          { name: "Commercial Property Insurance", description: "Covers office buildings, warehouses, and business premises against fire and allied perils." },
          { name: "Machinery Breakdown Insurance", description: "Covers sudden breakdown of plant and machinery leading to business interruption." },
          { name: "Electronic Equipment Insurance", description: "All-risk cover for computers, servers, and electronic equipment used in your business." },
        ],
      },
      {
        id: "bizliability",
        label: "Liability Insurance",
        plans: [
          { name: "Public Liability Insurance", description: "Covers legal liability to third parties for bodily injury or property damage." },
          { name: "Product Liability Insurance", description: "Protects manufacturers and sellers from claims arising from defective products." },
          { name: "Professional Indemnity", description: "Protects professionals against claims of negligence or errors in their professional services." },
          { name: "Directors & Officers Liability", description: "Covers personal liability of directors and officers for wrongful acts in managing the company." },
        ],
      },
      {
        id: "employee",
        label: "Employee Benefits",
        plans: [
          { name: "Group Health Insurance", description: "Provides health coverage to all employees under a single policy — great for team welfare." },
          { name: "Group Term Life Insurance", description: "Life cover for employees with low premiums and easy enrollment." },
          { name: "Workmen's Compensation", description: "Mandatory cover protecting employers from claims by employees injured during work." },
        ],
      },
      {
        id: "marine",
        label: "Marine & Transit",
        plans: [
          { name: "Marine Cargo Insurance", description: "Covers goods in transit by sea, air, road, or rail against loss and damage." },
          { name: "Marine Hull Insurance", description: "Covers the vessel itself against damage, collision, fire, and total loss." },
          { name: "Inland Transit Insurance", description: "Protects cargo transported by road or rail within India." },
        ],
      },
    ],
  },
];

function getCategoryById(id: string): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Insurances() {
  const { category: categoryParam } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const activeCategory = getCategoryById(categoryParam ?? CATEGORIES[0].id);
  const [activeSubId, setActiveSubId] = React.useState(activeCategory.subCategories[0].id);

  React.useEffect(() => {
    setActiveSubId(activeCategory.subCategories[0].id);
  }, [activeCategory.id]);

  const activeSub =
    activeCategory.subCategories.find((s) => s.id === activeSubId) ??
    activeCategory.subCategories[0];

  return (
    <div className="w-full">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative text-white py-16 md:py-24 overflow-hidden"
        style={{ background: activeCategory.heroGradient }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-white font-medium">{activeCategory.label}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{activeCategory.label}</h1>
          <p className="text-lg text-blue-100 italic">&ldquo;{activeCategory.tagline}&rdquo;</p>
        </div>
      </section>

      {/* ── Category pills ─────────────────────────────────────── */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-20 overflow-x-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/insurances/${cat.id}`)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory.id === cat.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main: sidebar + plans ──────────────────────────────── */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT SIDEBAR */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div
                  className="px-5 py-4 text-white text-sm font-semibold uppercase tracking-wide"
                  style={{ background: activeCategory.heroGradient }}
                >
                  Plan Categories
                </div>
                <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible">
                  {activeCategory.subCategories.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubId(sub.id)}
                      className={`flex items-center justify-between px-5 py-3.5 text-sm font-medium text-left whitespace-nowrap lg:whitespace-normal border-b border-gray-50 last:border-b-0 transition-all duration-150 ${
                        activeSub.id === sub.id
                          ? "bg-primary/5 text-primary border-l-4 border-l-primary"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-l-transparent"
                      }`}
                    >
                      <span>{sub.label}</span>
                      {activeSub.id === sub.id && (
                        <ChevronRight className="size-4 shrink-0 hidden lg:block" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick contact */}
              <div className="mt-6 bg-primary rounded-2xl p-5 text-white shadow-md hidden lg:block">
                <Shield className="size-8 mb-3 opacity-80" />
                <p className="text-sm font-semibold mb-1">Need help choosing?</p>
                <p className="text-xs text-blue-200 mb-4">Talk to our expert advisors.</p>
                <a
                  href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-lg"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </aside>

            {/* RIGHT PANEL */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{activeSub.label}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {activeSub.plans.length} plan{activeSub.plans.length !== 1 ? "s" : ""} available
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeSub.plans.map((plan, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-1 rounded-full bg-primary shrink-0" />
                      <h3 className="text-base font-semibold text-gray-900 leading-snug">{plan.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed pl-4">{plan.description}</p>
                    <div className="pl-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        Get a Quote <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-14 md:py-20"
        style={{ background: "radial-gradient(100% 100% at 50% 50%, #002E5F 62.5%, #0D5097 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)]" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="size-12 mx-auto mb-5 text-white/60 stroke-[1.2]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to secure your future?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Our advisors will help you pick the perfect plan for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <a
              href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg"
              style={{ background: "#cc9c42" }}
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
