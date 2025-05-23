import AgeFunction from "../components/AgeFunction";
import PagesLinks from "../components/PagesLinks";


const AboutMe = () => {
    return (
        <article className="size2000:w-[50%] size1400:m-auto size1400:my-20">
            <PagesLinks location={"/aboutme"} prevPage={"About"} page={"About Me"} />
            <article className="mx-10 md:mx-20 my-6">
                <article className="flex flex-col gap-y-4 lg:flex-row gap-x-10">
                    <img src="./images/me copy.webp" alt="" className="w-[22rem] size626:w-[18rem] m-auto lg:m-0 lg:w-[16rem] lg:h-[24rem] object-cover rounded-tl-[3rem] rounded-br-[3rem] border-2 border-black" />
                    <div className="flex flex-col gap-y-1.5 ">
                        <h1 className="capitalize text-xl lg:text-2xl font-semibold">About me</h1>
                        <p className=""> <AgeFunction fontWeight={"font-semibold"} /> I come from Denmark and I have finished taking the web developer education (webudvikler uddannelsen) in 2023. </p>
                        <p className="w-[80%]"><span className="font-semibold">I am currently taking the media graphic design education (mediegrafiker uddannelsen)</span> and the reason why is that I am passionated about graphic/digtal design and I love to make color combinations, edit pictures, illustrations etc... </p>
                        <p><span className="font-semibold">I am person who is passionate</span>, creative, perfectionist, turn up on time - stable, a teamplayer, can work independent...</p>
                        <p><span className="font-semibold">I am also person who loves to learn from other people,</span> who are more experienced than me and that can help me become better at what I am passionate about.</p>
                        <p className="lg:w-[60%]"><span className="font-semibold">I love being creative</span> which is why I am striking after the graphic/digital world and why I had taken the web developer education (webudvikler uddannelsen) and currently taking the media graphic designer education (mediegrafiker uddannelsen). </p>
                    </div>
                </article>
            </article>
        </article>
    );
}

export default AboutMe;