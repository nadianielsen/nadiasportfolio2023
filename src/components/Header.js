import { Link } from "react-router-dom";
import Navigation from "./Navigation";


const Header = () => {
    return ( 
        <header className="w-full header-box-shadow flex items-center sticky top-0 bg-white bg-opacity-20 backdrop-blur-sm">
            <Link to={"/"} className="mr-auto ml-40">Logo???</Link>
            <Navigation />
        </header>
     );
}
 
export default Header;