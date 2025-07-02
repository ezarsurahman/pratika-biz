import Image from "next/image"

export const HistorySection = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-0 md:mb-24">
            <div className="font-jockey-one font-bold flex flex-col text-center leading-0 text-[39px] my-[24px]">
                <p className="text-black p-0 m-0">History of</p>
                <p className="text-[#2A9BDD] -translate-y-6 text-shadow-default">PRATIKA</p>
            </div>

            <div className="relative  w-screen min-h-screen  overflow-visible md:mb-[450px]">
                <Image 
                    src={"/about/yellow-blur.png"}
                    height={626}
                    width={1002}
                    alt="structure"
                    className="absolute object-cover md:scale-150  object-[-30px_-30px] md:object-[170px_-200px] w-[1002px] h-[626px] overflow-visible"
                />
                <Image 
                    src={"/about/structure.png"}
                    height={1904}
                    width={2000}
                    alt="structure"
                    className="absolute object-none object-[-160px_0px] md:object-[190px_175px] md:scale-x-[2.3] md:scale-y-[2.3] left-0 w-[664px] h-[632px] overflow-visible"
                />
                {/* <Image 
                    src={"/about/structure.png"}
                    height={1904}
                    width={2000}
                    alt="structure"
                    className="absolute object-none object-[-160px_0px] md:object-[450px_550px] md:scale-x-[2.3] md:scale-y-[2.3] left-0 w-[664px] h-[632px]  md:w-[2000px] md:h-[1904px] overflow-visible"
                /> */}
                <div className="w-screen flex flex-col px-5 -translate-y- md:px-[100px] md:gap-[120px]">
                    <div className="flex flex-col relative md:flex-row md:w-[450px] md:items-center justify-start items-start text-[31px] w-[120px] -translate-y-7 -translate-x-2 ">
                        <p className="font-jockey-one text-secondary-6 text-center text-shadow-smClose md:leading-[0.9] md:text-[80px]">19<br className="hidden md:block" />92</p>
                        <p className="font-jetbrains-mono text-neutral-10 text-[10px] md:text-[20px] leading-snug -translate-y-2 text-justify">Awal mula <span className="font-semibold">berdirinya CV Pratika Nugraha</span>  yang bergerak di bidang <span className="font-italic">manufacturing</span></p>
                    </div>

                    <div className="flex flex-col relative md:flex-row md:w-[460px] md:items-center self-end justify-start items-start text-[31px] w-[114px]  -translate-y-3 md:-translate-y-36">
                        <p className="font-jockey-one text-secondary-6 text-center text-shadow-smClose md:leading-[0.9] md:text-[80px] md:self-auto self-end ">20<br className="hidden md:block" />08</p>
                        <p className="font-jetbrains-mono text-neutral-10 text-[10px] md:text-[20px] leading-snug -translate-y-2 text-end md:order-first">Pembukaan Divisi Telekomunikasi yang mendukung operator dan vendor telekomunikasi seperti Indosat, Telkomsel, Telkom, Esia, HCPT, Circlecom, Huawei, ZTE</p>
                    </div>
                    <div className="flex flex-col relative md:flex-row md:w-[450px] md:items-center self-start justify-start items-start text-[31px] w-[120px] -translate-y-28 -translate-x-2 md:-translate-y-16">
                        <p className="font-jockey-one text-secondary-6 text-center text-shadow-smClose md:leading-[0.9] md:text-[80px] self-start ">20<br className="hidden md:block" />10</p>
                        <p className="font-jetbrains-mono text-neutral-10 text-[10px] md:text-[20px] leading-snug -translate-y-2 text-justify">Perubahan nama menjadi <span className="font-semibold">PT Pratika Nugraha Jaya</span> dan pembukaan <span className="font-semibold">Divisi Electro Deep Painting</span> yang fokus pada jasa pengecatan berkualitas prima</p>
                    </div>
                    <div className="flex flex-col relative md:flex-row md:w-[450px] md:items-center self-end justify-start items-start text-[31px] w-[120px]  -translate-y-36 md:translate-y-36">
                        <p className="font-jockey-one text-secondary-6 text-center text-shadow-smClose md:leading-[0.9] md:text-[80px] self-end md:self-auto">20<br className="hidden md:block" />11</p>
                        <p className="font-jetbrains-mono text-neutral-10 text-[10px] md:text-[20px] leading-snug -translate-y-2 text-end md:order-first">Pembukaan Divisi Computer Numerical Control yang menggunakan mesin asal Amerika untuk machining Milling dan Bubut</p>
                    </div>
                    <div className="flex flex-col relative self-end md:self-start justify-start items-start text-[31px] w-full  -translate-y-[38px] md:w-[416px] md:translate-y-[150px]">
                        <div className="flex flex-row items-center md:flex-row font-jockey-one text-secondary-6 md:text-center text-shadow-smClose md:leading-[0.9] md:text-[80px] self-center text-center text-style-heading-2">
                            <p>20<br className="hidden md:block" />11</p>
                            <p>&nbsp;- Sekarang</p>
                        </div>
                        <p className="font-jetbrains-mono text-neutral-10 text-[9px] md:text-[20px] leading-snug  text-style-caption-lg text-center md:text-start md:self-end md:ml-24">PT Pratika Nugraha Jaya terus berkembang dan menjadi partner berkualitas dalam industri manufaktur dan telekomunikasi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}