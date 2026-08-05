"use client";

import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "10 Best Chest Exercises for Maximum Growth",
    image: "/images/blog/blog1.jpg",
    category: "Workout",
    date: "05 Aug 2026",
    description:
      "Discover the most effective chest exercises to build strength and muscle.",
  },
  {
    id: 2,
    title: "Complete Beginner Workout Plan",
    image: "/images/blog/blog2.jpg",
    category: "Training",
    date: "03 Aug 2026",
    description:
      "A simple weekly workout plan to help beginners stay consistent.",
  },
  {
    id: 3,
    title: "High Protein Foods for Muscle Gain",
    image: "/images/blog/blog3.jpg",
    category: "Nutrition",
    date: "01 Aug 2026",
    description:
      "Affordable protein-rich foods to support recovery and muscle growth.",
  },
  {
    id: 4,
    title: "Cardio vs Strength Training",
    image: "/images/blog/blog4.jpg",
    category: "Fitness",
    date: "28 Jul 2026",
    description:
      "Understand which workout style suits your goals and fitness level.",
  },
  {
    id: 5,
    title: "Importance of Recovery",
    image: "/images/blog/blog5.jpg",
    category: "Recovery",
    date: "25 Jul 2026",
    description:
      "Recovery is as important as training. Learn how to recover properly.",
  },
  {
    id: 6,
    title: "Healthy Meal Plan for Students",
    image: "/images/blog/blog6.jpg",
    category: "Nutrition",
    date: "22 Jul 2026",
    description:
      "Budget-friendly healthy meals designed especially for students.",
  },
];

export default function blogss() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="bg-black text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
            FITZONE BLOG
          </p>

          <h1 className="text-6xl font-black mt-5">
            Fitness Articles
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg leading-8">
            Learn about workouts, nutrition, healthy habits, recovery,
            and everything you need to achieve your fitness goals.
          </p>

        </div>

      </section>

      {/* Blog Grid */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (

            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >

              <div className="relative h-60">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <div className="flex justify-between text-sm text-orange-500 font-semibold">

                  <span>{blog.category}</span>

                  <span>{blog.date}</span>

                </div>

                <h2 className="text-2xl font-bold mt-4 text-gray-900">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mt-4 leading-7">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block mt-6 text-orange-500 font-semibold hover:underline"
                >
                  Read More →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}