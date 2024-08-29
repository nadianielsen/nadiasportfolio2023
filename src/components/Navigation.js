import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri"
import { HiXMark } from "react-icons/hi2"


const Navigation = ({ showDropdown, setShowDropdown }) => {

    const handleMenuToggle = () => {
        setShowDropdown(!showDropdown)
    }

    const location = useLocation()

    useEffect(() => {
        setShowDropdown(false)
    }, [location, setShowDropdown]);


    const activeLink = "font-medium text-xl md:text-[1.1rem] w-12 border-b-2 border-black";
    const normalLink = "font-medium text-xl md:text-[1.1rem] w-12 inline-block after:block after:border-b-2 after:border-black after:transition-[250ms] after:duration-300 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
    // const activeLink = "font-medium text-xl md:text-[1.1rem] w-12 border-b-2 border-black";
    // const normalLink = "font-medium text-xl md:text-[1.1rem] w-12 border-transition border-transition:after border-transition:hover:after"

    return (
        <>
            <RiMenu3Line className="md:hidden cursor-pointer text-3xl" onClick={handleMenuToggle} />
            {/* <nav className={` ${showDropdown ? "flex" : "hidden"} gap-x-10 text-center`}> */}
            <nav className={` ${showDropdown ? "flex" : "hidden"} absolute top-0 h-screen left-0 bg-neutral-100 w-screen py-4 flex-col gap-y-5 items-center justify-center md:bg-transparent md:static md:w-auto md:flex-row md:py-0 md:flex text-center md:gap-x-10 size770:h-0 shadow md:shadow-transparent`}>
                <HiXMark className="text-3xl cursor-pointer md:hidden hover:text-[#00A5E7] hover:transition-colors hover:duration-500 hover:ease-in-out" onClick={handleMenuToggle} />
                <NavLink to={"/"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Home</NavLink>
                <NavLink to={"/about"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>About</NavLink>
                <NavLink to={"/gallery"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Gallery</NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => (isActive ? activeLink : normalLink)}>Contact</NavLink>
            </nav>
        </>
    );
}

export default Navigation;