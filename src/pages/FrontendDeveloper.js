import { Link } from "react-router-dom";
import PagesLinks from "../components/PagesLinks";
import SmallCard from "../components/SmallCard";
import { FaGithub } from "react-icons/fa";


const FrontendDeveloper = () => {
    return (
        <>
            <PagesLinks prevPage={"About"} location={"/frontenddeveloper"} page={"Frontend developer"} />
            <article className="mx-10 md:mx-20 my-2 grid gap-y-4">
                <h1 className="text-2xl font-semibold capitalize">Frontend developer</h1>
                <article>
                    <h2 className="text-xl font-medium underline capitalize">Languages and libraries</h2>
                    <p>Throughout my education I have learned these languages and libraries.</p>
                    <article className="grid gap-y-6 md:grid-cols-3  lg:grid-cols-4 grid-rows-2 place-items-center md:gap-y-10 my-10 size1100:w-[70vw] size1100:m-auto size1100:my-8">
                        <SmallCard link={"https://www.w3schools.com/html/"} name={"HTML"} logo={"./images/html.webp"} bgPrimary={"bg-gradient-to-t from-orange-500/50 to-transparent"} />
                        <SmallCard link={"https://www.w3schools.com/css/"} name={"CSS"} logo={"./images/css.webp"} bgPrimary={"bg-gradient-to-t from-blue-400/50 to-transparent"} />
                        <SmallCard link={"https://www.w3schools.com/js/"} name={"Javascript"} logo={"./images/JavaScript.webp"} bgPrimary={"bg-gradient-to-t from-yellow-400/50 to-transparent"} />
                        <SmallCard link={"https://react.dev/"} name={"React"} logo={"./images/react.webp"} bgPrimary={"bg-gradient-to-t from-[#61d9fb]/50 to-transparent"} />
                            <SmallCard link={"https://nextjs.org/"} name={"Next JS"} logo={"./images/nextjs.webp"} bgPrimary={"bg-gradient-to-t from-black/50 to-transparent"} />
                            <SmallCard link={"https://tailwindcss.com/"} name={"Tailwind"} logo={"./images/tailwind.webp"} bgPrimary={"bg-gradient-to-t from-[#38bdf8]/50 to-transparent"} />
                        <SmallCard link={"https://wordpress.com/"} name={"Wordpress"} logo={"./images/wordpress.webp"} bgPrimary={"bg-gradient-to-t from-[#477397]/60 to-transparent"} />
                            <SmallCard link={"https://sass-lang.com/"} name={"SASS/SCSS"} logo={"./images/sass.webp"} bgPrimary={"bg-gradient-to-t from-pink-600/50 to-transparent"} />
                    </article>
                    <div className="flex flex-col gap-y-2">
                        <p><span className="font-semibold">I have learned</span> how to make for example React and vanilla Javascript into PWA - Progressive Web App.</p>
                        <p>With Wordpress I have learned how you set it with xxamp and MySQL database. I learned how to make a theme. </p>
                        <p>I am also learning how to use wordpress without setting up a database and using xxamp.</p>
                        <p><span className="font-semibold">With CSS I have learned</span> regular css, tailwindcss, sass/scss, bootstrap and styled components. Those I am most skilled in is regular css and tailwind.</p>
                        <p>Besides learning all of these languages, frameworks and libraries, I have learned how to fetch from an api, styling after a given figma design, how to make things dynamic and not static, html stucture - semantic and etc... </p>
                    </div>
                    <div className="py-4">
                        <h2 className="font-semibold">Animation:</h2>
                        <p>I have learned how to use tailwindcss animated and I have some experience in Framer Motion.</p>
                    </div>
                </article>
                <article>
                    <h2 className="text-xl font-medium underline capitalize">Where I have studied</h2>
                    <p>The school where I have been taking the web developer education at, is Roskilde Technical Education in Denmark.</p>
                </article>
                <article>
                    <h2 className="text-xl font-medium underline capitalize">A link to Github profile</h2>
                    <Link target="_target" to={"https://github.com/nadianielsen"} className="hover:text-[#00A5E7] hover:underline transition-all flex gap-x-1 text-lg"><FaGithub className="my-1.5" />My Github Profile</Link>
                </article>
            </article>
        </>
    );
}

export default FrontendDeveloper;