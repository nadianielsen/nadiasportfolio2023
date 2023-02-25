import GalleryCards from "../components/GalleryCards";
import GalleryPagesLinks from "../components/GalleryPagesLinks";


const GraphicDesign = () => {
    return ( 
        <>
        <GalleryPagesLinks location={"/graphicdesign"} page="Graphic Design"/>
        <article className="grid grid-cols-3 w-[70%] h-screen m-auto my-10 gap-5 justify-self-center">
            <GalleryCards img={"./images/refusetolove.jpg"} headline="Refuse To Love" text="This poster/wallpaper was made for the purpose of these graphic designs trends. Here is my version."/>
            <GalleryCards img={"./images/mirror.jpg"} headline="Mirror" text="Mirror wallpaper has the iconic hand thing from the digital world."/>
            <GalleryCards img={"./images/refusetolove.jpg"}/>
        </article>
        </>
     );
}
 
export default GraphicDesign;