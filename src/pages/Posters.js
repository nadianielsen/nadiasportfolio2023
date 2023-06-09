import GalleryImg from "../components/GalleryImg";
import GalleryPagesLinks from "../components/GalleryPagesLinks";


const Posters = () => {

    const posterswallpapers = [
        {
            img: "./images/posters-wallpapers/Wallpaper---The-Dark---294-2023.jpg",
            headline: "The dark - Poster",
            text: "A reaching hand into the dark poster ",
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
            img: "./images/posters-wallpapers/redbull.jpeg",
            headline: "Redbull - Poster",
            text: "Made a redbull poster/ad",
        },
        {
            img: "./images/posters-wallpapers/Quote - Poster.jpg",
            headline: "A quote - Poster",
            text: "What we have is now, now is now",
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
        {
            img: "./images/posters-wallpapers/colby brock.jpg",
            headline: "Colby Brock - Moon - wallpaper",
            text: "A wallpaper of youtuber Colby Brock with a moon",
        },
        {
            img: "./images/posters-wallpapers/sam golbach.jpg",
            headline: "Sam Golbach - Moon - wallpaper",
            text: "A wallpaper of youtuber Sam Golbach with a moon",
        },
        // {
        //     img: "./images/posters-wallpapers/bts jungkook.jpg",
        //     headline: "",
        //     text: "",
        // },
        // {
        //     img: "./images/posters-wallpapers/Sam and Colby - Smiling - Wallpaper.jpg",
        //     headline: "",
        //     text: "",
        // },
        // {
        //     img: "./images/posters-wallpapers/sam and colby.jpg",
        //     headline: "",
        //     text: "",
        // },
        {
            img: "./images/posters-wallpapers/Sam Golbach - Wallpaper - Poster.jpg",
            headline: "Sam Golbach - Poster/wallpaper",
            text: "A poster of youtuber Sam Golbach",
        },
        {
            img: "./images/posters-wallpapers/Colby Brock - Wallpaper - Poster.jpg",
            headline: "Colby Brock - Poster/wallpaper",
            text: "A poster of youtuber Colby Brock",
        },
        {
            img: "./images/posters-wallpapers/eyes.jpg",
            headline: "Eyes - Poster",
            text: "I got my eyes on you - Poster",
        },
        {
            img: "./images/posters-wallpapers/Samsung galaxy s22 ultra - poster.jpg",
            headline: "",
            text: "",
        },
    ]

    return (
        <>
            <GalleryPagesLinks galleryPageLink={"/graphicdesign"} galleryPage={"Graphic Design"} location={"/posters"} page={"Posters and Wallpapers"} />
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-12">
                {posterswallpapers.slice(0, 15).map(({ img, headline, text }) => (
                    <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"[30rem]"} mdheight={"[32rem]"} />
                    // <img src={img} alt={img} className="rounded-2xl" />
                ))}
                <div className={`w-[22rem] h-72 md:w-96 group [perspective:1000px]`}>
                    <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className="rounded-2xl w-full h-full" src="./images/posters-wallpapers/Samsung galaxy s22 ultra - poster.jpg" alt="Samsung galaxy s22 ultra - poster" />
                        </div>
                        <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <h1 className="text-white text-2xl font-semibold capitalize">Samsung - Poster</h1>
                            <p className="text-white text-lg">A poster of Samsung's top model phone from 2022</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Posters;