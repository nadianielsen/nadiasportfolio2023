import ContentWrapper from "../components/ContentWrapper";
import DescriptionArt from "../components/DescriptionArt";
import PagesLinks from "../components/PagesLinks";
import ScrollToTopButton from "../components/ScrollToTopButton";


const Schoolprojects = () => {

    const projectsImg = [
        {
            img: "./images/school/Roskilde - fjorland plakat.webp",
            headline: "Tourist Travel Poster - Fjordlandet",
            text: "A tourist travel poster with the style of art deco - school assignment",
        },
        {
            img: "./images/school/Forside og artikel.webp",
            headline: "Naturli Front Page - Magazine",
            text: "A magazine project using same name of an existing magazine - school assignment",
        },
        {
            img: "./images/school/Logo - afprøvninger.webp",
            headline: "Logo - Valby Kino",
            text: "A logo for an existing business - school assignment",
        },
        {
            img: "./images/school/funky organic - finale logo.webp",
            headline: "Logo - Funky Organic",
            text: "A logo for an made-up business - school assignment",
        },
        {
            img: "./images/school/Logo - dyrenes butik.svg",
            headline: "Logo - Dyrenes Butik",
            text: "A logo for an exam project 2024 - school assignment",
        },
        {
            img: "./images/school/Odense Chokoladehus - forside folder with text.webp",
            headline: "Folder - Front Page",
            text: "A folder for an existing businesss - school assignment",
        },
        {
            img: "./images/school/Forbudt plakat - færdig version.webp",
            headline: "Forbidden poster - client project",
            text: "A poster for one of the leaders of my school",
        },
    ]

    return (
        <>
            <ScrollToTopButton />
            <article className="flex flex-col justify-center items-center">
                <PagesLinks prevPage={"Graphic Design"} location={"/schoolprojects"} page={"School Projects"} />
                <DescriptionArt heading={"Info about school projects"}
                    text={(<>
                        <p>These artwork I am most proud of from all of the school projects I've had in my education.</p>
                        <p>I have made these projects/assignments during basic training course (grundforløb 2) at the media graphic designer education (mediegrafiker uddannelsen).</p>
                        <p>The things I have learned during an assignment is, that I start out with a mindmap, after that a moodboard and after the moodboard, I begin to either make a logo or something else for the made-up client.</p>
                    </>)} />
                <article className="grid grid-cols-1 lg:grid-cols-2 size1470:grid-cols-3 justify-items-center w-[75%] size1560:w-[70%] m-auto my-10 gap-10">
                    {projectsImg.map(({ img, headline, text }) => (
                        // <img src={img} alt={img} className="rounded-2xl" />
                        // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"80"} mdheight={"96"} />
                        <ContentWrapper key={text} content={
                            <div className="w-[15rem] h-[20rem] size300:w-[20rem] size300:h-[30rem] md:w-[22rem] lg:h-[30rem]  size1560:w-[30rem] size1560:h-[42rem]  group [perspective:1000px] drop-shadow-md">
                                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0">
                                        <img className="rounded-2xl w-full h-full object-cover" src={img} alt={headline} />
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <h1 className="text-white text-2xl font-semibold capitalize">{headline}</h1>
                                        <p className="text-white text-lg text-center max-w-[16rem]">{text}</p>
                                    </div>
                                </div>
                            </div>
                        } />
                    ))}
                </article>
                {/* <ContentWrapper content={
                <div className="hidden size600:block w-[20rem] h-[12rem] md:w-[30rem] md:h-[20rem] lg:w-[62rem] lg:h-[30rem] group [perspective:1000px] my-8 drop-shadow-md">
                    <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className="rounded-2xl w-full h-full object-contain lg:object-cover" src={"/images/school/Banner - Afprøvning 2.jpg"} alt="headline" />
                        </div>
                        <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <h1 className="text-white text-2xl font-semibold capitalize">Banner - Knoll Barcelona Relax Chair</h1>
                            <p className="text-white text-lg text-center max-w-[16rem]">A banner about the Barcelona Chair - Pre exam assignment - School assignment</p>
                        </div>
                    </div>
                </div>
            } /> */}
            </article>
        </>
    );
}

export default Schoolprojects;
