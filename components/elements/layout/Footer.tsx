const Footer = () => {
    return (
        <footer className="bg-[#2B2B35] px-4 pt-5">
            <div className="px-6">
                <div className="grid grid-cols-3 border-b pb-5">
                    <div className="flex flex-col gap-5 text-justify border-r pr-7">
                        <div className="flex flex-row ">
                            <img src="pratika-logo.png" alt="" />
                            <div>
                                <p className="font-jockey-one text-[#2A9BDD] text-5xl tracking-wide">PRATIKA</p>
                                <p className="font-jetbrains-mono text-white text-xs">www.pratika.biz</p>
                            </div>
                        </div>
                        <p className="font-jetbrains-mono text-white text-sm">
                            PT. Pratika Nugraha Jaya berdiri pada tahun 1992. Mengawali usahanya di bidang manufacturing, PRATIKA tumbuh menjadi perusahaan yang dipercaya oleh pelanggan.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-sm gap-2 border-r">
                        <p className="font-jetbrains-mono text-white">Bergabung dengan kami!</p>
                        <form action="" className="bg-[#FFED65] rounded-full py-1 px-3 font-jetbrains-mono flex">
                            <input type="text" placeholder="Email Address" className="bg-[#FFED65]" />
                            <button className=" flex justify-center items-center bg-black rounded-full">
                                <svg className="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                            </button>
                        </form>

                    </div>
                    <div className="flex flex-col gap-4 mx-4 text-white text-justify">
                        <div className="flex flex-row items-center gap-5">
                            <img src="building.png" alt="" />
                            <p className="font-jetbrains-mono">
                            Jl. Beringin, No. 71, Kel. Leuwinanggung, Kec. Tapos, Depok, Jawa Barat, Indonesia 16456
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <img src="phone.png" alt="" />
                            <p className="font-jetbrains-mono">
                            (021) 22177288
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <img src="mail.png" alt="" />
                            <p className="font-jetbrains-mono">
                            admin@pratika.biz
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center font-jetbrains-mono text-white py-2">2015 PT. PRATIKA NUGRAHA JAYA</p>
        </footer>
    )
}

export default Footer