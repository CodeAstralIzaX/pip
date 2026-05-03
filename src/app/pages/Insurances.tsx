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
  { bg: "#EFF6FF", border: "#BFDBFE", dot: "#2563EB" }, // blue
  { bg: "#F0FDF4", border: "#BBF7D0", dot: "#16A34A" }, // green
  { bg: "#FEFCE8", border: "#FDE68A", dot: "#CA8A04" }, // yellow
  { bg: "#FFF7ED", border: "#FED7AA", dot: "#EA580C" }, // orange
  { bg: "#FFF1F2", border: "#FECDD3", dot: "#E11D48" }, // pink
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
  policyTerm?: string;
  premiumPayingTerm?: string;
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

// ─── Health Section Types ─────────────────────────────────────────────────────
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

// ─── Data ─────────────────────────────────────────────────────────────────────
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
            name: "Single Premium Endowment Plan",
            description: "A single-premium savings plan that provides life cover with a lump-sum maturity benefit.",
            details: {
              eligibility: "Age 90 days – 65 years",
              policyTerm: "10 – 25 years",
              premiumPayingTerm: "Single premium (one-time)",
              sumAssured: "₹50,000 and above",
              keyBenefits: [
                "One-time premium — no recurring payment hassle",
                "Lump sum paid on maturity or death",
                "Eligible for bonuses declared by LIC",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Individuals who receive a lump sum (gratuity, bonus, inheritance) and want to invest it securely.",
            },
          },
          {
            name: "New Endowment Plan",
            description: "LIC's New Endowment Plan (Plan 714) — a regular premium, non-linked, participating savings endowment plan offering life cover with bonus participation and a lump-sum maturity benefit.",
            details: {
              eligibility: "Age 8 – 50 years (max maturity age 75 years)",
              policyTerm: "12 – 35 years",
              premiumPayingTerm: "Regular premium — equal to policy term",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Death Benefit: Higher of Basic SA or 7× Annualised Premium + Vested Bonus + Final Additional Bonus (FAB)",
                "Maturity Benefit: Basic Sum Assured + Vested Bonus + FAB if any",
                "Participates in LIC profits through annual reversionary bonuses and FAB",
                "Riders available: ADDB/AB Rider (up to Basic SA), Term Rider (up to ₹25 lakhs), PWB Rider, Critical Illness Rider",
                "Maturity/Death claim can be paid in instalments over 5/10/15 years",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Salaried individuals and families saving for long-term goals like children's education, marriage, or retirement with the security of life cover.",
            },
          },
          {
            name: "New Jeevan Anand",
            description: "LIC's New Jeevan Anand (Plan 715) — a regular premium, non-linked, participating savings endowment plan with extended whole-life risk cover even after the policy matures.",
            details: {
              eligibility: "Age 18 – 50 years (max maturity age 75 years)",
              policyTerm: "15 – 35 years",
              premiumPayingTerm: "Regular premium — equal to policy term",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Life cover continues for whole life even after policy maturity",
                "Death during policy term: Higher of 1.25× Basic SA or 7× Annualised Premium + Vested Bonus + FAB",
                "Death after maturity: Basic Sum Assured paid to nominee",
                "Maturity Benefit: Basic Sum Assured + Vested Bonus + FAB if any",
                "Riders available: ADDB/AB Rider (up to Basic SA), Term Rider (up to ₹25 lakhs), Critical Illness Rider",
                "Maturity/Death claim can be paid in instalments over 5/10/15 years",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those who want both a maturity payout and continued life protection for their family for their entire lifetime.",
            },
          },
          {
            name: "Jeevan Lakshya",
            description: "LIC's Jeevan Lakshya (Plan 733) — a limited premium, non-linked, participating savings endowment plan designed to ensure the family receives regular annual income on policyholder's death, plus a lump sum at maturity.",
            details: {
              eligibility: "Age 18 – 50 years (maximum maturity age 65 years)",
              policyTerm: "13 – 25 years",
              premiumPayingTerm: "Policy term minus 3 years (PT – 3) — limited pay",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Annual Income Benefit: 10% of Basic SA paid to nominee every year from the policy anniversary after death until 1 year before maturity",
                "Maturity Benefit on Death: 110% of Basic SA + Vested Bonus for full term + FAB (if any) paid at maturity date",
                "Normal Maturity Benefit (survival): Basic Sum Assured + Vested Bonus + FAB if any",
                "Limited premium paying term — pay for PT–3 years, covered for the full policy term",
                "Riders available: ADDB Rider (full term) or AB Rider (up to PPT), Term Rider (up to ₹25 lakhs)",
                "Maturity/Death claim payable in instalments over 5/10/15 years",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Breadwinners who want to ensure their family receives a steady annual income if they pass away early, plus a lump sum at maturity.",
            },
          },
          {
            name: "Jeevan Labh Plan",
            description: "LIC's Jeevan Labh (Plan 736) — a limited premium, non-linked, participating savings endowment plan where premiums stop well before the policy matures, yet cover and bonus accumulation continue.",
            details: {
              eligibility: "Age 8 years min; max entry age 59/54/50 years for 16/21/25-year terms respectively (max maturity age 75 years)",
              policyTerm: "16, 21, or 25 years",
              premiumPayingTerm: "10 years (for 16-yr term), 15 years (for 21-yr term), 16 years (for 25-yr term) — limited pay",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Death Benefit: Basic Sum Assured + Vested Bonus + FAB if any",
                "Maturity Benefit: Basic Sum Assured + Vested Bonus + FAB if any",
                "Premiums stop early but life cover and bonus accumulation continue for full policy term",
                "Riders available: ADDB Rider (full term) or AB Rider (up to PPT), Term Rider (up to ₹25 lakhs), PWB Rider",
                "Maturity/Death claim payable in instalments over 5/10/15 years",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those who want to stop paying premiums early but still enjoy long-term life cover and higher bonus returns over a longer coverage period.",
            },
          },
          {
            name: "Amritbaal",
            description: "A child-focused endowment plan ensuring funds for key milestones like education and marriage.",
            details: {
              eligibility: "Child: 0 – 13 years; Proposer: 18 – 55 years",
              policyTerm: "Up to child's age 25",
              premiumPayingTerm: "Up to child's age 18",
              sumAssured: "₹2,00,000 and above",
              keyBenefits: [
                "Premiums waived off if proposer (parent) dies",
                "Guaranteed sum assured paid at maturity",
                "Supports education, marriage, or other life goals",
                "Policy vests in child's name at age 18",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Parents planning financially for their child's future education or marriage.",
            },
          },
          {
            name: "Bima Jyoti",
            description: "Guaranteed additions-based endowment with predictable returns and life cover.",
            details: {
              eligibility: "Age 90 days – 60 years",
              policyTerm: "15 – 20 years",
              premiumPayingTerm: "Policy term minus 5 years",
              sumAssured: "₹1,00,000 and above",
              keyBenefits: [
                "Guaranteed additions of ₹50 per ₹1,000 SA each year",
                "No market risk — returns are predictable",
                "Death benefit = sum assured + guaranteed additions",
                "Suitable for risk-averse investors",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Conservative investors who want guaranteed, predictable returns without market exposure.",
            },
          },
          {
            name: "Nav Jeevan Shree",
            description: "Flexible premium payment option with guaranteed additions and maturity benefits.",
            details: {
              eligibility: "Age 90 days – 55 years",
              policyTerm: "15 – 30 years",
              premiumPayingTerm: "5, 7, or 10 years (flexible limited pay)",
              sumAssured: "₹3,00,000 and above",
              keyBenefits: [
                "Choose from 3 premium payment terms",
                "Guaranteed additions accrue throughout policy term",
                "Maturity = sum assured + all guaranteed additions",
                "Loan facility available after 2 years",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Working professionals who want flexibility in how long they pay while securing long-term returns.",
            },
          },
          {
            name: "Bima Lakshmi",
            description: "LIC Bima Lakshmi (Plan 881) — an exclusive women-centric endowment plan with guaranteed additions, money-back survival benefits, and a female critical illness rider.",
            details: {
              eligibility: "Females aged 8 – 55 years",
              policyTerm: "25 years",
              premiumPayingTerm: "Policy term minus 5 years (limited pay)",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Survival Benefits (Money Back): Periodic payouts every 2 or 4 years, or after premium payment term — depending on chosen option",
                "Guaranteed Additions: 7% of total tabular annual premium added every year while policy is in force",
                "Maturity Benefit: Sum Assured on Maturity + all accrued Guaranteed Additions paid at end of 25th year",
                "Female Critical Illness Rider: Covers early-stage cancer, specific female surgeries, pregnancy complications, and congenital anomalies",
                "Auto Cover: 6 months auto cover after 3 full years of premiums; 2 years auto cover after 5 full years of premiums",
                "Loan facility available to meet liquidity needs",
                "Exclusively for women policyholders",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Women seeking a dedicated plan that combines guaranteed savings, periodic payouts, life cover, and specialized health coverage for female-specific conditions.",
            },
          },
        ],
      },
      {
        id: "wholelife",
        label: "Whole Life Plans",
        plans: [
          {
            name: "Whole Life Policy",
            description: "Provides lifelong coverage with premiums payable for a limited period and sum assured at age 100.",
            details: {
              eligibility: "Age 18 – 55 years",
              policyTerm: "Whole life (up to age 100)",
              premiumPayingTerm: "Up to age 80 or 35 years (whichever is earlier)",
              sumAssured: "₹1,00,000 and above",
              keyBenefits: [
                "Life cover extends to age 100",
                "Sum assured + bonuses payable on death or at 100",
                "Loan facility available after 3 years",
                "Can be used for wealth transfer across generations",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those planning estate or wealth transfer to children and grandchildren.",
            },
          },
          {
            name: "LIC Jeevan Umang",
            description: "LIC's Jeevan Umang (Plan 745) — a limited premium, non-linked, participating whole life plan that provides annual survival benefits from the end of the premium paying term, plus a large maturity payout at age 100.",
            details: {
              eligibility: "Age 30 days – 55 years (PPT 15); 30 days – 50/45/40 years (PPT 20/25/30 respectively); minimum age at end of PPT: 18 years",
              policyTerm: "Whole life — 100 minus age at entry (matures at age 100)",
              premiumPayingTerm: "15, 20, 25, or 30 years (limited pay)",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Annual Survival Benefit: 8% of Basic SA paid every year from end of PPT till age 99 or earlier death",
                "Maturity Benefit at age 100: Basic SA + Vested Bonus (during & after PPT) + FAB if any",
                "Death Benefit (after risk commencement): SA on Death + Vested Bonus + FAB if any",
                "Death before risk commencement: Refund of premiums paid (excluding GST)",
                "Riders available: ADDB/AB Rider (up to age 70), Term Rider (up to age 75 or 35 years), PWB Rider (up to child age 25)",
                "Death benefit can be received in instalments over 5/10/15 years",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Individuals seeking a guaranteed annual income stream post-retirement alongside whole-life cover and a large maturity corpus at age 100.",
            },
          },
          {
            name: "LIC Jeevan Utsav",
            description: "LIC's Jeevan Utsav (Plan 771) — a limited premium, non-linked, non-participating whole life plan with Guaranteed Additions during the PPT and a lifelong guaranteed income benefit after a short premium paying period.",
            details: {
              eligibility: "Age 8 years min; max entry age 65 years (varies by PPT); PPT options: 5 to 16 years",
              policyTerm: "Whole life (100 minus age at entry)",
              premiumPayingTerm: "5 to 16 years (limited pay)",
              sumAssured: "₹5,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Guaranteed Additions: ₹40 per ₹1,000 SA every year during the PPT",
                "Income Benefit Option I (Regular Income): 10% of Basic SA every year from income start year till death",
                "Income Benefit Option II (Flexi Income): 10% of Basic SA/yr with option to accumulate at 5.50% p.a.; up to 75% of accumulated amount withdrawable once per year",
                "Income Start Year: end of 11th policy year (PPT 5–8 yrs) or 3rd year after end of PPT (PPT 9–16 yrs)",
                "Death Benefit: SA on Death + Guaranteed Additions; SA on Death = Higher of Basic SA or 7× Annualised Premium",
                "Death before risk commencement: Refund of premiums paid (excluding GST)",
                "Riders: ADDB/AB Rider (up to age 70), Term Rider (up to age 75 or 35 yrs), PWB Rider (up to child age 25)",
                "Death benefit payable in instalments over 5/10/15 years option",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "HNI investors or those who want a guaranteed lifelong income stream (like a pension) after a short, defined premium paying period.",
            },
          },
        ],
      },
      {
        id: "moneyback",
        label: "Money Back Plans",
        plans: [
          {
            name: "New Money Back Plan – 20 Years",
            description: "LIC's New Money Back Plan – 20 Years (Plan 720) — a limited premium, non-linked, participating savings money-back plan with periodic survival benefits every 5 years.",
            details: {
              eligibility: "Age 13 – 50 years (max maturity age 70 years)",
              policyTerm: "20 years",
              premiumPayingTerm: "15 years (limited pay)",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Survival Benefit: 20% of Basic SA at end of 5th, 10th, and 15th policy year",
                "Maturity Benefit: 40% of Basic SA + Vested Bonus + FAB if any at end of 20th year",
                "Death Benefit: Higher of 125% of Basic SA or 7× Annualised Premium + Vested Bonus + FAB (full SA paid regardless of prior survival benefit payouts)",
                "Premiums stop at 15 years; cover continues for full 20-year term",
                "Riders available: ADDB/AB Rider, Term Rider (up to ₹25 lakhs)",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those who need regular cash flows at fixed 5-year intervals for goals like home renovation, children's fees, or family events — alongside life protection.",
            },
          },
          {
            name: "New Money Back Plan – 25 Years",
            description: "LIC's New Money Back Plan – 25 Years (Plan 721) — a limited premium, non-linked, participating savings money-back plan with survival benefits paid every 5 years over a 25-year horizon.",
            details: {
              eligibility: "Age 13 – 45 years (max maturity age 70 years)",
              policyTerm: "25 years",
              premiumPayingTerm: "20 years (limited pay)",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Survival Benefit: 15% of Basic SA at end of 5th, 10th, 15th, and 20th policy year",
                "Maturity Benefit: 40% of Basic SA + Vested Bonus + FAB if any at end of 25th year",
                "Death Benefit: Higher of 125% of Basic SA or 7× Annualised Premium + Vested Bonus + FAB (irrespective of prior survival benefit payouts)",
                "Premiums stop at 20 years; cover continues for full 25-year term",
                "Riders available: ADDB/AB Rider, Term Rider (up to ₹25 lakhs)",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Younger investors with a longer 25-year horizon who want regular cash payouts and a larger maturity bonus accumulation.",
            },
          },
          {
            name: "Jeevan Tarun",
            description: "LIC's Jeevan Tarun (Plan 734) — a non-linked, participating, limited premium child plan designed for children's education needs, with flexible survival benefit options from age 20 to 24.",
            details: {
              eligibility: "Child: 30 days – 12 years (matures at age 25); Proposer: parent/guardian",
              policyTerm: "25 minus age at entry (policy matures when child turns 25)",
              premiumPayingTerm: "20 minus age at entry (limited pay)",
              sumAssured: "₹2,00,000 and above (no maximum limit)",
              keyBenefits: [
                "4 Survival Benefit Options (choose at proposal stage): Option 1 — No SB, 100% SA + Bonus at 25 | Option 2 — 5% SA/yr (age 20–24), 75% SA + Bonus at 25 | Option 3 — 10% SA/yr (age 20–24), 50% SA + Bonus at 25 | Option 4 — 15% SA/yr (age 20–24), 25% SA + Bonus at 25",
                "Death Benefit: Higher of 125% of Basic SA or 7× Annualised Premium + Vested Bonus + FAB",
                "Risk commencement: immediately if child is 8+ years; otherwise after 2 years from policy start or age 8 anniversary, whichever is earlier",
                "Premium Waiver Benefit Rider available — premiums waived if proposer (parent) dies",
                "Maturity/Death claim payable in instalments over 5/10/15 years",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Parents who want to fund their child's higher education with flexible annual payouts from age 20 to 24, with the option to maximise the final corpus.",
            },
          },
          {
            name: "Bima Shree",
            description: "LIC's Bima Shree (Plan 748) — a limited premium, non-linked, participating savings money-back plan with Guaranteed Additions and Loyalty Additions, exclusively for high-value policies (min ₹10 lakh SA).",
            details: {
              eligibility: "Age 8 years min; max entry age 55/53/51/49/45/41 years for 14/16/18/20/24/28-year terms respectively",
              policyTerm: "14, 16, 18, 20, 24, or 28 years",
              premiumPayingTerm: "10, 12, 14, 16, 20, or 24 years respectively (limited pay)",
              sumAssured: "₹10,00,000 and above (no maximum limit)",
              keyBenefits: [
                "Guaranteed Additions: ₹50 per ₹1,000 SA for first 5 years; ₹55 per ₹1,000 SA from 6th year till end of PPT",
                "Loyalty Additions payable from 6th policy year onwards",
                "Death Benefit (first 5 yrs): SA on Death + Guaranteed Additions",
                "Death Benefit (6th yr+): SA on Death + Guaranteed Additions + Loyalty Additions (if any); SA on Death = Higher of 125% Basic SA or 7× Annualised Premium",
                "Survival & Maturity benefits vary by term (e.g., 14-yr: 30% SA at 10th & 12th yr; 40% SA + GA + LA at maturity)",
                "Option to defer Survival Benefits to maturity with interest",
                "Riders: ADDB/AB Rider, Term Rider (up to ₹25 lakhs), PWB Rider",
                "Loan facility available after 1 year",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "High-income individuals seeking guaranteed additions, loyalty bonuses, and staggered money-back payouts on a premium policy (minimum ₹10 lakh sum assured).",
            },
          },
        ],
      },
      {
        id: "riders",
        label: "Riders — Optional Add-ons",
        plans: [
          {
            name: "Accidental Death & Disability Benefit Rider",
            description: "Extra benefit paid on accidental death or permanent disability during the policy term.",
            details: {
              eligibility: "Must be attached to an eligible base plan; age 18–65",
              sumAssured: "Up to ₹1,00,00,000 (subject to base SA)",
              keyBenefits: [
                "Additional SA paid on accidental death",
                "Monthly income for 10 years on total permanent disability",
                "Base policy continues on disability",
                "Covers road, rail, air accidents and natural calamities",
                "Very low additional premium",
              ],
              idealFor: "Anyone in a high-risk occupation or frequent traveller.",
            },
          },
          {
            name: "Accident Benefit Rider",
            description: "Additional sum paid on accidental death; can be attached to select base plans.",
            details: {
              eligibility: "Must be attached to eligible base plan; age 18–70",
              sumAssured: "Up to ₹50,00,000",
              keyBenefits: [
                "Equal to base SA paid additionally on accidental death",
                "Available on most traditional LIC plans",
                "No separate medical examination needed",
                "Minimal premium addition",
                "Tax benefit on rider premium under 80C",
              ],
              idealFor: "Policyholders wanting extra accidental death protection on their existing plans.",
            },
          },
          {
            name: "New Critical Illness Benefit Rider",
            description: "Lump sum on diagnosis of any of the covered 15 critical illnesses.",
            details: {
              eligibility: "Age 18 – 65 years; can be attached to select term/endowment plans",
              sumAssured: "₹1,00,000 – ₹25,00,000",
              keyBenefits: [
                "15 covered illnesses including cancer, heart attack, stroke, kidney failure",
                "Lump sum paid on first diagnosis",
                "Base policy continues after claim",
                "Survival period of 30 days post-diagnosis",
                "Tax benefit under Section 80D",
              ],
              idealFor: "Anyone with a family history of critical illness or seeking financial cushion for treatment costs.",
            },
          },
          {
            name: "Premium Waiver Benefit Rider",
            description: "Waives future premiums if the proposer dies during the term.",
            details: {
              eligibility: "Proposer age 18–55; applicable on child plans only",
              keyBenefits: [
                "All future premiums waived if proposer (parent) dies",
                "Policy continues in full force for the child",
                "Child benefits are preserved completely",
                "No additional underwriting for child",
                "Minimal additional premium cost",
              ],
              idealFor: "Parents who have taken a child plan and want to ensure continuity of the plan's benefits.",
            },
          },
        ],
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
      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide sm:w-44 shrink-0">{label}</span>
      <span className="text-base text-gray-800">{value}</span>
    </div>
  );
}

// ─── Life Insurance Quote Cards ───────────────────────────────────────────────
const LIFE_QUOTES = [
  { image: coupleWalkingImg, quote: "Small steps today, strong future tomorrow" },
  { image: graduationImg, quote: "The best gift you can give your child is a secure future" },
  { image: elderlyImg, quote: "Retirement planning starts whenever you're ready, start today" },
];

// ─── Life Hero Auto-Slider ───────────────────────────────────────────────────
function LifeHeroSlider({ tagline }: { tagline: string }) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % LIFE_QUOTES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px]">
      {/* Sliding background images */}
      {LIFE_QUOTES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img src={slide.image} alt={slide.quote} className="w-full h-full object-cover object-right" />
          {/* Lighter gradient so image is visible on the right */}
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

          {/* Auto-sliding quote — larger, gold colour */}
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

          {/* Dot indicators */}
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

// ─── Health Section Accordion Card ───────────────────────────────────────────
function HealthSectionCard({ section }: { section: HealthSection }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Section Header */}
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

      {/* Accordion Items */}
      <div className="divide-y divide-gray-50">
        {section.items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors group ${openIndex === i ? "bg-gray-50" : "hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: section.accent }}
                />
                <span className={`text-base font-bold transition-colors ${openIndex === i ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}>
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className="size-5 shrink-0 transition-transform duration-200"
                style={{ color: openIndex === i ? section.accent : "#9CA3AF", transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5">
                <p
                  className="text-base text-gray-600 leading-relaxed pl-5 border-l-2 py-1"
                  style={{ borderColor: section.accent }}
                >
                  {item.body}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Health Page Panel ────────────────────────────────────────────────────────
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

      {/* Intro type cards */}
      {category.healthIntro && <HealthIntroCards items={category.healthIntro} />}

      {/* Section accordion cards — 2 col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {category.healthSections?.map((section) => (
          <HealthSectionCard key={section.id} section={section} />
        ))}
      </div>

      {/* CTA */}
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

      {/* Stethoscope decorative CTA */}
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
        <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px]">
          <div className="absolute inset-0">
            <img
              src={familyHealthImg}
              alt={activeCategory.label}
              className="w-full h-full object-cover object-right"
            />
            {/* Lighter gradient — image visible on the right side */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20" />
          </div>
          <div className="pointer-events-none absolute inset-0 section-pattern opacity-10" />

          {/* Stethoscope decorative icon floating right side */}
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
              {/* Prominent running tagline — gold colour */}
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

            {/* LEFT SIDEBAR — only for categories with subcategories */}
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

            {/* RIGHT PANEL */}
            {isHealth ? (
              <HealthPanel category={activeCategory} />
            ) : (
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{activeSub?.label}</h2>
                    <p className="text-base text-gray-500 mt-1">
                      {activeSub?.plans.length} plan{activeSub?.plans.length !== 1 ? "s" : ""} available
                    </p>
                  </div>
                </div>

                {/* Riders description */}
                {activeSubId === "riders" && (
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                      Riders are optional add-ons that can be attached to your base insurance policy to enhance its coverage and benefits. They provide additional financial protection against specific risks such as accidents, disability, or critical illness, based on your needs.
                    </p>
                  </div>
                )}

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
                    {selectedPlan.details.policyTerm && (
                      <DetailRow label="Policy Term" value={selectedPlan.details.policyTerm} />
                    )}
                    {selectedPlan.details.premiumPayingTerm && (
                      <DetailRow label="Premium Paying" value={selectedPlan.details.premiumPayingTerm} />
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
