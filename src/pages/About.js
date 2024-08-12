// import { Link } from "react-router-dom";
import LinkCards from "../components/LinkCards";


const About = () => {


    return (
    <article className="grid gap-y-20 my-14 size1200:grid-cols-3 justify-items-center m-auto lg:w-[80%] lg:gap-x-20 lg:my-32">
        <LinkCards heading={"Frontend Developer"} subscription={"Information about my coding journey."} img={"./images/code - about.jpg"} url={"/frontenddeveloper"} alt={"code"}/>
        <LinkCards heading={"Design"} subscription={"Information about my graphic design skills."} img={"./images/posters-wallpapers/WallpaperPoster---Sun-&-Moon---106-2023.jpg"} alt={"Sun & moon wallpaper/poster"} url={"/design"}/>
        <LinkCards heading={"About Me"} subscription={"Information about me."} img={"./images/website banner.jpg"} alt={"blurred colors"} url={"/aboutme"}/>
    </article>
    );
}

export default About;

