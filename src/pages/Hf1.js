import DownloadButton from "../components/DownloadButton";


const Hf1 = () => {
    return (
        <article className="grid gap-y-2">
            <h1 className="text-3xl py-10 place-self-center">Hovedforløb 1</h1>
            <section className="flex flex-col size800:flex-row justify-center gap-x-20 gap-y-5 place-self-center mb-4">
                <div className="text-center size800:text-start m-auto">
                    <p className="w-[22rem] size800:w-[20rem]"><span className="font-semibold">Til mit første hovedforløb</span> har jeg valgt to produkter. Jeg har et trykt produkt som er en plakat med kernefaglighederne - "Grafisk Design" og "Grafik og Billedbehandling" og et digitalt produkt som er en video med kernefaglighederne - "Typografi og ombrydning" og "Grafisk produktionsforståelse".</p>
                    <p className="pt-2">Min arbejdsportfolio ligger trykklar via download knappen.</p>
                    <DownloadButton filepdf={"/Arbejdsportfolio - Hovedforløb 1 - Nadia Marie Nielsen.pdf"} downloadPDF={"/Arbejdsportfolio - Hovedforløb 1 - Nadia Marie Nielsen"} extraStyle={"my-4 m-auto size800:m-0 size800:my-4"} />
                </div>
                <img className="w-80 lg:w-[25rem] rounded-3xl" src="./images/Arbejdsportfolio - Hovedforløb 1 - Nadia Marie Nielsen.webp" alt="billed af skoleportfolio" />
            </section>
            <span className="w-[50%] h-2 border-b-2 border-black place-self-center"></span>
            <section className="place-self-center">
                <h2 className="text-2xl pt-6 text-center">Digital Produkt</h2>
                <video className="w-[20rem] h-[20rem] size700:w-[30rem] size700:h-[30rem] size1100:w-[40rem] size1100:h-[40rem] my-5 m-auto size800:my-10 rounded-3xl" src="./Poster-album cover + moving sky background - If I Could.mp4" controls></video>
                <h3 className="text-center font-semibold">If I Could - Video/Album Cover/Poster</h3>
                <p className="text-center w-[20rem] size800:w-full">Her er mit digitale produkt, hvilket består af tekst, 3D tekst og bevægende sky baggrund.</p>
                <DownloadButton filepdf={"/Poster-album cover + moving sky background - If I Could.mp4"} downloadPDF={"/Poster-album cover + moving sky background - If I Could"} extraStyle={"mt-4 m-auto mb-4"} />
            </section>
            <span className="w-[50%] h-2 border-b-2 border-black place-self-center"></span>
            <section className="mb-4 place-self-center">
                <h2 className="text-2xl text-center py-6">Trykt Produkt</h2>
                <section className="flex flex-col size800:flex-row justify-center items-center size800:items-start gap-x-20 gap-y-4">
                    <div>
                        <h3 className="font-semibold text-center size800:text-start">Mother nature is a part of os - plakat/poster</h3>
                        <p className="size800:w-[16rem] text-center size800:text-start w-[20rem]">For mit trykte produkt, valgte jeg denne plakat og den ligger trykklar via download knappen. </p>
                        <DownloadButton filepdf={"/Poster - Mother Nature is a part of us - bleed.pdf"} downloadPDF={"/Poster - Mother Nature is a part of us - bleed"} extraStyle={"mt-4 m-auto size800:m-0 size800:mt-4"} />
                    </div>
                    <img className="w-60 size600:w-80 rounded-3xl" src="./images/posters-wallpapers/Poster - Mother Nature is a part of us - 3-10-2024.webp" alt="" />
                </section>
            </section>
        </article>

    );
}

export default Hf1;