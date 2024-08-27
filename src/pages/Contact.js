import { BsInstagram } from "react-icons/bs"
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";


const Contact = () => {
    return ( 
        <article className="h-[40vh] sm:h-[80vh] md:h-[60vh] lg:h-[90vh] grid w-full md:flex md:flex-row md:items-center relative">
            <img src="./images/contact banner.webp" alt="" className=" absolute object-fill w-full h-full -z-10 opacity-70"/>
            <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-9xl m-auto md:m-0 px-10 md:pl-14 lg:pl-40 lg:w-[50%] font-light">Let's get <span className="">in touch</span></h2>
            <article className="border-y-2 border-black sm:w-[35%] h-[20vh] md:h-[45vh] grid grid-cols-1 grid-rows-4 m-auto md:m-0">
                <div className="flex justify-center items-center gap-x-3 group">
                    <BsInstagram className="md:text-2xl lg:text-4xl" />
                    <Link to={"https://www.instagram.com/nadiamarie2111/"} className="pr-2 hover:text-transparent duration-500 delay-100 bg-clip-text bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all text-sm md:text-base">nadiamarie2111</Link>
                </div>
                <div className="flex items-center justify-center gap-x-3 row-start-2 mr-2">
                    <FaLinkedin className="sm:text-2xl lg:text-4xl"/>
                <div className="">
                        <Link to={"https://www.linkedin.com/in/nadia-nielsen-b313b6222/"} className="pt-6 hover:text-sky-600 duration-500 delay-100 transition-all text-sm md:text-base">Linkedin</Link> 
                </div>
                </div>
                    <div className="flex items-center justify-center row-start-3 gap-x-3">
                    <FaFacebookSquare className="sm:text-2xl lg:text-4xl"/>
                        <div>
                            <Link to={"https://www.facebook.com/nadia.nielsen.5817300/"} className="hover:text-blue-900 duration-500 delay-100 transition-all text-sm md:text-base ">FaceBook</Link>
                        </div>
                    </div>
                        <div className="flex gap-x-2 justify-center items-center">
                        <SiGmail className="lg:text-4xl"/> 
                        <p className="text-sm md:text-base">nadiamarie2111@gmail.com</p>
                        </div>
            </article>
        </article>
     );
}
 
export default Contact;