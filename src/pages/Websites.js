import GalleryPagesLinks from "../components/GalleryPagesLinks";


const Websites = () => {
    return ( 
        <>
        <GalleryPagesLinks location={"/websites"} page="Websites" />
        <article className="w-[70%] h-screen grid grid-cols-3 m-auto">
            <a className="place-self-center translate-y-1 transition" href="https://nadianielsenseksamensopgave.netlify.app">Exam assignment - June 2022</a>
            <a className=" place-self-center" href="https://examtryoutnadianielsen.netlify.app">Exam try out - June 2022</a>
            <a className=" place-self-center" href="https://mymoviesnadianielsen.netlify.app/">MyMovies assigment - September 2022</a>
            <a className=" place-self-center" href="https://cph-architects-gridassignment-nadian.netlify.app/">A real first grid assigment -  March 2022</a>
        </article>
        </>
     );
}
 
export default Websites;