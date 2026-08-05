"use client";

import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Strength Training",
    image: "/images/programs/p1.jpg",
    description:
      "Increase muscle strength and improve overall performance with progressive training.",
    duration: "12 Weeks",
  },
  {
    id: 2,
    title: "Weight Loss",
    image: "/images/programs/p2.jpg",
    description:
      "Burn calories effectively with structured cardio and personalized workout plans.",
    duration: "10 Weeks",
  },
  {
    id: 3,
    title: "CrossFit",
    image: "/images/programs/p3.jpg",
    description:
      "High-intensity functional workouts designed to improve endurance and power.",
    duration: "8 Weeks",
  },
  {
    id: 4,
    title: "Yoga & Mobility",
    image: "/images/programs/p4.jpg",
    description:
      "Improve flexibility, posture, balance, and recovery with guided yoga sessions.",
    duration: "6 Weeks",
  },
  {
    id: 5,
    title: "Personal Training",
    image: "/images/programs/p5.jpg",
    description:
      "Train one-on-one with certified coaches following a customized fitness plan.",
    duration: "Flexible",
  },
  {
    id: 6,
    title: "Nutrition Coaching",
    image: "/images/programs/p6.jpg",
    description:
      "Healthy meal planning and nutrition guidance to support your fitness journey.",
    duration: "Ongoing",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
            OUR PROGRAMS
          </p>

          <h1 className="text-6xl font-black mt-5">
            Train With Purpose
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
            Whether you want to build muscle, lose weight, improve endurance,
            or simply stay active, we have a program designed to help you
            achieve your goals.
          </p>

        </div>

      </section>

      {/* Programs */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program) => (

            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >

              <div className="relative h-72">

                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-7">

                <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {program.duration}
                </span>

                <h2 className="text-2xl font-bold mt-5 text-gray-900">
                  {program.title}
                </h2>

                <p className="text-gray-600 mt-4 leading-7">
                  {program.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-block mt-8 text-orange-500 font-semibold hover:underline"
                >
                  Join Program →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black text-white">
            Ready to Start Your Fitness Journey?
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Join our community today and let our expert trainers guide you
            toward a stronger, healthier lifestyle.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-full text-white font-semibold"
          >
            Book Free Trial
          </Link>

        </div>

      </section>

    </main>
  );
}