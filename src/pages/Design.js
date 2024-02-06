import { Link } from "react-router-dom";
import PagesLinks from "../components/PagesLinks";
import SmallCard from "../components/SmallCard";


const Design = () => {
    return ( 
        <>
        <PagesLinks page={"Design"} prevPage={"About"} location={"/design"}/>
        <article className="grid mx-20 gap-y-2.5 my-6">
            <h1 className="text-xl font-semibold">Design</h1>
            <h2 className="text-lg font-medium underline">Since I have passion for design, I also want to pursue the graphic design education</h2>
            <p>Since I have been taking the web developer education, I then have a plan on taking the media graphic designer(mediegrafiker) education, since I love digital design.</p>
            <p>I have used different apps for design, but my main graphic design app is procreate. In procreate you can both draw, animate, 3D design and customize pictures... and it's an app that is on ios only - iPad and iPhone.</p>
            <article className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-3 place-items-center my-10">
                <Link to={"https://procreate.com/"}>
                    <SmallCard name={"Procreate"} logo={"./images/procreate.png"} bgPrimary={"bg-gradient-to-t from-black/70 to-transparent"}/>
                </Link>
                <Link to={"https://picsart.com/"}>
                    <SmallCard name={"Picsart"} logo={"./images/picsart.jpg"} bgPrimary={"bg-gradient-to-t from-[#cf02bc]/50 to-transparent"}/>          
                </Link>
                <Link to={"https://www.canva.com"}>
                    <SmallCard name={"Canva"} logo={"./images/canva.png"} bgPrimary={"bg-gradient-to-t from-[#00c1cb]/70 to-transparent"}/>
                </Link>
                <Link to={"https://www.adobe.com/dk/products/photoshop.html"}>
                    <SmallCard name={"Photoshop"} logo={"./images/photoshop.png"} bgPrimary={"bg-gradient-to-t from-[#6aa6f7]/70 to-transparent"}/>            
                </Link>
                <Link to={"https://www.adobe.com/dk/products/illustrator.html"}>
                    <SmallCard name={"Illustrator"} logo={"./images/illustrator.png"} bgPrimary={"bg-gradient-to-t from-[#fe9900]/70 to-transparent"}/>
                </Link>
                <Link to={"https://www.adobe.com/dk/products/indesign.html"}>
                    <SmallCard name={"InDesign"} logo={"./images/indesign.png"} bgPrimary={"bg-gradient-to-t from-[#de4868]/70 to-transparent"}/>
                </Link>
                {/* senere put også illustrator og indesign jo bedre du bliver til det */}
            </article>
            <p>I have designed some things in Photoshop, so I have some expertise in it.</p>
            <p>With picsart, was the app I started out on when I was interested in learning graphic design.</p>
            <p>I am just starting out on Canva, trying to learn it since it has become very popular these past few years.</p>
            <article>
                <h2 className="text-xl font-medium underline py-2">Link to the gallery to see my designs</h2>
                <Link to={"/graphicdesign"} className="hover:text-[#f03fa9] underline transition-all">Graphic design</Link>
            </article>
        </article>
        </>
     );
}
 
export default Design;