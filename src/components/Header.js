import { Link } from "react-router-dom";
import Navigation from "./Navigation";


const Header = () => {
    return ( 
        <header className="w-full sticky top-0 flex items-center bg-white bg-opacity-20 backdrop-blur-sm z-50 header-box-shadow">
            <Link to={"/"} className="mr-auto ml-40">Logo???</Link>
            <Navigation />
        </header>
     );
}
 
export default Header;