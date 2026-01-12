"use client"

import { SERVICES } from "@/app/constants"

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-2 mt-4 mb-6">
            Comprehensive Staffing Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of staffing services tailored to meet your
            unique career goals and lifestyle preferences.
          </p>
        </div>

        {/* Services Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="text-secondary font-semibold inline-flex items-center group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <span className="ml-1 group-hover:ml-0 transition-all duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
