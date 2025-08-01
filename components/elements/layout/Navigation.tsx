"use client"
import Link from "next/link"
import { NavLinks } from "./constant"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
const Navigation = () => {
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [hidden,setHidden] = useState<string>("hidden")

        useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if(!isOpen && hidden==="") {
            const timeout = setTimeout(()=> setHidden("hidden"),300)
            return () => clearTimeout(timeout)
        } else if (isOpen && hidden==="hidden"){
            setHidden("")
        }
    },[isOpen,hidden])




    return (
        <>
        <nav className="fixed top-0 left-0 right-0 bg-white  rounded-b-full z-[999] shadow-md">
            <div className="flex flex-row z-10 ml-8 mr-0 md:mr-8 pr-8 justify-between items-center py-2 md:py-3  md:px-3">
                <div className="flex flex-row items-center justify-center">
                    <Image 
                        height={100}
                        width={100}
                        src="/pratika-logo.png" 
                        alt="" 
                        className="lg:h-[55px] lg:w-[66px] h-10 w-12"
                    />
                    <p className="font-jockey-one text-[#2A9BDD]  text-[30px] md:text-[50px] lg:text-[50px] ml-2">PRATIKA</p>
                </div>
                <div className="md:flex flex-row items-center justify-center md:gap-5 lg:gap-[36px] text-[#2A9BDD] font-jetbrains-mono hidden">
                    {NavLinks.map((item,i) => (
                        <Link 
                            href={item.href}
                            key={i}
                        >
                            <p className="font-jetbrains-mono md:text-[25px] lg:text-[25px] hover:font-bold hover:underline">{item.title}</p>
                        </Link>
                    ))}
                </div>
                <button
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    <Menu className={` md:hidden text-[#2A9BDD] w-30 h-30`} size={35}/>
                </button>
            </div>
        </nav>
        {!mounted ? (
            <div className={`${isOpen? " opacity-100" : " opacity-0"} flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ease-in-out fixed top-0 left-0 right-0 md:hidden bg-white w-[100dvw] font-jetbrains-mono pb-[13px] pt-[73px] z-[998] hidden`}>
                    {NavLinks.map((item,i) => (
                        <Link 
                        href={item.href}
                        key={i}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <p className="font-jetbrains-mono md:text-[10px] lg:text-[25px] hover:font-bold hover:underline text-[#2A9BDD]">{item.title}</p>
                    </Link>
                    ))}
            </div>
            ) : 
        (
            <div className={`${isOpen? " opacity-100" : " opacity-0"} flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ease-in-out fixed top-0 left-0 right-0 md:hidden bg-white w-[100dvw] font-jetbrains-mono pb-[13px] pt-[73px] z-[998] ${hidden}`}>
                    {NavLinks.map((item,i) => (
                        <Link 
                        href={item.href}
                        key={i}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <p className="font-jetbrains-mono md:text-[10px] lg:text-[25px] hover:font-bold hover:underline text-[#2A9BDD]">{item.title}</p>
                    </Link>
                    ))}
            </div>
        )}
        </>
    )
}

export default Navigation