import GalleryPagesLinks from "../components/GalleryPagesLinks";


const Albums = () => {

    const albumsImg = [
        {
            img: "./images/albums/The Weeknd - Playlist Cover - Red.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/Die for you - Album Cover.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/theweeknd - take my breath - Album Cover.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/Miley Cyrus.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/BTS - Playlist Cover.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/ay-yo - nct 127.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/Zara Larsson - End of time - Album Cover.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/Jimin BTS - Album Cover - Face.jpg",
            headline: "",
            text: ""
        },
        {
            img: "./images/albums/bts v.jpg",
            headline: "",
            text: ""
        },        
        {
            img: "./images/albums/AhLove - Seventeen - Album Cover.jpg",
            headline: "",
            text: ""
        },        
        {
            img: "./images/albums/jinyoung - got7.jpg",
            headline: "",
            text: ""
        },        
        {
            img: "./images/albums/nct dream.jpg",
            headline: "",
            text: ""
        },        
    ]

    return ( 
        <>
        <GalleryPagesLinks location={"/albums"} page={"Albums"}/>
        <article className="grid grid-cols-3 gap-y-10 w-[75%] m-auto justify-items-center my-10">
            {albumsImg.map(({img, headline, text}) => (
                <img className="w-[20rem] h-[20rem] rounded-2xl" src={img} alt={img} />
            ))}
        </article>
        </>
     );
}
 
export default Albums;