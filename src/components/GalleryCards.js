

const GalleryCards = ({img, headline, text}) => {
    
    return ( 
        <div className="bg-white w-[20rem] h-[26rem] rounded-2xl gallery-card-shadow relative">
                <img src={img} alt="" className="object-cover absolute w-full h-full rounded-2xl"/>
            <div className="w-full h-[11rem] bg-white absolute bottom-0 rounded-xl grid grid-rows-2 gallery-card">
                    <h2 className="font-medium text-lg mx-4 self-center">{headline}</h2>
                    <p className="mx-4">{text}</p>
            </div>
        </div>
     );
}
 
export default GalleryCards;