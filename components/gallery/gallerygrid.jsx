"use client";

import Image from "next/image";

const galleryImages = [
  "/images/gallery/g1.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
  "/images/gallery/g4.jpg",
  "/images/gallery/g5.jpg",
  "/images/gallery/g6.jpg",
  "/images/gallery/g7.jpg",
  "/images/gallery/g8.jpg",
  "/images/gallery/g9.jpg",
  "/images/gallery/g10.jpg",
  "/images/gallery/g11.jpg",
  "/images/gallery/g12.jpg",
];

export default function GalleryGrid() {
  return (
    <section className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-orange-500 text-sm">
            Explore Our Gym
          </p>

          <h2 className="text-white text-5xl font-black mt-4">
            Gallery
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-8">
            Every corner of our gym is designed to inspire your fitness journey.
            Explore our premium equipment, training spaces, and vibrant community.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (

            <div
              key={index}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl group cursor-pointer"
            >

              <div className="relative h-48 sm:h-64 lg:h-72 overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  fill
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

                <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white font-semibold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}