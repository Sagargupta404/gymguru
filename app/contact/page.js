"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
            CONTACT US
          </p>

          <h1 className="text-6xl font-black mt-5">
            Let's Talk
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 leading-8">
            Have questions about memberships, personal training, or fitness
            programs? We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-gray-900">
              Send us a Message
            </h2>

            <p className="text-gray-600 mt-3">
              Fill out the form and our team will get back to you shortly.
            </p>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-orange-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Details */}

          <div className="space-y-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-5">

              <FaMapMarkerAlt className="text-3xl text-orange-500 mt-1" />

              <div>

                <h3 className="text-2xl font-bold">
                  Address
                </h3>

                <p className="text-gray-600 mt-2">
                  Raipur, Chhattisgarh, India
                </p>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-5">

              <FaPhoneAlt className="text-3xl text-orange-500 mt-1" />

              <div>

                <h3 className="text-2xl font-bold">
                  Phone
                </h3>

                <p className="text-gray-600 mt-2">
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-5">

              <FaEnvelope className="text-3xl text-orange-500 mt-1" />

              <div>

                <h3 className="text-2xl font-bold">
                  Email
                </h3>

                <p className="text-gray-600 mt-2">
                  contact@fitzone.com
                </p>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-5">

              <FaClock className="text-3xl text-orange-500 mt-1" />

              <div>

                <h3 className="text-2xl font-bold">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Monday - Saturday
                  <br />
                  6:00 AM - 10:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Map */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="rounded-3xl overflow-hidden shadow-lg">

          <iframe
            title="Gym Location"
            src="https://www.google.com/maps?q=Raipur&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />

        </div>

      </section>

    </main>
  );
}