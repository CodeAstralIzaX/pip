import React from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ArrowRight, ChevronRight, Shield, Phone, CheckCircle2, Info } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import whatsappIcon from "../components/assets/whatsapp.svg";

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
            description: "Combines savings and protection; ideal for long-term financial goals with bonus participation.",
            details: {
              eligibility: "Age 8 – 55 years",
              policyTerm: "12 – 35 years",
              premiumPayingTerm: "Equal to policy term",
              sumAssured: "₹1,00,000 and above",
              keyBenefits: [
                "Sum assured + accumulated bonuses on maturity",
                "Death benefit includes sum assured + bonuses",
                "Participates in LIC's profit via bonuses",
                "Surrender and loan facility available",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Salaried individuals saving for long-term goals like children's education or retirement.",
            },
          },
          {
            name: "New Jeevan Anand",
            description: "An endowment plan offering lifelong protection even after policy maturity along with bonuses.",
            details: {
              eligibility: "Age 18 – 50 years",
              policyTerm: "15 – 35 years",
              premiumPayingTerm: "Equal to policy term",
              sumAssured: "₹1,00,000 and above",
              keyBenefits: [
                "Life cover continues even after policy matures",
                "Full sum assured paid at maturity + bonuses",
                "Accidental Death & Disability Benefit rider available",
                "Loan facility after 3 years",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those who want both a maturity payout and continued life protection for their family.",
            },
          },
          {
            name: "Jeevan Lakshya",
            description: "Provides guaranteed annual income to family if the life assured passes away during the term.",
            details: {
              eligibility: "Age 18 – 50 years",
              policyTerm: "13 – 25 years",
              premiumPayingTerm: "Policy term minus 3 years",
              sumAssured: "₹1,00,000 and above",
              keyBenefits: [
                "10% of sum assured paid annually to family on death",
                "Full sum assured + bonuses paid at maturity",
                "Premium waived off on death of life assured",
                "Ideal for families dependent on a single earner",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Breadwinners who want to ensure their family receives regular income if they pass away early.",
            },
          },
          {
            name: "Jeevan Labh Plan",
            description: "Limited premium endowment plan with attractive bonuses and a lump sum on maturity.",
            details: {
              eligibility: "Age 8 – 59 years",
              policyTerm: "16, 21, or 25 years",
              premiumPayingTerm: "10, 15, or 16 years (limited pay)",
              sumAssured: "₹2,00,000 and above",
              keyBenefits: [
                "Premiums stop early but coverage continues",
                "Sum assured + vested bonuses on maturity or death",
                "Higher bonus rates due to longer coverage",
                "Loan and surrender facility available",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those who want to stop paying premiums early but still enjoy long-term cover and returns.",
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
            description: "Women-centric endowment plan designed to address unique financial needs of women.",
            details: {
              eligibility: "Women aged 18 – 55 years",
              policyTerm: "15 – 20 years",
              premiumPayingTerm: "Policy term minus 5 years",
              sumAssured: "₹2,00,000 and above",
              keyBenefits: [
                "Exclusively for women policyholders",
                "Guaranteed additions of ₹50 per ₹1,000 SA",
                "Extended life cover beyond maturity",
                "Covers critical illness via rider",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Women looking for a dedicated savings-cum-protection plan tailored to their financial journey.",
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
            description: "Offers whole life cover with annual survival benefits from end of premium-paying term.",
            details: {
              eligibility: "Age 90 days – 55 years",
              policyTerm: "Whole life (up to age 100)",
              premiumPayingTerm: "15, 20, 25, or 30 years",
              sumAssured: "₹2,00,000 and above",
              keyBenefits: [
                "8% of sum assured paid annually after premiums end",
                "Full sum assured + bonuses paid at age 100 or death",
                "Regular income stream after premium-paying term",
                "Ideal for retirement planning",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Individuals seeking a regular income post-retirement alongside life cover.",
            },
          },
          {
            name: "LIC Jeevan Utsav",
            description: "Whole life plan with guaranteed additions and flexible income or lump-sum payout.",
            details: {
              eligibility: "Age 90 days – 65 years",
              policyTerm: "Whole life",
              premiumPayingTerm: "5, 10, or 15 years",
              sumAssured: "₹5,00,000 and above",
              keyBenefits: [
                "Guaranteed additions of ₹40 per ₹1,000 SA every year",
                "Flexible payout: choose income or lump sum",
                "Life cover continues even during payout phase",
                "No medical required for lower sum assureds",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "HNI investors or those who want flexibility in receiving their policy benefits.",
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
            description: "Provides periodic survival benefits during the term plus full sum assured at maturity.",
            details: {
              eligibility: "Age 13 – 50 years",
              policyTerm: "20 years",
              premiumPayingTerm: "15 years",
              sumAssured: "₹1,00,000 and above",
              keyBenefits: [
                "20% of SA paid at end of 5th, 10th & 15th year",
                "Remaining 40% + bonuses paid at maturity",
                "Full SA paid to nominee on death (irrespective of payouts)",
                "Helps meet periodic financial goals",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those who need regular cash flows at fixed intervals alongside life protection.",
            },
          },
          {
            name: "New Money Back Plan – 25 Years",
            description: "25-year money-back plan with regular payouts every 5 years during the policy term.",
            details: {
              eligibility: "Age 13 – 45 years",
              policyTerm: "25 years",
              premiumPayingTerm: "20 years",
              sumAssured: "₹1,00,000 and above",
              keyBenefits: [
                "15% of SA paid at 5th, 10th, 15th & 20th year",
                "40% + bonuses paid at maturity",
                "Full SA paid on death regardless of prior payouts",
                "Longer horizon provides higher bonus accumulation",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Younger investors with a 25-year horizon looking for regular cash payouts.",
            },
          },
          {
            name: "Jeevan Tarun",
            description: "Child money-back plan with flexible survival benefits from age 20 to 24, ideal for education.",
            details: {
              eligibility: "Child: 90 days – 12 years; Proposer: parent/guardian",
              policyTerm: "Up to child's age 25",
              premiumPayingTerm: "Up to child's age 20",
              sumAssured: "₹75,000 and above",
              keyBenefits: [
                "Choose 0–4 annual survival benefit payouts (age 20–23)",
                "Remaining SA + bonuses at age 25 (maturity)",
                "Premium waived if proposer dies",
                "Covers child's education costs from age 20",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Parents who want to fund their child's higher education with flexible payouts.",
            },
          },
          {
            name: "Bima Bachat",
            description: "Single premium money-back plan with survival benefits paid at regular intervals.",
            details: {
              eligibility: "Age 15 – 50 years",
              policyTerm: "9, 12, or 15 years",
              premiumPayingTerm: "Single premium",
              sumAssured: "Based on single premium paid",
              keyBenefits: [
                "One-time premium payment",
                "Survival benefits every 3 years during the term",
                "Full single premium refunded on maturity",
                "Life cover throughout the term",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those with a lump sum to invest who also want periodic liquidity.",
            },
          },
        ],
      },
      {
        id: "term",
        label: "Term Assurance Plans",
        plans: [
          {
            name: "LIC Tech Term",
            description: "Online pure term plan with high sum assured at affordable premiums — no physical medical.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "10 – 40 years",
              premiumPayingTerm: "Regular, limited, or single pay",
              sumAssured: "₹50,00,000 and above",
              keyBenefits: [
                "Very low premiums for high life cover",
                "Available online — no agent or branch needed",
                "Option to increase cover at key life events",
                "Level or increasing death benefit options",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Young earners seeking maximum life cover at the lowest possible premium.",
            },
          },
          {
            name: "LIC Jeevan Amar",
            description: "Flexible term plan with increasing or level cover options to suit your changing needs.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "10 – 40 years",
              premiumPayingTerm: "Regular, limited (5/10 yrs), or single",
              sumAssured: "₹25,00,000 and above",
              keyBenefits: [
                "Choose level or increasing sum assured",
                "Special rates for non-tobacco users",
                "Lower premiums for women",
                "High sum assured bands reduce per-unit premium",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Families who want flexible death benefit options to match growing financial liabilities.",
            },
          },
          {
            name: "LIC New Tech Term",
            description: "Updated online term plan with premium return option and wider sum assured bands.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "10 – 40 years",
              premiumPayingTerm: "Regular, limited, or single pay",
              sumAssured: "₹50,00,000 and above",
              keyBenefits: [
                "Option to get all premiums back on maturity (TROP)",
                "Wider sum assured range",
                "Accelerated critical illness benefit available",
                "Completely online — quick issuance",
                "Tax benefit under Section 80C & 10(10D)",
              ],
              idealFor: "Those who want pure term protection but also wish to recover premiums if they outlive the policy.",
            },
          },
        ],
      },
      {
        id: "riders",
        label: "Riders",
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
    id: "general",
    label: "General Insurance",
    tagline: "Comprehensive protection for every risk you face",
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #003a1f 62.5%, #006b3a 100%)",
    subCategories: [
      {
        id: "motor",
        label: "Motor Insurance",
        plans: [
          {
            name: "Private Car Insurance",
            description: "Comprehensive and third-party cover for your personal car against accidents, theft, and natural calamities.",
            details: {
              eligibility: "All registered private cars",
              policyTerm: "1 year (renewable annually)",
              sumAssured: "Based on IDV (Insured Declared Value)",
              keyBenefits: [
                "Own damage cover: accidents, fire, theft, natural calamities",
                "Mandatory third-party liability cover",
                "Cashless repairs at 5,000+ network garages",
                "No-Claim Bonus (NCB) up to 50% on renewal",
                "Add-ons: zero depreciation, roadside assistance, engine protect",
              ],
              idealFor: "Car owners who want complete protection for their vehicle and third-party liabilities.",
            },
          },
          {
            name: "Two-Wheeler Insurance",
            description: "Mandatory and comprehensive policies to protect your bike or scooter on every ride.",
            details: {
              eligibility: "All registered two-wheelers",
              policyTerm: "1 year or 5-year long-term",
              sumAssured: "Based on IDV",
              keyBenefits: [
                "Third-party liability cover (mandatory by law)",
                "Own damage protection against accidents & theft",
                "Cashless claim settlement",
                "NCB benefit on claim-free years",
                "Personal accident cover for owner-driver",
              ],
              idealFor: "Two-wheeler owners seeking mandatory and comprehensive coverage.",
            },
          },
          {
            name: "Commercial Vehicle Insurance",
            description: "Cover for taxis, trucks, buses, and other commercial vehicles including goods in transit.",
            details: {
              eligibility: "All commercial vehicles registered with RTO",
              policyTerm: "1 year (renewable)",
              sumAssured: "Based on vehicle type and IDV",
              keyBenefits: [
                "Comprehensive own damage + third-party cover",
                "Covers goods in transit (add-on)",
                "Driver and passenger PA cover",
                "Fleet discount for 5+ vehicles",
                "24/7 roadside assistance add-on available",
              ],
              idealFor: "Business owners, fleet operators, and logistics companies.",
            },
          },
        ],
      },
      {
        id: "health",
        label: "Health Insurance",
        plans: [
          {
            name: "Individual Health Plan",
            description: "Covers hospitalisation, day-care procedures, pre- and post-hospitalisation expenses.",
            details: {
              eligibility: "Age 18 – 65 years (renewals lifelong)",
              policyTerm: "1 year (renewable)",
              sumAssured: "₹3,00,000 – ₹1,00,00,000",
              keyBenefits: [
                "In-patient hospitalisation cover",
                "60-day pre & 90-day post hospitalisation",
                "Day-care procedures covered",
                "Cashless treatment at 10,000+ network hospitals",
                "Tax benefit under Section 80D",
              ],
              idealFor: "Individuals seeking personal health financial protection.",
            },
          },
          {
            name: "Family Floater Plan",
            description: "A single sum insured shared by all family members — more economical than individual plans.",
            details: {
              eligibility: "Self + spouse + up to 4 children; entry age 91 days – 65 years",
              policyTerm: "1 year (renewable)",
              sumAssured: "₹5,00,000 – ₹1,00,00,000 (shared)",
              keyBenefits: [
                "Single premium covers entire family",
                "Any member can use the full sum insured",
                "New-born covered from day 1 (in some plans)",
                "No-claim bonus on renewal",
                "Tax benefit under Section 80D",
              ],
              idealFor: "Families looking for comprehensive, cost-effective health coverage.",
            },
          },
          {
            name: "Critical Illness Plan",
            description: "Lump-sum payout on diagnosis of life-threatening illnesses like cancer, heart attack, or stroke.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "1 year or long term",
              sumAssured: "₹5,00,000 – ₹1,00,00,000",
              keyBenefits: [
                "Covers 36 critical illnesses",
                "Lump sum paid on diagnosis — no bills needed",
                "Can be used for treatment, loans, or income replacement",
                "Survival benefit of 30 days post-diagnosis",
                "Tax benefit under Section 80D",
              ],
              idealFor: "Professionals with high financial liabilities or a family history of critical illness.",
            },
          },
          {
            name: "Senior Citizen Health Plan",
            description: "Designed for individuals above 60 — covers pre-existing diseases after a short waiting period.",
            details: {
              eligibility: "Age 60 – 80 years",
              policyTerm: "1 year (renewable for life)",
              sumAssured: "₹2,00,000 – ₹25,00,000",
              keyBenefits: [
                "Pre-existing disease cover after 1–2 year waiting period",
                "AYUSH treatment covered",
                "Domiciliary hospitalisation covered",
                "No pre-policy medical (many plans)",
                "Higher tax deduction of ₹50,000 under Section 80D",
              ],
              idealFor: "Senior citizens needing comprehensive healthcare coverage post-retirement.",
            },
          },
        ],
      },
      {
        id: "travel",
        label: "Travel Insurance",
        plans: [
          {
            name: "Domestic Travel Insurance",
            description: "Covers trip cancellation, medical emergencies, and baggage loss during travel within India.",
            details: {
              eligibility: "Age 1 day – 70 years",
              policyTerm: "Per trip (1–180 days)",
              sumAssured: "Varies by plan",
              keyBenefits: [
                "Emergency medical expenses covered",
                "Trip cancellation & interruption",
                "Loss/delay of checked-in baggage",
                "Personal accident cover",
                "24/7 travel assistance helpline",
              ],
              idealFor: "Frequent domestic travellers, especially those on pre-booked tours.",
            },
          },
          {
            name: "International Travel Insurance",
            description: "Comprehensive cover for overseas travel including medical, repatriation, and loss of passport.",
            details: {
              eligibility: "Age 6 months – 70 years",
              policyTerm: "Per trip or annual multi-trip",
              sumAssured: "USD 50,000 – USD 5,00,000",
              keyBenefits: [
                "Medical evacuation and repatriation",
                "Loss of passport & travel documents",
                "Trip cancellation and delay",
                "Personal liability cover abroad",
                "Cashless hospitalisation at overseas network hospitals",
              ],
              idealFor: "Frequent international travellers or those going on long overseas trips.",
            },
          },
          {
            name: "Student Travel Insurance",
            description: "Specially designed for students studying abroad covering tuition fee protection and medical expenses.",
            details: {
              eligibility: "Age 16 – 35 years; enrolled in accredited foreign institution",
              policyTerm: "Up to 2 years (extendable)",
              sumAssured: "As per chosen plan",
              keyBenefits: [
                "Medical & hospitalisation abroad",
                "Tuition fee protection if studies interrupted",
                "Sponsor protection (if sponsor dies/disabled)",
                "Personal accident and liability cover",
                "Study interruption benefit",
              ],
              idealFor: "Indian students pursuing higher education abroad.",
            },
          },
        ],
      },
      {
        id: "fire",
        label: "Fire & Property",
        plans: [
          {
            name: "Standard Fire & Special Perils",
            description: "Covers damage to buildings and contents due to fire, lightning, storm, and allied perils.",
            details: {
              eligibility: "Residential and commercial property owners/tenants",
              policyTerm: "1 year (long-term options available)",
              sumAssured: "Reinstatement value of property",
              keyBenefits: [
                "Fire, lightning, explosion cover",
                "Storm, cyclone, flood, inundation",
                "Riot, strike, malicious damage",
                "Aircraft damage and impact damage",
                "Option to add earthquake & terrorism covers",
              ],
              idealFor: "Property owners who want protection against fire and weather-related property damage.",
            },
          },
          {
            name: "Householders Package",
            description: "All-in-one home insurance covering building, contents, burglary, and electronic equipment.",
            details: {
              eligibility: "Home owners and tenants",
              policyTerm: "1 year",
              sumAssured: "Based on declared value",
              keyBenefits: [
                "Building structure cover",
                "Contents and valuables cover",
                "Burglary and theft cover",
                "Electronic equipment cover",
                "Personal accident cover for residents",
              ],
              idealFor: "Homeowners wanting comprehensive protection for their home and belongings.",
            },
          },
          {
            name: "Shopkeepers Package",
            description: "Comprehensive cover for shop premises, stock, employees, and public liability.",
            details: {
              eligibility: "Shop owners (retail, small business)",
              policyTerm: "1 year",
              sumAssured: "Based on stock and asset value",
              keyBenefits: [
                "Building and stock protection",
                "Money in safe and in transit",
                "Employee fidelity cover",
                "Public liability to customers",
                "Neon sign and glass breakage cover",
              ],
              idealFor: "Retail shop owners wanting all-in-one business and premises protection.",
            },
          },
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
          {
            name: "Building Structure Insurance",
            description: "Covers the physical structure of your home against fire, flood, storm, earthquake, and other perils.",
            details: {
              eligibility: "Home owners (not tenants)",
              policyTerm: "1 year (long-term available)",
              sumAssured: "Based on construction cost (reinstatement value)",
              keyBenefits: [
                "Fire, lightning, explosion damage",
                "Flood, storm, cyclone, and earthquake",
                "Impact damage from vehicles or fallen trees",
                "Subsidence and landslide cover",
                "No depreciation on reinstatement value policies",
              ],
              idealFor: "Property owners wanting to protect the physical structure of their home.",
            },
          },
          {
            name: "Apartment Insurance",
            description: "Specifically designed for flat owners — covers the interior structure and common area liability.",
            details: {
              eligibility: "Apartment/flat owners",
              policyTerm: "1 year",
              sumAssured: "Based on interior fit-out value",
              keyBenefits: [
                "Interior walls, flooring, fixtures covered",
                "Electrical wiring and plumbing cover",
                "Common area liability as add-on",
                "Theft cover for fixtures and fittings",
                "Worldwide cover for portable items",
              ],
              idealFor: "Urban apartment owners wanting to protect their flat interiors and fixtures.",
            },
          },
          {
            name: "Under-Construction Cover",
            description: "Protects your investment during the construction phase against unforeseen structural damage.",
            details: {
              eligibility: "Properties under active construction",
              policyTerm: "Duration of construction",
              sumAssured: "Contract value of project",
              keyBenefits: [
                "Covers material and labour costs",
                "Third-party liability during construction",
                "Covers damage by fire, storm, flood",
                "Covers collapse and faulty workmanship",
                "Contractor's equipment cover available",
              ],
              idealFor: "Home builders and developers wanting to protect their investment during construction.",
            },
          },
        ],
      },
      {
        id: "contents",
        label: "Contents Cover",
        plans: [
          {
            name: "Household Contents Insurance",
            description: "Covers furniture, appliances, electronics, and valuables inside your home against theft and damage.",
            details: {
              eligibility: "Home owners and tenants",
              policyTerm: "1 year",
              sumAssured: "Total replacement value of contents",
              keyBenefits: [
                "Furniture, furnishings, and appliances covered",
                "Theft, burglary, and housebreaking",
                "Fire and allied perils for contents",
                "Accidental damage add-on available",
                "Worldwide cover for personal items",
              ],
              idealFor: "Home owners and tenants wanting to protect their household contents.",
            },
          },
          {
            name: "Jewellery & Valuables Floater",
            description: "All-risk cover for jewellery, watches, and portable valuables both at home and outside.",
            details: {
              eligibility: "Home owners and individuals",
              policyTerm: "1 year",
              sumAssured: "Agreed value basis per item",
              keyBenefits: [
                "All-risk cover — theft, accidental loss/damage",
                "Cover applies at home and outside",
                "Bank locker contents also covered (some plans)",
                "Worldwide cover available",
                "Individual items can be scheduled",
              ],
              idealFor: "Those with high-value jewellery, watches, or art who need comprehensive protection.",
            },
          },
          {
            name: "Electronic Equipment Cover",
            description: "Protection for laptops, home theatres, refrigerators, and other electronic appliances.",
            details: {
              eligibility: "Home owners and tenants",
              policyTerm: "1 year",
              sumAssured: "Replacement value of electronics",
              keyBenefits: [
                "Accidental damage and electrical breakdown",
                "Fire, theft, and natural perils",
                "Portable devices covered away from home",
                "Data recovery costs (some policies)",
                "New-for-old replacement available",
              ],
              idealFor: "Tech-heavy households with multiple expensive electronic devices.",
            },
          },
        ],
      },
      {
        id: "liability",
        label: "Liability Cover",
        plans: [
          {
            name: "Owner's Liability Insurance",
            description: "Covers legal liability arising from bodily injury or property damage to third parties on your premises.",
            details: {
              eligibility: "Home owners",
              policyTerm: "1 year",
              sumAssured: "₹5,00,000 – ₹50,00,000",
              keyBenefits: [
                "Legal defence costs covered",
                "Third-party bodily injury on premises",
                "Third-party property damage",
                "Domestic staff injury claims",
                "Swimming pool and outbuilding liability",
              ],
              idealFor: "Homeowners who regularly have guests, staff, or service workers on the property.",
            },
          },
          {
            name: "Domestic Servant Liability",
            description: "Protects you against legal claims by domestic workers injured while working in your home.",
            details: {
              eligibility: "Home owners employing domestic staff",
              policyTerm: "1 year",
              sumAssured: "₹1,00,000 – ₹10,00,000 per worker",
              keyBenefits: [
                "Workmen's compensation for domestic staff",
                "Medical expenses for injured worker",
                "Legal defence in compensation claims",
                "Covers cooks, drivers, maids, security guards",
                "Minimal annual premium",
              ],
              idealFor: "Households employing full-time or part-time domestic helpers.",
            },
          },
        ],
      },
      {
        id: "addon",
        label: "Add-On Covers",
        plans: [
          {
            name: "Rent Compensation",
            description: "Pays alternative accommodation expenses if your home becomes uninhabitable due to an insured peril.",
            details: {
              policyTerm: "Add-on to base home policy",
              sumAssured: "Up to 20% of building sum insured",
              keyBenefits: [
                "Covers hotel or rental costs during repairs",
                "Triggered when home declared uninhabitable",
                "Payments for up to 12 months",
                "Covers reasonable comparable accommodation",
                "No out-of-pocket rental expense during repairs",
              ],
              idealFor: "Home owners who would need temporary housing if their home was severely damaged.",
            },
          },
          {
            name: "Key & Lock Replacement",
            description: "Covers cost of replacing locks and keys after a burglary or loss.",
            details: {
              sumAssured: "Up to ₹25,000",
              keyBenefits: [
                "Lock replacement after confirmed break-in",
                "Key replacement after theft of keys",
                "Covers main door and all external locks",
                "Locksmith call-out fee included",
                "Quick turnaround claim settlement",
              ],
              idealFor: "Homeowners who want protection against the overlooked cost of lock and key replacement.",
            },
          },
          {
            name: "Pedal Cycle Cover",
            description: "Covers your bicycles against accidental damage, theft, and third-party claims.",
            details: {
              sumAssured: "Declared value of bicycle",
              keyBenefits: [
                "Accidental damage and theft",
                "Third-party liability while cycling",
                "Personal accident cover for cyclist",
                "Covers racing and mountain bikes",
                "Worldwide cover available",
              ],
              idealFor: "Cycling enthusiasts with high-value bicycles used for commuting or sport.",
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
    heroGradient: "radial-gradient(100% 100% at 50% 50%, #1a003f 62.5%, #4b0082 100%)",
    subCategories: [
      {
        id: "individual",
        label: "Individual Plans",
        plans: [
          {
            name: "Individual Health Insurance",
            description: "Covers hospitalisation and related medical expenses for a single person.",
            details: {
              eligibility: "Age 18 – 65 years (lifelong renewals)",
              policyTerm: "1 year",
              sumAssured: "₹3,00,000 – ₹1,00,00,000",
              keyBenefits: [
                "In-patient hospitalisation expenses",
                "Pre and post-hospitalisation (60 & 90 days)",
                "Day-care procedures and organ donor expenses",
                "Annual health check-up benefit",
                "Tax deduction under Section 80D",
              ],
              idealFor: "Working individuals who want personal health financial security.",
            },
          },
          {
            name: "Personal Accident Plan",
            description: "Provides compensation for accidental death, disability, and medical expenses due to accidents.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "1 year",
              sumAssured: "₹5,00,000 – ₹1,00,00,000",
              keyBenefits: [
                "100% SA on accidental death",
                "100% SA on total permanent disability",
                "50% SA on partial permanent disability",
                "Weekly compensation for temporary total disability",
                "Education grant for dependent children",
              ],
              idealFor: "Individuals in physically active or high-risk professions.",
            },
          },
          {
            name: "Hospital Cash Benefit",
            description: "Daily cash allowance for each day of hospitalisation to cover incidental expenses.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "1 year",
              sumAssured: "₹500 – ₹5,000 per day",
              keyBenefits: [
                "Fixed daily cash for each day in hospital",
                "Doubles for ICU admission",
                "Covers incidental expenses not covered by health policy",
                "Can be used alongside any other health plan",
                "No bills required — flat daily benefit",
              ],
              idealFor: "Anyone who wants to offset out-of-pocket daily expenses during hospitalisation.",
            },
          },
        ],
      },
      {
        id: "family",
        label: "Family Plans",
        plans: [
          {
            name: "Family Floater Plan",
            description: "One sum insured covers all family members — cost-effective and hassle-free.",
            details: {
              eligibility: "Self + spouse + up to 4 children; entry age 91 days – 65 years",
              policyTerm: "1 year",
              sumAssured: "₹5,00,000 – ₹1,00,00,000",
              keyBenefits: [
                "Full sum insured accessible by any member",
                "One renewal — lower admin hassle",
                "No-claim bonus on claim-free years",
                "Maternity add-on available",
                "Tax benefit under Section 80D",
              ],
              idealFor: "Families seeking affordable, single-policy coverage for all members.",
            },
          },
          {
            name: "Maternity Insurance",
            description: "Covers normal and C-section delivery expenses along with newborn baby cover.",
            details: {
              eligibility: "Women aged 18 – 45 years; waiting period 2–4 years",
              policyTerm: "1 year",
              sumAssured: "₹30,000 – ₹2,00,000 maternity sub-limit",
              keyBenefits: [
                "Normal and C-section delivery expenses",
                "New-born baby covered from day 1",
                "Pre-natal check-ups (some plans)",
                "Vaccination cover for new-born",
                "Complications of pregnancy covered",
              ],
              idealFor: "Couples planning a family who want delivery and baby expenses covered.",
            },
          },
          {
            name: "Child Health Plan",
            description: "Tailored plan for children covering hospitalisation, vaccinations, and day-care procedures.",
            details: {
              eligibility: "Age 91 days – 25 years",
              policyTerm: "1 year",
              sumAssured: "₹2,00,000 – ₹20,00,000",
              keyBenefits: [
                "Hospitalisation for illness and accidents",
                "Vaccination schedule coverage",
                "Dental and vision treatment",
                "Day-care procedures",
                "Renewal into adult plan seamlessly",
              ],
              idealFor: "Parents who want dedicated health coverage for their children.",
            },
          },
        ],
      },
      {
        id: "senior",
        label: "Senior Citizen Plans",
        plans: [
          {
            name: "Senior Citizen Health Plan",
            description: "Comprehensive cover for individuals aged 60+ including pre-existing disease coverage.",
            details: {
              eligibility: "Age 60 – 80 years",
              policyTerm: "1 year (lifelong renewals)",
              sumAssured: "₹2,00,000 – ₹25,00,000",
              keyBenefits: [
                "Pre-existing disease covered after 1–2 year waiting period",
                "AYUSH treatment covered",
                "Domiciliary hospitalisation",
                "Ambulance charges covered",
                "Higher 80D deduction of ₹50,000",
              ],
              idealFor: "Senior citizens who need extensive healthcare coverage post-retirement.",
            },
          },
          {
            name: "Arogya Sanjeevani Policy",
            description: "Standard health plan with uniform features across all insurers — easy to understand and compare.",
            details: {
              eligibility: "Age 18 – 65 years; family floater option available",
              policyTerm: "1 year",
              sumAssured: "₹1,00,000 – ₹10,00,000",
              keyBenefits: [
                "Standardised plan — same features across all insurers",
                "In-patient treatment and day-care",
                "AYUSH treatment covered",
                "Cataract treatment limit included",
                "Easy to compare due to uniform terms",
              ],
              idealFor: "First-time buyers or those wanting a simple, transparent baseline health plan.",
            },
          },
        ],
      },
      {
        id: "critical",
        label: "Critical Illness",
        plans: [
          {
            name: "Cancer Care Plan",
            description: "Lump sum payout at various stages of cancer diagnosis to cover treatment and recovery.",
            details: {
              eligibility: "Age 18 – 65 years; no tobacco users preferred",
              policyTerm: "1 year or long-term",
              sumAssured: "₹10,00,000 – ₹50,00,000",
              keyBenefits: [
                "25% SA paid at early/minor stage diagnosis",
                "100% SA paid at major/advanced stage",
                "Waiver of future premiums post early-stage diagnosis",
                "Income benefit of 1% per month after major stage",
                "Tax benefit under Section 80D",
              ],
              idealFor: "Individuals with family history of cancer or those wanting dedicated cancer financial protection.",
            },
          },
          {
            name: "Heart Care Plan",
            description: "Covers cardiac surgeries, heart attacks, and related hospitalisation.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "1 year",
              sumAssured: "₹5,00,000 – ₹50,00,000",
              keyBenefits: [
                "Heart attack (first occurrence)",
                "Open heart and bypass surgery",
                "Angioplasty and stent procedures",
                "Lump sum paid directly to policyholder",
                "Tax benefit under Section 80D",
              ],
              idealFor: "Those with risk factors for heart disease or family history of cardiac conditions.",
            },
          },
          {
            name: "Comprehensive Critical Illness",
            description: "Covers 30+ critical illnesses including cancer, stroke, organ failure, and more.",
            details: {
              eligibility: "Age 18 – 65 years",
              policyTerm: "1 year or 2/3-year long term",
              sumAssured: "₹5,00,000 – ₹1,00,00,000",
              keyBenefits: [
                "Covers 32+ listed critical illnesses",
                "Lump sum on first diagnosis",
                "No requirement to submit hospital bills",
                "Income replacement during recovery",
                "Can be taken independently or as rider",
              ],
              idealFor: "High-income earners with dependents wanting complete critical illness financial protection.",
            },
          },
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
          {
            name: "Commercial Property Insurance",
            description: "Covers office buildings, warehouses, and business premises against fire and allied perils.",
            details: {
              eligibility: "Business owners and commercial tenants",
              policyTerm: "1 year",
              sumAssured: "Reinstatement value of building/assets",
              keyBenefits: [
                "Fire, lightning, explosion cover",
                "Flood, storm, and natural calamities",
                "Business interruption cover add-on",
                "Loss of rent cover",
                "Terrorism cover available",
              ],
              idealFor: "Business owners who own or lease commercial premises.",
            },
          },
          {
            name: "Machinery Breakdown Insurance",
            description: "Covers sudden breakdown of plant and machinery leading to business interruption.",
            details: {
              eligibility: "Manufacturing and industrial businesses",
              policyTerm: "1 year",
              sumAssured: "Replacement cost of machinery",
              keyBenefits: [
                "Sudden unforeseen breakdown of machines",
                "Repair and replacement costs",
                "Loss of profit due to breakdown add-on",
                "Electrical and mechanical failure",
                "No exclusion for operator negligence",
              ],
              idealFor: "Manufacturers and businesses dependent on machinery for operations.",
            },
          },
          {
            name: "Electronic Equipment Insurance",
            description: "All-risk cover for computers, servers, and electronic equipment used in your business.",
            details: {
              eligibility: "All business types using electronics",
              policyTerm: "1 year",
              sumAssured: "Replacement value of electronic assets",
              keyBenefits: [
                "Accidental damage to computers, servers",
                "Power surge and electrical failure",
                "Theft and attempted theft",
                "Data restoration costs (some policies)",
                "Portable equipment covered outside office",
              ],
              idealFor: "IT firms, startups, and businesses with significant electronic assets.",
            },
          },
        ],
      },
      {
        id: "bizliability",
        label: "Liability Insurance",
        plans: [
          {
            name: "Public Liability Insurance",
            description: "Covers legal liability to third parties for bodily injury or property damage.",
            details: {
              eligibility: "Any business with customer-facing premises",
              policyTerm: "1 year",
              sumAssured: "₹10,00,000 – ₹10,00,00,000",
              keyBenefits: [
                "Third-party bodily injury claims",
                "Third-party property damage",
                "Legal defence costs",
                "Covers premises and products",
                "Court-mandated compensation",
              ],
              idealFor: "Retail shops, restaurants, offices, and factories with public interaction.",
            },
          },
          {
            name: "Product Liability Insurance",
            description: "Protects manufacturers and sellers from claims arising from defective products.",
            details: {
              eligibility: "Manufacturers, importers, and distributors",
              policyTerm: "1 year",
              sumAssured: "As per business turnover",
              keyBenefits: [
                "Covers injury or damage caused by your product",
                "Legal defence and court costs",
                "Recall expenses (some policies)",
                "Export product liability available",
                "Required for regulated industries",
              ],
              idealFor: "FMCG brands, pharma companies, food businesses, and electronics manufacturers.",
            },
          },
          {
            name: "Professional Indemnity",
            description: "Protects professionals against claims of negligence or errors in their professional services.",
            details: {
              eligibility: "Doctors, lawyers, CAs, consultants, IT firms",
              policyTerm: "1 year",
              sumAssured: "₹5,00,000 – ₹50,00,00,000",
              keyBenefits: [
                "Covers claims of professional negligence",
                "Legal defence costs included",
                "Prior acts cover available",
                "Run-off cover for retired professionals",
                "Tailored for each profession",
              ],
              idealFor: "Consultants, medical professionals, and service firms liable for client outcomes.",
            },
          },
          {
            name: "Directors & Officers Liability",
            description: "Covers personal liability of directors and officers for wrongful acts in managing the company.",
            details: {
              eligibility: "Directors and officers of companies",
              policyTerm: "1 year",
              sumAssured: "₹1,00,00,000 and above",
              keyBenefits: [
                "Personal asset protection for directors",
                "Covers regulatory and investigation costs",
                "Employment practices liability included",
                "Securities claims cover",
                "Crisis management and PR expenses",
              ],
              idealFor: "Board members and senior executives of companies facing regulatory scrutiny.",
            },
          },
        ],
      },
      {
        id: "employee",
        label: "Employee Benefits",
        plans: [
          {
            name: "Group Health Insurance",
            description: "Provides health coverage to all employees under a single policy — great for team welfare.",
            details: {
              eligibility: "Minimum 7 employees; employer-employee relationship",
              policyTerm: "1 year",
              sumAssured: "₹2,00,000 – ₹10,00,000 per employee",
              keyBenefits: [
                "No medical tests for employees",
                "Dependants can be included",
                "Pre-existing disease cover from day 1",
                "Maternity benefit available",
                "Improves employee retention and satisfaction",
              ],
              idealFor: "Start-ups and companies wanting to provide health benefits to attract talent.",
            },
          },
          {
            name: "Group Term Life Insurance",
            description: "Life cover for employees with low premiums and easy enrollment.",
            details: {
              eligibility: "Active employees; minimum group size 10",
              policyTerm: "1 year",
              sumAssured: "2–5x annual CTC (customisable)",
              keyBenefits: [
                "No individual medical underwriting",
                "SA can be linked to CTC or graded by designation",
                "AD&D benefit can be added",
                "Critical illness rider available",
                "Tax benefit for employer as business expense",
              ],
              idealFor: "HR teams wanting to provide cost-effective life cover as an employee benefit.",
            },
          },
          {
            name: "Workmen's Compensation",
            description: "Mandatory cover protecting employers from claims by employees injured during work.",
            details: {
              eligibility: "Employers with blue-collar or hazardous-duty workers",
              policyTerm: "1 year",
              sumAssured: "As per Workmen's Compensation Act",
              keyBenefits: [
                "Compensation for accidental death or disability at work",
                "Medical expenses for work injuries",
                "Legal liability to injured worker or family",
                "Complies with Workmen's Compensation Act, 1923",
                "Covers casual and contract workers",
              ],
              idealFor: "Construction firms, factories, and employers with manual/hazardous-duty workers.",
            },
          },
        ],
      },
      {
        id: "marine",
        label: "Marine & Transit",
        plans: [
          {
            name: "Marine Cargo Insurance",
            description: "Covers goods in transit by sea, air, road, or rail against loss and damage.",
            details: {
              eligibility: "Importers, exporters, and domestic cargo owners",
              policyTerm: "Per voyage or annual open policy",
              sumAssured: "Invoice value + freight + 10%",
              keyBenefits: [
                "All-risk cover (ICC A, B, or C clauses)",
                "Total and partial loss of cargo",
                "War and strikes cover available",
                "Warehouse-to-warehouse cover",
                "Annual open policy for frequent shippers",
              ],
              idealFor: "Import/export businesses and manufacturers shipping goods domestically or internationally.",
            },
          },
          {
            name: "Marine Hull Insurance",
            description: "Covers the vessel itself against damage, collision, fire, and total loss.",
            details: {
              eligibility: "Ship and boat owners",
              policyTerm: "1 year",
              sumAssured: "Agreed vessel value",
              keyBenefits: [
                "Hull and machinery damage",
                "Collision liability to third-party vessels",
                "Total and constructive total loss",
                "P&I (Protection & Indemnity) available",
                "Covers fishing vessels, yachts, barges",
              ],
              idealFor: "Vessel owners in shipping, fishing, or ferry operations.",
            },
          },
          {
            name: "Inland Transit Insurance",
            description: "Protects cargo transported by road or rail within India.",
            details: {
              eligibility: "Domestic goods transporters and traders",
              policyTerm: "Per consignment or annual",
              sumAssured: "Invoice value of goods",
              keyBenefits: [
                "Fire, accident, overturning of vehicle",
                "Theft and burglary in transit",
                "Flood, storm, and natural perils",
                "Own damage to goods during loading/unloading",
                "Flexible per-trip or annual policy",
              ],
              idealFor: "Businesses regularly dispatching goods by road or rail within India.",
            },
          },
        ],
      },
    ],
  },
];

function getCategoryById(id: string): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
}

// ─── Detail row helper ────────────────────────────────────────────────────────
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 py-2.5 border-b border-gray-100 last:border-b-0">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide sm:w-40 shrink-0">{label}</span>
      <span className="text-sm text-gray-800">{value}</span>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Insurances() {
  const { category: categoryParam } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const activeCategory = getCategoryById(categoryParam ?? CATEGORIES[0].id);
  const [activeSubId, setActiveSubId] = React.useState(activeCategory.subCategories[0].id);
  const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null);

  React.useEffect(() => {
    setActiveSubId(activeCategory.subCategories[0].id);
    setSelectedPlan(null);
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
                  <button
                    key={i}
                    onClick={() => setSelectedPlan(plan)}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 transition-all duration-200 flex flex-col gap-3 text-left group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-1 rounded-full bg-primary shrink-0 group-hover:bg-primary" />
                      <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-primary transition-colors">{plan.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed pl-4">{plan.description}</p>
                    <div className="pl-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        View Details <Info className="size-3" />
                      </span>
                      <ChevronRight className="size-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Plan Detail Sheet ──────────────────────────────────── */}
      <Sheet open={!!selectedPlan} onOpenChange={(open) => { if (!open) setSelectedPlan(null); }}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto p-0">
          {selectedPlan && (
            <>
              {/* Header */}
              <div
                className="relative px-6 pt-8 pb-6 text-white"
                style={{ background: activeCategory.heroGradient }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">{activeCategory.label}</p>
                <SheetHeader>
                  <SheetTitle className="text-white text-xl font-bold leading-snug text-left">
                    {selectedPlan.name}
                  </SheetTitle>
                </SheetHeader>
                <p className="mt-2 text-sm text-blue-100 leading-relaxed">{selectedPlan.description}</p>
              </div>

              {/* Body */}
              <div className="px-6 py-6 space-y-7">

                {/* Plan specs */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Plan Specifications</h3>
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

                {/* Key benefits */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Benefits</h3>
                  <ul className="space-y-2.5">
                    {selectedPlan.details.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal for */}
                {selectedPlan.details.idealFor && (
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">Ideal For</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedPlan.details.idealFor}</p>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col gap-3 pt-2">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/contact" onClick={() => setSelectedPlan(null)}>
                      Get a Quote
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                  <a
                    href={`https://wa.me/+918778912704?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(selectedPlan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:brightness-110 shadow"
                    style={{ background: "#cc9c42" }}
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

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
