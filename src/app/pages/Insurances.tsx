import React from "react";
import { Link, useParams, useNavigate } from "react-router";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  CheckCircle2,
  Info,
  ChevronDown,
  Users,
  User,
  HeartPulse,
  ShieldCheck,
  ShieldOff,
  Clock,
  BadgeCheck,
  Stethoscope,
  Building2,
  HandHeart,
  Umbrella,
  ShieldPlus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { ContactCTA } from "../components/ContactCTA";
import whatsappIcon from "../components/assets/whatsapp.svg";
import familyHealthImg from "../components/assets/family_health.jpg";
import coupleWalkingImg from "../components/assets/couple_walking.png";
import elderlyImg from "../components/assets/elderly_couple.png";
import graduationImg from "../components/assets/graduation.png";

// ─── Pastel colour palettes ───────────────────────────────────────────────────
const PLAN_PASTELS = [
  { bg: "#EFF6FF", border: "#BFDBFE", dot: "#2563EB" },
  { bg: "#F0FDF4", border: "#BBF7D0", dot: "#16A34A" },
  { bg: "#FEFCE8", border: "#FDE68A", dot: "#CA8A04" },
  { bg: "#FFF7ED", border: "#FED7AA", dot: "#EA580C" },
  { bg: "#FFF1F2", border: "#FECDD3", dot: "#E11D48" },
];

const HEALTH_CARD_PASTELS = [
  { bg: "#EFF6FF", border: "#BFDBFE", icon: "#2563EB" },
  { bg: "#F0FDF4", border: "#BBF7D0", icon: "#16A34A" },
  { bg: "#FFF7ED", border: "#FED7AA", icon: "#EA580C" },
  { bg: "#FDF4FF", border: "#E9D5FF", icon: "#9333EA" },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface PlanDetail {
  eligibility?: string;
  maturityAge?: string;
  policyTerm?: string;
  premiumPayingTerm?: string;
  modeOfPremium?: string;
  sumAssured?: string;
  keyBenefits: string[];
  idealFor?: string;
}

interface Plan {
  name: string;
  description: string;
  details: PlanDetail;
}

interface SubCategory {
  id: string;
  label: string;
  plans: Plan[];
}

interface HealthItem {
  title: string;
  body: string;
}

interface HealthSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
  items: HealthItem[];
}

interface Category {
  id: string;
  label: string;
  tagline: string;
  heroGradient: string;
  subCategories: SubCategory[];
  healthSections?: HealthSection[];
  healthIntro?: { title: string; irdai?: string; points: string[] }[];
}

// ─── Health Data ──────────────────────────────────────────────────────────────
const HEALTH_INTRO = [
  {
    title: "Health Insurance for Individuals",
    irdai: "IRDAI UIN: SHAHLIP25037V082425",
    points: [
      "Coverage for unexpected medical expenses",
      "Tax deduction benefits",
      "Coverage for pre- and post-hospitalisation costs",
      "Holistic product — Star Comprehensive Insurance Policy",
    ],
  },
  {
    title: "Health Insurance for Family",
    points: [
      "Coverage for entire family",
      "Affordable premiums that don't break the bank",
      "Maternity and new born coverage",
      "Well-being and financial safety ensured",
    ],
  },
  {
    title: "Health Insurance for Senior Citizens",
    irdai: "IRDAI UIN: SHAHLIP22199V062122",
    points: [
      "Well-being and financial safety ensured",
      "Coverage for pre-existing diseases",
      "Stress-free retirement",
      "Senior Citizens Red Carpet Health Insurance Policy",
    ],
  },
  {
    title: "Group Health Insurance",
    points: [
      "Comprehensive coverage for entire organisations",
      "Cashless treatment at 14,000+ network hospitals",
      "Covers employees and their dependents",
      "Flexible sum insured options for groups",
    ],
  },
];

