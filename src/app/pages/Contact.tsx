import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle, AlertCircle, ChevronRight, MessageSquare } from "lucide-react";
import { sendContactEmail, ContactFormData } from "../utils/emailService";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Alert, AlertDescription } from "../components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import familyHealthImg from "../components/assets/family_health.jpg";
import whatsappIcon from "../components/assets/whatsapp.svg";

const INFO_PASTELS = [
  { bg: "#EFF6FF", border: "#BFDBFE", icon: "#2563EB" }, // blue
  { bg: "#F0FDF4", border: "#BBF7D0", icon: "#16A34A" }, // green
  { bg: "#FFF7ED", border: "#FED7AA", icon: "#EA580C" }, // orange
  { bg: "#FFF1F2", border: "#FECDD3", icon: "#E11D48" }, // pink
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const payload: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message || undefined,
      };

      const result = await sendContactEmail(payload);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you for your inquiry! We'll be in touch soon.",
        });

        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
      } else {
        setSubmitStatus({ type: "error", message: result.message || "Failed to send email." });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setSubmitStatus({ type: "error", message: msg });
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["First Floor, Dhasan Complex,", "No 292D/16, MS Rd, Vetturnimadam,", "Nagercoil, Tamil Nadu 629003"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 87789 12704"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@premierinsurance-partners.in", "claims@premierinsurance-partners.in"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 3:00 PM"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section — matches Insurances/Claims */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px]">
        <div className="absolute inset-0">
          <img
            src={familyHealthImg}
            alt="Contact Premier Insurance Partners"
            className="w-full h-full object-cover"
            style={{ objectPosition: "right top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20" />
        </div>
        <div className="pointer-events-none absolute inset-0 section-pattern opacity-10" />

        {/* Decorative floating icon */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
          <MessageSquare className="size-64 text-white" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-1.5 text-base text-white/50 mb-8 font-sans" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-4 shrink-0" />
            <span className="text-white font-semibold">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="gold-divider" />
              <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">Get in Touch</h1>
            {/* Prominent gold tagline */}
            <p className="text-2xl md:text-3xl text-secondary font-bold mb-6 font-sans leading-snug">
              &ldquo;We're here to answer all your questions&rdquo;
            </p>
            <p className="text-base text-white/80 leading-relaxed font-sans max-w-xl">
              Have questions? Reach out and our insurance experts will respond as soon as possible — usually within 24 hours.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>

      {/* Contact Info Cards — pastel colours matching Insurances */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Reach Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">Contact Information</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const p = INFO_PASTELS[index % INFO_PASTELS.length];
              return (
                <div
                  key={index}
                  className="rounded-2xl p-7 card-premium border"
                  style={{ background: p.bg, borderColor: p.border }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${p.icon}18`, color: p.icon }}
                  >
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                  {info.details.map((detail, di) => (
                    <p key={di} className="text-base text-gray-700 leading-relaxed font-sans">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-gray-50 section-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase font-sans">Get a Quote</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">Request a Free Quote</h2>
              <div className="gold-divider mx-auto mb-5" />
              <p className="text-base md:text-lg text-gray-600 font-sans leading-relaxed">
                Fill out the form below and one of our insurance experts will contact you within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-6">Get Started Today</h3>

              {submitStatus.type && (
                <Alert
                  className={`mb-6 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <AlertDescription
                      className={
                        submitStatus.type === "success"
                          ? "text-green-800 text-base"
                          : "text-red-800 text-base"
                      }
                    >
                      {submitStatus.message}
                    </AlertDescription>
                  </div>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-base font-semibold">Insurance Type *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger id="service" className="text-base">
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="health">Health Insurance</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your insurance needs..."
                    rows={5}
                    className="text-base"
                  />
                </div>

                <div className="bg-primary/5 border border-primary/10 p-5 rounded-lg">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    By submitting this form, you agree to be contacted by Premier Insurance Partners regarding your inquiry. We respect your privacy and will never share your information with third parties.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-base font-bold py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 size-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-5" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="mt-10 text-center">
              <p className="text-base text-gray-600 mb-5 font-sans">Prefer to talk to someone right away?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-base font-bold">
                  <a href="tel:+918778912704">
                    <Phone className="mr-2 size-5" />
                    Call +91 87789 12704
                  </a>
                </Button>
                <a
                  href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white text-base transition-all hover:brightness-110 shadow"
                  style={{ background: "#cc9c42" }}
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section — Futuristic */}
      <section className="relative bg-primary overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-semibold tracking-[0.25em] uppercase font-sans">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Our Location</h2>
            <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:border-secondary/40 hover:bg-white/8 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <MapPin className="size-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">Address</p>
                    <p className="text-white font-bold text-base leading-snug">First Floor, Dhasan Complex</p>
                    <p className="text-gray-300 text-base mt-1">No 292D/16, MS Rd, Vetturnimadam</p>
                    <p className="text-gray-300 text-base">Nagercoil, Tamil Nadu 629003</p>
                  </div>
                </div>
              </div>

              <a href="tel:+918778912704" className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:border-secondary/40 hover:bg-white/8 transition-all duration-300 block">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <Phone className="size-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">Phone</p>
                    <p className="text-white font-bold text-base">+91 87789 12704</p>
                    <p className="text-gray-300 text-sm mt-1">Tap to call</p>
                  </div>
                </div>
              </a>

              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:border-secondary/40 hover:bg-white/8 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <Clock className="size-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold tracking-widest uppercase mb-2">Office Hours</p>
                    <p className="text-white font-bold text-base">Mon – Fri · 8 AM – 6 PM</p>
                    <p className="text-gray-300 text-base mt-1">Sat · 9 AM – 3 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/27wFFkxtFy9FJ6ES9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-auto rounded-2xl border border-secondary/40 bg-secondary/10 backdrop-blur-sm p-6 hover:bg-secondary/20 transition-all duration-300 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-bold text-base">Get Directions</p>
                  <p className="text-gray-300 text-sm mt-1">Open in Google Maps</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-secondary/50 bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                  <svg className="size-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </a>
            </div>

            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 min-h-[440px]">
              <div className="pointer-events-none absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-secondary/60 rounded-tl-2xl z-20" />
              <div className="pointer-events-none absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-secondary/60 rounded-tr-2xl z-20" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-secondary/60 rounded-bl-2xl z-20" />
              <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/60 rounded-br-2xl z-20" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/70 to-transparent z-20 animate-[scan_3s_ease-in-out_infinite]" />

              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.2!2d77.4177374!3d8.1903409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1310fa60cad%3A0x741da081ef913943!2sPremier%20Insurance%20Partners.!5e0!3m2!1sen!2sin!4v1712345678901"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.9) brightness(0.85)", minHeight: "440px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scan {
            0%   { top: 0%;   opacity: 1; }
            80%  { top: 96%;  opacity: 1; }
            100% { top: 96%;  opacity: 0; }
          }
        `}</style>
      </section>
    </div>
  );
}
