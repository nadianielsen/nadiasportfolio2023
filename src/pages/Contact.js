import { BsInstagram } from "react-icons/bs"
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <article className="h-[60vh] sm:h-[80vh] md:h-[60vh] lg:h-[90vh] flex flex-col justify-center items-center gap-y-10 w-full md:flex md:flex-row md:justify-normal md:items-center relative">
            <img src="./images/contact banner - green.webp" alt="" className=" absolute object-fill w-full h-full -z-10 opacity-70" />
            <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl size1100:text-9xl  md:m-0 px-10 md:pl-14 lg:pl-40 lg:w-[50%] font-light">Let's get in <motion.span className="relative text-[#56d64f]" initial={{ opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.30, duration: 0.60}} >touch</motion.span></h2>
            <article className="border-y-2 border-black sm:w-[35%] h-[20vh] md:h-[45vh] grid grid-cols-1 grid-rows-4  md:m-0">
                <div className="flex justify-center items-center gap-x-3">
                    <BsInstagram className="md:text-2xl lg:text-4xl" />
                    <Link target="_blank" to={"https://www.instagram.com/nadiamarie2111/"} className="pr-2 hover:text-transparent duration-500 delay-100 bg-clip-text bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all text-sm md:text-base">nadiamarie2111</Link>
                </div>
                <div className="flex items-center justify-center gap-x-3 row-start-2 mr-2">
                    <FaLinkedin className="sm:text-2xl lg:text-4xl" />
                    <div className="">
                        <Link target="_blank" to={"https://www.linkedin.com/in/nadia-nielsen-b313b6222/"} className="pt-6 hover:text-sky-600 duration-500 delay-100 transition-all text-sm md:text-base">Linkedin</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center row-start-3 gap-x-3">
                    <FaFacebookSquare className="sm:text-2xl lg:text-4xl" />
                    <div>
                        <Link target="_blank" to={"https://www.facebook.com/nadia.nielsen.5817300/"} className="hover:text-blue-900 duration-500 delay-100 transition-all text-sm md:text-base ">FaceBook</Link>
                    </div>
                </div>
                <div className="flex gap-x-2 justify-center items-center">
                    <SiGmail className="lg:text-4xl" />
                    <p className="text-sm md:text-base">nadiamarie2111@gmail.com</p>
                </div>
            </article>
        </article>
    );
}

export default Contact;