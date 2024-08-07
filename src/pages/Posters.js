import ContentWrapper from "../components/ContentWrapper";
import PagesLinks from "../components/PagesLinks";


const Posters = () => {

    const posterswallpapers = [
        {
            img: "./images/posters-wallpapers/enjoy the sun - poster.jpg",
            headline: "Enjoy the sun - Poster",
            text: "A poster made with Photoshop and Illustrator",
        },
        {
            img: "./images/posters-wallpapers/Chanel perfume - poster.jpg",
            headline: "Chanel No5 perfume - poster",
            text: "Made a poster/ad of the known Chanel perfume",
        },
        {
            img: "./images/posters-wallpapers/Wallpaper---CRUSH---46-2023.jpg",
            headline: "Crush - Poster",
            text: "Inspired by a song named Crush - poster",
        },
        {
            img: "./images/posters-wallpapers/Wallpaper---The-Dark---294-2023.jpg",
            headline: "The dark - Poster",
            text: "A reaching hand into the dark poster ",
        },
        {
            img: "./images/posters-wallpapers/Poster---Miley-Cyrus-Flowers---110-2033.jpg",
            headline: "Flowers poster - Miley Cyrus",
            text: "Made a poster with Miley Cyrus",
        },
        {
            img: "./images/posters-wallpapers/Wallpaperposter---Green---95-2023.jpg",
            headline: "Green - Poster",
            text: "Represents nature - Green - poster",
        },
        {
            img: "./images/posters-wallpapers/WallpaperPoster---Sun-&-Moon---106-2023.jpg",
            headline: "Sun & Moon - Poster",
            text: "Sun & moon - poster",
        },
        {
            img: "./images/posters-wallpapers/Mysterious poster - purple gradient - 7-8-2024.jpg",
            headline: "Made a poster called mysterious",
            text: "Made this poster with path blur and gradient in Photoshop",
        },
        {
            img: "./images/posters-wallpapers/Wallpaperposter---Butterfly---209-2023.jpg",
            headline: "Butterfly - Poster",
            text: "A pink/red butterfly",
        },
        {
            img: "./images/posters-wallpapers/Poster---Floral-Flower---1510-2023.jpg",
            headline: "Floral Flower - poster",
            text: "Purple flower poster",
        },
        {
            img: "./images/posters-wallpapers/friends.jpg",
            headline: "Friends - Poster",
            text: "A poster of the tv show - friends",
        },
        {
            img: "./images/posters-wallpapers/Poster-Album cover - YOU - 27-10-2023.jpg",
            headline: "You - Song - Poster",
            text: "Song by Regard, Troye Sivan & Tate Mcrae",
        },
        {
            img: "./images/posters-wallpapers/Poster - Blend.jpg",
            headline: "Blend - Poster",
            text: "Word Blend with some Gaussion blur and Motion blur",
        },
        {
            img: "./images/posters-wallpapers/mirror.jpg",
            headline: "Mirror - Poster",
            text: "A mirror poster",
        },
        {
            img: "./images/posters-wallpapers/moon.jpg",
            headline: "Moon - Poster",
            text: "A hand reaching for the moon - poster",
        },


    ]

    return (
        <>
            <PagesLinks prevPage={"Graphic Design"} location={"/posters"} page={"Posters & etc..."} />
            <article className="grid grid-cols-1 md:grid-cols-2 size1470:grid-cols-3 justify-items-center w-[75%] m-auto my-10 size300:gap-x-20 gap-12">
                {posterswallpapers.map(({ img, headline, text }) => (
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"[30rem]"} mdheight={"[32rem]"} />
                    // <img src={img} alt={img} className="rounded-2xl" />
                    <ContentWrapper key={text} content={
                        <div className="w-[20rem] h-[28rem] lg:w-[24rem] lg:h-[34rem] group [perspective:1000px] drop-shadow-md">
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

                    // <div className="w-[20rem] h-[26rem] lg:w-[24rem] lg:h-[34rem] group [perspective:1000px]">
                    //          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    //              <div className="absolute inset-0">
                    //                  <img className="rounded-2xl w-full h-full object-cover" src={img} alt={headline} />
                    //              </div>
                    //              <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    //                  <h1 className="text-white text-2xl font-semibold capitalize">{headline}</h1>
                    //                  <p className="text-white text-lg">{text}</p>
                    //              </div>
                    //          </div>
                    //      </div>
                ))}
            </article>
        </>
    );
}

export default Posters;