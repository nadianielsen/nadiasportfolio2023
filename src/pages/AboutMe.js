import PagesLinks from "../components/PagesLinks";


const AboutMe = () => {
    return (
        <>
            <PagesLinks location={"/aboutme"} prevPage={"About"} page={"About Me"} />
            <article className="mx-20 my-6">
                <article className="flex flex-col gap-y-4 md:flex-row gap-x-10">
                    <img src="./images/me.jpg" alt="" className="w-60" />
                    <div className="flex flex-col gap-y-2">
                        <h1 className="capitalize text-xl font-medium underline">About me</h1>
                        <p className="">My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education. My plan is to become a web developer, mostly frontend and then I have plans about taking the media graphic designer (mediegrafiker) education since I also have a passion for digital design.</p>
                        <p>I am person who is passionate, creative, perfectionist, turn up on time - stable, up for teamwork, can work independent and loyale.</p>
                        <p>I am also person who loves to learn from other people, who are more experienced than me and that can help me become better at what I am passionate about.</p>
                        <p>I love being creative which is why I am striking after the digital world and why I am taking the web developer education and have plans on taking the media graphic designer education. </p>
                    </div>
                </article>
            </article>
        </>
    );
}

export default AboutMe;