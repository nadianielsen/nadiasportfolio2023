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
            img: "./images/albums/Album-Cover-Bad-Michael-Jackson.jpg",
            headline: "Bad - Album cover",
            text: "Bad by Michael Jackson"
        },
        {
            img: "./images/albums/Album-Cover-Bruno-Mars-TREASURE.jpg",
            headline: "Treasure - Album cover",
            text: "A song by Bruno Mars"
        },
        {
            img: "./images/albums/Album cover - Wham - 20-1-2024.jpg",
            headline: "Wham - Make it big Album",
            text: "Made a album cover of Wham"
        },
        {
            img: "./images/albums/Album cover - Dua Lipa Houdini - 10-1-2024.jpg",
            headline: "Houdini - Album cover",
            text: "A song by Dua Lipa"
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
            img: "./images/albums/Harry Styles - Golden - Album Cover.jpg",
            headline: "Golden - Album Cover",
            text: "A song by Harry Styles"
        },
    ]

    const drawingsImg = [
        {
            img: "./images/drawings/Adele.jpg",
            headline: "Adele - Drawing",
            text: "Made a drawing Adele",
        },
        {
            img: "./images/drawings/Billie Ellish.jpg",
            headline: "Billie Ellish - Drawing",
            text: "A drawing of Billie Ellish",
        },
        {
            img: "./images/drawings/Taylor Swift.jpg",
            headline: "Taylor Swift - Drawing",
            text: "Drawing of Taylor Swift",
        },
    ]

    return (
        <>
            <PagesLinks prevPage={"Graphic Design"} location={"/albums"} page={"Albums & Drawings"} />
            <article className="grid grid-cols-1 lg:grid-cols-2 size1470:grid-cols-3 justify-items-center md:justify-self-start size1470:justify-self-center w-[75%] m-auto my-10 gap-10">
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
                    } />
                ))}
                </article>
                <h2 className="font-semibold text-center text-xl">Digtale Drawings</h2>
                <div className="border-b-2 border-black mx-20 lg:mx-80 my-2"></div>
                <article className="grid grid-cols-1 lg:grid-cols-2 size1470:grid-cols-3 justify-items-center md:justify-self-start size1470:justify-self-center w-[75%] m-auto my-10 gap-10">
                {drawingsImg.map(({ img, headline, text }) => (
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
                    } />
                ))}
            </article>
        </>
    );
}

export default Albums;

