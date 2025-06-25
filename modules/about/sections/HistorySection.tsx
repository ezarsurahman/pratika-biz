import Image from "next/image"

export const HistorySection = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-jockey-one font-bold flex flex-col text-center leading-0 text-[39px] my-[24px]">
                <p className="text-black p-0 m-0">History of</p>
                <p className="text-[#2A9BDD] -translate-y-6 text-shadow-default">PRATIKA</p>
            </div>

            <div className="relative  w-screen h-screen">
                <Image 
                    src={"/about/structure.png"}
                    height={664}
                    width={632}
                    alt="structure"
                    className="absolute inset-0 object-cover w-[664px] h-[632px]"
                />
                <div className="w-screen flex flex-col px-5 -translate-y-">
                    <div className="flex flex-col relative justify-start items-start text-[31px] w-[120px] -translate-y-7">
                        <p className="font-jockey-one text-[#FFED65] text-shadow-smClose">1992</p>
                        <p className="font-jetbrains-mono text-[10px] leading-snug -translate-y-2 text-justify">Awal mula <span className="font-semibold">berdirinya CV Pratika Nugraha</span>  yang bergerak di bidang <span className="font-italic">manufacturing</span></p>
                    </div>

                    <div className="flex flex-col relative self-end justify-start items-start text-[31px] w-[100px] translate-x-3 ">
                        <p className="font-jockey-one text-[#FFED65] text-shadow-smClose self-end">2008</p>
                        <p className="font-jetbrains-mono text-[10px] leading-snug -translate-y-2 text-end">Pembukaan Divisi Telekomunikasi yang mendukung operator dan vendor telekomunikasi seperti Indosat, Telkomsel, Telkom, Esia, HCPT, Circlecom, Huawei, ZTE</p>
                    </div>
                    <div className="flex flex-col relative self-start justify-start items-start text-[31px] w-[120px] -translate-y-32 ">
                        <p className="font-jockey-one text-[#FFED65] text-shadow-smClose self-start">2010</p>
                        <p className="font-jetbrains-mono text-[10px] leading-snug -translate-y-2 text-justify">Perubahan nama menjadi <span className="font-semibold">PT Pratika Nugraha Jaya</span> dan pembukaan <span className="font-semibold">Divisi Electro Deep Painting</span> yang fokus pada jasa pengecatan berkualitas prima</p>
                    </div>
                    <div className="flex flex-col relative self-end justify-start items-start text-[31px] w-[100px] translate-x-4 -translate-y-36">
                        <p className="font-jockey-one text-[#FFED65] text-shadow-smClose self-end">2011</p>
                        <p className="font-jetbrains-mono text-[10px] leading-snug -translate-y-2 text-end">Pembukaan Divisi Computer Numerical Control yang menggunakan mesin asal Amerika untuk machining Milling dan Bubut</p>
                    </div>
                </div>
            </div>
        </div>
    )
}