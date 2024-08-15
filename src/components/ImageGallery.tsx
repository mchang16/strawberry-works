"use client";

import Image from "next/image";
import { SyntheticEvent, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ImageOverlay from "./ImageOverlay";

export default function ImageGallery({
  imagePaths,
}: {
  imagePaths: Array<string>;
}) {
  //   const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  //   useEffect(() => setMounted(true), []);

  function handleIsOpen(isOpen: boolean, index: number, e: SyntheticEvent) {
    e.stopPropagation();
    setCurrentImageIndex(index);
    setIsOpen(isOpen);
  }

  function handleImageOpen(index: number) {
    setIsOpen(true);
    setCurrentImageIndex(index);
  }

  return (
    <div className="p-12 lg:p-16">
      <div className="flex gap-12 flex-wrap justify-center xl:justify-normal">
        {imagePaths.map((image, index) => (
          <div key={image}>
            <div
              className="transition-shadow transition-transform ease-in-out delay-50 shadow-md duration-30 hover:shadow-lg hover:translate-y-0.5 hover:-translate-x-0.5"
              onClick={(e) => handleImageOpen(index)}
            >
              <Image src={image} alt="images" width={300} height={200} />
            </div>
            {currentImageIndex === index && (
              <ImageOverlay
                open={isOpen}
                onClose={handleIsOpen}
                imagePath={image}
                imageFiles={imagePaths}
                index={index}
              />
            )}
            {/* {mounted
							? createPortal(
								<ImageOverlay open={isOpen} onClose={handleIsOpen} imagePath={`${path}/${image}`} />,
								document.body
							)
							: null} */}
          </div>
        ))}
      </div>
    </div>
  );
}
