import GalleryCards from "../components/GalleryCards";
import GalleryPagesLinks from "../components/GalleryPagesLinks";


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
        <>
        <GalleryPagesLinks location={"/graphicdesign"} page="Graphic Design"/>
        <h3 className="font-semibold ml-30 md:ml-40 mt-2">Wallpapers and posters</h3>
        <article className="grid w-[80%] gap-y-6 md:grid-cols-2 lg:grid-cols-3 my-6 justify-items-center m-auto">
            {galleryImg?.map(({img, title, headline}) => (
                <GalleryCards  img={img} headline={headline} text={title}/>
            ))}
        </article>
        {/* <article className="grid grid-cols-3 w-[70%] m-auto my-10 gap-5 justify-self-center">
            <GalleryCards img={"./images/refusetolove.jpg"} headline="Refuse To Love" text="This poster/wallpaper was made for the purpose of these graphic designs trends. Here is my version."/>
            <GalleryCards img={"./images/mirror.jpg"} headline="Mirror" text="Mirror wallpaper has the iconic hand thing from the digital world."/>
            <GalleryCards img={"./images/redbull.jpeg"}  headline="Redbull" text="Got inspired to make my own redbull ad/poster."/>
            <GalleryCards img={"./images/moon.jpg"}  headline="Moon" text="A reaching hand toward the moon - Poster/wallpaper."/>
            <GalleryCards img={"./images/eyes.jpg"}  headline="Eyes" text="Got inspired via Pinterest with eyes and here is my version."/>
            <GalleryCards img={"./images/flowers.jpg"}  headline="Flowers" text="Got inspired by the lyrics from Miley Cyrus new song - Flowers - to make a poster with that lyric."/>
        </article>
        <h3 className="font-semibold ml-40 mt-2">Wallpapers and posters</h3>
        <h4 className="font-medium ml-40 mt-1">Youtubers and celebirties</h4> */}
        {/* <article className="flex w-[70%] h-[20rem] m-auto my-8 gap-5 overflow-x-scroll">
            <img src="./images/Sam and Colby - 19-1-2023.jpg" alt="" />
            <img src="./images/Miley Cyrus.jpg" alt="" />
            <img src="./images/theweeknd.jpg" alt="" />
            <img src="./images/nct 127 - superhuman.jpg" alt="" />
            <img src="./images/ay-yo - nct 127.jpg" alt="" />
            <img src="./images/bts v.jpg" alt="" />
            <img src="./images/Kang Daniel - nirvana.jpg" alt="" />
        </article> */}
            {/* <article className="grid grid-cols-3 w-[70%] m-auto my-10 gap-5 justify-self-center">
            <GalleryCards img={"./images/sam golbach.jpg"} headline="Sam Golbach" text="This is a wallpaper of one the people I am fan of."/>
            <GalleryCards img={"./images/colby brock.jpg"} headline="Colby Brock" text="A wallpaper with the second person I am fan of."/>
            <GalleryCards img={"./images/friends.jpg"}  headline="Friends" text="Got inspired to make my own poster of friends."/>
        </article>
        <h3 className="font-semibold ml-40 mt-2">Drawings</h3>
        <h4 className="font-medium ml-40 mt-1">Drawings of celebirties</h4>
        <article className="grid grid-cols-3 w-[70%] m-auto my-10 gap-5 justify-self-center">
            <GalleryCards img={"./images/Adele.jpg"} headline="Adele" text="A drawing of Adele from her 30 album."/>
            <GalleryCards img={"./images/Taylor Swift.jpg"} headline="Taylor Swift" text="A drawing of Taylor Swift."/>
            <GalleryCards img={"./images/Shawn Mendes and Camila Cabello.jpg"}  headline="Señorita" text="A drawing of Shawn Mendes and Camila Cabello from their song - Señorita"/>
        </article> */}
        </>
     );
}
 
export default GraphicDesign;