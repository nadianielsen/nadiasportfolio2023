import AgeFunction from "../components/AgeFunction";
import PagesLinks from "../components/PagesLinks";


const AboutMe = () => {
    return (
        <>
            <PagesLinks location={"/aboutme"} prevPage={"About"} page={"About Me"} />
            <article className="mx-10 md:mx-20 my-6">
                <article className="flex flex-col gap-y-4 md:flex-row gap-x-10">
                    <img src="./images/me copy.webp" alt="" className="w-[16rem] h-[24rem] object-cover rounded-2xl" />
                    <div className="flex flex-col gap-y-1.5">
                        <h1 className="capitalize text-xl underline">About me</h1>
                        <p className=""> <AgeFunction fontWeight={"font-semibold"}/> I come from Denmark and I have finished taking the web developer education in 2023. </p>
                        <p className="w-[80%]"><span className="font-semibold">I am currently taking the media graphic design education</span> and the reason why is that I am passionated about graphic/digtale design and I love to make color combinations, edit pictures, illustrations etc... </p>
                        <p>I am person who is passionate, creative, perfectionist, turn up on time - stable, up for teamwork, can work independent and loyale.</p>
                        <p>I am also person who loves to learn from other people, who are more experienced than me and that can help me become better at what I am passionate about.</p>
                        <p>I love being creative which is why I am striking after the graphic/digital world and why I had taken the web developer education and currently taking the media graphic designer education. </p>
                    </div>
                </article>
            </article>
        </>
    );
}

export default AboutMe;