import GalleryCards from "../components/GalleryCards";
import GalleryPagesLinks from "../components/GalleryPagesLinks";


const GraphicDesign = () => {
    return ( 
        <>
        <GalleryPagesLinks location={"/graphicdesign"} page="Graphic Design"/>
        <h3 className="font-semibold ml-40 mt-2">Wallpapers and posters</h3>
        <article className="grid grid-cols-3 w-[70%] m-auto my-10 gap-5 justify-self-center">
            <GalleryCards img={"./images/refusetolove.jpg"} headline="Refuse To Love" text="This poster/wallpaper was made for the purpose of these graphic designs trends. Here is my version."/>
            <GalleryCards img={"./images/mirror.jpg"} headline="Mirror" text="Mirror wallpaper has the iconic hand thing from the digital world."/>
            <GalleryCards img={"./images/redbull.jpeg"}  headline="Redbull" text="Got inspired to make my own redbull ad/poster."/>
            <GalleryCards img={"./images/moon.jpg"}  headline="Moon" text="A reaching hand toward the moon - Poster/wallpaper."/>
            <GalleryCards img={"./images/eyes.jpg"}  headline="Eyes" text="Got inspired via Pinterest with eyes and here is my version."/>
            <GalleryCards img={"./images/flowers.jpg"}  headline="Flowers" text="Got inspired by the lyrics from Miley Cyrus new song - Flowers - to make a poster with that lyric."/>
        </article>
        <h3 className="font-semibold ml-40 mt-2">Wallpapers and posters</h3>
        <h4 className="font-medium ml-40 mt-1">Youtubers and celebirties</h4>
        <article className="grid grid-cols-3 w-[70%] m-auto my-8 gap-5 justify-self-center">
            <GalleryCards img={"./images/refusetolove.jpg"} headline="Refuse To Love" text="This poster/wallpaper was made for the purpose of these graphic designs trends. Here is my version."/>
            <GalleryCards img={"./images/mirror.jpg"} headline="Mirror" text="Mirror wallpaper has the iconic hand thing from the digital world."/>
            <GalleryCards img={"./images/redbull.jpeg"}  headline="Redbull" text="Got inspired to make my own redbull ad/poster."/>
            <GalleryCards img={"./images/moon.jpg"}  headline="Moon" text="A reaching hand toward the moon - Poster/wallpaper."/>
            <GalleryCards img={"./images/eyes.jpg"}  headline="Eyes" text="Got inspired via Pinterest with eyes and here is my version."/>
            <GalleryCards img={"./images/flowers.jpg"}  headline="Flowers" text="Got inspired by the lyrics from Miley Cyrus new song - Flowers - to make a poster with that lyric."/>
        </article>
        </>
     );
}
 
export default GraphicDesign;