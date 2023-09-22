import PagesLinks from "../components/PagesLinks";


const Posters = () => {

    const posterswallpapers = [
        {
            img: "./images/posters-wallpapers/Wallpaper---The-Dark---294-2023.jpg",
            headline: "The dark - Poster",
            text: "A reaching hand into the dark poster ",
        },
        {
            img: "./images/posters-wallpapers/PosterAd---Nike-Air-Max-270👌🏻---194-2023 (1).jpg",
            headline: "Nike Shoes - Poster - Ad",
            text: "Nike shoes - model air max 270 - purple",
        },
        {
            img: "./images/posters-wallpapers/PosterAd---Nike-Air-Max-270👌🏻---194-2023.jpg",
            headline: "Nike Shoes - Poster - Ad",
            text: "Nike shoes - model air max 270 - black",
        },
        {
            img: "./images/posters-wallpapers/redbull.jpeg",
            headline: "Redbull - Poster",
            text: "Made a redbull poster/ad",
        },
        {
            img: "./images/posters-wallpapers/Poster---Chanel-Perfume---48-2023.jpg",
            headline: "Chanel Perfume - Poster",
            text: "Made a Chanel Perfume poster/ad",
        },
        {
            img: "./images/posters-wallpapers/Poster---Starbucks---48-2023.jpg",
            headline: "Starbucks - Poster",
            text: "Made a Starbucks poster",
        },
        {
            img: "./images/posters-wallpapers/Poster---iPad-10-Generation---67-2023.jpg",
            headline: "IPad - Poster",
            text: "Made a iPad Generation 10 poster/ad",
        },
        {
            img: "./images/posters-wallpapers/Poster---Coca-Cola---67-2023.jpg",
            headline: "Coca Cola - Poster",
            text: "Made a Coca Cola poster",
        },
        {
            img: "./images/posters-wallpapers/Wallpaperposter---Crying---Maniac-Board---127-2023.jpg",
            headline: "Crying - Maniac Board Trend 2023",
            text: "Made a poster with a trending design 2023",
        },
        {
            img: "./images/posters-wallpapers/Wallpaperposter---Luxury---Maniac-Board---117-2023.jpg",
            headline: "Luxury - Maniac Board Trend 2023",
            text: "Made a poster with a trending design 2023",
        },
        {
            img: "./images/posters-wallpapers/Wallpaper---CRUSH---46-2023.jpg",
            headline: "Crush - Poster",
            text: "Inspired by a song named Crush - poster",
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
            img: "./images/posters-wallpapers/Flower - Matching wallpaper.jpg",
            headline: "Flower - Poster",
            text: "A flower poster",
        },
        {
            img: "./images/posters-wallpapers/Sam and Colby - Matching wallpaper.jpg",
            headline: "Sam and Colby - wallpaper",
            text: "Matching wallpaper to the flower poster",
        },
        {
            img: "./images/posters-wallpapers/Wallpaperposter---Butterfly---209-2023.jpg",
            headline: "Butterfly - Poster",
            text: "A pink/red butterfly",
        },
        {
            img: "./images/posters-wallpapers/flowers.jpg",
            headline: "Flowers - wallpaper/poster",
            text: "Inspired by Miley Cyrus' song flowers",
        },
        {
            img: "./images/posters-wallpapers/friends.jpg",
            headline: "Friends - Poster",
            text: "A poster of the tv show - friends",
        },
        {
            img: "./images/posters-wallpapers/refusetolove.jpg",
            headline: "Refuse to love - wallpaper/poster",
            text: "Made a poster with the message - refuse to love",
        },
        {
            img: "./images/posters-wallpapers/PosterWallpaper---Green-Water---228-2023.jpg",
            headline: "Green Water - Poster/wallpaper",
            text: "Made a poster with a green lake",
        },
        {
            img: "./images/posters-wallpapers/Poster - Angel.jpg",
            headline: "Angel - Poster",
            text: "An angel poster",
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
            img: "./images/posters-wallpapers/Poster---The-OVERTHINKER---226-2023.jpg",
            headline: "Overthinker - Poster",
            text: "Overthinker",
        },
        {
            img: "./images/posters-wallpapers/moon.jpg",
            headline: "Moon - Poster",
            text: "A hand reaching for the moon - poster",
        },


    ]

    return (
        <>
            <PagesLinks prevPage={"Graphic Design"} location={"/posters"} page={"Posters and Wallpapers"} />
            <article className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 lg:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-12">
                {posterswallpapers.map(({ img, headline, text }) => (
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"[30rem]"} mdheight={"[32rem]"} />
                    // <img src={img} alt={img} className="rounded-2xl" />
                    <div className="w-[24rem] h-[32rem] md:h-[34rem] group [perspective:1000px]">
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

export default Posters;