import Image from "next/image";
import Slideshow from "./Slideshow";

export default function Welcome({ images }: { images: string[] }) {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center p-2">
                <div>
                    <h1 className="animate-fadeInUp text-2xl text-red md:text-3xl xl:text-5xl" style={{ textShadow: "0.5px 0.5px 0.5px #722b08" }}><span >Hi hi! I’m Michelle!</span> </h1>
                    <h2 className="text-sm text-green md:text-lg xl:text-3xl" style={{ textShadow: "0.5px 0.5px 0.5px #3a4f2c" }}>
                        I’m a hobbyist crafter with a passion for
                        needlefelting, clay, and creating all things <span className="text-yellow">C</span><span className="text-red">U</span><span className="text-green">T</span><span className="text-yellow">E</span>!
                    </h2>
                </div>
            </div>
            <Slideshow images={images} />
        </div>

    )
}