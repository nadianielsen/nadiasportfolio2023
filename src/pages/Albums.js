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
            img: "./images/albums/Poster_-_Little_Mix_-_911-2023.jpg",
            headline: "Little Mix - Album cover/Poster",
            text: "Album Cover or Poster of Litte Mix"
        },
        {
            img: "./images/albums/Zara Larsson - End of time - Album Cover.jpg",
            headline: "End of time - Album Cover",
            text: "A song by Zara Larsson"
        },
        {
            img: "./images/albums/Album cover - Golden Jungkook - 3-11-2023.jpg",
            headline: "Golden - Album Cover",
            text: "An Album by Jung Kook from BTS"
        },
        {
            img: "./images/albums/Jimin BTS - Album Cover - Face.jpg",
            headline: "Face - Album Cover",
            text: "Made a album cover of Jimin BTS' album - Face"
        },
        {
            img: "./images/albums/Poster-Album Cover - Super SVT - 27-10-2023.jpg",
            headline: "Seventeen Kpop Group",
            text: "Made a album cover of Super - Their recent song"
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
            <article className="grid grid-cols-1 lg:grid-cols-2 size1470:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
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