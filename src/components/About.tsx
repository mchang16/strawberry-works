import Image from "next/image"
import cinnamoroll from '../../public/cinnamoroll.webp';

export default function About() {
    return (
        // <div className="bg-light">
        <div className="px-16 py-8 lg:px-44 lg:py-16 transition-opacity opacity-80 ease-in delay-150 duration-300">
            <div className="flex items-center flex-col gap-2 lg:flex-row" >
                <div className="w-52 lg:min-w-80">
                    <Image src={cinnamoroll} alt="profile" className="rounded-full"></Image>
                </div>
                <div className="my-4 bg-white lg:px-12">
                    <h1 className="text-3xl text-center text-green mb-4 lg:text-5xl" style={{ textShadow: "1px 1px 0.5px #3a4f2c" }}>I&apos;m <span className="text-yellow">M</span><span className="text-red">i</span><span className="text-green">c</span><span className="text-yellow">h</span><span className="text-red">e</span><span className="text-green">l</span><span className="text-yellow">l</span><span className="text-red">e</span><span className="text-green">!</span></h1>
                    <h1 className="text-3xl text-center text-red mb-4 lg:text-5xl" style={{ textShadow: "1px 1px 0.5px #722b08" }}>Nice to meet you!</h1>
                    <p className="text-lg lg:text-xl text-brown text-center">I’m a professional software engineer during the day, but a super focused hobby crafter at night, based in Seattle, WA! Strawberry Works is a brand I created to introduce all the cute handmade items I make to the world.
                        I’ve been passionate about handmade crafts since I was a young teen, with my fondest memories of coming back from school and making polymer clay charms late into the night;
                        Nowadays my focus is on needle felting, illustration, and (yes) clay! I have a love for creating just about anything cute, and I hope you’ll stick around to see what I make next!
                    </p>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}