"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/images/image-1.webp",
    "/images/image-2.webp",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(220px, 50vw, 600px)" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Gas repair service banner"
              fill
              sizes="100vw"
              priority={index === 0}
              style={{
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-white scale-125" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}