import LinkCards from "../components/LinkCards";


const GraphicDesign = () => {


    return (
        <article className="grid gap-y-20 my-14 size1200:grid-cols-3 justify-items-center m-auto lg:w-[80%] lg:gap-x-20 ">
            <LinkCards url={"/albums"} subscription={"Here is my album covers of musicians"} heading={"Albums"} img={"./images/albums/The Weeknd - Playlist Cover - Red.jpg"} alt={"Albums - Page - Link"} />
            <LinkCards url={"/drawings"} subscription={"Here is my drawings of artists and actors"} heading={"Drawings"} img={"./images/drawings/Adele.jpg"} alt={"Drawings - Page - Link"} />
            <LinkCards url={"/posters"} subscription={"Here is my posters and wallpapers of influencer and celebrities, etc..."} heading={"Posters and wallpapers"} img={"./images/posters-wallpapers/eyes.jpg"} alt={"Posters and Wallpapers - Page - Link"} />
        </article>
    );
}

export default GraphicDesign;

