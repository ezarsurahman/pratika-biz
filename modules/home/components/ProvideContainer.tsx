"use client"
import Image from 'next/image'
interface ProvideContainerInterface {
    src: string,
    text?: string,
    classname?: string,
    }
export const ProvideContainer = ({src, text="",classname=""}:ProvideContainerInterface) => {
    return(
        <div className={`bg-[#044B7F] md:px-4 p-[7px] rounded-[13.5px] md:py-8 group flex flex-col justify-center items-center relative gap-2 min-w-[68px] ${classname}`}>
            <div className='relative flex justify-center items-center w-full h-[90px] md:h-[345px] '>
                <Image height={345} width={260} src={'/'+src} alt="" className={`h-[90px] w-[68px] md:h-[345px] md:w-[260px] object-cover rounded-[10px]`}/>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 rounded-[10px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-jockey-one text-white md:text-[50px] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 z-10 text-wrap leading-none tes">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}