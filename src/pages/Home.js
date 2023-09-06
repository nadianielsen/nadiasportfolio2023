import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion";

const Home = () => {
    return (
        <article className="grid z-50">
            <div className="w-full h-[60vh] md:h-screen  flex justify-center items-center">
                <div className="w-[80vw] lg:w-[50vw] bg-neutral-100 py-20 md:h-[40vh] lg:h-[60vh] lg:py-0 bg-opacity-50 absolute backdrop-blur-sm rounded-xl grid">
                    <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 0.50 }} className="overflow-hidden self-end justify-self-center text-left">
                        <motion.p className="home-text font-semibold text-3xl md:text-6xl lg:text-7xl uppercase text-white text-shadow" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.60 }}>Welcome to my portfolio</motion.p>
                    </motion.div>
                    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.50 }} className="overflow-hidden justify-center">
                        <div className="border-b-[0.18rem] mx-6 lg:mx-10 border-white"></div>
                    </motion.div>
                </div>
                <img src="./images/hero.jpg" alt="" className="object-cover w-full h-full" />
            </div>
            <article className="w-full h-screen grid md:grid-cols-2">
                <img src="./images/me - photo 2.jpg" alt="" className="w-[30rem] place-self-center" />
                <div className="col-start-2 row-start-1 border-r-2 w-2 h-40 border-black self-center hidden md:block"></div>
                <div className="w-[53%] place-self-center md:col-start-2 md:row-start-1 row-start-2 py-4">
                    <p className=" text-xl ">Hello and welcome. My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education.</p>
                    <div className="group ">
                        <p className="font-semibold flex gap-x-2 underline group-hover:text-[#f03fa9] transition-all">For more knowledge about me <Link to={"/about"} className="pt-1 group-hover:text-[#f03fa9] transition-all"><IoMdArrowRoundForward className="text-xl" /></Link></p>
                    </div>
                </div>
            </article>
        </article>
    );
}

export default Home;