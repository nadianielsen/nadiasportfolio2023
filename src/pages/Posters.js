import ContentWrapper from "../components/ContentWrapper";
import DescriptionArt from "../components/DescriptionArt";
import PagesLinks from "../components/PagesLinks";
import ScrollToTopButton from "../components/ScrollToTopButton";


const Posters = () => {

    const posterswallpapers = [
        {
            img: "./images/posters-wallpapers/Poster  All night long - lyric-song - 11-4-2025.webp",
            headline: "All Night Long Song - Poster",
            text: "A poster inspired by a song that I love",
        },
        {
            img: "./images/posters-wallpapers/Eyes on you - poster.webp",
            headline: "Eyes on you - poster",
            text: "A poster inspired by a song that I love",
        },
        {
            img: "./images/posters-wallpapers/Poster - Mother Nature is a part of us - 3-10-2024.webp",
            headline: "Mother Nature - Portrait - Poster",
            text: "Tried something new in Photoshop - poster",
        },
        {
            img: "./images/posters-wallpapers/Fake perfume poster - 27-8-2024.webp",
            headline: "Fake perfume - poster",
            text: "Made a poster of a fake perfume",
        },
        {
            img: "./images/posters-wallpapers/Deer Hunter - &team - song poster.webp",
            headline: "Deer Hunter - Poster",
            text: "Scene from music video - used to poster",
        },
        {
            img: "./images/posters-wallpapers/Xo song - Enhypen - poster - 31-1-2025.webp",
            headline: "Song by Enhypen - Kpop - Poster",
            text: "A poster made with Photoshop and Illustrator",
        },
        {
            img: "./images/posters-wallpapers/Circle - poster - radial blur - 25-9-2024.webp",
            headline: "Circle - Poster",
            text: "Saw a tutorial on how to make blur filter in Photoshop",
        },
        {
            img: "./images/posters-wallpapers/nike poster.webp",
            headline: "Nike - poster",
            text: "Was inspired to make a poster of Nike shoes ",
        },
        {
            img: "./images/posters-wallpapers/Futuristic poster - 26-9-2024.webp",
            headline: "Futuristic - Poster",
            text: "Followed a tutorial on making these shapes",
        },
        {
            img: "./images/posters-wallpapers/Poster-Album Cover - WONWOO&JEONGHAN SVT - 1-6-2024.webp",
            headline: "This man poster - Seventeen subduo",
            text: "Poster of Seventeen subduo album",
        },
        {
            img: "./images/posters-wallpapers/Hibicus poster.webp",
            headline: "Hibicus - Poster",
            text: "Poster of the flower Hibicus",
        },
        {
            img: "./images/posters-wallpapers/Born again - Lisa, Doja Cat & Raye - poster copy-kopi.webp",
            headline: "Born Again - Song - Poster",
            text: "Song by Lisa, Doja Cat & Raye",
        },
        {
            img: "./images/posters-wallpapers/Mysterious poster - purple gradient - 7-8-2024.webp",
            headline: "Made a poster called mysterious",
            text: "Made this poster with path blur and gradient in Photoshop",
        },
        {
            img: "./images/posters-wallpapers/friends.webp",
            headline: "Friends - Poster",
            text: "A poster of the tv show - friends",
        },
        {
            img: "./images/posters-wallpapers/mirror.webp",
            headline: "Mirror - Poster",
            text: "A mirror poster",
        },


    ]

    return (
        <>
            <ScrollToTopButton />
            <PagesLinks prevPage={"Graphic Design"} location={"/posters"} page={"Posters & etc..."} />
            <DescriptionArt heading={"Info about my artworks"}
                text={(<> <p>When it comes to for example posters, I like to play around with colors, pictures and text.</p>
                    <p>I like to either keep it simple or out of the box.</p>
                    <p>One of the things I really love is, play around with pictures and cut people or things out of pictures to create something creative.</p>
                </>)} />
            <article className="grid grid-cols-1 md:grid-cols-2 size1470:grid-cols-3 justify-items-center w-[85%] size1200:w-[70%] size1470:w-[80%] size1700:w-[70%] m-auto my-14 size300:gap-x-20 gap-y-12">
                {posterswallpapers.map(({ img, headline, text }) => (
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"[30rem]"} mdheight={"[32rem]"} />
                    // <img src={img} alt={img} className="rounded-2xl" />
                    <ContentWrapper key={text} content={
                        <div className="w-[15rem] h-[20rem] size300:w-[20rem] size300:h-[28rem] lg:w-[24rem] lg:h-[34rem] size1700:w-[30rem] size1700:h-[42rem] group [perspective:1000px] drop-shadow-md">
                            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className="absolute inset-0">
                                    <img className="rounded-2xl w-full h-full object-cover" src={img} alt={headline} />
                                </div>
                                <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h1 className="text-white text-xl size300:text-2xl font-semibold capitalize">{headline}</h1>
                                    <p className="text-white text-base w-[70%] text-center size400:w-full size300:text-lg">{text}</p>
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