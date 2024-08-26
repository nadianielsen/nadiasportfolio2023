

const SmallCard = ({logo, alt, name, bgPrimary}) => {
    return ( 
        <div className={`w-40 h-40 bg-neutral-200/60 rounded-2xl flex flex-col justify-center items-center ${bgPrimary} drop-shadow-lg`}>
            <img src={logo} alt={alt} className="w-24 h-24"/>
            <p className="text-white drop-shadow">{name}</p>
        </div>
     );
}
 
export default SmallCard;