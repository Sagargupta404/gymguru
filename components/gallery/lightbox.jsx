"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  currentIndex,
  setCurrentIndex,
  isOpen,
  setIsOpen,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-999 bg-black/95 flex items-center justify-center">

      {/* Close */}

      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-white"
      >
        <X size={34} />
      </button>

      {/* Previous */}

      <button
        onClick={prevImage}
        className="absolute left-6 text-white"
      >
        <ChevronLeft size={42} />
      </button>

      {/* Next */}

      <button
        onClick={nextImage}
        className="absolute right-6 text-white"
      >
        <ChevronRight size={42} />
      </button>

      {/* Image */}

      <div className="relative w-[90vw] h-[85vh]">

        <Image
          src={images[currentIndex]}
          alt=""
          fill
          className="object-contain"
        />

      </div>

      {/* Counter */}

      <div className="absolute bottom-8 text-white text-lg">

        {currentIndex + 1} / {images.length}

      </div>

    </div>
  );
}