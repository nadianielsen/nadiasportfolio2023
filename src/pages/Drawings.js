import GalleryPagesLinks from "../components/GalleryPagesLinks";


const Drawings = () => {

    const drawingsImg = [
        {
            img: "./images/drawings/Adele.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/drawings/Nct - Haechan - Drawing.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/drawings/Billie Ellish.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/drawings/Suga Bts - Drawing.jpeg",
            headline: "",
            text: "",
        },
        {
            img: "./images/drawings/Jimin Bts - Drawing.jpeg",
            headline: "",
            text: "",
        },
        {
            img: "./images/drawings/Taylor Swift.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/drawings/Twilight.jpg",
            headline: "",
            text: "",
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
            <GalleryPagesLinks galleryPageLink={"/graphicdesign"} galleryPage={"Graphic Design"} location={"/drawings"} page={"Drawings"}/>
        <article className="grid grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
            {drawingsImg.map(({img, headline, text}) => (
                <img src={img} alt={img} className="rounded-2xl"/>
            ))}
        </article>
        </>
     );
}
 
export default Drawings;