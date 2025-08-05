import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-[#2B2B35] px-4 pt-5">
            <div className="px-6">
                <div className="grid md:grid-cols-3 grid-cols-1 border-b pb-5 gap-5 md:gap-0">
                    <div className="flex flex-col gap-5 text-justify md:border-r pr-7 justify-center items-center">
                        <div className="flex flex-row items-center justify-center gap-1 md:gap-0">
                            <Image 
                                src="/pratika-logo.png"
                                width={102}
                                height={86}
                                alt="Pratika Logo"
                                className="md:w-[102px] md:h-[86px] w-[38px] h-[31px]"
                            />
                            <div>
                                <p className="font-jockey-one text-[#2A9BDD] md:text-[70px] text-[25px] tracking-wide leading-none">PRATIKA</p>
                                <p className="font-jetbrains-mono text-white md:text-[16px] text-[10px] leading-none">www.pratika.biz</p>
                            </div>
                        </div>
                        <p className="font-jetbrains-mono text-white md:text-[20px] text-[13px]">
                            PT. Pratika Nugraha Jaya berdiri pada tahun 1992. Mengawali usahanya di bidang manufacturing, PRATIKA tumbuh menjadi perusahaan yang dipercaya oleh pelanggan.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 md:border-r border-t border-b md:border-t-0 md:border-b-0 py-3 md:py-0 md:text-[20px] text-[13px]">
                        <p className="font-jetbrains-mono text-white">Bergabung dengan kami!</p>
                        <Link 
                            href={"mailto:admin@pratika.biz"}
                            className="bg-[#FFED65] hover:bg-[#b9ab48] rounded-full py-1 px-3 font-jetbrains-mono flex">
                            <p>Hubungi via email</p>
                        </Link>

                    </div>
                    <div className="flex flex-col gap-[21px] mx-2 text-white text-justify  justify-center md:text-[20px] text-[13px]">
                        <div className="flex flex-row items-center gap-5">
                            <Image 
                                height={24}
                                width={24}
                                src={"/building.png"}
                                alt=""
                                className="min-h-[24px] min-w-[24px] flex-shrink-0"
                            />
                            <p className="font-jetbrains-mono flex-1">
                            Jl. Beringin, No. 71, Kel. Leuwinanggung, Kec. Tapos, Depok, Jawa Barat, Indonesia 16456
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <Image 
                                height={24}
                                width={24}
                                src={"/phone.png"}
                                alt=""
                            />
                            <p className="font-jetbrains-mono">
                            (021) 22177288
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <Image 
                                height={24}
                                width={24}
                                src={"/mail.png"}
                                alt=""
                            />
                            <p className="font-jetbrains-mono">
                            admin@pratika.biz
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center font-jetbrains-mono text-white py-2 md:text-[20px] text-[13px]">2015 PT. PRATIKA NUGRAHA JAYA</p>
        </footer>
    )
}

export default Footer