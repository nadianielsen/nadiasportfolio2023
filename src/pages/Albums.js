import ContentWrapper from "../components/ContentWrapper";
import DescriptionArt from "../components/DescriptionArt";
import PagesLinks from "../components/PagesLinks";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Albums = () => {

    const albumsImg = [
        {
            img: "./images/albums/The Weeknd - Playlist Cover - Red.webp",
            headline: "The Weeknd - Playlist cover",
            text: "Playlist Cover of The Weeknd"
        },
        {
            img: "./images/albums/Album-Cover-Bad-Michael-Jackson.webp",
            headline: "Bad - Album cover",
            text: "Bad by Michael Jackson"
        },
        {
            img: "./images/albums/Album cover - Dua Lipa - 16-4-2025.webp",
            headline: "Dua Lipa - Poster/Album cover",
            text: "Used a photo of Dua Lipa from Rolling Stone"
        },
        {
            img: "./images/albums/Seventeen new playlist cover - 31-1-2025.webp",
            headline: "Seventeen - Album Cover/Playlist Cover",
            text: "Newest album from Seventeen - Playlist Cover"
        },
        {
            img: "./images/albums/Playlist:Album cover - Hoshi&Woozi - Beam - 28-2-2025.webp",
            headline: "Beam - Album Cover",
            text: "An Album by Hoshi & Woozi - Seventeen"
        },
        {
            img: "./images/albums/Album-Cover-Bruno-Mars-TREASURE.webp",
            headline: "Treasure - Album cover",
            text: "A song by Bruno Mars"
        },
        {
            img: "./images/albums/Album cover - Sabrina Carpenter Espresso.webp",
            headline: "Espresso - Album Cover",
            text: "A song by Sabrina Carpenter"
        },
        {
            img: "./images/albums/Album cover - Wham - 20-1-2024.webp",
            headline: "Wham - Make it big Album",
            text: "Made a album cover of Wham"
        },
        {
            img: "./images/albums/Poster_-_Little_Mix_-_911-2023.webp",
            headline: "Little Mix - Album cover/Poster",
            text: "Album Cover or Poster of Litte Mix"
        },
    ]

    const drawingsImg = [
        {
            img: "./images/drawings/Adele.webp",
            headline: "Adele - Drawing",
            text: "Made a drawing of Adele",
        },
        {
            img: "./images/drawings/Drawing - DK SVT.webp",
            headline: "Kpop idol - Drawing",
            text: "Drawing of an kpop idol",
        },
        {
            img: "./images/drawings/Drawing - Joshua SVT.webp",
            headline: "Kpop idol - Drawing",
            text: "Drawing of an kpop idol",
        },
    ]

    return (
        <>
            <ScrollToTopButton />
            <PagesLinks prevPage={"Graphic Design"} location={"/albums"} page={"Albums & Drawings"} />
            <DescriptionArt heading={"Info about my artworks"} text={(
                <>
                    <p>One of the things I enjoy in my free time is to make album covers and draw people as realistic as I can.</p>
                    <p>The reason why I love to make album covers is because I really love music, and I think it's really cool to make my own version of an album.</p>
                    <p>The reason why I also make drawings is that it has been a dream of mine to draw people as realistic as I can.</p>
                </>
            )} />
            <article className="grid grid-cols-1 lg:grid-cols-2 size1470:grid-cols-3 justify-items-center md:justify-self-start size1470:justify-self-center w-[75%] size1560:w-[70%] m-auto my-10 gap-10">
                {albumsImg.map(({ img, headline, text }) => (
                    // <img src={img} alt={img} className="rounded-2xl" />
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"80"} mdheight={"96"} />
                    <ContentWrapper key={text} content={
                        <div className="w-[15rem] h-[15rem] size300:w-[20rem] size300:h-[20rem] size1560:w-[30rem] size1560:h-[30rem] group [perspective:1000px] drop-shadow-md">
                            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0">
                                    <img className="rounded-2xl w-full h-full object-cover" src={img} alt={headline} />
                                </div>
                                <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h1 className="text-white text-xl size300:text-2xl font-semibold capitalize">{headline}</h1>
                                    <p className="text-white text-base size-300:text-lg">{text}</p>
                                </div>
                            </div>
                        </div>
                    } />
                ))}
            </article>
            <h2 className="font-semibold text-center text-xl size1560:text-3xl">Digtale Drawings</h2>
            <div className="border-b-2 border-black mx-20 lg:mx-80 my-2"></div>
            <article className="grid grid-cols-1 lg:grid-cols-2 size1470:grid-cols-3 justify-items-center md:justify-self-start size1470:justify-self-center w-[75%] size1560:w-[60%] m-auto my-10 gap-10">
                {drawingsImg.map(({ img, headline, text }) => (
                    <ContentWrapper key={text} content={
                        <div className="w-[15rem] h-[15rem] size300:w-[20rem] size300:h-[20rem] size1560:w-[30rem] size1560:h-[30rem] group [perspective:1000px]">
                            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0">
                                    <img className="rounded-2xl w-full h-full object-cover" src={img} alt={headline} />
                                </div>
                                <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h1 className="text-white size300:text-2xl font-semibold capitalize">{headline}</h1>
                                    <p className="text-white text-[0.9rem] size-300:text-lg">{text}</p>
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

