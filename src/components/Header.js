import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import useShowDropdown from "../hooks/useDropDown";


const Header = () => {

    const { ref, showDropdown, setShowDropdown } = useShowDropdown(false)

    return (
        <header ref={ref} className="w-full sticky top-0 flex items-center justify-between px-10 md:justify-around bg-white/20 backdrop-blur-sm z-50 shadow-md ">
            <Link to={"/"} className=""><img src="./images/logo/logo - NM.svg" alt="logo" className="w-16 h-16" /></Link>
            <Navigation showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
        </header>
    );
}

export default Header;