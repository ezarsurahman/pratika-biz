import Link from "next/link"

const Navigation = () => {
    return (
        <nav className=" fixed top-0 left-0 bg-white w-full rounded-b-full overflow-hidden z-50">
            <div className="flex flex-row z-10 py-3 px-3 mx-8 justify-between">
                <div className="flex flex-row items-center justify-center">
                    <img src="/pratika-logo.png" alt="" className="h-9"/>
                    <p className="font-jockey-one text-[#2A9BDD] text-2xl ml-2">PRATIKA</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-6 text-[#2A9BDD] font-jetbrains-mono">
                    <Link href={"/"}>
                        <p className="font-jetbrains-mono">Home</p>
                    </Link>
                    <Link href={"/about"}>
                        <p className="font-jetbrains-mono">About Us</p>
                    </Link>
                    <Link href={"/certificates"}>
                        <p className="font-jetbrains-mono">Certificates</p>
                    </Link>
                    <Link href={"#"}>
                        <p className="font-jetbrains-mono">Products</p>
                    </Link>
                    <Link href={"/client-services"}>
                        <p className="font-jetbrains-mono">Clients and Services</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation