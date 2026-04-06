import { Link } from "react-router";
import { Car, Home, Heart, Stethoscope, Briefcase, Plane, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Auto Insurance",
      description: "Comprehensive protection for your vehicle and peace of mind on the road.",
      features: [
        "Liability coverage",
        "Collision and comprehensive",
        "Uninsured/underinsured motorist",
        "Rental car reimbursement",
        "Roadside assistance",
      ],
      image: "https://images.unsplash.com/photo-1759509326921-4ac86913cc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnN1cmFuY2UlMjB2ZWhpY2xlfGVufDF8fHx8MTc3NDc4OTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Safeguard your home and belongings with customizable coverage options.",
      features: [
        "Dwelling coverage",
        "Personal property protection",
        "Liability coverage",
        "Additional living expenses",
        "Natural disaster protection",
      ],
      image: "https://images.unsplash.com/photo-1761891954650-fe378e1fa3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob21lJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NzQ3MDk0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Protect your loved ones' financial future with flexible life insurance plans.",
      features: [
        "Term life insurance",
        "Whole life insurance",
        "Universal life options",
        "Living benefits riders",
        "No medical exam options",
      ],
      image: "https://images.unsplash.com/photo-1537735319956-df7db4b6a4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwZWxkZXJseSUyMGNvdXBsZXxlbnwxfHx8fDE3NzQ3ODk1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Stethoscope,
      title: "Health Insurance",
      description: "Access quality healthcare with comprehensive medical coverage.",
      features: [
        "Individual & family plans",
        "Preventive care coverage",
        "Prescription drug coverage",
        "Specialist access",
        "Emergency care coverage",
      ],
      image: "https://images.unsplash.com/photo-1665315469403-fde8e923f719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBtZWRpY2FsJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzc0Nzg5NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Briefcase,
      title: "Business Insurance",
      description: "Protect your business with tailored commercial insurance solutions.",
      features: [
        "General liability",
        "Property coverage",
        "Workers' compensation",
        "Business interruption",
        "Professional liability",
      ],
      image: "https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Nzg5NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Travel confidently with comprehensive coverage for your journeys.",
      features: [
        "Trip cancellation coverage",
        "Medical emergency coverage",
        "Lost baggage protection",
        "Travel delay coverage",
        "24/7 travel assistance",
      ],
      image: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnN1cmFuY2UlMjBtZWV0aW5nJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc3NDc4OTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const benefits = [
    "Competitive rates with bundle discounts",
    "Fast and simple claims process",
    "Expert guidance from licensed agents",
    "Flexible payment options",
    "24/7 customer support",
    "Online policy management",
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Insurance Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive coverage solutions tailored to protect every aspect of your life and business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                          <Icon className="size-7 text-blue-600" />
                        </div>
                        <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700">
                          <Link to="/contact">
                            Get a Quote
                            <ArrowRight className="ml-2 size-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="size-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make insurance simple, affordable, and accessible with benefits designed around you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Coverage?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert advisors are here to help you find the perfect insurance solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+918778912704">
                Call +91 87789 12704
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
