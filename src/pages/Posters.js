import GalleryPagesLinks from "../components/GalleryPagesLinks";


const Posters = () => {

    const posterswallpapers = [
        {
            img: "./images/posters-wallpapers/eyes.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/Flower - Matching wallpaper.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/Sam and Colby - Matching wallpaper.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/flowers.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/friends.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/refusetolove.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/redbull.jpeg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/Quote - Poster.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/mirror.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/moon.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/colby brock.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/sam golbach.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/bts jungkook.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/Sam and Colby - Smiling - Wallpaper.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/sam and colby.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/Sam Golbach - Wallpaper - Poster.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/Colby Brock - Wallpaper - Poster.jpg",
            headline: "",
            text: "",
        },
        {
            img: "./images/posters-wallpapers/Sam and Colby - 19-1-2023.jpg",
            headline: "",
            text: "",
        },
    ]

    return ( 
        <>
            <GalleryPagesLinks galleryPageLink={"/graphicdesign"} galleryPage={"Graphic Design"} location={"/posters"} page={"Posters and Wallpapers"}/>
     <article className="grid grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
        {posterswallpapers.map(({img, headline, text}) => (
            <img src={img} alt={img} className="rounded-2xl"/>
        ))}
    </article>
    </>
     );
}
 
export default Posters;