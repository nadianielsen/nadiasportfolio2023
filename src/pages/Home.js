import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <div className="w-full h-screen z-50 flex justify-center items-center">
                <div className="w-[80vw] lg:w-[50vw] bg-neutral-100 h-[60vh] md:h-[40vh] lg:h-[60vh] bg-opacity-50 absolute backdrop-blur-sm rounded-xl ">
                    <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.60 }} className="overflow-hidden lg:mt-36 lg:ml-44 ml-16 mt-2 md:mt-40 md:ml-36">
                        <motion.p className="home-text w-[70%] font-semibold text-5xl lg:text-7xl uppercase text-white text-shadow" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.60 }}>Welcome to my portfolio</motion.p>
                    </motion.div>
                    {/* <div>
                        <div className="border-b-2 w-[30rem]"></div>
                    </div> */}
                    <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.60 }} className="overflow-hidden md:ml-36 lg:ml-44 ml-16 my-2">
                        <div className="w-[76%] md:w-[70%] lg:w-[65%] border-b-[0.18rem] border-white"></div>
                    </motion.div>
                </div>
                <img src="./images/hero.jpg" alt="" className="object-cover w-full h-full" />
            </div>
            {/* <article className="w-full grid grid-cols-2 gap-y-6 my-10">
                <img src="./images/me - photo 2.jpg" alt="" className="w-[20rem] lg:w-[30rem] place-self-center" />
                <div className=" md:w-[53%] place-self-center md:col-start-2 flex justify-between">
                    <div className="border-r-2 w-2 h-40 border-black self-center mx-4"></div>
                    <div className="px-4">
                        <p className="md:text-xl">Hello and welcome. My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education.</p>
                        <div className="group">
                            <p className="font-semibold flex gap-x-2 underline group-hover:text-[#f03fa9] transition-all">For more knowledge about me <Link to={"/about"} className="pt-1 group-hover:text-[#f03fa9] transition-all"><IoMdArrowRoundForward className="text-xl" /></Link></p>
                        </div>
                    </div>
                </div>
            </article> */}
            <article className="w-full h-screen grid grid-cols-2">
                <img src="./images/me - photo 2.jpg" alt="" className="w-[30rem] place-self-center" />
                <div className="col-start-2 row-start-1 border-r-2 w-2 h-40 border-black self-center"></div>
                <div className="w-[53%] place-self-center col-start-2 row-start-1">
                    <p className=" text-xl ">Hello and welcome. My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education.</p>
                    <div className="group ">
                        <p className="font-semibold flex gap-x-2 underline group-hover:text-[#f03fa9] transition-all">For more knowledge about me <Link to={"/about"} className="pt-1 group-hover:text-[#f03fa9] transition-all"><IoMdArrowRoundForward className="text-xl" /></Link></p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Home;