import GalleryPagesLinks from "../components/GalleryPagesLinks";


const Drawings = () => {

    const drawingsImg = [
        {
            img: "./images/drawings/Adele.jpg",
            headline: "Adele - Drawing",
            text: "Made a drawing Adele",
        },
        {
            img: "./images/drawings/Nct - Haechan - Drawing.jpg",
            headline: "Haechan - NCT 127 - Drawing",
            text: "Drew a kpop idol, who's called Haechan NCT 127",
        },
        {
            img: "./images/drawings/Billie Ellish.jpg",
            headline: "Billie Ellish - Drawing",
            text: "A drawing of Billie Ellish",
        },
        {
            img: "./images/drawings/Suga Bts - Drawing.jpeg",
            headline: "SUGA BTS - Drawing",
            text: "Drawing of Suga from BTS",
        },
        {
            img: "./images/drawings/Jimin Bts - Drawing.jpeg",
            headline: "Jimin BTS - Drawing",
            text: "Drawing of Jimin from BTS",
        },
        {
            img: "./images/drawings/Taylor Swift.jpg",
            headline: "Taylor Swift - Drawing",
            text: "Drawing of Taylor Swift",
        },
        {
            img: "./images/drawings/Twilight.jpg",
            headline: "Twilight - Drawing",
            text: "A drawing of twilight",
        },
        {
            img: "./images/drawings/Leonardo di caprio.jpg",
            headline: "Leonardo Di Caprio - Drawing",
            text: "A drawing of young Leonardo Di Caprio",
        },
    ]

    return (
        <>
            <GalleryPagesLinks galleryPageLink={"/graphicdesign"} galleryPage={"Graphic Design"} location={"/drawings"} page={"Drawings"} />
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
                {drawingsImg.map(({ img, headline, text }) => (
                    // <img src={img} alt={img} className="rounded-2xl" />
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"80"} mdheight={"96"} />
                    <div className="w-[22rem] h-[22rem] group [perspective:1000px]">
                    <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                   <div className="absolute inset-0">
                       <img className="rounded-2xl w-full h-full object-cover" src={img} alt={headline} />
                   </div>
                   <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                       <h1 className="text-white text-2xl font-semibold capitalize">{headline}</h1>
                       <p className="text-white text-lg">{text}</p>
                   </div>
                       </div>
                       </div>
                ))}
            </article>
        </>
    );
}

export default Drawings;