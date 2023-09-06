import PagesLinks from "../components/PagesLinks";


const AboutMe = () => {
    return ( 
        <>
        <PagesLinks location={"/aboutme"} prevPage={"About"} page={"About Me"}/>
        <article className="mx-20 my-6">
            <article className="flex gap-x-10">
                <img src="./images/me.jpg" alt="" className="w-60"/>
                <div className="">
                    <h1 className="capitalize text-xl font-medium underline">About me</h1>
                    <p className="">My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education. My plan is to become a web developer, mostly frontend and then I have plans about taking the media graphic designer (mediegrafiker) education since I also have a passion for digital design.</p>
                    <p></p>
                </div>
            </article>
        </article>
        </>
     );
}
 
export default AboutMe;