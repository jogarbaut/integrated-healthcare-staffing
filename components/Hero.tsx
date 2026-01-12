"use client"
import Image from "next/image"

import { COMPANY_INFO } from "@/app/constants"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-secondary/20 text-primary-dark px-4 py-2 rounded-full text-sm font-semibold">
                Your Healthcare Partner
              </span>
            </div>

            <h1 className="heading-1">Empowering Healthcare Professionals</h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary text-center">
                Explore Services
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.jpg"
                alt={`${COMPANY_INFO.name} healthcare staffing`}
                fill
                priority
                className="object-cover"
              />
              {/* Optional overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
