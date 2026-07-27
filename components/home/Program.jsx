"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import {
  FaArrowLeft,
  FaArrowRight,
  FaFire,
  FaDumbbell,
  FaRunning,
  FaAppleAlt,
  FaUserFriends,
  FaHeartbeat,
  FaCheckCircle,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const programs = [
  {
    id: 1,
    title: "Weight Loss",
    badge: "Most Popular",
    image: "/images/h55.jpg",
    description:
      "Burn fat with personalized workout plans and nutrition guidance.",

    icon: FaFire,

    features: [
      "Diet Plan",
      "Cardio Training",
      "Weekly Tracking",
    ],
  },

  {
    id: 2,
    title: "Muscle Gain",
    badge: "Best Seller",
    image: "/images/h44.jpg",
    description:
      "Build lean muscle with strength training and expert coaching.",

    icon: FaDumbbell,

    features: [
      "Strength",
      "Progressive Overload",
      "Protein Guidance",
    ],
  },

  {
    id: 3,
    title: "Personal Training",
    badge: "Premium",
    image: "/images/h33.jpg",
    description:
      "One-on-one coaching designed specifically for your goals.",

    icon: FaUserFriends,

    features: [
      "Dedicated Trainer",
      "Custom Workout",
      "Priority Support",
    ],
  },

  {
    id: 4,
    title: "Cardio Fitness",
    badge: "Trending",
    image: "/images/h22.jpg",
    description:
      "Improve endurance, stamina and heart health with fun workouts.",

    icon: FaRunning,

    features: [
      "HIIT",
      "Endurance",
      "Fat Burn",
    ],
  },

  {
    id: 5,
    title: "Nutrition",
    badge: "Healthy",
    image: "/images/h11.jpg",
    description:
      "Healthy meal plans and nutrition consultation for faster results.",

    icon: FaAppleAlt,

    features: [
      "Meal Plan",
      "Macro Tracking",
      "Healthy Lifestyle",
    ],
  },

  {
    id: 6,
    title: "Functional Fitness",
    badge: "New",
    image: "/images/h66.jpg",
    description:
      "Improve mobility, flexibility and everyday strength.",

    icon: FaHeartbeat,

    features: [
      "Mobility",
      "Core Strength",
      "Balance",
    ],
  },
];

export default function Programs() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="programs"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-16">

          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              OUR PROGRAMS
            </p>

            <h2 className="text-5xl text-gray-950 font-bold mt-3 leading-tight">

              Programs Designed
              <br />

              Around
              <span className="text-orange-500">
                {" "}Your Goals
              </span>

            </h2>

          </div>

          {/* Navigation */}

          <div className="flex gap-7 mt-8 md:mt-0">

            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full border border-gray-300 text-gray-950 hover:bg-orange-500 hover:text-white transition"
            >
              <FaArrowLeft className="mx-auto" />
            </button>

            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full border border-gray-300 text-gray-950 hover:bg-orange-500 hover:text-white transition"
            >
              <FaArrowRight className="mx-auto" />
            </button>

          </div>

        </div>

        <Swiper
          modules={[
            Navigation,
            EffectCoverflow,
            Autoplay,
          ]}

          effect="coverflow"

          grabCursor

          centeredSlides

          loop

          speed={1000}

          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1,
            scale: 0.88,
            slideShadows: false,
          }}

          breakpoints={{
            320: {
              slidesPerView: 1.15,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}

          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
                    {programs.map((program) => {
            const Icon = program.icon;

            return (
              <SwiperSlide key={program.id}>
                {({ isActive }) => (
                  <div
                    className={`group bg-white text-gray-950 rounded-3xl overflow-hidden transition-all duration-500 shadow-xl ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-60"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">

                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Badge */}
                      <span className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {program.badge}
                      </span>

                      {/* Icon */}
                      <div className="absolute bottom-5 left-5 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <Icon className="text-orange-500 text-2xl" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">

                      <h3 className="text-2xl font-bold text-gray-900">
                        {program.title}
                      </h3>

                      <p className="text-gray-900 mt-4 leading-7">
                        {program.description}
                      </p>

                      {/* Features */}
                      <div className="mt-6 space-y-3">

                        {program.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3"
                          >
                            <FaCheckCircle className="text-orange-500 flex-shrink-5" />

                            <span className="text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}

                      </div>

                      {/* Buttons */}
                      <div className="mt-8 flex gap-4">

                        <button className="flex-1 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition duration-300 font-medium">
                          Book Trial
                        </button>

                        <button className="flex-1 py-3 rounded-xl border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition duration-300 font-medium">
                          Learn More
                        </button>

                      </div>

                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}