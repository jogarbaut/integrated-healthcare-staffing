"use client"

import { COMPANY_INFO } from "@/app/constants"

const benefits = [
  {
    title: "Competitive Pay",
    description:
      "Competitive compensation packages aligned with your level of experience.",
    icon: "",
  },
  {
    title: "Dedicated Support",
    description:
      "Your personal recruiter is available 24/7 to support you throughout your assignment and beyond.",
    icon: "",
  },
  {
    title: "Career Development",
    description:
      "Access continuing education opportunities and professional development resources to advance your career.",
    icon: "",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose assignments that fit your lifestyle with flexible scheduling options and diverse locations.",
    icon: "",
  },
  {
    title: "Quick Placement",
    description:
      "Our streamlined process gets you placed quickly, often within 72 hours of your initial consultation.",
    icon: "",
  },
  {
    title: "Quality Facilities",
    description:
      "We partner with top-rated healthcare facilities that meet our rigorous quality standards.",
    icon: "",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="heading-2 mt-4 mb-6">
            The {COMPANY_INFO.shortName} Advantage
          </h2>
          <p className="text-gray-600 text-lg">
            We go above and beyond to ensure your success and satisfaction in
            every placement.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-secondary transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-5xl mb-4">{benefit.icon}</div>

              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Placeholder */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Our Client's Testimonial
            </h3>
            <p className="text-xl leading-relaxed mb-6 opacity-90">
              "Working with {COMPANY_INFO.name} has been a game-changer for my
              career. The support and opportunities they provide are unmatched."
            </p>
            <div className="font-semibold">- Healthcare Professional</div>
          </div>
        </div>
      </div>
    </section>
  )
}
