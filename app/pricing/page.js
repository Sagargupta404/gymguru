"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "₹999",
    duration: "/month",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Gym Access",
      "Locker Facility",
      "Free Assessment",
      "Basic Workout Plan",
    ],
  },

  {
    id: 2,
    name: "Premium",
    price: "₹1,999",
    duration: "/month",
    description: "Most popular membership with extra coaching benefits.",
    features: [
      "Unlimited Gym Access",
      "Personal Trainer",
      "Diet Consultation",
      "Progress Tracking",
      "Group Classes",
      "Locker Facility",
    ],
    popular: true,
  },

  {
    id: 3,
    name: "Elite",
    price: "₹3,499",
    duration: "/month",
    description: "Complete transformation with premium support.",
    features: [
      "Everything in Premium",
      "Dedicated Coach",
      "Customized Diet Plan",
      "Priority Support",
      "Body Analysis",
      "Recovery Sessions",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
            MEMBERSHIP PLANS
          </p>

          <h1 className="text-6xl font-black mt-5">
            Choose Your Plan
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg leading-8">
            Flexible membership plans designed to suit every fitness goal.
            Start today and take the first step towards a healthier lifestyle.
          </p>

        </div>

      </section>

      {/* Pricing Cards */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (

            <div
              key={plan.id}
              className={`rounded-3xl bg-white shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-2 border-orange-500"
                  : "border border-gray-200"
              }`}
            >

              {plan.popular && (

                <div className="bg-orange-500 text-white text-center py-3 font-semibold">
                  Most Popular
                </div>

              )}

              <div className="p-8">

                <h2 className="text-3xl font-bold text-gray-900">
                  {plan.name}
                </h2>

                <p className="mt-4 text-gray-600">
                  {plan.description}
                </p>

                <div className="mt-8">

                  <span className="text-5xl font-black text-gray-900">
                    {plan.price}
                  </span>

                  <span className="text-gray-500 ml-2">
                    {plan.duration}
                  </span>

                </div>

                <div className="mt-10 space-y-4">

                  {plan.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <FaCheck className="text-orange-500" />

                      <span className="text-gray-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <Link
                  href="/contact"
                  className={`block text-center mt-10 py-4 rounded-xl font-semibold transition ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border border-gray-300 hover:bg-black hover:text-white"
                  }`}
                >
                  Join Now
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Bottom CTA */}

      <section className="bg-black py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black text-white">
            Still Confused?
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Talk with our fitness experts and find the membership that
            perfectly matches your goals.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 transition text-white px-10 py-4 rounded-full font-semibold"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}