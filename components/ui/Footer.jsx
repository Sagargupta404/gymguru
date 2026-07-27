"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b0b] text-white overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
          src="/images/h22.jpg"
          alt="Gym"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-[#0b0b0b]/90 to-[#0b0b0b]" />

      </div>

      <div className="relative z-10">

        {/* CTA */}

        <section className="max-w-7xl mx-auto px-6 pt-28">

          <div className="rounded-[40px] bg-linear-to-r from-orange-500 to-orange-600 p-px">

            <div className="rounded-[40px] bg-[#111]">

              <div className="grid lg:grid-cols-2 gap-10 items-center px-12 py-16">

                {/* Left */}

                <div>

                  <p className="uppercase tracking-[5px] text-orange-400 text-sm font-semibold">

                    START TODAY

                  </p>

                  <h2 className="text-5xl md:text-6xl font-black mt-5 leading-tight">

                    Become The
                    <br />

                    Strongest
                    <span className="text-orange-500">

                      {" "}Version

                    </span>

                    <br />

                    Of Yourself.

                  </h2>

                  <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">

                    Join hundreds of members transforming their lives through expert coaching,
                    personalized training, and a motivating fitness community.

                  </p>

                  <div className="flex flex-wrap gap-5 mt-10">

                    <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold flex items-center gap-3">

                      Book Free Trial

                      <FaArrowRight />

                    </button>

                    <button className="border border-white/20 hover:border-orange-500 hover:bg-orange-500 transition px-8 py-4 rounded-full">

                      View Membership

                    </button>

                  </div>

                </div>

                {/* Right */}

                <div className="relative">

                  <div className="overflow-hidden rounded-3xl">

                    <Image
                      src="/images/h66.jpg"
                      alt="Gym"
                      width={650}
                      height={650}
                      className="rounded-3xl object-cover hover:scale-110 transition duration-700"
                    />

                  </div>

                  {/* Floating Card */}

                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black rounded-3xl shadow-2xl px-8 py-6 w-[90%]">

                    <div className="grid grid-cols-3 text-center">

                      <div>

                        <h3 className="text-3xl font-bold text-orange-500">

                          500+

                        </h3>

                        <p className="text-sm text-gray-500">

                          Members

                        </p>

                      </div>

                      <div>

                        <h3 className="text-3xl font-bold text-orange-500">

                          15+

                        </h3>

                        <p className="text-sm text-gray-500">

                          Trainers

                        </p>

                      </div>

                      <div>

                        <h3 className="text-3xl font-bold text-orange-500">

                          4.9★

                        </h3>

                        <p className="text-sm text-gray-500">

                          Rating

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Footer Main */}

        <section className="max-w-7xl mx-auto px-6 pt-32 pb-10">

          <div className="grid lg:grid-cols-4 gap-14">

            {/* Logo */}

            <div>

              <h2 className="text-4xl font-black">

                FIT<span className="text-orange-500">ZONE</span>

              </h2>

              <p className="text-gray-400 mt-6 leading-8">

                We help people build stronger bodies,
                healthier lifestyles, and greater confidence through expert fitness coaching.

              </p>

            </div>
                        {/* Quick Links */}

            <div>

              <h3 className="text-xl font-semibold mb-6">
                Explore
              </h3>

              <ul className="space-y-4">

                {[
                  "Home",
                  "About",
                  "Programs",
                  "Trainers",
                  "Gallery",
                  "Pricing",
                  "Contact",
                ].map((item) => (

                  <li key={item}>

                    <Link
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition"
                    >
                      {item}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Programs */}

            <div>

              <h3 className="text-xl font-semibold mb-6">
                Programs
              </h3>

              <ul className="space-y-4">

                {[
                  "Weight Loss",
                  "Muscle Gain",
                  "Personal Training",
                  "Cardio Fitness",
                  "Nutrition",
                  "Functional Training",
                ].map((item) => (

                  <li key={item}>

                    <Link
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition"
                    >
                      {item}
                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-semibold mb-6">
                Contact
              </h3>

              <div className="space-y-5 text-gray-400">

                <div>

                  <p className="text-white font-medium mb-1">
                    Address
                  </p>

                  <p>
                    Raipur, Chhattisgarh
                  </p>

                </div>

                <div>

                  <p className="text-white font-medium mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="hover:text-orange-500 transition"
                  >
                    +91 99999 99999
                  </a>

                </div>

                <div>

                  <p className="text-white font-medium mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:hello@fitzone.com"
                    className="hover:text-orange-500 transition"
                  >
                    hello@fitzone.com
                  </a>

                </div>

                <div>

                  <p className="text-white font-medium mb-1">
                    Opening Hours
                  </p>

                  <p>
                    Mon - Sat : 6:00 AM - 10:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Copyright */}

            <p className="text-gray-500 text-center md:text-left">

              © {new Date().getFullYear()} FITZONE.
              All Rights Reserved.

            </p>

            {/* Social */}

            <div className="flex items-center gap-6">

              {[
                "Instagram",
                "Facebook",
                "YouTube",
                "WhatsApp",
              ].map((item) => (

                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  {item}
                </Link>

              ))}

            </div>

            {/* Back To Top */}

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition flex items-center justify-center"
            >

              <FaArrowUp />

            </button>

          </div>

        </section>

      </div>

    </footer>
  );
}