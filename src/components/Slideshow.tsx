"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function Slideshow({ images }: { images: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const welcomePhrases = [
    "Welcome!",
    "Let's get this party started!",
    "Hey listen listen!",
    "Has anyone seen my sock?",
  ];

  useEffect(() => {
    function nextImage() {
      setImageIndex((currentIndex) => {
        if (currentIndex === images.length - 1) return 0;
        return currentIndex + 1;
      });
    }
    const interval = setTimeout(() => nextImage(), 6000);
    return () => clearTimeout(interval);
  }, [imageIndex, images.length]);

  return (
    <div
      key={images[imageIndex]}
      className="flex flex-col items-center gap-12 fixed bottom-0 w-[40vh] left-[calc(50%-20vh)] animate-fadeInFadeOut "
    >
      <div className="text-brown text-sm lg:text-xl">
        {welcomePhrases[randomInt(0, welcomePhrases.length - 1)]}
      </div>
      <Image
        width={700}
        height={600}
        src={`/welcome/${images[imageIndex]}`}
        alt="welcome"
      />
    </div>
  );
}
