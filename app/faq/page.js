"use client";

const faqs = [
  {
    question: "Do I need prior gym experience?",
    answer:
      "No. Our trainers will guide you from the basics and create a workout plan according to your fitness level.",
  },
  {
    question: "Can I get a free trial?",
    answer:
      "Yes! We offer a free trial session so you can explore our gym and meet our trainers before joining.",
  },
  {
    question: "Do you provide diet plans?",
    answer:
      "Yes. Premium members receive personalized nutrition guidance and meal plans to support their fitness goals.",
  },
  {
    question: "Are personal trainers available?",
    answer:
      "Absolutely. Our certified personal trainers provide one-on-one coaching for strength, weight loss, muscle gain, and overall fitness.",
  },
  {
    question: "What are the gym timings?",
    answer:
      "We are open Monday to Saturday from 6:00 AM to 10:00 PM and Sunday from 7:00 AM to 2:00 PM.",
  },
  {
    question: "How can I become a member?",
    answer:
      "Choose a membership plan from our Pricing page or visit the gym to complete your registration with our staff.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="bg-black text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
            SUPPORT
          </p>

          <h1 className="text-6xl font-black mt-5">
            Frequently Asked Questions
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg leading-8">
            Find answers to the most common questions about our gym,
            memberships, training programs, and facilities.
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
            >

              <h2 className="text-2xl font-bold text-gray-900">
                {faq.question}
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black text-white">
            Still Have Questions?
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Our team is always happy to help. Contact us for any additional
            information about memberships, training, or nutrition.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-full text-white font-semibold"
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}