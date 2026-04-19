import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { sendContactEmail, ContactFormData } from "../utils/emailService";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

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
      // Use shared emailService utility to avoid duplicated fetch logic and respect VITE_API_URL
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

        // Clear form on success
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
      } else {
        setSubmitStatus({ type: "error", message: result.message || "Failed to send email." });
      }
    } catch (err) {
      // sendContactEmail already catches and returns a failure shape, but handle unexpected errors here
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
      {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-32 overflow-hidden"
        style={{
          background: "radial-gradient(100% 100% at 50% 50%, #002E5F 62.5%, #0D5097 100%)",
        }}
      >
        {/* subtle radial vignette overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon className="size-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Request a Free Quote</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and one of our insurance experts will contact you within 24 hours.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
              </CardHeader>
              <CardContent>
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
                            ? "text-green-800"
                            : "text-red-800"
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
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Insurance Type *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                        required
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto Insurance</SelectItem>
                          <SelectItem value="home">Home Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="health">Health Insurance</SelectItem>
                          <SelectItem value="business">Business Insurance</SelectItem>
                          <SelectItem value="travel">Travel Insurance</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your insurance needs..."
                      rows={5}
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      By submitting this form, you agree to be contacted by Premier Insurance Partners regarding your inquiry. We respect your privacy and will never share your information with third parties.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
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
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Prefer to talk to someone right away?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <a href="tel:+918778912704">
                    <Phone className="mr-2 size-5" />
                    Call +91 87789 12704
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <a href="mailto:info@premierinsurance-partners.in">
                    <Mail className="mr-2 size-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section — Futuristic */}
      <section className="relative bg-[#020c1b] overflow-hidden">

        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Location</h2>
            <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

            {/* ── Left info panel ── */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Address card */}
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-secondary/40 hover:bg-white/8 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <MapPin className="size-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-1">Address</p>
                    <p className="text-white font-semibold leading-snug">First Floor, Dhasan Complex</p>
                    <p className="text-gray-400 text-sm mt-0.5">No 292D/16, MS Rd, Vetturnimadam</p>
                    <p className="text-gray-400 text-sm">Nagercoil, Tamil Nadu 629003</p>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <a href="tel:+918778912704" className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-secondary/40 hover:bg-white/8 transition-all duration-300 block">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <Phone className="size-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-1">Phone</p>
                    <p className="text-white font-semibold">+91 87789 12704</p>
                    <p className="text-gray-400 text-xs mt-0.5">Tap to call</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  </div>
                </div>
              </a>

              {/* Hours card */}
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-secondary/40 hover:bg-white/8 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                    <Clock className="size-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-1">Office Hours</p>
                    <p className="text-white font-semibold text-sm">Mon – Fri &nbsp;·&nbsp; 8:00 AM – 6:00 PM</p>
                    <p className="text-gray-400 text-sm">Sat &nbsp;·&nbsp; 9:00 AM – 3:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Directions CTA */}
              <a
                href="https://maps.app.goo.gl/27wFFkxtFy9FJ6ES9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-auto rounded-2xl border border-secondary/40 bg-secondary/10 backdrop-blur-sm p-5 hover:bg-secondary/20 transition-all duration-300 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-semibold text-sm">Get Directions</p>
                  <p className="text-gray-400 text-xs mt-0.5">Open in Google Maps</p>
                </div>
                <div className="w-9 h-9 rounded-full border border-secondary/50 bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                  <svg className="size-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </a>
            </div>

            {/* ── Right: map ── */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 min-h-[420px]">
              {/* glowing corner accents */}
              <div className="pointer-events-none absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-secondary/60 rounded-tl-2xl z-20" />
              <div className="pointer-events-none absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-secondary/60 rounded-tr-2xl z-20" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-secondary/60 rounded-bl-2xl z-20" />
              <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary/60 rounded-br-2xl z-20" />

              {/* Scanning line animation */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/70 to-transparent z-20 animate-[scan_3s_ease-in-out_infinite]" />

              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.2!2d77.4177374!3d8.1903409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1310fa60cad%3A0x741da081ef913943!2sPremier%20Insurance%20Partners.!5e0!3m2!1sen!2sin!4v1712345678901"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.9) brightness(0.85)", minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* keyframes for the scan line */}
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
