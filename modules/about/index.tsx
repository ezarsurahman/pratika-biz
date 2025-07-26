import AnimationOnScroll from "@/components/AnimationOnScroll"
import { AboutUsHeroSection } from "./sections/AboutUsHeroSection"
import { HistorySection } from "./sections/HistorySection"
import { VisitUsSection } from "./sections/VisitUsSection"
import { VisionMissionSection } from "./sections/VisionMissionSection"

export const AboutUs = () => {
    return(
        <div className="">
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
                <AboutUsHeroSection />
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
                <HistorySection/>
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
                <VisionMissionSection />
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
                <VisitUsSection/>
            </AnimationOnScroll>
        </div>
    )
}