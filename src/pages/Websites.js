import GalleryPagesLinks from "../components/GalleryPagesLinks";
import WebsiteCard from "../components/WebsiteCard";


const Websites = () => {
    return ( 
        <>
        <GalleryPagesLinks location={"/websites"} page="Websites" />
        <article className="w-[70%] h-screen grid grid-cols-3 m-auto">
            <WebsiteCard img={"./images/oldportfolio.jpg"} link={"https://myportfolio-nadianielsen.netlify.app"} text={"Portfolio 2022"}/>
            <WebsiteCard img={"./images/burgos.jpg"} link={"https://nadianielsenseksamensopgave.netlify.app"} text={"Exam assignment 2022"}/>
            <WebsiteCard img={"./images/theBox.jpg"} link={"https://examtryoutnadianielsen.netlify.app"} text={"Pre exam assignment 2022"}/>
            <WebsiteCard img={"./images/mymovies.jpg"} link={"https://mymoviesnadianielsen.netlify.app/"} text={"Mymovies with Javascript"}/>
            <WebsiteCard img={"./images/cpharchitects.jpg"} link={"https://cph-architects-gridassignment-nadian.netlify.app/"} text={"First real website"}/>
            <WebsiteCard img={"./images/movibes.jpg"} link={"https://github.com/nadianielsen/movibes-website-assignment-2023"} text={"Movibes with React - Links forward to my github"}/>
        </article>
        </>
     );
}
 
export default Websites;