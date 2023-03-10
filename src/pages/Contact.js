import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs"
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { SiGmail } from "react-icons/si";

import { Link } from "react-router-dom";


const Contact = () => {
    return ( 
        <article className="h-[90vh] w-full flex items-center relative">
            <img src="./images/contact-hero.jpg" alt="" className=" absolute object-cover w-full h-full -z-10 opacity-70"/>
            <h2 className="uppercase text-9xl pl-40 w-[50%] font-light">Let's get <span className="pl-32">in touch</span></h2>
            <article className="border-y-2 border-black w-[35%] h-[20rem] grid grid-cols-2 grid-rows-3">
                <div className="flex justify-center items-center gap-x-3">
                    <BsInstagram className="text-4xl" />
                <div className="">
                    <h3 className="font-semibold">Instagram</h3>
                    <Link to={"https://www.instagram.com/nadiamarie2111/"} className="pr-2 hover:text-transparent bg-clip-text bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all">nadiamarie2111</Link>
                    <Link to={"https://www.instagram.com/graphicsamncolby/"} className="hover:text-transparent bg-clip-text bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all">graphicsamncolby</Link>
                </div>
                </div>
                <div className="flex items-center gap-x-3 col-start-1 row-start-2">
                    <FaLinkedin className="text-4xl ml-[1.1rem]"/>
                <div className="">
                        <Link to={"https://www.linkedin.com/in/nadia-nielsen-b313b6222/"} className="pt-6 font- hover:text-sky-600 transition-all">Linkedin</Link> 
                </div>
                </div>
                    <div className="flex items-center row-start-3 gap-x-3">
                    <FaFacebookSquare className="text-4xl ml-[1.1rem]"/>
                        <div>
                            <Link to={"https://www.facebook.com/nadia.nielsen.5817300/"} className="hover:text-blue-900 transition-all">FaceBook</Link>
                        </div>
                    </div>
                    <div className=" border-l-2 col-start-2 row-start-2 border-black">
                        <div className="flex gap-x-2 justify-center items-center mt-10">
                        <SiGmail className="text-xl"/> 
                        <p>nadiamarie2111@gmail.com</p>
                        </div>
                    </div>
            </article>
        </article>
     );
}
 
export default Contact;