import { BsInstagram } from "react-icons/bs"

const Footer = () => {
    return ( 
        <footer className="w-full border-t-2 border-black border-opacity-10 h-[15rem]">
            <section className=" border-y-2 border-black w-[50%] h-[10rem] m-auto grid grid-cols-2 mt-10">
                <span className="flex gap-x-2">
                    <BsInstagram className="text-2xl" />
                    <p className="hover:text-transparent bg-clip-text bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-20 ">Instagram</p>
                </span>

            </section>
            <h3 className="flex justify-center pt-2">©Copyright - Nadia Nielsen</h3>
        </footer>
     );
}
 
export default Footer;