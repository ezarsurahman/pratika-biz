import Image from "next/image"

export const AboutUsHeroSection = () => {
    return (
        <div className="md:min-h-screen md:h-screen  relative overflow-hidden" id="hero">
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#2A9BDD] to-transparent rounded-b-3xl md:rounded-b-4xl" />
                <Image 
                    src={"/about/hero.jpg"}
                    alt='Home hero background'
                    className='z-10 absolute h-full w-full rounded-b-3xl md:rounded-b-4xl object-cover'
                    width={1920}
                    height={1080}
                />
                <div className="md:min-h-screen min-h-[75dvw] flex flex-col relative justify-end items-start rounded-b-3xl md:rounded-b-4xl z-[900] mt-3 md:p-16 p-5">
                    <span className="font-jockey-one text-white text-[31px] md:text-8xl inline-block text-shadow-lg z-[901]">
                        About Us
                    </span>
                    <p className="font-jetbrains-mono text-white bg-[#044B7F] px-2 md:px-1 py-1 rounded-3xl text-[10px] md:text-3xl md:mt-6 mt-1 z-[901]">
                        Vision, Mission, and History
                    </p>
                </div>
        </div>
    )
}