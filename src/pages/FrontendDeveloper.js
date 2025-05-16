import { Link } from "react-router-dom";
import PagesLinks from "../components/PagesLinks";
import SmallCard from "../components/SmallCard";
import { FaGithub } from "react-icons/fa";


const FrontendDeveloper = () => {
    return (
        <article className="size2000:w-[70%] size1400:m-auto size1400:my-20">
            <PagesLinks prevPage={"About"} location={"/frontenddeveloper"} page={"Frontend developer"} />
            <article className="mx-10 md:mx-20 my-10 grid gap-y-4">
                <h1 className="text-2xl font-semibold capitalize">Frontend developer</h1>
                <article>
                    <h2 className="text-xl font-semibold capitalize">Languages and libraries</h2>
                    <p>Throughout my education I have learned these languages and libraries.</p>
                    <article className="grid gap-y-6 md:grid-cols-3  lg:grid-cols-4 grid-rows-2 place-items-center md:gap-y-10 my-10 size1100:w-[70vw] size1560:w-[50vw] size1100:m-auto size1100:my-8 size1400:my-20">
                        <SmallCard link={"https://www.w3schools.com/html/"} name={"HTML"} logo={"./images/coding/html.webp"} bgHover={"group-hover:bg-orange-500/70"} bgPrimary={"bg-gradient-to-t from-orange-500/50 to-transparent"} />
                        <SmallCard link={"https://www.w3schools.com/css/"} name={"CSS"} logo={"./images/coding/css.webp"} bgHover={"group-hover:bg-blue-400/70"} bgPrimary={"bg-gradient-to-t from-blue-400/50 to-transparent"} />
                        <SmallCard link={"https://www.w3schools.com/js/"} name={"Javascript"} logo={"./images/coding/JavaScript.webp"} bgHover={"group-hover:bg-yellow-400/70"} bgPrimary={"bg-gradient-to-t from-yellow-400/50 to-transparent"} />
                        <SmallCard link={"https://react.dev/"} name={"React"} logo={"./images/coding/react.webp"} bgHover={"group-hover:bg-[#61d9fb]/70"} bgPrimary={"bg-gradient-to-t from-[#61d9fb]/50 to-transparent"} />
                        <SmallCard link={"https://nextjs.org/"} name={"Next JS"} logo={"./images/coding/nextjs.webp"} bgHover={"group-hover:bg-black/70"} bgPrimary={"bg-gradient-to-t from-black/50 to-transparent"} />
                        <SmallCard link={"https://tailwindcss.com/"} name={"Tailwind"} logo={"./images/coding/tailwind.webp"} bgHover={"group-hover:bg-[#38bdf8]/70"} bgPrimary={"bg-gradient-to-t from-[#38bdf8]/50 to-transparent"} />
                        <SmallCard link={"https://wordpress.com/"} name={"Wordpress"} logo={"./images/coding/wordpress.webp"} bgHover={"group-hover:bg-[#477397]/70"} bgPrimary={"bg-gradient-to-t from-[#477397]/60 to-transparent"} />
                        <SmallCard link={"https://sass-lang.com/"} name={"SASS/SCSS"} logo={"./images/coding/sass.webp"} bgHover={"group-hover:bg-pink-600/70"} bgPrimary={"bg-gradient-to-t from-pink-600/50 to-transparent"} />
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
                    <h2 className="text-xl font-semibold capitalize">Where I have studied</h2>
                    <p>The school where I have been taking the web developer education (webudvikler uddannelsen) at, is Roskilde Technical College in Denmark.</p>
                </article>
                <article>
                    <h2 className="text-xl font-semibold capitalize">A link to Github profile</h2>
                    <Link target="_target" to={"https://github.com/nadianielsen"} className="underline hover:text-[#7ea46c] hover:no-underline hover:duration-500 hover:ease-in-out hover:transition-colors flex gap-x-1 text-lg"><FaGithub className="my-1.5" />My Github Profile</Link>
                </article>
            </article>
        </article>
    );
}

export default FrontendDeveloper;