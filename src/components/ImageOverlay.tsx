import Image from "next/image";
import { SyntheticEvent, TouchEvent, useRef, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { ExitIcon, RightArrowIcon, LeftArrowIcon } from "./icons";
export default function ImageOverlay({
  open,
  imagePath,
  imageFiles,
  index,
  onClose,
}: {
  open: boolean;
  imagePath: string;
  imageFiles: string[];
  index: number;
  onClose: (isOpen: boolean, index: number, e: SyntheticEvent) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(index);
  const positionStart = useRef(0);
  const setAnimation = useRef("");

  function handleNext() {
    setAnimation.current = "left";
    setCurrentImageIndex((prev) => {
      return prev + 1 < imageFiles.length ? prev + 1 : 0;
    });
  }

  function handlePrev() {
    setAnimation.current = "right";
    setCurrentImageIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : imageFiles.length - 1;
    });
  }

  function handleOnTouchStart(e: TouchEvent) {
    positionStart.current = e.touches[0].clientX;
  }

  function handleOnTouchEnd(e: TouchEvent) {
    const minimumDistance = 100;
    const endPoint = e.changedTouches[0].clientX;

    if (
      positionStart.current - endPoint > 0 &&
      Math.abs(positionStart.current - endPoint) >= minimumDistance
    )
      handleNext();
    if (
      positionStart.current - endPoint < 0 &&
      Math.abs(positionStart.current - endPoint) >= minimumDistance
    )
      handlePrev();
  }

  return (
    open && (
      <div className="animate-fadeIn w-full h-full fixed top-0 bottom-0 right-0 left-0 bg-white/95 z-50">
        <button
          className="absolute top-12 right-12 z-40"
          onClick={(e) => onClose(false, currentImageIndex, e)}
        >
          <ExitIcon stroke="#744B19" />
        </button>
        <div className="h-full flex flex-col items-center justify-center">
          <div>
            <button
              className="absolute left-0 ml-[4vw] top-[50%]"
              onClick={handlePrev}
            >
              <LeftArrowIcon fill="#744B19" stroke="#744B19" />
            </button>
            <button
              className="absolute right-0 mr-[4vw] top-[50%]"
              onClick={handleNext}
            >
              <RightArrowIcon fill="#744B19" stroke="#744B19" />
            </button>
          </div>

          <div
            key={imageFiles[currentImageIndex]}
            className={`flex-1 min-h-0 p-16 ${
              setAnimation.current === "left"
                ? "animate-slideToLeft"
                : "animate-slideToRight"
            }`}
            onTouchStart={(e) => handleOnTouchStart(e)}
            onTouchEnd={(e) => handleOnTouchEnd(e)}
          >
            <Image
              className="object-contain h-full w-full "
              src={imageFiles[currentImageIndex]}
              alt="image"
              width={400}
              height={400}
            />
          </div>

          <div className="min-h-0">
            <ImageCarousel
              currentImagePath={imageFiles[currentImageIndex]}
              imageFiles={imageFiles}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          </div>
        </div>
        {/* <div className="flex"> */}

        {/* </div> */}
      </div>
    )
  );
}
