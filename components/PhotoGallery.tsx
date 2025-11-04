// components/PhotoGallery.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
  "/images/photo9.jpg",
  "/images/photo10.jpg",
];

export default function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [fading, setFading] = useState(false); // New state for fade effect

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update this useEffect to manage fading
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true); // Start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + (isMobile ? 1 : 3)) % photos.length);
        setFading(false); // End fade-in after index updates
      }, 300); // Match this duration with the transition duration
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handlePrev = () => {
    setFading(true); // Start fade-out
    setTimeout(() => {
      setIndex(
        (prev) => (prev - (isMobile ? 1 : 3) + photos.length) % photos.length
      );
      setFading(false); // End fade-in
    }, 300); // Match this duration
  };

  const handleNext = () => {
    setFading(true); // Start fade-out
    setTimeout(() => {
      setIndex((prev) => (prev + (isMobile ? 1 : 3)) % photos.length);
      setFading(false); // End fade-in
    }, 300); // Match this duration
  };

  const visiblePhotos = isMobile
    ? [photos[index % photos.length]]
    : [
        photos[index % photos.length],
        photos[(index + 1) % photos.length],
        photos[(index + 2) % photos.length],
      ];

  return (
    <section
      id="photo-gallery"
      className="bg-gray-100 dark:bg-gray-800 py-10 px-4 w-full shadow-md transition-colors duration-300"
    >
      <h2 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 text-center mb-5">
        ನನ್ನ ನೆನಪಿನ ಆಲ್ಬಮ್ 📸
      </h2>
      <div className="relative w-full max-w-5xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow"
            onClick={handlePrev}
          >
            <ChevronLeft color="gray" size={24} />
          </button>

          <div
            className={`flex gap-4 justify-center items-center w-full overflow-hidden
                        transition-opacity duration-300 ease-in-out ${
                          fading ? "opacity-0" : "opacity-100"
                        }`} // <-- Added transition and opacity
          >
            {visiblePhotos.map((photo, idx) => (
              <div
                key={idx}
                className="w-full md:w-1/3 flex-shrink-0 overflow-hidden rounded-lg"
              >
                <Image
                  src={photo}
                  alt={`Gallery photo ${idx}`}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full h-64
                             transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow"
            onClick={handleNext}
          >
            <ChevronRight color="gray" size={24} />
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link
          href="/auth"
          className="bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
        >
          ಇನ್ನಷ್ಟು ನೋಡಿ 💕
        </Link>
      </div>
    </section>
  );
}
