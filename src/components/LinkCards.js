import { Link } from "react-router-dom";


const LinkCards = ({url, img, subscription, heading, alt}) => {
    return ( 
        <article className="bg-neutral-200 w-[20rem] h-[25rem] rounded-3xl shadow-lg">
             <div className="relative w-full h-full group">
                <div className="bg-neutral-100 bg-opacity-30 w-full h-36 rounded-b-3xl px-4 pt-4 absolute bottom-0 ">
                    <Link to={url} className="text-white text-2xl font-medium transition-all hover:text-4xl hover:transition-all hover:duration-400 hover:delay-75 white-shadow">{heading}</Link>
                     <p className="text-white white-shadow">{subscription}</p>
                </div>
            <img src={img} alt={alt} className="object-cover rounded-3xl w-full h-full" />
        </div>
        </article>
     );
}
 
export default LinkCards;