const HEALTH_SECTIONS: HealthSection[] = [
  {
    id: "inclusion",
    label: "Inclusions",
    icon: <ShieldCheck className="size-6" />,
    accent: "#002147",
    items: [
      { title: "Hospitalisation Expenses", body: "Most Medical Insurance plans cover hospitalisation expenses such as room rents, ICU charges, surgery expenses, doctor consultations, etc. incurred on illness, injury or accidents." },
      { title: "Pre & Post-Hospitalisation", body: "Understanding the impact of rising medical expenses, most Medical Insurance Policies cover pre and post-hospitalisation expenses related to in-patient hospitalisation." },
      { title: "Day Care Treatment", body: "Technological advancements have reduced the time of surgeries and treatments that once cost a lot of time. Hence, buy health insurance that cover Day Care treatments and procedures." },
      { title: "Domiciliary Hospitalization", body: "Some Medical Insurance Policies also cover Domiciliary treatments taken at home on the advice of the medical practitioner." },
      { title: "Organ Donor Expenses", body: "Most health insurance policies cover Organ Donor Expenses. Organ harvesting and transplantation expenses are covered if the insured person is the recipient." },
      { title: "Road Traffic Accident", body: "Accidents are unpredictable. Most mediclaim plans cover in-patient hospitalisations due to road traffic accidents." },
      { title: "AYUSH Cover", body: "In addition to allopathic treatments, most private health Insurance plans also cover alternative systems of medicines such as Ayurveda, Yoga & Naturopathy, Unani, Siddha and Homeopathy." },
      { title: "Health Check-up", body: "In addition to hospitalisation and other benefits, Medical Insurance Policies also cover the expenses incurred for Health Check-up." },
      { title: "Automatic Restoration", body: "What if your medical expenses exceed your Sum Insured? At such times, the restoration benefit restores 100% of your Sum Insured automatically after its full or partial exhaustion." },
    ],
  },
  {
    id: "exclusion",
    label: "Exclusions",
    icon: <ShieldOff className="size-6" />,
    accent: "#8b3a3a",
    items: [
      { title: "Self-Inflicted Injuries", body: "Any form of self-inflicted injuries will not be covered under Medical Insurance policies." },
      { title: "Obesity / Weight Control", body: "Most health insurance will not cover expenses incurred due to the treatment for obesity or weight control." },
      { title: "Cosmetic or Plastic Surgery", body: "Most Health Insurance Plans will not cover expenses incurred due to the treatment for cosmetic or plastic surgery if performed to enhance the appearance." },
      { title: "Hazardous or Adventure Sports", body: "Health Insurance policies will not cover expenses incurred due to any health complications for indulging in hazardous or adventure sports." },
      { title: "Dental Treatments", body: "Health Insurance Plans will not cover Dental treatment or surgery unless necessitated due to accidental injuries and requiring hospitalisation." },
      { title: "Medical Aid", body: "Health Insurance Plans will not cover the cost of spectacles, hearing aids, wheelchairs, walkers and crutches and other similar aids." },
    ],
  },
  {
    id: "waiting",
    label: "Waiting Periods",
    icon: <Clock className="size-6" />,
    accent: "#cc9c42",
    items: [
      { title: "Initial Waiting Period", body: "Initial waiting period denotes the time during which the policyholder has to wait to avail the Health policy benefits. However, it will not apply for hospitalisation expenses due to accidents as they will be covered from day 1." },
      { title: "Specific Diseases", body: "Specific diseases are a list of diseases or ailments for which the Health Insurance Company has a waiting period. The expenses incurred due to such diseases will be covered after the completion of the waiting period." },
      { title: "Pre-Existing Diseases", body: "Pre-Existing Diseases (PED) refer to the existing health condition of the person before taking the policy. Every Health Insurance Company has a PED waiting period. PED will be covered after the completion of the waiting period." },
      { title: "Maternity Benefit", body: "Health Insurance Plans have Maternity Benefits and Newborn Cover. Such benefits can be availed after the completion of the waiting period." },
    ],
  },
  {
    id: "claims",
    label: "Claims",
    icon: <BadgeCheck className="size-6" />,
    accent: "#2563eb",
    items: [
      { title: "Anywhere Cashless Claims", body: "Now avail Anywhere Cashless Claims all across India. With 14,000+ Network Hospitals, we are also one of India's widest medical coverage providers." },
      { title: "Network Hospitals", body: "We got you covered by offering best health insurance plans under our valuable service providers, agreed network and network hospitals for quality treatment." },
    ],
  },
];

// ─── Star Health Plans ───────────────────────────────────────────────────────
interface HealthPlan {
  name: string;
  irdai: string;
  tagline: string;
  benefits: string[];
  ctaLabel: string;
  icon: React.ReactNode;
}

