export const Home = () => {
    return (
        <>
        <div className="min-h-screen relative overflow-hidden" id="hero">
            <img src="blur-home.png" alt="" className="z-30 right-0 absolute h-full rounded-b-4xl"/>
            <img src="home-bg.png" className="z-10 absolute h-full rounded-b-4xl object-cover" alt="" />
            <div className="absolute -rotate-45 z-20 -left-56 bottom-72 overflow-hidden" id="photo">
                <div className="flex flex-row gap-1">
                    <ProductImage></ProductImage>
                    <ProductImage></ProductImage>
                    <ProductImage></ProductImage>
                    <ProductImage></ProductImage>
                </div>
                <div className="flex flex-row gap-1 mt-1">
                    <ProductImage></ProductImage>
                    <ProductImage></ProductImage>
                    <ProductImage></ProductImage>
                    <ProductImage></ProductImage>
                </div>
            </div>
            <div className="min-h-screen bg-gradient-to-t from-[#2A9BDD] to-transparent flex flex-col relative justify-end items-end rounded-b-4xl z-10 mt-3 p-16">
                <span className="font-jockey-one text-white text-8xl inline-block text-shadow-lg">
                    “Quality You <br />Can Rely On”
                </span>
                <p className="font-jetbrains-mono text-white bg-[#044B7F] px-3 py-2 rounded-3xl text-3xl mt-6">
                    Experts in Tubing & Metal Parts
                </p>
            </div>
        </div>
            <p>Kontol</p>
        </>
    )
}

const ProductImage = () => {
    return (
        <img src="pratika-product.png" alt="" className="z-40 h-full object-cover " />
    )
}

