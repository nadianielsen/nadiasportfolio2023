// import { Link } from "react-router-dom";
import LinkCards from "../components/LinkCards";


const About = () => {

    // const textColor = ["text-[#31A8FF]", "text-[#f8a829]", "text-[#E749A0]", "text-black", "text-[#f24e1e]", "text-[#E298F2]", "text-[#CF96FD]"]

    // const textColorCode = ["text-orange-500", "text-blue-400", "text-yellow-400", "text-[#61d9fb]", "text-black", "text-[#38bdf8]", "text-[#477397]", "text-pink-600"]

    return (
        <article className="grid gap-y-20 mb-14 size1200:grid-cols-3 justify-items-center m-auto my-5 lg:w-[80%] size2000:w-[60%] lg:gap-x-20 lg:my-32">
            <LinkCards heading={"Frontend Developer"} subscription={"Information about my coding journey."} img={"./images/code - about.webp"} url={"/frontenddeveloper"} alt={"code"} />
            <LinkCards heading={"Design"} subscription={"Information about my graphic design skills."} img={"./images/posters-wallpapers/Futuristic poster - 26-9-2024.webp"} alt={"Futuristic poster"} url={"/design"} />
            <LinkCards heading={"About Me"} subscription={"Information about me."} img={"./images/Card thumbnail - about me - website.webp"} alt={"blurred colors"} url={"/aboutme"} />
        </article>
        // <article className="">
        //     <article className="h-full pt-28 px-10 lg:p-60 flex flex-col-reverse xl:flex-row justify-center items-center lg:items-start gap-x-20 gap-y-6">
        //         <section className="md:w-[40rem] lg:[w-60rem] flex flex-col gap-y-2">
        //             <h1 className="ivy_headline text-4xl 2xl:text-6xl capitalize text-[#7EA46C]">About <span className="italic">me</span></h1>
        //             <p><span className="text-[#7EA46C] font-semibold">My name is Nadia Nielsen and I come from Roskilde Technical College,</span> where I am studying the media graphic designer education (mediegrafiker uddannelsen).</p>
        //             <p>I have currently finished my intership in Switzerland, where I have learned how the graphic field is in Switzerland. On a daily basis I am at a training center, where I am emproving my skills in the graphic world.</p>
        //             <p>I am a creative person with a strong passion for the graphic and digital fields. I am always eager to learn new things and improve myself. </p>
        //             <p>I am proactive and enjoy seeking out new knowledge when faced with challenges. I am also loyal, dependable, a good team player, kind, and always maintain a positive attitude. I am able to work independently as well.</p>
        //             <h2 className="text-[#7EA46C] font-semibold pt-4 text-xl">Frontend Developer</h2>
        //             <p>Before starting on the media graphic designer education (mediegrafiker uddannelsen), I took the webdeveloper education since it could help understand the digital world and how a website is build. The education took about 1 year and 3 months where I have learned different languages and libraries. </p>
        //             <p>I have learned how to design after a figma file, make it seo optimized, getting data from a database on to a website.</p>
        //             <section className="flex flex-col gap-y-2">
        //                 <h2 className="ivy_headline text-3xl 2xl:text-5xl capitalize text-[#7EA46C] pt-10">My <span className="italic">skills</span></h2>
        //                 <p><span className="text-[#7EA46C] font-semibold">I believe my strongest skills include creating clear hierarchies</span> in text, harmonizing colors, having a keen eye for typography and design, as well as layout, editing, and image cutouts of pictures.</p>
        //                 <p>Throughout my internship in Switzerland, the program I used the most was Figma, so I got a good knowledge in Figma.</p>
        //                 <p>I know the basics in After Effects and Premiere Pro, but I mostly use Photoshop, Illustrator, InDesign and Procreate.</p>
        //                 <div className="flex flex-wrap gap-3 mt-6 mb-">
        //                     {["Photoshop", "Illustrator", "InDesign", "Procreate", "Figma", "Premiere Pro", "After Effects"].map((skill, index) => (
        //                         <span key={skill} className={`bg-white ${textColor[index % textColor.length]} px-4 py-2 rounded-full font-poppins text-sm font-medium`}>
        //                             {skill}
        //                         </span>
        //                     ))}
        //                 </div>
        //                 <h3 className="ivy_headline text-3xl capitalize text-[#7EA46C] mt-10">Languages, Framework & <span className="italic">Libraries</span></h3>
        //                 <p>The coding language I find most comfortable to code in is JavaScript on top I use a framework called Next.js or React.js.</p>
        //                 <p>For css libraries it&apos;s tailwindcss, sass/scss or normal css.</p>
        //                 <div className="flex flex-wrap gap-3 mt-6 mb-4">
        //                     {["HTML", "CSS", "JavaScript", "React", "Next.JS", "Tailwindcss", "Wordpress", "SASS/SCSS"].map((skill, index) => (
        //                         <span key={skill} className={`bg-white ${textColorCode[index % textColorCode.length]} px-4 py-2 rounded-full font-poppins text-sm font-medium`}>
        //                             {skill}
        //                         </span>
        //                     ))}
        //                 </div>
        //             </section>
        //         </section>
        //         <img className="w-[10rem] h-[10rem] m-auto xl:m-0 md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] border-2 border-black object-cover rounded-full" src="/images/Billede 1 - Nadia Nielsen.webp" alt="me - Nadia Nielsen" width={2000} height={2000} />
        //     </article>
        //     <article>

        //     </article>
        // </article>
    );
}

export default About;