const HEALTH_PLANS: HealthPlan[] = [
  {
    name: "Star Health Assure Insurance Policy",
    irdai: "IRDAI UIN: SHAHLIP23131V022223",
    tagline: "For those seeking widest benefits & highest coverage for risk.",
    icon: <HandHeart className="size-9" />,
    benefits: [
      "Unlimited 100% Automatic Restoration & consumables included.",
      "The perfect companion for your family planning — Extensive Maternity benefits, Highest Delivery Expenses & Assisted Reproduction Treatment, New Born Cover & More.",
      "Entry Age upto 75, as well as 2 child dependent from 91 days so you can add your children, parents & parent in laws.",
      "25% no claim bonus / year.",
      "Any room category on higher S.I.",
      "AYUSH treatments complete cover, Free health check-up every year.",
      "All Daycare Treatments, Modern Treatments, Consumables cover, Midterm Inclusion & more.",
    ],
    ctaLabel: "Get Assure",
  },
  {
    name: "Young Star Insurance Policy",
    irdai: "IRDAI UIN: SHAHLIP25035V052425",
    tagline: "For the young & healthy, seeking a risk protection policy.",
    icon: <Umbrella className="size-9" />,
    benefits: [
      "Lowest premium, meant for those under 40.",
      "Only 1 year waiting period for slow-growing diseases.",
      "Midterm Inclusion for future spouse + child.",
    ],
    ctaLabel: "Get Young Star",
  },
  {
    name: "Star Comprehensive Insurance Policy",
    irdai: "IRDAI UIN: SHAHLIP25037V082425",
    tagline: "For those seeking complete coverage & pre-existing disease waiting period reduction.",
    icon: <ShieldPlus className="size-9" />,
    benefits: [
      "Secure yourself sooner — PED Buyback option to reduce waiting period for PED to 1 year.",
      "Support for family planning: Delivery expenses, New Born Baby cover & more.",
      "50% no claim bonus / year — with Personal Accident Cover equal to your sum insured, get benefits of life insurance in Health.",
      "100% Automatic restoration once per year on complete exhaustion of sum insured.",
      "Entry age from 3 months up to 65 years, add your 2 children.",
      "OP, Dental & Ophthalmic benefits up to sublimits.",
      "Modern Treatments, Midterm inclusion, & more.",
    ],
    ctaLabel: "Get Comprehensive",
  },
];

