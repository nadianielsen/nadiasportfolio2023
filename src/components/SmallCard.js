import { Link } from "react-router-dom";


const SmallCard = ({logo, alt, name, bgPrimary, link}) => {
    return ( 
        <Link to={link} target="_blank" className={`w-40 h-40 bg-neutral-200/60 rounded-2xl flex flex-col justify-center items-center ${bgPrimary} drop-shadow-lg`}>
            <img src={logo} alt={alt} className="w-24 h-24"/>
            <p className="text-white drop-shadow">{name}</p>
        </Link>
     );
}
 
export default SmallCard;