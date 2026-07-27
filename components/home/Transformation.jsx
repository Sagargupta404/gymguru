"use client";

import { motion } from "framer-motion";
import ReactCompareImage from "react-compare-image";

const transformations = [
  {
    before: "/transformations/before1.jpg",
    after: "/transformations/after1.jpg",
    name: "Rahul Sharma",
    result: "Lost 18kg in 4 Months",
  },
  {
    before: "/transformations/before2.jpg",
    after: "/transformations/after2.jpg",
    name: "Priya Singh",
    result: "Built Lean Muscle in 6 Months",
  },
];

export default function Transformation() {
  return (
    <section className="py-28 bg-[#09090B]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold">
            Incredible
            <span className="text-orange-500">
              {" "}Transformations
            </span>
          </h2>

          <p className="text-center text-gray-400 mt-5">
            Drag the slider to compare before and after results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {transformations.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
            >

              <ReactCompareImage
                leftImage={item.before}
                rightImage={item.after}
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold">

                  {item.name}

                </h3>

                <p className="text-orange-500 mt-2">

                  {item.result}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}