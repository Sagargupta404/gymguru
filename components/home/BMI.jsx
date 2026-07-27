"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BMI() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(22);
  const [gender, setGender] = useState("Male");

  const bmi = (
    weight /
    ((height / 100) * (height / 100))
  ).toFixed(1);

  let status = "";
  let color = "";

  if (bmi < 18.5) {
    status = "Underweight";
    color = "text-blue-400";
  } else if (bmi < 25) {
    status = "Normal";
    color = "text-green-400";
  } else if (bmi < 30) {
    status = "Overweight";
    color = "text-yellow-400";
  } else {
    status = "Obese";
    color = "text-red-400";
  }

  return (
    <section className="py-28 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold"
        >
          Calculate Your
          <span className="text-orange-500"> BMI</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* LEFT */}

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">

            <label className="block mb-2">
              Height (cm)
            </label>

            <input
              type="range"
              min="120"
              max="220"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              className="w-full accent-orange-500"
            />

            <p className="mb-8 mt-2">
              {height} cm
            </p>

            <label className="block mb-2">
              Weight (kg)
            </label>

            <input
              type="number"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
              className="w-full rounded-xl bg-black/30 border border-white/10 p-4"
            />

            <label className="block mt-8 mb-2">
              Age
            </label>

            <input
              type="number"
              value={age}
              onChange={(e) =>
                setAge(e.target.value)
              }
              className="w-full rounded-xl bg-black/30 border border-white/10 p-4"
            />

            <label className="block mt-8 mb-2">
              Gender
            </label>

            <div className="flex gap-4">

              <button
                onClick={() =>
                  setGender("Male")
                }
                className={`flex-1 py-3 rounded-xl ${
                  gender === "Male"
                    ? "bg-orange-500"
                    : "bg-white/10"
                }`}
              >
                Male
              </button>

              <button
                onClick={() =>
                  setGender("Female")
                }
                className={`flex-1 py-3 rounded-xl ${
                  gender === "Female"
                    ? "bg-orange-500"
                    : "bg-white/10"
                }`}
              >
                Female
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-center items-center p-10"
          >

            <h3 className="text-gray-400">
              Your BMI
            </h3>

            <h1 className="text-8xl font-black mt-6 text-orange-500">
              {bmi}
            </h1>

            <h2
              className={`mt-6 text-3xl font-bold ${color}`}
            >
              {status}
            </h2>

            <div className="mt-12 w-full rounded-2xl bg-black/20 p-6">

              <h4 className="font-semibold">
                Healthy Tip
              </h4>

              <p className="text-gray-400 mt-3">

                {status === "Underweight" &&
                  "Increase calories and protein intake."}

                {status === "Normal" &&
                  "Maintain your healthy lifestyle and train consistently."}

                {status === "Overweight" &&
                  "Add cardio and reduce calorie intake."}

                {status === "Obese" &&
                  "Consult a healthcare professional and start gradually."}

              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}