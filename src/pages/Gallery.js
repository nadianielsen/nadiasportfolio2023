import LinkCards from "../components/LinkCards";


const Gallery = () => {
    return (
        <>

            <article className="grid gap-y-20 my-14 lg:grid-cols-2 justify-items-center m-auto lg:w-[70%] size1560:w-[40%] lg:my-32">
                <LinkCards url={"/websites"} subscription={"School projects and etc..."} heading={"Websites"} img={"./images/code.webp"} alt={"Page - code - websites"} />
                <LinkCards url={"/graphicdesign"} subscription={"Here is where wallpapers, posters, album covers and etc..."} heading={"Graphic Design"} img={"./images/posters-wallpapers/mirror.webp"} alt={"Page - Graphic Design"} />
            </article>
        </>
    );
}

export default Gallery;