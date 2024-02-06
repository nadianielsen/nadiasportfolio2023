import { Link } from "react-router-dom";
import PagesLinks from "../components/PagesLinks";
import SmallCard from "../components/SmallCard";
import { FaGithub } from "react-icons/fa";


const FrontendDeveloper = () => {
    return (
        <>
            <PagesLinks prevPage={"About"} location={"/frontenddeveloper"} page={"Frontend developer"} />
            <article className="mx-20 my-2 grid gap-y-4">
                <h1 className="text-2xl font-semibold capitalize">Frontend developer</h1>
                <article>
                    <h2 className="text-xl font-medium underline capitalize">Languages and libraries</h2>
                    <p>Throughout my education I have learned these languages and libraries.</p>
                    <article className="grid gap-y-6 md:grid-cols-3  lg:grid-cols-4 grid-rows-2 place-items-center md:gap-y-10 my-10">
                        <SmallCard name={"HTML"} logo={"./images/html.png"} bgPrimary={"bg-gradient-to-t from-orange-500/50 to-transparent"} />
                        <SmallCard name={"CSS"} logo={"./images/css.png"} bgPrimary={"bg-gradient-to-t from-blue-400/50 to-transparent"} />
                        <SmallCard name={"Javascript"} logo={"./images/JavaScript.png"} bgPrimary={"bg-gradient-to-t from-yellow-400/50 to-transparent"} />
                        <SmallCard name={"React"} logo={"./images/react.png"} bgPrimary={"bg-gradient-to-t from-[#61d9fb]/50 to-transparent"} />
                        <Link to={"https://nextjs.org/"}>
                            <SmallCard name={"Next JS"} logo={"./images/nextjs.png"} bgPrimary={"bg-gradient-to-t from-black/50 to-transparent"} />
                        </Link>
                        <Link to={"https://tailwindcss.com/"}>
                            <SmallCard name={"Tailwind"} logo={"./images/tailwind.png"} bgPrimary={"bg-gradient-to-t from-[#38bdf8]/50 to-transparent"} />
                        </Link>
                        <SmallCard name={"Wordpress"} logo={"./images/wordpress.png"} bgPrimary={"bg-gradient-to-t from-[#477397]/60 to-transparent"} />
                        <Link to={"https://sass-lang.com/"}>
                            <SmallCard name={"SASS/SCSS"} logo={"./images/sass.png"} bgPrimary={"bg-gradient-to-t from-pink-600/50 to-transparent"} />
                        </Link>
                    </article>
                    <div className="flex flex-col gap-y-2">
                        <p>I have learned how to make for example React and vanilla Javascript into PWA - Progressive Web App.</p>
                        <p>With Wordpress I have learned how you set it with xxamp and MySQL database. I learned how to make a theme. </p>
                        <p>With CSS I have learned regular css, tailwindcss, sass/scss, bootstrap and styled components. Those I am most skilled in is regular css and tailwind.</p>
                        <p>Besides learning all of these languages, frameworks and libraries, I have learned how to fetch from an api, styling after a given figma design, how to make things dynamic and not static, html stucture - semantic and etc... </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
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
                    <Link to={"https://github.com/nadianielsen"} className="hover:text-[#f03fa9] hover:underline transition-all flex gap-x-1 text-lg"><FaGithub className="my-1" />My Github Profile</Link>
                </article>
            </article>
        </>
    );
}

export default FrontendDeveloper;