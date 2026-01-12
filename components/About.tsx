"use client"
import Image from "next/image"

import { COMPANY_INFO } from "@/app/constants"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt={`${COMPANY_INFO.name} team and mission`}
                fill
                className="object-cover"
              />
              {/* Optional overlay for consistency */}
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="heading-2">
              Your Trusted Partner in Healthcare Staffing
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At {COMPANY_INFO.name}, we understand that healthcare is more
                than just a job, it's a calling. We connect talented healthcare
                professionals with exceptional opportunities throughout Northern
                California.
              </p>

              <p>
                Our dedicated team works tirelessly to match your skills,
                experience, and career goals with facilities that value your
                expertise. We believe in building lasting relationships and
                providing comprehensive support.
              </p>

              <p>we're here to help you succeed.</p>
            </div>

            <a href="#contact" className="btn-primary inline-block mt-4">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
