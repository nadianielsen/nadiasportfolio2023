import { Link } from "react-router-dom";


const WebsiteCard = ({link, img, text}) => {

    return ( 
        <div className="place-self-center w-[80%] h-[50%] bg-black rounded-2xl relative website-card-shadow">
             <img src={img} alt="" className="object-cover absolute w-full h-full rounded-xl"/>
             <div className="w-full h-[30%] bg-neutral-100 bg-opacity-80 backdrop-blur-sm bottom-0 absolute rounded-xl">
                <Link className="flex justify-center pt-4 hover:underline hover:font-semibold  transition" to={link}>{text}</Link>
             </div>
        </div>
     );
}
 
export default WebsiteCard;