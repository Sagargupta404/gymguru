"use client";

import ProgramCard from "./programCard";
import programs from "./programData";

export default function Programs() {
  return (
    <section className="py-28 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl">

          <p className="uppercase tracking-[6px] text-orange-500 text-sm font-semibold">
            OUR PROGRAMS
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Training Programs
            <span className="text-orange-500"> Designed For Every Goal</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Whether your goal is to build strength, lose weight, improve
            endurance, or simply stay healthy, our expert-designed programs
            help you achieve lasting results with professional guidance.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

          {programs.map((program) => (

            <ProgramCard
              key={program.id}
              program={program}
            />

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-gray-900 to-black overflow-hidden">

          <div className="px-10 py-16 md:px-20 flex flex-col lg:flex-row justify-between items-center gap-10">

            <div>

              <p className="uppercase tracking-[4px] text-orange-400 text-sm">
                START TODAY
              </p>

              <h3 className="text-white text-4xl font-black mt-4">
                Not Sure Which Program Fits You?
              </h3>

              <p className="text-gray-300 mt-5 max-w-2xl leading-8">
                Book a free consultation with one of our certified fitness
                coaches. We'll assess your goals, fitness level, and create
                the perfect training roadmap for you.
              </p>

            </div>

            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold">
                Book Free Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition text-white">
                Contact Trainer
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}