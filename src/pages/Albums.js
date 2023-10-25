import ContentWrapper from "../components/ContentWrapper";
import PagesLinks from "../components/PagesLinks";

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
            text: "Die for you song - The Weeknd and Ariana Grande"
        },
        {
            img: "./images/albums/theweeknd - take my breath - Album Cover.jpg",
            headline: "Take My Breath - Album cover",
            text: "A song by The Weeknd"
        },
        {
            img: "./images/albums/Album-Cover-Bad-Michael-Jackson.jpg",
            headline: "Bad - Album cover",
            text: "Bad by Michael Jackson"
        },
        {
            img: "./images/albums/Miley Cyrus.jpg",
            headline: "Flowers - Album cover",
            text: "A song by Miley Cyrus"
        },
        {
            img: "./images/albums/Album-Cover-Bruno-Mars-TREASURE.jpg",
            headline: "Treasure - Album cover",
            text: "A song by Bruno Mars"
        },
        {
            img: "./images/albums/PosterAlbum-Cover---Back-For-More---Txt-&-Anitta---16-2023.jpg",
            headline: "TXT & Anitta - Album cover",
            text: "Album cover of back for more song"
        },
        {
            img: "./images/albums/BTS - Playlist Cover.jpg",
            headline: "BTS - Playlist cover",
            text: "Made a playlist cover of the known boyband - BTS"
        },
        {
            img: "./images/albums/ay-yo - nct 127.jpg",
            headline: "Ay-Yo - Album cover",
            text: "Recreation of NCT 127's album - Ay-yo"
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
    ]

    return (
        <>
            <PagesLinks prevPage={"Graphic Design"} location={"/albums"} page={"Albums"} />
            <article className="grid grid-cols-1 lg:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
                {albumsImg.map(({ img, headline, text }) => (
                    // <img src={img} alt={img} className="rounded-2xl" />
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"80"} mdheight={"96"} />
                    <ContentWrapper content={
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
                }/>
                ))}
            </article>
        </>
    );
}

export default Albums;