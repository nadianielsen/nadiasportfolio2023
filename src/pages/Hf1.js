import DownloadButton from "../components/DownloadButton";


const Hf1 = () => {
    return ( 
        <article className="grid">
            <h1 className="text-3xl py-10 place-self-center">Hovedforløb 1</h1>
            <p className="">Hovedforløb 1......</p>
            <span className="w-[50%] h-2 border-b-2 border-black place-self-center"></span>
            <DownloadButton />
            <section>
                <h2 className="text-2xl">Digital Produkt</h2>
                <video className="w-[40rem] h-[40rem] my-10" src="./Poster-album cover + moving sky background - If I Could.mp4" controls></video>
            </section>
            <span className="w-[50%] h-2 border-b-2 border-black place-self-center"></span>
            <section>
                <h2 className="text-2xl">Trykt Produkt</h2>
                <img className="w-60" src="./images/posters-wallpapers/Poster - Mother Nature is a part of os - 3-10-2024.jpg" alt="" />
            </section>
        </article>
     );
}
 
export default Hf1;