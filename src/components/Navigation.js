import { NavLink } from "react-router-dom";


const Navigation = () => {
    return ( 
        <nav className="grid grid-cols-4 w-[25rem] ml-auto mr-40">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>About</NavLink>
            <NavLink to={"/"}>Gallery</NavLink>
            <NavLink to={"/"}>Contact</NavLink>
        </nav>
     );
}
 
export default Navigation;