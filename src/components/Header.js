import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import useShowDropdown from "../hooks/useDropDown";


const Header = () => {

    const { ref, showDropdown, setShowDropdown } = useShowDropdown(false)

    return (
        <header ref={ref} className="w-full sticky top-0 flex items-center justify-around bg-white bg-opacity-20 backdrop-blur-sm z-50 header-box-shadow">
            <Link to={"/"} className=""><img src="./images/logo/logo with name.png" alt="" className="h-16" /></Link>
            <Navigation />
        </header>
    );
}

export default Header;