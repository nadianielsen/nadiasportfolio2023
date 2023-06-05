import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";


const Navigation = ({ showDropdown, setShowDropdown }) => {

    // const handleMenuToggle = () => setShowDropdown(!showDropdown)

    // const location = useLocation()

    // useEffect(() => {
    //     setShowDropdown(false)
    // }, [location]);


    const activeLink = "font-medium text-[1.1rem] w-12 border-b-2 border-black";
    const normalLink = "font-medium text-[1.1rem] w-12 border-transition border-transition:after border-transition:hover:after"

    return (
        <nav className="flex gap-x-10 text-center">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Home</NavLink>
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>About</NavLink>
            <NavLink to={"/gallery"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Gallery</NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Contact</NavLink>
        </nav>
    );
}

export default Navigation;