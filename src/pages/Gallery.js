import LinkCards from "../components/LinkCards";


const Gallery = () => {
    return (
        <>
            <article className="grid gap-y-20 my-6 lg:grid-cols-2 justify-items-center mx-7 md:items-center md:my-4 md:m-auto w-[70%] lg:m-auto lg:my-32">
                <LinkCards url={"/websites"} subscription={"School projects and etc..."} heading={"Websites"} img={"./images/code.jpg"} alt={"Page - code - websites"} />
                <LinkCards url={"/graphicdesign"} subscription={"Here is where wallpapers, posters, album covers and etc..."} heading={"Graphic Design"} img={"./images/posters-wallpapers/mirror.jpg"} alt={"Page - Graphic Design"} />
            </article>
        </>
    );
}

export default Gallery;