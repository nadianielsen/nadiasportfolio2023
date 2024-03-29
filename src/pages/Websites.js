import PagesLinks from "../components/PagesLinks";
import WebsiteCard from "../components/WebsiteCard";


const Websites = () => {

    const websites = [
        {
            img: "./images/websites/oldportfolio.jpg",
            link: "https://myportfolio-nadianielsen.netlify.app",
            text: "Portfolio 2022"
        },
        {
            img: "./images/websites/burgos.jpg",
            link: "https://nadianielsenseksamensopgave.netlify.app",
            text: "Exam assignment 2022"
        },
        {
            img: "./images/websites/mymovies.jpg",
            link: "https://mymoviesnadianielsen.netlify.app/",
            text: "Mymovies with Javascript"
        },
        {
            img: "./images/websites/movibes.jpg",
            link: "https://github.com/nadianielsen/movibes-website-assignment-2023",
            text: "Movibes with React - Github"
        },
        {
            img: "./images/websites/moviebase - next js.jpg",
            link: "https://github.com/nadianielsen/movibes-website-assignment-2023",
            text: "MovieBase - first project in Next js - Github"
        },
        {
            img: "./images/websites/iplaymusic.jpg",
            link: "https://github.com/In-Wess-Tation/iplaymusic",
            text: "IPlayMusic with Next js - Github"
        },
        {
            img: "./images/websites/weather-app.jpg",
            link: "https://weather-app-nadia.netlify.app",
            text: "Weather app with react - PWA"
        },

    ]

    return (
        <>
            <PagesLinks prevPage={"Gallery"} location={"/websites"} page="Websites" />
            <article className="w-[70%] grid gap-y-20 my-10 gap-x-12 size1200:grid-cols-2 size1470:grid-cols-3 m-auto">
                {websites.map(({ img, link, text }) => (
                    <WebsiteCard key={text} img={img} link={link} text={text} />
                ))}
            </article>
        </>
    );
}

export default Websites;