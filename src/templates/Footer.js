import { BsInstagram } from "react-icons/bs"
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { Link } from "react-router-dom";

const Footer = () => {

    //Found this on stackoverflow
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="w-full bg-white border-t-2 border-black border-opacity-5 h-[15rem]">
            <section className=" border-y-2 border-black w-[90%] md:w-[50%] h-[8rem] m-auto flex flex-col gap-y-2 justify-center size626:grid size626:grid-rows-2 size626:grid-cols-2 mt-10 py-2 sm:py-4">
                <section className="flex gap-x-2 justify-center items-center">
                    <BsInstagram className="size300:text-base text-xl md:text-2xl" />
                    <Link target="_blank" to={"https://www.instagram.com/nadiamarie2111/"} className="font-medium hover:text-transparent bg-clip-text bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-20 transition-all">Instagram</Link>
                </section>
                <section className="cols-start-1 row-start-2 flex justify-center gap-x-2 items-center mr-8">
                    <FaLinkedin className="size300:text-base text-xl md:text-2xl" />
                    <Link target="_blank" className="font-medium hover:text-sky-600 transition-all" to={"https://www.linkedin.com/in/nadia-nielsen-b313b6222/"}>LinkedIn</Link>
                </section>
                <section className="col-start-2 row-start-2 flex justify-center items-center gap-x-2 mr-6 size626:mr-[5.80rem]">
                    <FaFacebookSquare className="size300:text-base text-xl md:text-2xl" />
                    <Link target="_blank" to={"https://www.facebook.com/nadia.nielsen.5817300/"} className="font-medium hover:text-blue-900 transition-all">Facebook</Link>
                </section>
                <section className="hidden sm:flex justify-center items-center gap-x-2">
                    <SiGmail className="md:text-xl" />
                    <p>nadiamarie2111@gmail.com</p>
                </section>
            </section>
            <h3 className="flex justify-center pt-2 pb-3">©Copyright {year} - Nadia Nielsen</h3>
        </footer>
    );
}

export default Footer;