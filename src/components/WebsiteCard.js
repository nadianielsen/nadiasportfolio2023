import { Link } from "react-router-dom";


const WebsiteCard = ({ link, img, text }) => {

   return (
      <div className="place-self-center w-full size300:w-[16rem] size600:w-[20.5rem] h-[12rem] md:h-[15rem] bg-black rounded-2xl relative website-card-shadow">
         <img src={img} alt="" className="absolute object-cover w-full h-full rounded-xl" />
         <div className="group hover:transition-colors duration-200 delay-150 hover:bg-neutral-300/80 w-full h-[30%] bg-neutral-100/80 backdrop-blur-sm bottom-0 absolute rounded-xl flex justify-center items-center">
            <Link className="text-[0.92rem] lg:text-base group-hover:underline transition duration-200 delay-250" to={link}>{text}</Link>
         </div>
      </div>
   );
}

export default WebsiteCard;