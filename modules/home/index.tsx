"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AnimationOnScroll from '@/components/AnimationOnScroll'


export const Home = () => {

    return (
        <div className=''>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
            <div className="min-h-screen relative overflow-hidden" id="hero">
                <img src="blur-home.png" alt="" className="z-30 right-0 absolute h-full rounded-b-4xl"/>
                <img src="home-bg.png" className="z-10 absolute h-full rounded-b-4xl object-cover" alt="" />
                <div className="absolute -rotate-45 z-20 -left-56 bottom-72 overflow-hidden" id="photo">
                    <div className="flex flex-row gap-1">
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                    </div>
                    <div className="flex flex-row gap-1 mt-1">
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                        <ProductImage></ProductImage>
                    </div>
                </div>
                <div className="min-h-screen bg-gradient-to-t from-[#2A9BDD] to-transparent flex flex-col relative justify-end items-end rounded-b-4xl z-10 mt-3 p-16">
                    <span className="font-jockey-one text-white text-8xl inline-block text-shadow-lg">
                        “Quality You <br />Can Rely On”
                    </span>
                    <p className="font-jetbrains-mono text-white bg-[#044B7F] px-3 py-2 rounded-3xl text-3xl mt-6">
                        Experts in Tubing & Metal Parts
                    </p>
                </div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
            <div className="h-screen flex flex-col justify-center items-center">
                <p className="font-jockey-one text-8xl text-center text-shadow-lg mb-8">What We Provide</p>
                <img src="home-provide/wave.png" alt="" className="absolute z-0"/>
                <div className="flex flex-row mx-32 my-10 gap-10">
                    <ProvideContainer src="home-provide/gear.png" text="PIPING/TUBING" classname="z-0"></ProvideContainer>
                    <ProvideContainer src="home-provide/hat.png" text="METAL STAMPING" classname=""></ProvideContainer>
                    <ProvideContainer src="home-provide/parabole.png" text="MACHINING" classname="z-0"></ProvideContainer>
                    <ProvideContainer src="home-provide/bucket.png" text="ASSEMBLY" classname=""></ProvideContainer>
                </div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
            <div className="bg-[#2A9BDD] rounded-t-4xl flex justify-center items-center relative overflow-hidden">
                <img src="home-bottom/blobs/white-1.png" className='absolute -top-44' alt="" />
                <img src="home-bottom/blobs/white-2.png" className='absolute right-0 -top-36' alt="" />
                <img src="home-bottom/blobs/white-3.png" className='absolute left-0 -bottom-10' alt="" />
                <img src="home-bottom/blobs/black-1.png" className='absolute left-0 -bottom-24' alt="" />
                <img src="home-bottom/blobs/black-2.png" className='absolute right-0 -bottom-36' alt="" />
                <Carousel></Carousel>
            </div>
            </AnimationOnScroll>
        </div>
        
    )
}

const ProductImage = () => {
    return (
        <img src="pratika-product.png" alt="" className="z-40 h-full object-cover " />
    )
}

interface ProvideContainerInterface {
src: string,
text?: string,
classname?: string,
}

const ProvideContainer = ({src, text="",classname=""}:ProvideContainerInterface) => {
    return(
        <div className={`bg-[#044B7F] px-4 py-8 drop-shadow-lg-yellow group flex flex-col justify-center items-center relative gap-2 h-72 w-72 ${classname}`}>
            <img src={src} alt="" className={`${src==="home-provide/hat.png" ? `h-30` :`h-48`} relative top-10 group-hover:top-0 transition-all duration-300`}/>
            <p className="text-center font-jetbrains-mono group-hover:text-white text-[#044B7F] text-2xl transition-all duration-300">{text}</p>
        </div>
    )
}

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

    return (
        <div className='embla overflow-hidden my-24' ref={emblaRef}>
            <div className='embla__container flex min-w-0'>
                <div className='embla__slide flex-[0_0_100%] justify-center items-center'>
                    <CarouselImage>
                        <img src="home-bottom/client.png" alt="" />
                        <div className='w-1/3 absolute left-20 bottom-5 bg-[#FFED65] rounded-xl py-5 px-4 opacity-65'>
                            <p className='font-jetbrains-mono font-bold text-xl'> Our Clients</p>
                            <p className='font-jetbrains-mono'>Hingga kini PT. Pratika Nugraha Jaya mampu mendukung perusahaan multinasional</p>
                        </div>
                    </CarouselImage>
                </div>
                    
                <div className='embla__slide flex-[0_0_100%]'>
                    <CarouselImage>
                        <div className='w-11/12 h-full bg-white rounded-4xl'>
                            <div className='h-full flex flex-row gap-5 justify-center items-center'>
                                <div className='flex flex-col h-full py-11 justify-between ml-10'>
                                    <div>
                                        <div className="flex flex-row ">
                                        <img src="pratika-logo.png" className='object-scale-down w-max' alt="" />
                                        <div>
                                            <p className="font-jockey-one text-[#2A9BDD] text-7xl tracking-wide">PRATIKA</p>
                                            <p className="font-jetbrains-mono text-[#757575] text-xs">www.pratika.biz</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-jetbrains-mono font-bold text-xl'>Products</p>
                                        <p className='font-jetbrains-mono w-2/3'>Berbagai macam produk telah kami buat yang mampu bersaing di pasaran.</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center pr-8'>
                                    <img src="home-bottom/products.png" alt="" className='h-3/4 object-scale-down' />
                                </div>
                            </div>
                        </div>
                    </CarouselImage>
                </div>
                <div className='embla__slide flex-[0_0_100%] justify-center items-center'>
                    <CarouselImage>
                        <img src="home-bottom/contact.png" alt="" />
                        <div className='w-1/3 absolute left-20 top-5 bg-[#FFED65] rounded-xl py-5 px-4 opacity-65 self-end'>
                            <p className='font-jetbrains-mono font-bold text-xl'> Contact Us</p>
                            <p className='font-jetbrains-mono'>Cukup tinggalkan pesan dengan melengkapi beberapa informasi dan kami akan segera merespon.</p>
                        </div>
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

