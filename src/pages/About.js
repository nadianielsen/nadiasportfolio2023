import ImgAbout from "../components/ImgAbout";


const About = () => {


    return (
        <>
            <article className="-z-30 absolute">
                <img src="./images/hero.jpg" alt="" />
            </article>
            <article className="md:w-[70%] md:h-screen m-auto grid md:overflow-y-auto relative bg-neutral-100">
                <article className="self-center">
                    <div className="flex justify-around items-center">
                        <p className="w-[45%]"><span className="font-semibold"> My name is Nadia Nielsen</span> and I am 18 years old. I come from Denmark and I am right now taking the web developer education. My plan is to become a web developer, mostly frontend and then I have plans about taking the media graphic designer (mediegrafiker) education since I also have a passion for digital design.</p>
                        <span className="h-[10rem] border border-black"></span>
                        <img src="./images/me.jpg" alt="" className="w-[12rem] lg:w-[15rem] my-4" />
                    </div>
                </article>
                <article className="mx-[5%] my-2">
                    <h2 className="text-xl font-semibold">Web developer education</h2>
                    <h3>Coding languages & frameworks I have learned:</h3>
                    <article className="flex gap-x-5 my-2">
                        <p className="text-orange-600 about-text-shadow md:text-xl">HTML</p>
                        <p className="text-blue-500 about-text-shadow md:text-xl">CSS</p>
                        <p className="text-yellow-500 about-text-shadow md:text-xl">JavaScript</p>
                        <p className="text-cyan-300 about-text-shadow md:text-xl">React</p>
                        <p className="text-pink-400 about-text-shadow md:text-xl">SCSS</p>
                        <p className="text-sky-500 about-text-shadow md:text-xl">Tailwind CSS</p>
                        <p className="text-black about-text-shadow md:text-xl">NEXT JS</p>
                    </article>
                    <h3 className="font-semibold underline">These codes are just a few examples for what I can do.</h3>
                    <article>
                        <h3 className="font-semibold pt-2">Api:</h3>
                        <h3 className="pt-2">How to fetch from an api with axios and fetch - React & JavaScript:</h3>
                        <ImgAbout img={"./images/axiosfetchwithoutprops.jpg"} />
                        <p>Fetch in Javascript:</p>
                        <ImgAbout img={"./images/fetchjavascript.jpg"} />
                        <h3 className="font-semibold">How to fetch an array of things or object</h3>
                        <ImgAbout img={"./images/map - fetch.jpg"} />
                        <ImgAbout img={"./images/object &&.jpg"} />
                    </article>
                    <h2 className="font-semibold">React Router:</h2>
                    <ImgAbout img={"./images/reactrouter.jpg"} />
                    <h3>Link instead of a tag in React Router:</h3>
                    <img src="./images/link.jpg" alt="" className="my-4 w-[20rem]" />
                    <h3>Using Outlet to change content in main:</h3>
                    <img src="./images/outlet.jpg" alt="" className="my-4 w-[20rem]" />
                    <h3 className="font-semibold">Have learned what App.test.js means in React:</h3>
                    <p>Instead of App.test.js for this example, mine is called Home.test.js</p>
                    <ImgAbout img={"./images/test.js.jpg"} />
                </article>
                <article>
                </article>
            </article>
        </>
    );
}

export default About;