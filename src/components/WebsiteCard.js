import { Link } from "react-router-dom";


const WebsiteCard = ({ link, heading, img, text }) => {

   return (
      <div className="place-self-center w-full size300:w-[16rem] size600:w-[20.5rem] h-[12rem] md:h-[15rem] bg-black rounded-2xl relative website-card-shadow">
         <img src={img} alt="" className="absolute object-cover w-full h-full rounded-xl" />
         {/* <div className="group hover:transition-colors duration-200 delay-150 hover:bg-neutral-300/80 w-full h-[30%] bg-neutral-100/80 backdrop-blur-sm bottom-0 absolute rounded-xl flex justify-center items-center"> */}
         <Link to={link} target="_blank" className="group hover:bg-black/40 w-full h-[30%] hover:h-full hover:transition-all hover:ease-in-out hover:duration-500 bg-neutral-100/80 backdrop-blur-sm bottom-0 absolute rounded-xl flex justify-center items-center">
            {/* <Link className="text-[0.92rem] lg:text-base group-hover:underline transition duration-200 delay-250 text-center" to={link}>{heading}</Link> */}
            <h2 className="text-[0.92rem] lg:text-base text-center group-hover:text-white group-hover:transition-all group-hover:ease-in-out group-hover:group-hover:duration-500 group-hover:underline">{heading}</h2>
         </Link>
      </div>
      // <Link to={link} className="place-self-center w-[15rem] h-[16rem] md:w-[20rem] md:h-[20rem] border-2 border-black rounded-2xl relative hover:bg-black/60 hover:duration-300 transition-opacity hover:ease-in-out">
      //   <div className="flex flex-col w-full h-full absolute gap-y-4 my-2 hover:opacity-25 hover:duration-300 transition-opacity hover:ease-in-out">
      //       <h2 className="text-center">{heading}</h2>
      //       <img src={img} alt="" className="object-cover w-full h-[11.5rem]" />
      //       {/* <p className="px-2">{text}</p>         */}
      //       {/* <Link to={link} className="text-center place-self-center bg-[#00A5E7] py-2 my-6 w-24 rounded-md text-white hover:text-[#00A5E7] hover:bg-white hover:duration-300 hover:ease-in-out hover:border-[#00A5E7] hover:border">See more</Link> */}
      //   </div>
        
      // </Link>
   );
}

export default WebsiteCard;