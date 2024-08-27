import { Link } from "react-router-dom";
import { SlArrowUp } from "react-icons/sl";


const SmallCard = ({logo, alt, name, bgPrimary, link, bgHover}) => {
    return ( 
        <Link to={link} target="_blank" className={`group relative w-40 h-40 bg-neutral-200/60 rounded-2xl flex flex-col justify-center items-center ${bgPrimary} drop-shadow-lg`}>
            <img src={logo} alt={alt} className="w-24 h-24"/>
            <p className="text-white drop-shadow">{name}</p>
            <div className={`${bgHover} w-full h-full absolute rounded-2xl z-20 flex justify-center items-center duration-500 transition-colors ease-in-out`}>
                <SlArrowUp className="group-hover:opacity-100 opacity-0 text-white text-3xl drop-shadow"/>
            </div>
        </Link>
     );
}
 
export default SmallCard;