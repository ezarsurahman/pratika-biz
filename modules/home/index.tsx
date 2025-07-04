"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AnimationOnScroll from '@/components/AnimationOnScroll'
import Image from 'next/image'
import { ProvideContainer } from './components/ProvideContainer'


export const Home = () => {

    return (
        <div className=''>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
            <div className="md:min-h-screen md:h-screen  relative overflow-hidden" id="hero">
                <Image 
                    src={"/blur-home.png"}
                    alt='blur image'
                    className='z-30 right-0 absolute h-full rounded-b-3xl md:rounded-b-3xl md:rounded-b-4xl'
                    width={1920}
                    height={1080}
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#2A9BDD] to-transparent rounded-b-3xl md:rounded-b-4xl" />
                <Image 
                    src={"/home-bg.jpg"}
                    alt='Home hero background'
                    className='z-10 absolute h-full w-full rounded-b-3xl md:rounded-b-4xl object-cover'
                    width={1920}
                    height={1080}
                />
                <div className="absolute -rotate-45 z-20 -left-24 md:-left-56 bottom-24 md:bottom-72 overflow-hidden" id="photo">
                    <div className="flex flex-row gap-1">
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                    </div>
                    <div className="flex flex-row gap-1 mt-1 ">
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                    </div>
                </div>
                <div className="md:min-h-screen min-h-[75dvw] flex flex-col relative justify-end items-end rounded-b-3xl md:rounded-b-4xl z-[900] mt-3 md:p-16 p-5">
                    <span className="font-jockey-one text-white text-[31px] md:text-8xl inline-block text-shadow-lg z-[901]">
                        “Quality You <br />Can Rely On”
                    </span>
                    <p className="font-jetbrains-mono text-white bg-[#044B7F] px-1 py-1 rounded-3xl text-[10px] md:text-3xl md:mt-6 mt-1 z-[901]">
                        Experts in Tubing & Metal Parts
                    </p>
                </div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
            <div className="relative md:h-screen flex flex-col justify-center items-center my-[32px]">
                <p className="font-jockey-one md:text-8xl text-[31px] text-center text-shadow-lg md:mb-8 mb-[27px]">What We Provide</p>
                <Image 
                    width={1477}
                    height={419}
                    src="/home-provide/wave.png"
                    alt="" 
                    className="absolute z-[100] -top-3 md:h-[419px] md:w-[100dvw]"
                />
                <div className="flex flex-row md:mx-32 md:my-10 md:gap-10 gap-[14px]">
                    <ProvideContainer src="home-provide/1.png" text="Piping & Tubing" classname="z-[150]"></ProvideContainer>
                    <ProvideContainer src="home-provide/2.png" text="Metal Stamping" classname=""></ProvideContainer>
                    <ProvideContainer src="home-provide/3.png" text="Metal Machining" classname="z-[150]"></ProvideContainer>
                    <ProvideContainer src="home-provide/4.png" text="Assembly" classname=""></ProvideContainer>
                </div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
            <div className="bg-[#2A9BDD] rounded-t-4xl flex justify-center items-center relative overflow-hidden max-h-[60dvw] md:max-h-none">
                <Image 
                    height={627}
                    width={280}
                    src="/home-bottom/blobs/white-1.png" 
                    className='absolute -top-14 w-[627px] h-[280px]' 
                    alt=""
                />
                <Image 
                    height={441}
                    width={317}
                    src="/home-bottom/blobs/white-2.png" 
                    className='absolute right-0 -top-36' 
                    alt=""
                />
                <Image 
                    height={441}
                    width={317}
                    src="/home-bottom/blobs/white-3.png" 
                    className='absolute left-0 -bottom-10' 
                    alt=""
                />
                <Image 
                    height={654}
                    width={469}
                    src="/home-bottom/blobs/black-1.png" 
                    className='absolute left-0 -bottom-24' 
                    alt=""
                />
                <Carousel></Carousel>
            </div>
            </AnimationOnScroll>
        </div>
        
    )
}

const ProductImage = () => {
    return (
        <Image width={633} height={633} src="/pratika-product.png" alt="" className="z-40 h-30 h-[150px] md:h-full object-cover " />
    )
}





const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

    return (
        <div className='embla overflow-hidden my-24' ref={emblaRef}>
            <div className='embla__container flex min-w-0'>
                <div className='embla__slide flex-[0_0_100%] justify-center items-center'>
                    <CarouselImage>
                        <Image 
                            height={379}
                            width={1255.5}
                            src="/home-bottom/1.png"
                            alt=''
                            className='w-[361px] h-[125px] md:w-[1255.5px] md:h-[379px]'
                        />
                    </CarouselImage>
                </div>
                <div className='embla__slide flex-[0_0_100%] justify-center items-center'>
                <CarouselImage>
                        <Image 
                            height={379}
                            width={1255.5}
                            src="/home-bottom/2.png"
                            alt=''
                            className='w-[361px] h-[125px] md:w-[1255.5px] md:h-[379px]'
                        />
                    </CarouselImage>
                </div>
                <div className='embla__slide flex-[0_0_100%] justify-center items-center'>
                <CarouselImage>
                        <Image 
                            height={379}
                            width={1255.5}
                            src="/home-bottom/3.png"
                            alt=''
                            className='w-[361px] h-[125px] md:w-[1259px] md:h-[379px]'
                        />
                    </CarouselImage>
                </div>
                    
                
            </div>
        </div>
    )
}

interface CarouselImageInterface {
    children?: React.ReactNode,
    className?: string,
}

const CarouselImage = ({children, className=""}: CarouselImageInterface) => {
    return(
        <div className={`h-full mx-8 flex justify-center items-center relative ${className}`}>
            {children}
        </div>
    )
}

