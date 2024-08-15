import Image from "next/image";
import cinnamoroll from "../../public/cinnamoroll.webp";

export default function Contact() {
  return (
    <div className="px-16 py-8 lg:px-48 xl:px-80 lg:py-16">
      <div className="flex items-center flex-col gap-2 lg:flex-row">
        <div className="w-52 lg:w-[50rem] lg:min-w-64">
          <Image
            src={cinnamoroll}
            alt="profile"
            className="rounded-full"
          ></Image>
        </div>
        <div className="my-4 lg:px-12">
          <h1 className="text-brown text-3xl text-center mb-4 lg:text-5xl">
            <span className="text-yellow">C</span>
            <span className="text-red">o</span>
            <span className="text-green">n</span>
            <span className="text-yellow">t</span>
            <span className="text-red">a</span>
            <span className="text-green">c</span>
            <span className="text-yellow">t</span>
          </h1>
          <p className="text-brown text-lg lg:text-xl text-center">
            Feel free to email me at: mchang0816@gmail.com or send a message
            through social media!
          </p>
        </div>
      </div>
    </div>
  );
}
