import { Link } from "react-router-dom";


const LinkCards = ({url, img, subscription, heading, alt}) => {
    return ( 
        <article className="bg-black w-1/5 h-[50%] rounded-3xl card-shadow">
             <div className="relative w-full h-full">
                <div className="bg-neutral-100 bg-opacity-30 w-full h-36 rounded-b-3xl px-4 pt-4 absolute bottom-0 ">
                    <Link to={url} className="text-white text-2xl font-medium transition-all hover:text-4xl white-shadow">{heading}</Link>
                     <p className="text-white white-shadow">{subscription}</p>
                </div>
            <img src={img} alt={alt} className="object-cover rounded-3xl w-full h-full" />
        </div>
        </article>
     );
}
 
export default LinkCards;