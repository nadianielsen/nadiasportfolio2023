

const GalleryImg = ({ img, headline, text, alt, height, mdheight }) => {
    return (
        <div className={`w-[22rem] h-${height} md:h-${mdheight} md:w-96 group [perspective:1000px]`}>
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="rounded-2xl w-full h-full object-cover" src={img} alt={alt} />
                </div>
                <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h1 className="text-white text-2xl font-semibold capitalize">{headline}</h1>
                    <p className="text-white text-lg">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default GalleryImg;