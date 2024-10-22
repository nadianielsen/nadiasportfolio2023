import { Link } from "react-router-dom";
import PagesLinks from "../components/PagesLinks";
import SmallCard from "../components/SmallCard";


const Design = () => {
    return (
        <>
            <PagesLinks page={"Design"} prevPage={"About"} location={"/design"} />
            <article className="grid mx-10 md:mx-20 gap-y-2.5 my-10">
                <h1 className="text-xl underline">Design</h1>
                <h2 className="text-lg font-semibold">Since I have passion for design, I also want to pursue graphic design</h2>
                <p><span className="font-semibold">I am currently taking</span> the media graphic designer education (mediegrafiker uddannelsen) because I love the graphic/digital world.</p>
                <p><span className="font-semibold">The graphic design programs</span> that I use is, Procreate, Photoshop, Illustrator and InDesign.</p>
                <p><span className="font-semibold">I am getting most of my experience</span> in the Adobe programs during my education.</p>
                <article className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-3 my-10 size1100:w-[60vw] place-items-center size1100:my-8 size1100:m-auto">
                    <SmallCard link={"https://procreate.com/"} name={"Procreate"} logo={"./images/design programs/procreate.webp"} bgHover={"group-hover:bg-black/70"} bgPrimary={"bg-gradient-to-t from-black/70 to-transparent"} />
                    <SmallCard link={"https://picsart.com/"} name={"Picsart"} logo={"./images/design programs/picsart.webp"} bgHover={"group-hover:bg-[#cf02bc]/70"} bgPrimary={"bg-gradient-to-t from-[#cf02bc]/50 to-transparent"} />
                    <SmallCard link={"https://www.canva.com"} name={"Canva"} logo={"./images/design programs/canva.webp"} bgHover={"group-hover:bg-[#00c1cb]/70"} bgPrimary={"bg-gradient-to-t from-[#00c1cb]/70 to-transparent"} />
                    <SmallCard link={"https://www.adobe.com/products/photoshop.html"} name={"Photoshop"} bgHover={"group-hover:bg-[#6aa6f7]/70"} logo={"./images/design programs/photoshop.webp"} bgPrimary={"bg-gradient-to-t from-[#6aa6f7]/70 to-transparent"} />
                    <SmallCard link={"https://www.adobe.com/products/illustrator.html"} name={"Illustrator"} bgHover={"group-hover:bg-[#fe9900]/70"} logo={"./images/design programs/illustrator.webp"} bgPrimary={"bg-gradient-to-t from-[#fe9900]/70 to-transparent"} />
                    <SmallCard link={"https://www.adobe.com/products/indesign.html"} name={"InDesign"} logo={"./images/design programs/indesign.webp"} bgHover={"group-hover:bg-[#de4868]/70"} bgPrimary={"bg-gradient-to-t from-[#de4868]/70 to-transparent"} />
                </article>
                <p><span className="font-semibold">I have a minimum experience</span> in AfterEffects & Premiere Pro...</p>
                <p><span className="font-semibold">With picsart,</span> was the app I started out on when I was interested in learning graphic design.</p>
                <p><span className="font-semibold">I am just starting out on Canva, </span>trying to learn it since it has become very popular these past few years.</p>
                <p><span className="font-semibold">I have also started</span> to learn Adobe Dimension...</p>
                <article>
                    <h2 className="text-xl font-semibold py-2">Link to the gallery to see my designs</h2>
                    <Link to={"/graphicdesign"} className="hover:text-[#00A5E7] underline hover:duration-500 hover:transition-colors hover:ease-in-out">Graphic design</Link>
                </article>
            </article>
        </>
    );
}

export default Design;