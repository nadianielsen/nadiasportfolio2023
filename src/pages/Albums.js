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
            <GalleryPagesLinks galleryPageLink={"/graphicdesign"} galleryPage={"Graphic Design"} location={"/albums"} page={"Albums"} />
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
                {albumsImg.map(({ img, headline, text }) => (
                    <img className="rounded-2xl" src={img} alt={img} />
                ))}
            </article>
        </>
    );
}

export default Albums;