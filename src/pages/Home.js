import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion";
import AgeFunction from "../components/AgeFunction";

const Home = () => {
    return (
        <article className="grid z-50">
            <div className="w-full h-[60vh] size400:h-screen flex justify-center items-center">
                <div className="w-[80vw] lg:w-[50vw] bg-neutral-100 py-20 md:h-[30vh] size1470:h-[60vh] lg:py-0 bg-opacity-50 absolute backdrop-blur-[2px] drop-shadow-md rounded-xl grid">
                    <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 0.50 }} className="overflow-hidden self-end justify-self-center text-left">
                        <motion.p className="home-text font-semibold w-80 pl-16 text-xl md:w-auto md:pl-0 md:text-5xl size1200:6xl size1470:text-7xl uppercase text-white text-shadow" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.60 }}>Welcome to my portfolio</motion.p>
                    </motion.div>
                    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.50 }} className="overflow-hidden justify-center">
                        <div className="border-b-[0.18rem] mx-6 size1470:mx-10 border-white"></div>
                    </motion.div>
                </div>
                <img src="./images/website banner.jpg" alt="website banner" sizes="width: 1920px, height: 50vh" className="object-fill w-full h-full" />
            </div>
            <article className="place-self-center my-6"> 
                <h2 className="font-semibold text-center text-3xl py-4 underline">Video portfolio</h2>
                <video src="Nadia Nielsen - Video portfolio.mp4" controls className="w-[70vw] lg:w-[40vw] border-2" poster="video thumbnail.png"></video>
            </article>
            <article className="w-full h-[80vh] sm:h-screen grid md:grid-cols-2">
                <img src="./images/me - photo 2.png" alt="" className="w-[30rem] h-[25rem] size866:h-[35rem] lg:mb-10 place-self-center object-cover" />
                <div className="col-start-2 row-start-1 border-r-2 w-2 h-40 border-black self-center hidden md:block"></div>
                <div className="w-[58%] sm:w-[53%] place-self-center md:col-start-2 md:row-start-1 row-start-2 pb-20 size700:pb-0 lg:py-4">
                    <p className="sm:text-xl ">Hello and welcome. <AgeFunction />  I come from Denmark and I am taking the media graphic design education.</p>
                    <div className="group ">
                        <Link to={"/about"} className="font-semibold flex gap-x-1 underline group-hover:text-[#00A5E7] group-hover:transition-colors group-hover:delay-75 group-hover:duration-300">For more knowledge about me <IoMdArrowRoundForward className="text-xl my-1 hidden size300:block" /></Link>
                    </div>
                </div>
            </article>
        </article>
    );
}

export default Home;