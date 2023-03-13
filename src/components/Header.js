import { Link } from "react-router-dom";
import Navigation from "./Navigation";


const Header = () => {
    return ( 
        <header className="w-full sticky top-0 flex items-center justify-around bg-white bg-opacity-20 backdrop-blur-sm z-50 header-box-shadow">
            <Link to={"/"} className=""><img src="./images/logo/logo with name.png" alt="" className="h-16"/></Link>
            <Navigation />
        </header>
     );
}
 
export default Header;