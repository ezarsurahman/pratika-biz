"use client"
import Image from 'next/image'
import Link from "next/link";

interface ItemContainerProps {
    src: string;
    text?: string;
    className?: string;
}

export const ItemContainer = ({ src, text = "", className = "", id }: ItemContainerProps & { id: string }) => {
    return (
        <Link href={`/products/${id}`} className="group w-full">
            <div className={`bg-white border-2 border-[#B6B6B6] rounded-[20px] shadow-md flex flex-col justify-center items-center relative gap-2 min-w-[200px] min-h-[280px] p-4 transition-all hover:shadow-lg cursor-pointer group-hover:border-[#2A9BDD] ${className}`}>
                <div className="flex justify-center items-center w-full h-[200px] md:h-[240px]">
                    <div className="bg-white border-2 border-[#B6B6B6] rounded-[16px] p-2 w-[170px] h-[170px] md:w-[220px] md:h-[220px] flex items-center justify-center">
                        <Image src={src} alt={text} width={600} height={600} className="object-contain w-full h-full" />
                    </div>
                </div>
                <p className="font-jetbrains-mono text-black text-center text-lg mt-2">{text}</p>
            </div>
        </Link>
    )
}