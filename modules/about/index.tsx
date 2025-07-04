import AnimationOnScroll from "@/components/AnimationOnScroll"
import { AboutUsHeroSection } from "./sections/AboutUsHeroSection"
import { HistorySection } from "./sections/HistorySection"

export const AboutUs = () => {
    return(
        <div className="">
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
                <AboutUsHeroSection />
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
                <HistorySection/>
            </AnimationOnScroll>
        </div>
    )
}