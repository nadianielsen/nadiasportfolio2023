import { Link } from "react-router-dom";


const WebsiteCard = ({link, img, text}) => {

    return ( 
        <div className="place-self-center w-[15rem] lg:w-[22rem] lg:h-[15rem] h-[20rem] bg-black rounded-2xl relative website-card-shadow">
             <img src={img} alt="" className="absolute object-cover w-full h-full rounded-xl"/>
             <div className="w-full h-[30%] bg-neutral-100 bg-opacity-80 backdrop-blur-sm bottom-0 absolute rounded-xl flex justify-center items-center">
                <Link className="hover:underline hover:font-semibold transition-all" to={link}>{text}</Link>
             </div>
        </div>
     );
}
 
export default WebsiteCard;