import { Link } from "react-router-dom";


const LinkCards = ({url, img, subscription, heading, alt, bgGradient}) => {
    return ( 
        <article className={`${bgGradient} w-[19rem] size400:w-[20rem] h-[25rem] rounded-3xl shadow-lg relative`}>
                <div className="bg-neutral-100 bg-opacity-30 backdrop-blur-[1.5px] w-full h-36 rounded-b-3xl px-4 pt-4 absolute bottom-0 ">
                    <Link to={url} className="text-white text-2xl font-medium transition-all hover:text-4xl hover:transition-all hover:duration-400 hover:ease-in-out drop-shadow-linkCards">{heading}</Link>
                     <p className="text-white drop-shadow-linkCards">{subscription}</p>
                </div>
            <img src={img} alt={alt} className={`object-cover rounded-3xl w-full h-full absolute -z-10`} />
        </article>
     );
}
 
export default LinkCards;