import ImageGallery from "@/components/ImageGallery";
import fs from "fs/promises";
import path from "path";

export default async function Needlefelting() {
  const imageDirectory = path.join(process.cwd(), "/public/art/needlefelting");
  const fileNames = await fs.readdir(imageDirectory, "utf-8");
  const imageFiles = fileNames.filter(
    (file) => path.extname(file).toLowerCase() === ".png"
  );

  const appendedImagePaths = imageFiles.map(
    (image) => `/art/needlefelting/${image}`
  );

  // use map() function to append path to image file
  return <ImageGallery imagePaths={appendedImagePaths} />;
}
