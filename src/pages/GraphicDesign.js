import GalleryCards from "../components/GalleryCards";
import GalleryPagesLinks from "../components/GalleryPagesLinks";
import LinkCards from "../components/LinkCards";


const GraphicDesign = () => {


    return (
        <article className="grid gap-y-20 my-32 lg:grid-cols-3 m-auto w-[80%] lg:gap-x-20 ">
            <LinkCards url={"/albums"} subscription={"Here is my album covers of musicians"} heading={"Albums"} img={"./images/albums/The Weeknd - Playlist Cover - Red.jpg"} alt={"Albums - Page - Link"} />
            <LinkCards url={"/drawings"} subscription={"Here is my drawings of artists and actors"} heading={"Drawings"} img={"./images/drawings/Adele.jpg"} alt={"Drawings - Page - Link"} />
            <LinkCards url={"/posters"} subscription={"Here is my posters and wallpapers of influencer and celebrities, etc..."} heading={"Posters and wallpapers"} img={"./images/posters-wallpapers/eyes.jpg"} alt={"Posters and Wallpapers - Page - Link"} />
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