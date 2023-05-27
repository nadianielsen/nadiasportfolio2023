import LinkCards from "../components/LinkCards";


const Gallery = () => {
    return (
        <>
            <article className="w-full h-screen flex gap-x-20 justify-center items-center">
                <LinkCards url={"/websites"} subscription={"School projects and etc..."} heading={"Websites"} img={"./images/code.jpg"} alt={"Page - code - websites"}/>
                <LinkCards url={"/graphicdesign"} subscription={"Here is where wallpapers, posters, album covers and etc..."} heading={"Graphic Design"} img={"./images/posters-wallpapers/mirror.jpg"} alt={"Page - Graphic Design"}/>
            </article>
        </>
    );
}

export default Gallery;