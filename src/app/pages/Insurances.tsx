import { Link } from "react-router";
import { Target, Eye, Heart, TrendingUp, Users2, Award, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty and transparency in all our dealings.",
    },
    {
      icon: Users2,
      title: "Customer First",
      description: "Your needs and satisfaction are at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in service and coverage.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously improve to offer better solutions for our clients.",
    },
  ];

  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "50,000+", label: "Satisfied Customers" },
    { value: "98%", label: "Customer Retention" },
    { value: "24/7", label: "Support Available" },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      description: "25+ years in insurance industry leadership",
    },
    {
      name: "David Chen",
      role: "Chief Operating Officer",
      description: "Expert in operational excellence and customer service",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Client Relations",
      description: "Dedicated to ensuring client satisfaction and success",
    },
    {
      name: "Michael Thompson",
      role: "Senior Insurance Advisor",
      description: "Specialist in complex coverage solutions",
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Premier Insurance Partners</h1>
            <p className="text-xl text-blue-100">
              For over 25 years, we've been dedicated to protecting what matters most to families and businesses across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Premier Insurance Partners was founded in 1999 with a simple mission: to provide honest, reliable insurance coverage with a personal touch that larger companies had forgotten.
                </p>
                <p>
                  What started as a small family business in New York has grown into a trusted partner for over 50,000 families and businesses nationwide. Through every stage of growth, we've maintained our commitment to personalized service and genuine care for our clients.
                </p>
                <p>
                  Today, we combine the resources and coverage options of a major insurance provider with the personalized attention and local expertise of a family-owned business. Our team of experienced professionals is dedicated to understanding your unique needs and finding the right coverage to protect what matters most to you.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Nzg5NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team at work"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Target className="size-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide comprehensive, affordable insurance solutions while delivering exceptional customer service that builds lasting relationships and peace of mind for our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-100">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Eye className="size-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted insurance partner in America, recognized for our integrity, innovation, and unwavering commitment to protecting what matters most to our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="size-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your protection and peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="size-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Premier Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us to protect what matters most.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
