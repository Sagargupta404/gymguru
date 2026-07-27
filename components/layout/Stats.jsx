"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaUsers,
  FaAward,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={30} />,
    number: 20000,
    suffix: "+",
    title: "Active Members",
  },
  {
    icon: <FaDumbbell size={30} />,
    number: 50,
    suffix: "+",
    title: "Expert Trainers",
  },
  {
    icon: <FaAward size={30} />,
    number: 12,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: <FaStar size={30} />,
    number: 98,
    suffix: "%",
    title: "Success Rate",
  },
];

const brands = [
  "NIKE",
  "ADIDAS",
  "PUMA",
  "REEBOK",
  "UNDER ARMOUR",
  "GYMSHARK",
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#09090B]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold"
        >
          Trusted by
          <span className="text-orange-500"> 20,000+</span>
          Fitness Enthusiasts
        </motion.h2>

        {/* Logo Marquee */}

        <div className="overflow-hidden mt-14 border-y border-white/10 py-8">

          <div className="flex whitespace-nowrap animate-marquee gap-20 text-2xl font-bold text-gray-500">

            {brands.concat(brands).map((brand, index) => (
              <span key={index}>
                {brand}
              </span>
            ))}

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{
                duration:.5,
                delay:index*.15,
              }}
              viewport={{ once:true }}
              whileHover={{
                scale:1.05,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center"
            >

              <div className="flex justify-center text-orange-500 mb-6">

                {item.icon}

              </div>

              <h3 className="text-5xl font-black">

                <CountUp
                  end={item.number}
                  duration={3}
                />

                {item.suffix}

              </h3>

              <p className="mt-3 text-gray-400">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}