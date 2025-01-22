import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return ( 
        <button onClick={scrollToTop} className={`fixed w-14 h-14 rounded-full cursor-pointer bg-[#BAD2AE] drop-shadow-lg bottom-0 right-0 m-4 lg:m-8 z-30 ${visible ? 'block animate-jump-in animate-duration-500 animate-ease-in-out' : 'hidden'}`}>
            <IoIosArrowUp className="m-auto text-xl text-white"/>
        </button>
     );
}
 
export default ScrollToTopButton;