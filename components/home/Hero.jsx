"use client";
 import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/h11.jpg",
    title: "BUILD YOUR BEST BODY",
    subtitle:
      "Professional coaching • Affordable memberships • Real results",
  },
  {
    image: "/images/h22.jpg",
    title: "STRONGER EVERY DAY",
    subtitle:
      "Train with experienced coaches in a motivating environment.",
  },
  {
    image: "/images/h33.jpg",
    title: "DISCIPLINE CREATES RESULTS",
    subtitle:
      "Transform your lifestyle with personalized fitness guidance.",
  },
  {
    image: "/images/h44.jpg",
    title: "START TODAY",
    subtitle:
      "Every transformation begins with a single decision.",
  },
  {
    image: "/images/h55.jpg",
    title: "PUSH YOUR LIMITS",
    subtitle:
      "Modern equipment. Expert coaching. Amazing community.",
  },
  {
    image: "/images/h6.jpg",
    title: "YOUR FITNESS JOURNEY",
    subtitle:
      "Join hundreds of members achieving their goals.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 4.5, ease: "linear" }}
            className="relative h-full w-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority={current === 0}
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "text"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
              Welcome To FitZone
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
              {slides[current].title}
            </h1>

            <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              {slides[current].subtitle}
            </p>

  

<div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
  <Link
    href="/book-trial"
    className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold text-center"
  >
    Book Free Trial
  </Link>

  <Link
    href="/about"
    className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white text-center"
  >
    Explore Gym
  </Link>
</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-orange-500 transition p-4 rounded-full text-white"
      >
       <FiChevronLeft size={28} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md hover:bg-orange-500 transition p-4 rounded-full text-white"
      >
       <FiChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-orange-500"
                : "w-3 h-3 bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-8 text-white z-30 hidden md:flex flex-col items-center">
        <span className="text-xs tracking-widest rotate-90 mb-8">
          SCROLL
        </span>

        <div className="w-0.5 h-20 bg-white/30 overflow-hidden">
          <motion.div
            animate={{ y: [-30, 90] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="w-full h-8 bg-orange-500"
          />
        </div>
      </div>
    </section>
  );
}