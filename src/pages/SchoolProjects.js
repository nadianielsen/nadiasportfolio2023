import ContentWrapper from "../components/ContentWrapper";
import PagesLinks from "../components/PagesLinks";


const Schoolprojects = () => {

    const projectsImg = [
        {
            img: "./images/school/Roskilde - fjorland plakat - art deco.webp",
            headline: "Tourist Travel Poster - Fjordlandet",
            text: "A tourist travel poster with the style of art deco - school assignment",
        },
        {
            img: "./images/school/Forside og artikel.webp",
            headline: "Naturli Front Page - Magazine",
            text: "A magazine project using same name of an existing magazine - school assignment",
        },
        {
            img: "./images/school/Logo - afprøvninger-01.webp",
            headline: "Logo - Valby Kino",
            text: "A logo for an existing business - school assignment",
        },
        {
            img: "./images/school/funky organic - finale logo.webp",
            headline: "Logo - Funky Organic",
            text: "A logo for an made-up business - school assignment",
        },
        {
            img: "./images/school/Logo - dyrenes butik.webp",
            headline: "Logo - Dyrenes Butik",
            text: "A logo for an exam project 2024 - school assignment",
        },
        {
            img: "./images/school/Odense Chokoladehus - forside folder with text.webp",
            headline: "Folder - Front Page",
            text: "A folder for an existing businesss - school assignment",
        },
    ]

    return (
        <article className="flex flex-col justify-center items-center">
            <PagesLinks prevPage={"Graphic Design"} location={"/schoolprojects"} page={"School Projects"} />
            <article className="grid grid-cols-1 lg:grid-cols-2 size1470:grid-cols-3 justify-items-center w-[75%] m-auto my-10 gap-10">
                {projectsImg.map(({ img, headline, text }) => (
                    // <img src={img} alt={img} className="rounded-2xl" />
                    // <GalleryImg img={img} headline={headline} text={text} alt={headline} height={"80"} mdheight={"96"} />
                    <ContentWrapper key={text} content={
                        <div className="w-[15rem] h-[20rem] size300:w-[20rem] size300:h-[30rem] md:w-[22rem] lg:h-[30rem] group [perspective:1000px] drop-shadow-md">
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
            <ContentWrapper content={
                <div className="hidden size600:block w-[20rem] h-[12rem] md:w-[30rem] md:h-[20rem] lg:w-[62rem] lg:h-[30rem] group [perspective:1000px] my-8 drop-shadow-md">
                    <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className="rounded-2xl w-full h-full object-contain lg:object-cover" src={"/images/school/Banner - Afprøvning 2.webp"} alt="headline" />
                        </div>
                        <div className="absolute inset-0 bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <h1 className="text-white text-2xl font-semibold capitalize">Banner - Knoll Barcelona Relax Chair</h1>
                            <p className="text-white text-lg text-center max-w-[16rem]">A banner about the Barcelona Chair - Pre exam assignment - School assignment</p>
                        </div>
                    </div>
                </div>
            } />
        </article>
    );
}

export default Schoolprojects;
