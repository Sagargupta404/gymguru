"use client";

import { motion } from "framer-motion";

import {
  FaBrain,
  FaAppleAlt,
  FaChartLine,
  FaUserTie,
  FaDumbbell,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI Personal Trainer",
    desc: "Get personalized workout recommendations based on your fitness goals.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Smart Nutrition",
    desc: "Balanced meal plans with calorie and protein tracking.",
  },
  {
    icon: <FaChartLine />,
    title: "Track Progress",
    desc: "Visual charts to monitor your body transformation journey.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Coaches",
    desc: "Train with certified fitness professionals anytime.",
  },
  {
    icon: <FaDumbbell />,
    title: "Modern Equipment",
    desc: "Access premium equipment for every type of workout.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Need help? Our fitness team is always available.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#0D0D0D]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold"
        >
          Why Choose
          <span className="text-orange-500"> FitVerse</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Experience the future of fitness with AI-powered coaching,
          modern facilities, and a supportive community.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-orange-500/40"
            >

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-orange-500/20 text-orange-500 text-3xl group-hover:rotate-12 transition duration-300">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}