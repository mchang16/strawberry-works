import Image from "next/image";

export default function ImageCarousel({
  currentImagePath,
  imageFiles,
  setCurrentImageIndex,
}: {
  currentImagePath: string;
  imageFiles: string[];
  setCurrentImageIndex: (index: number) => void;
}) {
  return (
    // <div>
    <div className="flex h-full w-full">
      {imageFiles.map((image, index) => {
        return (
          <Image
            className={`${
              image === currentImagePath
                ? "border-2 border-[#744B19] max-h-full h-full w-full opacity-75"
                : "max-h-full h-full w-full opacity-75"
            }`}
            key={image}
            src={image}
            alt="image"
            width={50}
            height={50}
            onClick={() => setCurrentImageIndex(index)}
          />
        );
      })}
      {/* </div> */}
    </div>
  );
}
