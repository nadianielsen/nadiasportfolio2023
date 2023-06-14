import GalleryPagesLinks from "../components/GalleryPagesLinks";

const Albums = () => {

    const albumsImg = [
        {
            img: "./images/albums/The Weeknd - Playlist Cover - Red.jpg",
            headline: "The Weeknd - Playlist cover",
            text: "Playlist Cover of The Weeknd"
        },
        {
            img: "./images/albums/Die for you - Album Cover.jpg",
            headline: "Die for you - Album cover",
            text: "Die for you song feat. The Weeknd and Ariana Grande"
        },
        {
            img: "./images/albums/theweeknd - take my breath - Album Cover.jpg",
            headline: "Take My Breath - Album cover",
            text: "A song by The Weeknd"
        },
        {
            img: "./images/albums/Miley Cyrus.jpg",
            headline: "Flowers - Album cover",
            text: "A song by Miley Cyrus"
        },
        {
            img: "./images/albums/BTS - Playlist Cover.jpg",
            headline: "BTS - Playlist cover",
            text: "Made a playlist cover of the known boyband - BTS"
        },
        {
            img: "./images/albums/ay-yo - nct 127.jpg",
            headline: "Ay-Yo - Album cover",
            text: "My recreation of the kpop group NCT 127's album - Ay-yo"
        },
        {
            img: "./images/albums/Zara Larsson - End of time - Album Cover.jpg",
            headline: "End of time - Album Cover",
            text: "A song by Zara Larsson"
        },
        {
            img: "./images/albums/Jimin BTS - Album Cover - Face.jpg",
            headline: "Face - Album Cover",
            text: "Made a album cover of Jimin BTS' album - Face"
        },
        {
            img: "./images/albums/bts v.jpg",
            headline: "BTS V - Playlist cover",
            text: "Made a playlist cover or poster of BTS' V"
        },
        {
            img: "./images/albums/AhLove - Seventeen - Album Cover.jpg",
            headline: "Ah Love - Album cover",
            text: "A song by the kpop band - Seventeen"
        },
        {
            img: "./images/albums/Harry Styles - Golden - Album Cover.jpg",
            headline: "Golden - Album Cover",
            text: "A song by Harry Styles"
        },
        {
            img: "./images/albums/Coldplay & BTS - Album Cover.jpg",
            headline: "My universe - Album cover",
            text: "A song by Coldplay and BTS"
        },
    ]

    return (
        <>
            <GalleryPagesLinks galleryPageLink={"/graphicdesign"} galleryPage={"Graphic Design"} location={"/albums"} page={"Albums"} />
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
                {albumsImg.map(({ img, headline, text }) => (
                    // <img src={img} alt={img} className="rounded-2xl" />
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"80"} mdheight={"96"} />
                <div className="w-[20rem] h-[20rem] group [perspective:1000px]">
                 <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="rounded-2xl w-full h-full object-cover" src={img} alt={headline} />
                </div>
                <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h1 className="text-white text-2xl font-semibold capitalize">{headline}</h1>
                    <p className="text-white text-lg">{text}</p>
                </div>
                    </div>
                    </div>
                ))}
            </article>
        </>
    );
}

export default Albums;