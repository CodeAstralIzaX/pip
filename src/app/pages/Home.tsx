import { Link } from "react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import heroSection from "../components/assets/heroSection_1.png";
import generalInsuranceImg from "../components/assets/General_Insurance.jpeg";
import lifeInsuranceImg from "../components/assets/card2.jpeg";
import homeInsuranceImg from "../components/assets/Home_Insurance.jpeg";
import whatsappIcon from "../components/assets/whatsapp.svg";

// Placeholder: swap homeInsuranceImg for a dedicated health image when one is available
const SERVICE_IMAGES = {
  general: generalInsuranceImg,
  life:    lifeInsuranceImg,
  health:  homeInsuranceImg,
};

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
    {
      title: "Health Insurance",
      image: SERVICE_IMAGES.health,
      slug: "health",
    },
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[320px]">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-relaxed">
                To serve as a sole, reliable source for addressing all insurance needs of individuals or body of associates by identifying and delivering the best value solutions.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold">
                  <Link to="/insurances">
                    Explore Our Policies
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <img src={heroSection} alt="Premier Insurance Partners Header" loading="lazy" decoding="async" width={620} height={420} className="h-96 w-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-8">
            <div className="w-8 h-0.5 bg-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Insurance Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage options designed to protect every aspect of your life.
            </p>
            <div className="w-8 h-0.5 bg-secondary mx-auto mt-4" />
          </div>

          {/* Image cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/insurances/${service.slug}`}
                className="group relative rounded-2xl overflow-hidden h-60 md:h-64 block"
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

      {/* CTA Section */}
      <section
        className="relative overflow-hidden py-10 md:py-16"
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
          <Phone className="size-12 mx-auto mb-4 text-white/70 stroke-[1.2]" />

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ready to Get Started?
          </h2>
          <p className="text-base text-blue-100 mb-6 max-w-xl mx-auto">
            Let's find the right coverage for you and your family.
          </p>

          {/* WhatsApp enquire button */}
          <a
            href="https://wa.me/+918778912704?text=Hi%2C%20I%20need%20info%20on%20policies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-gray-900 transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg"
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