// ─── Life Insurance Data — Specific LIC Plans ─────────────────────────────────
const CATEGORIES: Category[] = [
  {
    id: "life",
    label: "Life Insurance",
    tagline: "The best gift you can give your child is a secure future",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #002E5F 62.5%, #0D5097 100%)",
    subCategories: [
      {
        id: "endowment",
        label: "Endowment Plans",
        plans: [
          {
            name: "Plan 714: LIC's New Endowment Plan",
            description: "With profits, non-linked, protection and saving Endowment Plan offering high sum assured at low premium.",
            details: {
              eligibility: "8 years – 50 years",
              maturityAge: "Maximum 75 years",
              policyTerm: "12 – 35 years",
              modeOfPremium: "Yearly, Half-Yearly, Quarterly & Monthly (SSS / ECS)",
              sumAssured: "₹2,00,000 and above",
              keyBenefits: [
                "With profits, non-linked, protection and saving Endowment Plan",
                "High sum assured at low premium",
                "Maturity Benefit: Sum Assured + Vested Bonus + FAB (if any)",
                "Death Benefit: Basic SA or 7× yearly premium (whichever is higher) + Vested Bonus + FAB; not less than 105% of total premiums paid",
                "Loan and Surrender facility for emergency needs (available after 1 year)",
                "Tax benefit as per Income Tax Exemption and Service Tax rules",
              ],
              idealFor: "Plan tailored to your planned needs — marriage, education or family expenses.",
            },
          },
          {
            name: "Plan 715: LIC's New Jeevan Anand",
            description: "An unparalleled plan combining whole life and endowment — lifelong cover even after maturity payout.",
            details: {
              eligibility: "18 years – 50 years",
              maturityAge: "Maximum 75 years",
              policyTerm: "15 – 35 years",
              modeOfPremium: "Yearly, Half-Yearly, Quarterly & Monthly (SSS / ECS)",
              sumAssured: "₹2,00,000 and above",
              keyBenefits: [
                "An unparalleled plan combining whole life and endowment",
                "Accident Insurance amount increased to ₹1 crore (all plans included)",
                "Maturity Benefit: Basic Sum Assured + Vested Bonus + FAB (if any)",
                "Death Benefit: 125% of Basic SA or 7× annualised premium (whichever is higher) + Vested Bonus + FAB; not less than 105% of premiums paid",
                "Loan and Surrender facility for emergency needs (after 1 year)",
                "Tax benefit as per Income Tax Exemption rules",
              ],
              idealFor: "Plan that provides lifelong insurance coverage even after the maturity amount is paid. While living and after life.",
            },
          },
          {
            name: "Plan 733: LIC's Jeevan Lakshya",
            description: "A limited premium, non-linked, participating savings endowment plan that secures family income on early death plus a lump sum at maturity.",
            details: {
              eligibility: "18 years – 50 years",
              maturityAge: "Maximum 65 years",
              policyTerm: "13 – 25 years",
              modeOfPremium: "Yearly, Half-Yearly, Quarterly & Monthly (SSS / ECS — 3 months' premium required at proposal under monthly mode)",
              sumAssured: "₹2,00,000 and above",
              keyBenefits: [
                "Limited premium, non-linked, participating Savings Endowment Plan",
                "No premium payment is required for the final 3 years of policy term",
                "Maturity Benefit: Basic Sum Assured + Vested Bonus + FAB (if any)",
                "On death: 10% of Basic SA paid every year from date of death until 1 year before maturity",
                "Premiums stop on death — policy continues in force",
                "At maturity: 110% of Basic SA + Bonus + FAB (if any) paid to nominee",
                "Available riders: Accidental Death & Disability, Accident Benefit, Term Assurance",
                "Loan facility available after 3 years",
              ],
              idealFor: "Parents with young children, primary earners, and long-term savers planning for education, marriage or family security.",
            },
          },
          {
            name: "Plan 736: LIC's Jeevan Labh Plan",
            description: "A limited premium, non-linked, participating savings Endowment Plan where premiums stop early but cover and bonus accumulation continue.",
            details: {
              eligibility: "Minimum 8 years; max entry age 59 / 54 / 50 years for 16 / 21 / 25-year terms",
              maturityAge: "75 years NBD",
              policyTerm: "16, 21, or 25 years",
              premiumPayingTerm: "10, 15, or 16 years respectively (limited pay)",
              modeOfPremium: "Yearly, Half-Yearly, Quarterly & Monthly (SSS / NACH)",
              sumAssured: "₹2,00,000 and above (no maximum). Multiples of ₹10,000 up to ₹4.5 L; ₹25,000 above ₹4.5 L",
              keyBenefits: [
                "Limited premium, non-linked, Participating Savings Endowment Plan",
                "Sum Assured on Death: Basic Sum Assured",
                "Death Benefit: SA on Death + Vested Bonus + FAB (if any)",
                "Maturity Benefit: Basic Sum Assured + Vested Bonus + FAB (if any)",
                "Maturity / Death claim payable in 5 / 10 / 15-year instalments (option exercisable 3 months before maturity)",
                "If Term Rider opted for ₹5,00,000 — additional ₹5,00,000 paid with death benefit",
                "If ADDB Rider opted for ₹5,00,000 — additional ₹5,00,000 on accidental death",
                "Surrender / Loan facility after one year",
              ],
              idealFor: "Those who want to stop paying premiums early but still enjoy long-term life cover and higher bonus returns.",
            },
          },
          {
            name: "Plan 881: LIC Bima Lakshmi",
            description: "An exclusive women-centric endowment plan with guaranteed additions, periodic money-back payouts and a female critical illness rider.",
            details: {
              eligibility: "Females aged 8 – 55 years",
              maturityAge: "End of 25th policy year",
              policyTerm: "25 years",
              premiumPayingTerm: "Limited pay (chosen at proposal)",
              modeOfPremium: "Yearly, Half-Yearly, Quarterly & Monthly",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Periodic Money-Back: payouts every 2 or 4 years, or after the premium payment term — based on the chosen option",
                "Guaranteed Additions: 7% of total tabular annual premium added every year while policy is in force",
                "Exclusive Female Critical Illness Rider: covers early-stage cancer, female-specific surgeries, pregnancy complications, congenital anomalies",
                "Auto Cover: 6 months after 3 full years of premiums; 2 years after 5 full years of premiums",
                "Loan facility available to meet liquidity needs",
                "Maturity Benefit: Sum Assured on Maturity + all accrued Guaranteed Additions paid at end of 25th year",
                "Exclusively for women policyholders",
              ],
              idealFor: "Women seeking a dedicated plan combining guaranteed savings, periodic payouts, life cover and specialised coverage for female-specific health conditions.",
            },
          },
        ],
      },
      {
        id: "wholelife",
        label: "Whole Life Plans",
        plans: [
          {
            name: "Plan 745: LIC's Jeevan Umang",
            description: "A limited premium, non-linked, Participating Whole Life Plan with annual survival income from end of PPT and a large maturity payout at age 100.",
            details: {
              eligibility: "30 days – 55 years (PPT 15); 30 days – 50 / 45 / 40 years (PPT 20 / 25 / 30 respectively). Min age at end of PPT: 18 years; Max age at end of PPT: 70 years",
              maturityAge: "100 years NBD",
              policyTerm: "100 minus age at entry (whole life)",
              premiumPayingTerm: "15, 20, 25 or 30 years (limited pay)",
              modeOfPremium: "Yearly, Half-Yearly, Quarterly & Monthly (SSS / NACH — 3 months' premium required at proposal under monthly mode)",
              sumAssured: "₹2,00,000 and above (no maximum). Multiples of ₹25,000 / ₹50,000 / ₹1 lakh based on band",
              keyBenefits: [
                "Limited premium, non-linked, Participating Whole Life Plan",
                "Annual Survival Benefit: 8% of Basic SA paid every year from end of PPT till age 99 or earlier death",
                "Maturity Benefit at age 100: Basic SA + Vested Bonus (during & after PPT) + FAB (if any)",
                "Death Benefit (after risk commencement): Sum Assured on Death + Vested Bonus + FAB (if any)",
                "Sum Assured on Death = Higher of Basic SA or 7× Annual Premium",
                "Death before risk commencement: Refund of premiums paid (excluding GST & extra)",
                "Available Riders: ADDB Rider, AB Rider (3× Basic SA), Term Rider, PWB Rider",
                "Death benefit payable in instalments over 5 / 10 / 15 years (life-assured option)",
              ],
              idealFor: "Individuals seeking a guaranteed annual income stream post-retirement alongside whole-life cover and a large maturity corpus at age 100.",
            },
          },
        ],
      },
      {
        id: "moneyback",
        label: "Money Back Plans",
        plans: [
          {
            name: "Plan 734: LIC's Jeevan Tarun",
            description: "A non-linked, participating, limited premium child plan designed for education needs — with flexible survival benefit options from age 20 to 24.",
            details: {
              eligibility: "Child: 30 days – 12 years LBD",
              maturityAge: "25 years LBD",
              policyTerm: "25 minus age at entry",
              premiumPayingTerm: "20 minus age at entry (limited pay)",
              modeOfPremium: "Yearly, Half-Yearly, Quarterly & Monthly (SSS / NACH — 3 months' premium required at proposal under monthly mode)",
              sumAssured: "₹2,00,000 and above (no maximum). Multiples of ₹5,000 / ₹50,000 / ₹1 lakh based on band",
              keyBenefits: [
                "Non-linked, participating, limited premium plan for children's education",
                "Sum Assured on Death: Higher of 125% of Basic SA or 7× annualised premium",
                "Death Benefit (after risk commencement): SA on Death + Vested Bonus + FAB (if any)",
                "Death before risk commencement: Refund of premiums paid (excluding GST)",
                "4 Survival & Maturity options — Option 1: No SB, 100% SA + Bonus at 25 | Option 2: 5% SA/yr (20–24), 75% SA + Bonus | Option 3: 10% SA/yr, 50% SA + Bonus | Option 4: 15% SA/yr, 25% SA + Bonus",
                "Option can be changed 3 months before SB due (by paying premium difference with interest)",
                "Premium Waiver Benefit Rider available",
                "Maturity / Death claim payable in 5 / 10 / 15-year instalments",
              ],
              idealFor: "Parents funding their child's higher education with flexible annual payouts from age 20 to 24.",
            },
          },
        ],
      },
      {
        id: "riders",
        label: "Riders",
        plans: [],
      },
    ],
  },
  {
    id: "health",
    label: "Health Insurance",
    tagline: "Your health is your greatest wealth — protect it",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #002E5F 62.5%, #0D5097 100%)",
    subCategories: [],
    healthSections: HEALTH_SECTIONS,
    healthIntro: HEALTH_INTRO,
  },
];

