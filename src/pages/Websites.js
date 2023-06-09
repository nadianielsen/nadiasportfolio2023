import GalleryPagesLinks from "../components/GalleryPagesLinks";
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
            img: "./images/websites/theBox.jpg",
            link: "https://examtryoutnadianielsen.netlify.app",
            text: "Pre exam assignment 2022"
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
        
    ]

    return ( 
        <>
        <GalleryPagesLinks galleryPageLink={"/gallery"} galleryPage={"Gallery"} location={"/websites"} page="Websites" />
        <article className="w-[70%] grid gap-y-20 my-10 gap-x-12 lg:grid-cols-3 m-auto">
            {websites.map(({img, link, text}) => (
                <WebsiteCard img={img} link={link} text={text}/>
            ))}
        </article>
        </>
     );
}
 
export default Websites;