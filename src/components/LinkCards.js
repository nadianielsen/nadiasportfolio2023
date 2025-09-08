import { Link } from "react-router-dom";


const LinkCards = ({ url, img, subscription, heading, alt, bgGradient }) => {
    return (
        <Link to={url} className={`${bgGradient} w-[15rem] size300:w-[19rem] size400:w-[20rem] h-[25rem] size1560:w-[25rem] size1560:h-[32rem] rounded-3xl shadow-lg relative`}>
            <div className="bg-neutral-100 bg-opacity-30 backdrop-blur-[1.5px] w-full h-36 rounded-b-3xl px-4 pt-4 absolute bottom-0 ">
                <h2 className="text-white text-2xl font-medium transition-all hover:text-4xl hover:transition-all hover:duration-400 hover:ease-in-out drop-shadow-linkCards">{heading}</h2>
                <p className="text-white drop-shadow-linkCards">{subscription}</p>
            </div>
            <img src={img} alt={alt} className={`object-cover rounded-3xl w-full h-full absolute -z-10`} />
        </Link>
    );
}

export default LinkCards;