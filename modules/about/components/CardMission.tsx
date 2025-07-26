"use client"

import React from "react"

interface CardMissionProps {
    title: string,
    list: string[]
    className?: string
    onmouseover: (id:string) => void,
    onmouseleave: (id:string) => void,
    id:string
    image:string
    bg:string
}



export const CardMission = ({
        title,
        list,
        image,
        bg,
        className,
        onmouseover,
        onmouseleave,
        id } : 
        CardMissionProps) => {
    return (
        <div
            style={{
                backgroundImage: `url('/about/${image}')`,
                backgroundColor: "lightgray",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderColor:bg
            }}
            onMouseOver={() => {onmouseover(id)}}
            onMouseLeave={() => {onmouseleave(id)}}
            className={` relative flex flex-col justify-center items-center p-5 gap-4 rounded-[20px] border-[5px] border-[${bg}] text-neutral-1 shadow-lg ${className} w-full md:h-full`} 
        >
            <div className="absolute inset-0 bg-black opacity-50 rounded-[15px]"></div>
            <p className="font-jockey-one text-style-heading-3 md:text-[4rem] z-10">{title}</p>
            <div className="font-jetbrains-mono text-style-caption-lg leading-[1.1] text-[10px] md:text-[1.5rem] z-10">
                {list.map((item,index) => (
                    <div className="flex gap-2" key={index}>
                        <p>•</p>
                        <p key={index}>{item}</p>
                    </ div>
                ))}
            </div>
        </div>
    )
}