import Image from "next/image";
import Link from "next/link";
import { FaStar, FaAward, FaDumbbell } from "react-icons/fa";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Strength Coach",
    image: "/images/trainers/t1.jpg",
    experience: "6+ Years",
    speciality: "Muscle Gain",
    clients: "300+ Clients",
  },
  {
    name: "Aman Verma",
    role: "Fitness Coach",
    image: "/images/trainers/t2.jpg",
    experience: "5+ Years",
    speciality: "Weight Loss",
    clients: "250+ Clients",
  },
  {
    name: "Priyansh Singh",
    role: "Nutrition Expert",
    image: "/images/trainers/t3.jpg",
    experience: "7+ Years",
    speciality: "Nutrition",
    clients: "400+ Clients",
  },
  {
    name: "Neha Patel",
    role: "Functional Trainer",
    image: "/images/trainers/t4.jpg",
    experience: "4+ Years",
    speciality: "Functional Training",
    clients: "200+ Clients",
  },
];

export default function TrainersPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[49vh] flex items-center justify-center">

        <Image
          src="/images/h66.jpg"
          alt="Trainer"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-6">

          <p className="uppercase tracking-[4px] text-orange-400 font-semibold">
            Meet Our Trainers
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-4">
            Passion. Knowledge.
            <br />
            Results.
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-300">
            Our experienced coaches help you become stronger,
            healthier and more confident every day.
          </p>

        </div>

      </section>

      {/* Trainers */}

      <section className="max-w-7xl mx-auto px-6 py-5">

        <div className="text-center mb-16">

          <h2 className="text-4xl text-gray-950 font-bold">
            Meet The Team
          </h2>

          <p className="text-gray-500 mt-3">
            Certified professionals dedicated to your success.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {trainers.map((trainer) => (

            <div
              key={trainer.name}
              className="bg-white rounded-3xl shadow-lg p-2 text-center hover:-translate-y-2 transition duration-300"
            >

              <div className="relative w-44 h-44 mx-auto">

                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="rounded-full object-cover border-4 border-orange-500"
                />

              </div>

              <h3 className="text-2xl text-gray-900 font-bold mt-6">
                {trainer.name}
              </h3>

              <p className="text-orange-500 font-medium">
                {trainer.role}
              </p>

              <div className="flex justify-center mt-3 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="space-y-3 mt-6 text-gray-600 text-sm">

                <p className="flex items-center justify-center gap-2">
                  <FaAward className="text-orange-500" />
                  {trainer.experience}
                </p>

                <p className="flex items-center justify-center gap-2">
                  <FaDumbbell className="text-orange-500" />
                  {trainer.speciality}
                </p>

                <p>
                  👥 {trainer.clients}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#111] py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold text-white">
            Ready To Train With The Best?
          </h2>

          <p className="text-gray-400 mt-5">
            Book your free trial today and meet our professional trainers.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <Link
              href="/book-trial"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-white font-semibold"
            >
              Book Trial
            </Link>

            <Link
              href="/programs"
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              View Programs
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}