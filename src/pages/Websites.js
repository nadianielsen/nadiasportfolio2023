import ContentWrapper from "../components/ContentWrapper";
import DescriptionArt from "../components/DescriptionArt";
import PagesLinks from "../components/PagesLinks";
import WebsiteCard from "../components/WebsiteCard";


const Websites = () => {

    const websites = [
        {
            img: "./images/websites/mymovies.webp",
            link: "https://mymoviesnadianielsen.netlify.app/",
            heading: "Mymovies with Javascript",
            text: "Our assignment was to make a movie database websites."
        },
        {
            img: "./images/websites/moviebase - next js.webp",
            link: "https://github.com/nadianielsen/movibes-website-assignment-2023",
            heading: "MovieBase - first project in Next js - Github",
            text: "By learning Next js, I wanted to try and built a movie database in Next js."
        },
        {
            img: "./images/websites/iplaymusic.webp",
            link: "https://github.com/In-Wess-Tation/iplaymusic",
            heading: "IPlayMusic with Next js - Github",
            text: "Coded a music app while using the spotify database with Next js"
        },
        {
            img: "./images/websites/weather-app.webp",
            link: "https://weather-app-nadia.netlify.app",
            heading: "Weather app with react - PWA",
            text: "Learning how to create an app - PWA, while making it into a weather app with React js."
        },
        {
            img: "./images/websites/statusopgave - website.webp",
            link: "https://statusopgave-website.netlify.app",
            heading: "Status assignment for medie graphic designer education",
            text: "Prep assignment for the exam assignment website"
        },
        {
            img: "./images/websites/dyrenes butik website.webp",
            link: "https://grundforloeb-eksamens-website-nadia.netlify.app/",
            heading: "Exam website for media graphic designer education",
            text: "For my exam on media graphic design education I had to make website about the subject we had in the exam. "
        },

    ]

    return (
        <>
            <PagesLinks prevPage={"Gallery"} location={"/websites"} page="Websites" />
            <DescriptionArt heading={"Info about my websites"} text={(
                <>
                    <p>Some of the websites I have are from my webdeveloper education and a few from my current education - media graphic designer education</p>
                </>
            )} />
            <ContentWrapper content={
                <article className="w-full px-6 size400:px-0 lg:w-[70%] size1560:w-[60%] grid gap-y-20 my-10 gap-x-12 size1200:grid-cols-2 size1470:grid-cols-3 m-auto">
                    {websites.map(({ img, link, text, heading }) => (
                        <WebsiteCard key={text} img={img} link={link} heading={heading} text={text} />
                    ))}
                </article>
            } />
        </>
    );
}

export default Websites;