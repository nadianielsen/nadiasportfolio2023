import GalleryPagesLinks from "../components/GalleryPagesLinks";


const Drawings = () => {

    const drawingsImg = [
        {
            img: "./images/drawings/Adele.jpg",
            headline: "Adele - Drawing",
            text: "I made a drawing Adele. Trying to draw more celebrities.",
        },
        {
            img: "./images/drawings/Nct - Haechan - Drawing.jpg",
            headline: "Kpop Idol - Drawing",
            text: "Drew a kpop Idol, who's called Haechan.",
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
            text: "A drawing of the Twilight movie",
        },
        {
            img: "./images/drawings/Leonardo di caprio.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/drawings/Shawn Mendes and Camilla Cabello.jpg",
            headline: "",
            text: "",
        },
    ]

    return (
        <>
            <GalleryPagesLinks galleryPageLink={"/graphicdesign"} galleryPage={"Graphic Design"} location={"/drawings"} page={"Drawings"} />
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
                {drawingsImg.map(({ img, headline, text }) => (
                    <img src={img} alt={img} className="rounded-2xl" />
                ))}
            </article>
        </>
    );
}

export default Drawings;