function getCategoryById(id: string): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
}

// ─── Detail row helper ────────────────────────────────────────────────────────
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 py-3 border-b border-gray-100 last:border-b-0">
      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide sm:w-48 shrink-0">{label}</span>
      <span className="text-base text-gray-800 leading-relaxed">{value}</span>
    </div>
  );
}

// ─── Life Insurance Hero Slider ───────────────────────────────────────────────
const LIFE_QUOTES = [
  { image: coupleWalkingImg, quote: "Small steps today, strong future tomorrow" },
  { image: graduationImg, quote: "The best gift you can give your child is a secure future" },
  { image: elderlyImg, quote: "Retirement planning starts whenever you're ready, start today" },
];

function LifeHeroSlider({ tagline }: { tagline: string }) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % LIFE_QUOTES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[520px]">
      {LIFE_QUOTES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.quote}
            className="w-full h-full object-cover"
            style={{ objectPosition: "right top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/25" />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 section-pattern opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center gap-1.5 text-base text-white/50 mb-8 font-sans" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="size-4 shrink-0" />
          <span className="text-white font-semibold">Life Insurance</span>
        </nav>

        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="gold-divider" />
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Life Insurance Plans</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">Life Insurance</h1>

          <div className="relative h-20 mb-6 overflow-hidden">
            {LIFE_QUOTES.map((slide, i) => (
              <p
                key={i}
                className="absolute inset-0 text-2xl md:text-3xl text-secondary font-bold font-sans transition-all duration-700 ease-in-out leading-snug"
                style={{
                  opacity: current === i ? 1 : 0,
                  transform: current === i ? "translateY(0)" : "translateY(20px)",
                }}
              >
                &ldquo;{slide.quote}&rdquo;
              </p>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-8">
            {LIFE_QUOTES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-10 bg-secondary"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <a
            href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20life%20insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-200 font-sans"
          >
            Get a Quote
            <ArrowRight className="size-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
}

// ─── Health Intro Cards ───────────────────────────────────────────────────────
const INTRO_ICONS = [
  <User className="size-7" />,
  <Users className="size-7" />,
  <HeartPulse className="size-7" />,
  <Building2 className="size-7" />,
];

function HealthIntroCards({ items }: { items: { title: string; irdai?: string; points: string[] }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {items.map((item, i) => {
        const pastel = HEALTH_CARD_PASTELS[i % HEALTH_CARD_PASTELS.length];
        return (
          <div
            key={i}
            className="rounded-2xl border shadow-sm p-6 flex flex-col gap-3"
            style={{ background: pastel.bg, borderColor: pastel.border }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{ background: `${pastel.icon}18`, color: pastel.icon }}
              >
                {INTRO_ICONS[i]}
              </div>
              <h3 className="text-base font-bold text-gray-900 leading-snug">{item.title}</h3>
            </div>
            {item.irdai && (
              <p className="text-sm font-semibold px-3 py-1.5 rounded-lg inline-block" style={{ color: pastel.icon, background: `${pastel.icon}15` }}>
                {item.irdai}
              </p>
            )}
            <ul className="space-y-2">
              {item.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: pastel.icon }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

// ─── Health Section Accordion Card — selected state uses section accent ──────
function HealthSectionCard({ section }: { section: HealthSection }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div
        className="flex items-center gap-3 px-6 py-5 text-white"
        style={{ background: `linear-gradient(135deg, ${section.accent}ee, ${section.accent}99)` }}
      >
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-white/20">
          {section.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold leading-none">{section.label}</h3>
          <p className="text-sm text-white/80 mt-1">{section.items.length} items</p>
        </div>
      </div>

      <div className="divide-y divide-gray-50">
        {section.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={isOpen ? { background: `${section.accent}12` } : undefined}>
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors group ${isOpen ? "" : "hover:bg-gray-50"}`}
                style={isOpen ? { borderLeft: `4px solid ${section.accent}` } : { borderLeft: "4px solid transparent" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: section.accent }}
                  />
                  <span
                    className="text-base font-bold transition-colors"
                    style={{ color: isOpen ? section.accent : "#374151" }}
                  >
                    {item.title}
                  </span>
                </div>
                <ChevronDown
                  className="size-5 shrink-0 transition-transform duration-200"
                  style={{
                    color: isOpen ? section.accent : "#9CA3AF",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5" style={{ borderLeft: `4px solid ${section.accent}` }}>
                  <p
                    className="text-base text-gray-700 leading-relaxed pl-5 border-l-2 py-1"
                    style={{ borderColor: section.accent }}
                  >
                    {item.body}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Star Health Plan Card ────────────────────────────────────────────────────
function HealthPlanCard({ plan }: { plan: HealthPlan }) {
  const [expanded, setExpanded] = React.useState(false);
  const visibleBenefits = expanded ? plan.benefits : plan.benefits.slice(0, 3);
  const hasMore = plan.benefits.length > 3;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 p-7 flex flex-col">
      {/* Centered icon */}
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
          {plan.icon}
        </div>
      </div>

      {/* Title + IRDAI */}
      <h3 className="text-xl md:text-2xl font-bold text-blue-600 text-center leading-snug mb-2">
        {plan.name}
      </h3>
      <p className="text-sm font-bold text-gray-500 tracking-wider text-center uppercase mb-5">
        {plan.irdai}
      </p>

      {/* Tagline */}
      <p className="text-base text-gray-700 text-center leading-relaxed mb-6">
        {plan.tagline}
      </p>

      {/* Benefits */}
      <ul className="space-y-4 mb-5 flex-1">
        {visibleBenefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="size-5 text-blue-600 shrink-0 mt-0.5" />
            <span className="text-base text-gray-700 leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 text-base font-bold text-left mb-6 hover:text-blue-700 transition-colors"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      {/* CTA — coral orange button */}
      <a
        href={`https://wa.me/+918778912704?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(plan.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center px-6 py-4 rounded-xl font-bold text-white text-lg transition-all hover:brightness-110 shadow-md"
        style={{ background: "#F08161" }}
      >
        {plan.ctaLabel}
      </a>
    </div>
  );
}

// ─── Health Panel ─────────────────────────────────────────────────────────────
function HealthPanel({ category }: { category: Category }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Stethoscope className="size-8 text-primary" />
          <h2 className="text-3xl font-bold text-gray-900">Health Insurance Plans</h2>
        </div>
        <p className="text-base text-gray-600 leading-relaxed">
          A shield that protects you and your family from financial instability during health emergencies.
        </p>
      </div>

      {category.healthIntro && <HealthIntroCards items={category.healthIntro} />}

      {/* Star Health Plan cards */}
      <div className="mb-12">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Our Star Health Plans</h3>
          <p className="text-base text-gray-600">Choose the policy that fits your needs — every plan comes with cashless treatment at 14,000+ network hospitals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEALTH_PLANS.map((plan, i) => (
            <HealthPlanCard key={i} plan={plan} />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Plan Details</h3>
        <p className="text-base text-gray-600">Everything you need to know — inclusions, exclusions, waiting periods and claims.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {category.healthSections?.map((section) => (
          <HealthSectionCard key={section.id} section={section} />
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button asChild className="bg-primary hover:bg-primary/90 text-white text-base font-bold px-6 py-3">
          <Link to="/contact">
            Get a Quote
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </Button>
        <a
          href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20health%20insurance"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-base transition-all hover:brightness-110 shadow"
          style={{ background: "#cc9c42" }}
        >
          <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
          Enquire on WhatsApp
        </a>
      </div>

      <div className="mt-12 flex flex-col items-center text-center rounded-3xl p-10 border border-primary/10" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)" }}>
        <Stethoscope className="size-20 text-primary/25 mb-5" />
        <h3 className="text-2xl font-bold text-primary mb-3">Your Health, Our Priority</h3>
        <p className="text-base text-gray-600 max-w-md leading-relaxed mb-6">
          Expert health insurance guidance tailored to your family's needs. Our certified advisors help you find the right coverage — quickly and affordably.
        </p>
        <a
          href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20health%20insurance"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold text-white text-base bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200"
        >
          Speak to an Expert
          <ArrowRight className="size-5" />
        </a>
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Insurances() {
  const { category: categoryParam } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const activeCategory = getCategoryById(categoryParam ?? CATEGORIES[0].id);

  const [activeSubId, setActiveSubId] = React.useState(
    activeCategory.subCategories[0]?.id ?? ""
  );
  const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);

  React.useEffect(() => {
    setActiveSubId(activeCategory.subCategories[0]?.id ?? "");
    setSelectedPlan(null);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeCategory.id]);

  const activeSub =
    activeCategory.subCategories.find((s) => s.id === activeSubId) ??
    activeCategory.subCategories[0];

  const hasSubCategories = activeCategory.subCategories.length > 0;
  const isHealth = activeCategory.id === "health";

  return (
    <div className="w-full">
      {/* ── Hero ───────────────────────────────────────────────── */}
      {activeCategory.id === "life" ? (
        <LifeHeroSlider tagline={activeCategory.tagline} />
      ) : (
        <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[520px]">
          <div className="absolute inset-0">
            <img
              src={familyHealthImg}
              alt={activeCategory.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: "right top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20" />
          </div>
          <div className="pointer-events-none absolute inset-0 section-pattern opacity-10" />

          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
            <Stethoscope className="size-64 text-white" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-1.5 text-base text-white/50 mb-8 font-sans" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-4 shrink-0" />
              <span className="text-white font-semibold">{activeCategory.label}</span>
            </nav>
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <div className="gold-divider" />
                <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Insurance Plans</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">{activeCategory.label}</h1>
              <p className="text-2xl md:text-3xl text-secondary font-bold font-sans mb-8 leading-snug">
                &ldquo;{activeCategory.tagline}&rdquo;
              </p>
              <a
                href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-200 font-sans"
              >
                Get a Quote
                <ArrowRight className="size-5" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </section>
      )}

      {/* ── Category pills ─────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20 overflow-x-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/insurances/${cat.id}`)}
                className={`px-6 py-2.5 rounded-lg text-base font-bold whitespace-nowrap transition-all duration-200 font-sans ${
                  activeCategory.id === cat.id
                    ? "bg-secondary text-white shadow-md"
                    : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gray-50 section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {hasSubCategories && (
              <aside className="lg:w-72 shrink-0">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div
                    className="px-5 py-5 text-white text-lg font-bold uppercase tracking-wide"
                    style={{ background: activeCategory.heroGradient }}
                  >
                    Plan Categories
                  </div>
                  <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible">
                    {activeCategory.subCategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubId(sub.id)}
                        className={`flex items-center justify-between px-5 py-4 text-base font-semibold text-left whitespace-nowrap lg:whitespace-normal border-b border-gray-50 last:border-b-0 transition-all duration-150 ${
                          activeSub?.id === sub.id
                            ? "bg-blue-50 text-blue-700 border-l-4 border-l-blue-600"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-l-transparent"
                        }`}
                      >
                        <span>{sub.label}</span>
                        {activeSub?.id === sub.id && (
                          <ChevronRight className="size-5 shrink-0 text-blue-600 hidden lg:block" />
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="mt-6 bg-primary rounded-2xl p-6 text-white shadow-md hidden lg:block">
                  <Shield className="size-10 mb-3 opacity-80" />
                  <p className="text-base font-bold mb-1">Need help choosing?</p>
                  <p className="text-sm text-white/70 mb-4">Talk to our expert advisors.</p>
                  <a
                    href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 transition px-4 py-2.5 rounded-lg"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </aside>
            )}

            {isHealth ? (
              <HealthPanel category={activeCategory} />
            ) : (
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{activeSub?.label}</h2>
                    {activeSubId !== "riders" && (
                      <p className="text-base text-gray-500 mt-1">
                        {activeSub?.plans.length} plan{activeSub?.plans.length !== 1 ? "s" : ""} available
                      </p>
                    )}
                  </div>
                </div>

                {activeSubId === "riders" ? (
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                        <Shield className="size-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Optional Add-ons</h3>
                        <p className="text-base text-gray-500 font-sans">Customise your base policy with riders.</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Riders are optional add-ons that can be attached to your base insurance policy to enhance its coverage and benefits. They provide additional financial protection against specific risks such as accidents, disability, or critical illness, based on your needs. By paying an extra premium, riders allow you to customize your policy for more comprehensive coverage without purchasing a separate plan.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-primary hover:bg-primary/90 text-white text-base font-bold px-6 py-3">
                        <Link to="/contact">
                          Talk to an Advisor
                          <ArrowRight className="ml-2 size-5" />
                        </Link>
                      </Button>
                      <a
                        href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policy%20riders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-base transition-all hover:brightness-110 shadow"
                        style={{ background: "#cc9c42" }}
                      >
                        <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
                        Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {activeSub?.plans.map((plan, i) => {
                      const pastel = PLAN_PASTELS[i % PLAN_PASTELS.length];
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedPlan(plan)}
                          className="rounded-2xl border shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3 text-left group"
                          style={{ background: pastel.bg, borderColor: pastel.border }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1 h-6 w-1.5 rounded-full shrink-0" style={{ background: pastel.dot }} />
                            <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">{plan.name}</h3>
                          </div>
                          <p className="text-base text-gray-600 leading-relaxed pl-5">{plan.description}</p>
                          <div className="pl-5 flex items-center justify-between mt-1">
                            <span className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: pastel.dot }}>
                              View Details <Info className="size-4" />
                            </span>
                            <ChevronRight className="size-5 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Plan Detail Sheet ──────────────────────────────────── */}
      <Sheet open={!!selectedPlan} onOpenChange={(open) => { if (!open) setSelectedPlan(null); }}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto p-0">
          {selectedPlan && (
            <>
              <div
                className="relative px-6 pt-10 pb-8 text-white"
                style={{ background: activeCategory.heroGradient }}
              >
                <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-3">{activeCategory.label}</p>
                <SheetHeader>
                  <SheetTitle className="text-white text-3xl font-bold leading-snug text-left">
                    {selectedPlan.name}
                  </SheetTitle>
                </SheetHeader>
                <p className="mt-3 text-base text-white/80 leading-relaxed">{selectedPlan.description}</p>
              </div>

              <div className="px-6 py-7 space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Plan Specifications</h3>
                  <div className="bg-gray-50 rounded-xl px-4 py-1">
                    {selectedPlan.details.eligibility && (
                      <DetailRow label="Eligibility" value={selectedPlan.details.eligibility} />
                    )}
                    {selectedPlan.details.maturityAge && (
                      <DetailRow label="Maturity Age" value={selectedPlan.details.maturityAge} />
                    )}
                    {selectedPlan.details.policyTerm && (
                      <DetailRow label="Policy Term" value={selectedPlan.details.policyTerm} />
                    )}
                    {selectedPlan.details.premiumPayingTerm && (
                      <DetailRow label="Premium Paying" value={selectedPlan.details.premiumPayingTerm} />
                    )}
                    {selectedPlan.details.modeOfPremium && (
                      <DetailRow label="Mode of Premium" value={selectedPlan.details.modeOfPremium} />
                    )}
                    {selectedPlan.details.sumAssured && (
                      <DetailRow label="Sum Assured" value={selectedPlan.details.sumAssured} />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {selectedPlan.details.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-base text-gray-700 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedPlan.details.idealFor && (
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Ideal For</p>
                    <p className="text-base text-gray-700 leading-relaxed">{selectedPlan.details.idealFor}</p>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-2">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-base font-bold py-3">
                    <Link to="/contact" onClick={() => setSelectedPlan(null)}>
                      Get a Quote
                      <ArrowRight className="ml-2 size-5" />
                    </Link>
                  </Button>
                  <a
                    href={`https://wa.me/+918778912704?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(selectedPlan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-lg font-bold text-white text-base transition-all hover:brightness-110 shadow"
                    style={{ background: "#cc9c42" }}
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <ContactCTA />
    </div>
  );
}
