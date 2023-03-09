import { Link } from "react-router-dom";


const Gallery = () => {
    return ( 
        <>
        <article className="w-full h-screen flex gap-x-20 justify-center items-center">
            <article className="bg-black w-1/5 h-[50%] rounded-3xl card-shadow relative">
                <div className="relative w-full h-full">
                    <div className="bg-neutral-100 bg-opacity-30 w-full h-36 rounded-b-3xl px-4 pt-4 absolute bottom-0 ">
                    <Link to={"/websites"} className="text-white text-2xl font-medium transition-all hover:text-4xl white-shadow">Websites</Link>
                        <p className="text-white text-shadow white-shadow">School projects and etc...</p>
                    </div>
                    <img src="./images/code.jpg" alt="" className="object-cover rounded-3xl w-full h-full "/>
                </div>
            </article>
            <article className="bg-black w-1/5 h-[50%] rounded-3xl card-shadow">
                <div className="relative w-full h-full">
                    <div className="bg-neutral-100 bg-opacity-30 w-full h-36 rounded-b-3xl px-4 pt-4 absolute bottom-0 ">
                        <Link to={"/graphicdesign"} className="text-white text-2xl font-medium transition-all hover:text-4xl white-shadow">Graphic Design</Link>
                        <p className="text-white white-shadow">Here is where wallpapers, posters, album covers and etc...</p>
                    </div>
                    <img src="./images/mirror.jpg" alt="" className="object-cover rounded-3xl w-full h-full"/>
                </div>
            </article>
        </article>
        </>
     );
}
 
export default Gallery;