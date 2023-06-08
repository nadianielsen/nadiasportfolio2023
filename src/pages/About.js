import { Link } from "react-router-dom";


const About = () => {


    return (
        <>
            <article className="-z-30 absolute hidden md:block">
                <img src="./images/hero.jpg" alt="" />
            </article>
            <article className="md:w-[70%] lg:h-screen md:bg-neutral-100 md:m-auto grid p-3 lg:p-6 gap-y-3">
                <article className="flex md:justify-between items-center">
                    <p className="md:w-[45%] text-base"><span className="font-semibold"> My name is Nadia Nielsen</span> and I am 18 years old. I come from Denmark and I am right now taking the web developer education. My plan is to become a web developer, mostly frontend and then I have plans about taking the media graphic designer (mediegrafiker) education since I also have a passion for digital design.</p>
                    <span className="h-[10rem] border border-black hidden md:block"></span>
                    <img src="./images/me.jpg" alt="" className="hidden md:block w-[10rem] lg:w-[15rem] my-4" />
                </article>
                <article className="">
                    <h2 className="text-xl font-semibold">Web developer education</h2>
                    <h3 className="py-2">Coding languages & frameworks I have learned:</h3>
                    <article className="grid md:flex gap-x-3 md:gap-x-5">
                        <p className="text-orange-600 drop-shadow lg:text-xl">HTML</p>
                        <p className="text-blue-500 drop-shadow lg:text-xl">CSS</p>
                        <p className="text-yellow-500 drop-shadow lg:text-xl">JavaScript</p>
                        <p className="text-cyan-300 drop-shadow lg:text-xl">React</p>
                        <p className="text-pink-400 drop-shadow lg:text-xl">SCSS</p>
                        <p className="text-sky-500 drop-shadow lg:text-xl">Tailwind CSS</p>
                        <p className="text-black drop-shadow lg:text-xl">NEXT JS</p>
                        <p className="text-pink-400 drop-shadow lg:text-xl">Styled Components</p>
                    </article>
                    <p className="">You can see most of it on my <Link to={"https://github.com/nadianielsen"} className="underline font-semibold hover:text-[#f03fa9] hover:underline transition-all">github</Link></p>
                </article>
                <article className="">
                    <h2 className="text-xl font-semibold">Graphic Design/Digital Design- art</h2>
                    <h3 className="py-2">Design/art apps I have learned:</h3>
                    <article className="flex gap-x-2 md:gap-x-5">
                        <p className="drop-shadow bg-clip-text bg-gradient-to-r text-transparent from-[#66e1fa] to-[#ff00ea] lgdrop-shadow :text-xl w-12">Picsart</p>
                        <p className="drop-shadow lg:text-xl">Procreate</p>
                        <p className="drop-shadow lg:text-xl">Photoshop</p>
                    </article>
                    <h3 className="py-2">Here's a link to works -
                        <span className="font-semibold">
                            <Link to={"/websites"} className="hover:text-[#f03fa9] hover:underline transition-all">websites</Link> & <Link to={"/graphicdesigns"} className="hover:text-[#f03fa9] hover:underline transition-all">graphic designs</Link>
                        </span>
                    </h3>
                </article>
            </article>
        </>
    );
}

export default About;