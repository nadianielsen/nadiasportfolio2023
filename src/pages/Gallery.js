import LinkCards from "../components/LinkCards";


const Gallery = () => {
    return (
        <>

            {/* <article className="grid gap-y-20 my-14 lg:grid-cols-2 justify-items-center m-auto lg:w-[70%] size1560:w-[60%] size1700:w-[40%] lg:my-32">
                <LinkCards url={"/websites"} subscription={"School projects and etc..."} heading={"Websites"} img={"./images/code.webp"} alt={"Page - code - websites"} />
                <LinkCards url={"/graphicdesign"} subscription={"Here is where wallpapers, posters, album covers and etc..."} heading={"Graphic Design"} img={"./images/posters-wallpapers/mirror.webp"} alt={"Page - Graphic Design"} />
            </article> */}
            <>
                {/* <PagesLinks margin={"mt"} prevPage={"Gallery"} location={"/graphicdesign"} page="Graphic Design" /> */}
                <article className="grid gap-y-20 mb-14 size1200:grid-cols-3 justify-items-center m-auto my-5 lg:w-[80%] size2000:w-[60%] lg:gap-x-20 lg:my-32">
                    <LinkCards url={"/albums"} subscription={"Here is my album covers of musicians and drawings"} heading={"Albums & Drawings"} img={"./images/albums/The Weeknd - Playlist Cover - Red.webp"} alt={"Albums - Page - Link"} />
                    <LinkCards bgGradient={"bg-gradient-to-b from-transparent via-transparent to-black/60"} url={"/schoolprojects"} subscription={"The school projects I am most proud of "} heading={"School Projects"} img={"./images/school/Roskilde - fjorland plakat.webp"} alt={"Drawings - Page - Link"} />
                    <LinkCards bgGradient={"bg-gradient-to-b from-transparent via-transparent to-black/60"} url={"/posters"} subscription={"Here is my posters and wallpapers of actors and celebrities, etc..."} heading={"Posters & etc..."} img={"./images/posters-wallpapers/mirror.webp"} alt={"Posters and Wallpapers - Page - Link"} />
                </article>
                {/* <h1 className="flex justify-center py-10 lg:py-16 font-semibold underline size200:mx-10 size866:00:mx-0">Sources/items that are used for my designs are personal use sources from the internet, just with some of my own touch ups to create posters or something else.</h1> */}
            </>

        </>
    );
}

export default Gallery;