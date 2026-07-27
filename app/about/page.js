import Link from "next/link";
import Image from "next/image";
import {
  FaBullseye,
  FaEye,
  FaDumbbell,
  FaAppleAlt,
  FaUsers,
  FaClock,
  FaAward,
} from "react-icons/fa";

export default function AboutPage() {
  const features = [
    {
      icon: <FaDumbbell size={28} />,
      title: "Certified Trainers",
      desc: "Train with experienced professionals who create personalized workout plans and guide you safely toward your fitness goals.",
    },
    {
      icon: <FaAppleAlt size={28} />,
      title: "Nutrition Guidance",
      desc: "Learn practical nutrition habits and meal planning to support weight loss, muscle gain, and overall health.",
    },
    {
      icon: <FaUsers size={28} />,
      title: "Friendly Community",
      desc: "Be part of a motivating environment where members support and inspire each other every day.",
    },
    {
      icon: <FaClock size={28} />,
      title: "Flexible Timings",
      desc: "Morning and evening workout sessions that easily fit into your daily schedule.",
    },
  ];

  const stats = [
    { number: "500+", title: "Happy Members" },
    { number: "15+", title: "Certified Trainers" },
    { number: "8+", title: "Years Experience" },
    { number: "4.9★", title: "Average Rating" },
  ];

  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[70vh] flex items-center justify-center">

        <Image
          src="/images/h55.jpg"
          fill
          priority
          alt="Gym"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-4xl text-center px-6">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            About FitZone
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-5">
            Building Strong Bodies,
            <br />
            Healthy Minds &
            <span className="text-orange-500"> Better Lives.</span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8">
            At FitZone, we believe fitness is more than lifting weights.
            It's about building confidence, improving health, and creating
            a lifestyle that lasts.
          </p>

        </div>

      </section>

      {/* Story */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/h3.jpg"
              width={600}
              height={600}
              alt="Gym Story"
              className="rounded-3xl"
            />

          </div>

          <div>

            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Our Story
            </span>

            <h2 className="text-4xl  text-gray-950 font-bold mt-4">
              Fitness With Purpose
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              FitZone was founded with a simple vision—to create a welcoming
              fitness space where everyone can improve their health,
              confidence, and lifestyle.
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              Whether you're starting your fitness journey or training for
              performance, our experienced coaches provide the support,
              guidance, and motivation you need.
            </p>

          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <FaBullseye
              className="text-orange-500"
              size={40}
            />

            <h3 className="text-3xl  text-gray-950 font-bold mt-6">
              Our Mission
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              To help people achieve healthier lifestyles through expert
              coaching, modern facilities, and continuous motivation.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <FaEye
              className="text-orange-500"
              size={40}
            />

            <h3 className="text-3xl   text-gray-950 font-bold mt-6">
              Our Vision
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              To become the most trusted fitness destination by inspiring
              positive lifestyle changes and long-term wellness.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <span className="text-orange-500 uppercase tracking-[4px]">
            Why Choose Us
          </span>

          <h2 className="text-5xl  text-gray-950 font-bold mt-4">
            Everything You Need To Reach Your Goals
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (

            <div
              key={item.title}
              className="bg-white shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition"
            >

              <div className="text-orange-500">
                {item.icon}
              </div>

              <h3 className="text-2xl  text-gray-950 font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Stats */}

      <section className="bg-orange-500 py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((item) => (

            <div key={item.title}>

              <h2 className="text-5xl font-black text-white">
                {item.number}
              </h2>

              <p className="text-orange-100 mt-3">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Facilities */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center  text-gray-950">

          <span className="uppercase tracking-[4px] text-orange-500">
            Facilities
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Everything Under One Roof
          </h2>

        </div>

        <div className="grid text-gray-950 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {[
            "Strength Training Area",
            "Cardio Zone",
            "Functional Training",
            "Locker Room",
            "Changing Rooms",
            "Parking Facility",
            "Clean Drinking Water",
            "Professional Equipment",
          ].map((item) => (

            <div
              key={item}
              className="border rounded-2xl p-6 flex items-center gap-4"
            >

              <FaAward className="text-orange-500" />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#111] py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold text-white">
            Ready To Transform Your Life?
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            Join FitZone today and take the first step toward a stronger,
            healthier, and more confident version of yourself.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              href="/book-trial"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-white font-semibold transition"
            >
              Book Free Trial
            </Link>

            <Link
              href="/programs"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition"
            >
              Explore Programs
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}