import Image from "next/image";
import Welcome from "@/components/Welcome";
import path from "path";
import fs from "fs/promises";

export default async function Home() {
  const imageDirectory = path.join(process.cwd(), "public/welcome");
  const fileNames = await fs.readdir(imageDirectory, "utf-8");
  const imageFiles = fileNames.filter(
    (file) => path.extname(file).toLowerCase() === ".png"
  );

  return (
    <div className="p-[10vw]">
      <Welcome images={imageFiles} />
    </div>
  );
}
