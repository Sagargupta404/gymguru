"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProgramCard({ program }) {
  return (
    <div className="group overflow-hidden rounded-[28px] bg-white border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative h-80 overflow-hidden">

        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Duration */}

        <div className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-sm font-semibold text-gray-900">
          {program.duration}
        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        <p className="uppercase tracking-[4px] text-xs text-orange-500 font-semibold">
          {program.level}
        </p>

        <h3 className="mt-3 text-3xl font-bold text-gray-900">
          {program.title}
        </h3>

        <p className="mt-5 text-gray-600 leading-8">
          {program.description}
        </p>

        {/* Divider */}

        <div className="my-8 border-t border-gray-200" />

        {/* CTA */}

        <Link
          href={program.href}
          className="inline-flex items-center gap-3 text-orange-500 font-semibold group/link"
        >
          Explore Program

          <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-2" />
        </Link>

      </div>

    </div>
  );
}