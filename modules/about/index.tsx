import AnimationOnScroll from "@/components/AnimationOnScroll"

export const AboutUs = () => {
    return(
        <div className="">
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
            {/* <div className="min-h-screen relative overflow-hidden" id="about-hero">
                <img src="about-hero.png" alt="" className="z-30 right-2 absolute h-full rounded-b-4xl"/>
                <img src="blur-home.png" className="z-10 absolute h-full rounded-b-4xl object-cover" alt="" />
            </div> */}
            <div className="min-h-screen bg-[rgb(255,255,255)] flex flex-col justify-center items-center">
                <p className="text-[#2A9BDD] font-jockey-one text-8xl text-center text-shadow-lg mb-8">About Us</p>
            </div>
            </AnimationOnScroll>
        </div>
    )
}