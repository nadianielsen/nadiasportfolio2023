import GalleryCards from "../components/GalleryCards";
import GalleryPagesLinks from "../components/GalleryPagesLinks";
import LinkCards from "../components/LinkCards";


const GraphicDesign = () => {

    const galleryImg = [
        {
            img: "./images/moon.jpg",
            headline: "Moon - Poster/wallpaper",
            title: "A reaching hand to the moon."
        },
        {
            img: "./images/refusetolove.jpg",
            headline: "Refuse to love - Poster/wallpaper",
            title: "A trendy poster with noise in the background."
        },
        {
            img: "./images/flowers.jpg",
            headline: "Flowers - Poster",
            title: "This poster was inspired by Miley Cyrus song called Flowers."
        },
        {
            img: "./images/mirror.jpg",
            headline: "Mirror - Poster/wallpaper",
            title: "I was inspired by those trendy pictures you see with the two hands reaching each other."
        },
        {
            img: "./images/eyes.jpg",
            headline: "Eyes - Poster",
            title: "An ocean in an eye."
        },
        {
            img: "./images/Miley Cyrus.jpg",
            headline: "Flowers - Album Cover",
            title: "I made my own version of Miley Cyrus' song/album cover."
        },
        {
            img: "./images/theweeknd.jpg",
            headline: "",
            title: ""
        },
        {
            img: "./images/ay-yo - nct 127.jpg",
            headline: "",
            title: ""
        },
        {
            img: "./images/redbull.jpeg",
            headline: "",
            title: ""
        },
        {
            img: "./images/sam golbach.jpg",
            headline: "",
            title: ""
        },
        {
            img: "./images/colby brock.jpg",
            headline: "",
            title: ""
        },
        {
            img: "./images/Shawn Mendes and Camilla Cabello.jpg",
            headline: "",
            title: ""
        },
        {
            img: "./images/Taylor Swift.jpg",
            headline: "",
            title: ""
        },
        {
            img: "./images/Twilight.jpg",
            headline: "",
            title: ""
        },
        {
            img: "./images/Adele.jpg",
            headline: "",
            title: ""
        },
    ]


    return ( 
        <article className="flex justify-center gap-x-20 items-center h-screen">
            <LinkCards url={"/albums"} subscription={"Here is my album covers of musicians"} heading={"Albums"} img={"./images/albums/The Weeknd - Playlist Cover - Red.jpg"} alt={"Albums - Page - Link"}/>
            <LinkCards url={"/drawings"} subscription={"Here is my drawings of artists and actors"} heading={"Drawings"} img={"./images/drawings/Adele.jpg"} alt={"Drawings - Page - Link"}/>
            <LinkCards url={"/posters"} subscription={"Here is my posters and wallpapers of influencer and celebrities, etc..."} heading={"Posters and wallpapers"} img={"./images/posters-wallpapers/eyes.jpg"} alt={"Posters and Wallpapers - Page - Link"}/>
        </article>      
     );
}
 
export default GraphicDesign;

  {/* <GalleryPagesLinks location={"/graphicdesign"} page="Graphic Design"/>
        <h3 className="font-semibold ml-30 md:ml-40 mt-2">Wallpapers and posters</h3>
        <article className="grid w-[80%] gap-y-6 md:grid-cols-2 lg:grid-cols-3 my-6 justify-items-center m-auto">
            {galleryImg?.map(({img, title, headline}) => (
                <GalleryCards  img={img} headline={headline} text={title}/>
            ))}
        </article> */}