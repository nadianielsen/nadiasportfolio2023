import DownloadButton from "../components/DownloadButton";
// import { BsArrowUp } from "react-icons/bs";

const Hf3 = () => {
    return (
        <article className="grid gap-y-2">
            <h1 className="text-3xl py-10 place-self-center ivy_font text-[#7EA46C]">Hoved<span className="italic">forløb</span> 3</h1>
            <section className="flex flex-col size800:flex-row justify-center gap-x-20 gap-y-5 place-self-center mb-4">
                <div className="text-center size800:text-start m-auto">
                    <p className="w-[22rem] size800:w-[20.5rem]"><span className="font-semibold">Til hovedforløb 3</span> har jeg valgt to produkter. Til det trykte produkt valgte jeg at lave , hvor jeg bruger kernefaglighederne - </p>
                    <p className="w-[22rem] size800:w-[20.5rem] pt-2">Til det digtale produkt valgte jeg at bruge en video som jeg har lavet på min tidligere læreplads. Jeg bruger kernefaglighed - "Grafisk Produktionsforståelse".</p>
                    <p className="pt-2">Min arbejdsportfolio ligger trykklar via download knappen.</p>
                    <DownloadButton filepdf={"/Arbejdsportfolio - Hovedforløb 2 - Nadia Marie Nielsen.pdf"} downloadPDF={"/Arbejdsportfolio - Hovedforløb 2 - Nadia Marie Nielsen"} extraStyle={"my-4 m-auto size800:m-0 size800:my-4"} />
                </div>
                <img className="w-80 lg:w-[25rem] rounded-3xl m-auto size800:m-0" src="./images/Arbejdsportfolio - Hovedforløb 3 - Nadia Marie Nielsen.webp" alt="billed af skoleportfolio" />
            </section>
            <span className="w-[50%] h-2 border-b-2 border-black place-self-center"></span>
            <section className="place-self-center my-4">
                <h2 className="text-2xl pt-6 text-center ivy_font">Digital Produkt</h2>
                <video className="w-[20rem] h-[20rem] size700:w-[30rem] size700:h-[30rem] size1100:w-[40rem] size1100:h-[40rem] my-5 m-auto size800:my-10 rounded-3xl" src="./Reel til Meta - 1080x1920px - Lær for Livet.mp4" controls></video>
                <h3 className="text-center font-semibold text-lg">SoMe video - Lær for Livet</h3>
                <p className="text-center m-auto w-[20rem] size800:w-[22rem]">Her er mit digitale produkt, hvilket er en video for Lær for Livet. Jeg lavede denne video, da jeg var på min tidligere læreplads.</p>
                <DownloadButton filepdf={"/Reel til Meta - 1080x1920px - Lær for Livet.mp4"} downloadPDF={"/Reel til Meta - 1080x1920px - Lær for Livet"} extraStyle={"mt-4 m-auto "} />
            </section>
            <span className="w-[50%] h-2 border-b-2 border-black place-self-center"></span>
            <section className="mb-4 place-self-center">
                <h2 className="text-2xl text-center py-6 ivy_font">Trykt Produkt</h2>
                <section className="flex flex-col size800:flex-row justify-center items-center size800:items-start gap-x-20 gap-y-4">
                    <div>
                        <h3 className="font-semibold text-center size800:text-start">Sportswomen - hæfte/brochure</h3>
                        <p className="size800:w-[16rem] text-center size800:text-start w-[20rem]">For mit trykte produkt, fik jeg en fiktiv opgave om lave en hæfte/brochure som omhandler kvinder i sport og der ligger en trykklar pdf via download knappen. </p>
                        <DownloadButton filepdf={"/Brochure - hæfte - SportWomen - HF3 trykt produkt - bleed.pdf"} downloadPDF={"/Brochure - hæfte - SportWomen - HF3 trykt produkt - bleed"} extraStyle={"mt-4 m-auto size800:m-0 size800:mt-4"} />
                    </div>
                    <img className="w-60 size600:w-80 rounded-3xl" src="./images/HF3 trykt produkt - mockup.webp" alt="trykt produkt" />
                </section>
            </section>
        </article>

    );
}

export default Hf3;