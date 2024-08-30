import { Link } from "react-router-dom";
import PagesLinks from "../components/PagesLinks";
import SmallCard from "../components/SmallCard";


const Design = () => {
    return (
        <>
            <PagesLinks page={"Design"} prevPage={"About"} location={"/design"} />
            <article className="grid mx-10 md:mx-20 gap-y-2.5 my-10">
                <h1 className="text-xl font-semibold">Design</h1>
                <h2 className="text-lg font-medium underline">Since I have passion for design, I also want to pursue the graphic design education</h2>
                <p>I am currently taking the media graphic designer education because I love the graphic/digital world.</p>
                <p>The graphic design programs that I use is, Procreate, Photoshop, Illustrator and InDesign.</p>
                <p>I am getting most of my experience in the Adobe program is by my education.</p>
                <article className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-3 my-10 size1100:w-[60vw] place-items-center size1100:my-8 size1100:m-auto">
                    <SmallCard link={"https://procreate.com/"} name={"Procreate"} logo={"./images/procreate.webp"} bgHover={"group-hover:bg-black/70"} bgPrimary={"bg-gradient-to-t from-black/70 to-transparent"} />
                    <SmallCard link={"https://picsart.com/"} name={"Picsart"} logo={"./images/picsart.webp"} bgHover={"group-hover:bg-[#cf02bc]/70"} bgPrimary={"bg-gradient-to-t from-[#cf02bc]/50 to-transparent"} />
                    <SmallCard link={"https://www.canva.com"} name={"Canva"} logo={"./images/canva.webp"} bgHover={"group-hover:bg-[#00c1cb]/70"} bgPrimary={"bg-gradient-to-t from-[#00c1cb]/70 to-transparent"} />
                    <SmallCard link={"https://www.adobe.com/products/photoshop.html"} name={"Photoshop"} bgHover={"group-hover:bg-[#6aa6f7]/70"} logo={"./images/photoshop.webp"} bgPrimary={"bg-gradient-to-t from-[#6aa6f7]/70 to-transparent"} />
                    <SmallCard link={"https://www.adobe.com/products/illustrator.html"} name={"Illustrator"} bgHover={"group-hover:bg-[#fe9900]/70"} logo={"./images/illustrator.webp"} bgPrimary={"bg-gradient-to-t from-[#fe9900]/70 to-transparent"} />
                    <SmallCard link={"https://www.adobe.com/products/indesign.html"} name={"InDesign"} logo={"./images/indesign.webp"} bgHover={"group-hover:bg-[#de4868]/70"} bgPrimary={"bg-gradient-to-t from-[#de4868]/70 to-transparent"} />
                </article>
                <p>I have a minimum experience in AfterEffects & Premiere Pro...</p>
                <p>With picsart, was the app I started out on when I was interested in learning graphic design.</p>
                <p>I am just starting out on Canva, trying to learn it since it has become very popular these past few years.</p>
                <article>
                    <h2 className="text-xl font-medium underline py-2">Link to the gallery to see my designs</h2>
                    <Link to={"/graphicdesign"} className="hover:text-[#00A5E7] underline hover:duration-500 hover:transition-colors hover:ease-in-out">Graphic design</Link>
                </article>
            </article>
        </>
    );
}

export default Design;