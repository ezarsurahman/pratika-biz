import Image from "next/image"
import Link from "next/link"

export const VisitUsSection = () => {
    return (
        <div className="flex flex-row justify-center items-center py-[30px] px-[30px] mx-[16px] md:mx-[160px] md:px-[53px] md:py-[61px] my-[35px] rounded-[20px] bg-secondary-6 shadow-inner-custom shadow-black/20 gap-[25px] md:gap-[65px]">
            <Link
                href={"https://maps.app.goo.gl/gUCbqxUZ1G5o3bgm8"}>
                <Image
                src={"/about/map.png"}
                width={1200}
                height={1200}
                alt="location"
                className="min-h-[150px] min-w-[150px] md:max-h-[475px] md:max-w-[475px] rounded-[20px] shrink-0 shadow-lg"
                />
            </Link>
            <div className="flex flex-col gap-2">
                <p className="text-style-heading-3 md:text-[63px]">
                    Looking to Visit Us?
                </p>
                <p className="text-style-caption-lg md:text-[25px]">Kunjungi fasilitas kami di Depok dan lihat bagaimana kami bekerja menghadirkan kualitas terbaik untuk Anda.</p>
            </div>
        </div>
    )
}