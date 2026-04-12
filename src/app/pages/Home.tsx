import { Link } from "react-router";
import { Shield, Award, Users, Clock, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import heroSection from "../components/assets/heroSection_1.png";
import generalInsuranceImg from "../components/assets/General_Insurance.jpeg";
import lifeInsuranceImg from "../components/assets/card2.jpeg";
import homeInsuranceImg from "../components/assets/Home_Insurance.jpeg";
import whatsappIcon from "../components/assets/whatsapp.svg";

// ─── Service card images – replace these imports when you have new assets ─────
const SERVICE_IMAGES = {
  general: generalInsuranceImg,
  life:    lifeInsuranceImg,
  home:    homeInsuranceImg,
};
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const services = [
    {
      title: "General Insurance",
      image: SERVICE_IMAGES.general,
      slug: "general",
    },
    {
      title: "Life Insurance",
      image: SERVICE_IMAGES.life,
      slug: "life",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Trusted Protection",
      description: "Over 25 years of experience protecting families and businesses",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in customer service and satisfaction",
    },
    {
      icon: Users,
      title: "Expert Advisors",
      description: "Dedicated insurance professionals ready to help you",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance when you need it most",
    },
  ];

  const benefits = [
    "Competitive rates and flexible payment options",
    "Fast and easy claims process",
    "Personalized coverage recommendations",
    "Bundle and save discounts",
    "No hidden fees or surprises",
    "Local agents who care about your community",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          background: "radial-gradient(100% 100% at 50% 50%, #002E5F 62.5%, #0D5097 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                To serve as a sole, reliable source for addressing all insurance needs of individuals or body of associates by identifying and delivering the best value solutions.
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
               
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white bg-secondary hover:bg-secondary-foreground">
                  <Link to="/insurances">
                    Explore Our Policies
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <img src={heroSection} alt="Premier Insurance Partners Header" loading="lazy" decoding="async" width={760} height={520} className="h-125 w-250" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Premier?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional insurance solutions backed by expertise and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <Icon className="size-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="w-8 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Insurance Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage options designed to protect every aspect of your life.
            </p>
            <div className="w-8 h-0.5 bg-secondary mx-auto mt-6" />
          </div>

          {/* Image cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/insurances/${service.slug}`}
                className="group relative rounded-2xl overflow-hidden h-72 md:h-80 block"
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-colors duration-300" />

                {/* Text content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {service.title}
                  </h3>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Premier Advantage
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When you choose Premier Insurance Partners, you're choosing a partner dedicated to your protection and peace of mind.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761891954650-fe378e1fa3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob21lJTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NzQ3MDk0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family home protection"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: "radial-gradient(100% 100% at 50% 50%, #002E5F 62.5%, #0D5097 100%)" }}
      >
        {/* Gold diagonal shape — hidden on mobile, visible md+ */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-full hidden md:block"
          style={{
            width: "320px",
            background: "#cc9c42",
            clipPath: "polygon(45% 0%, 100% 0%, 100% 100%, 15% 100%)",
          }}
        />

        {/* Subtle dark vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Phone icon */}
          <Phone className="size-14 mx-auto mb-6 text-white/70 stroke-[1.2]" />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Let's find the right coverage for you and your family.
          </p>

          {/* WhatsApp enquire button */}
          <a
            href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg"
            style={{ background: "#cc9c42" }}
          >
            <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
            Enquire Now
          </a>
        </div>
      </section>
    </div>
  );
}
