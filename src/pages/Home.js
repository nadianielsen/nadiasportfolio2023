import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io"

const Home = () => {
    return (
        <> 
            <div className="w-full h-screen z-50 flex justify-center items-center">
                <div className="w-[50vw] bg-neutral-100 h-[60vh] bg-opacity-50 absolute backdrop-blur-sm rounded-xl">
                    <div className="mt-32 ml-52 overflow-hidden slide-left">
                        <p className="home-text w-[70%] font-bold text-7xl uppercase text-white text-shadow">Welcome to my portfolio</p>
                    </div>
                    <div className="ml-52 overflow-hidden slide-right ">
                        <div className="w-[65%] border-b-[0.18rem] border-home"></div>
                    </div>
                </div>
                    <img src="./images/hero.jpg" alt="" className="object-cover w-full h-full"/>
            </div>
        <article className="w-full h-screen grid grid-cols-2">
            <span className="col-start-1 w-[10rem] h-2 border-b-2 border-black mt-auto row-start-1 relative justify-self-center bottom-24 right-16"></span>
            <span className="col-start-1 w-2 h-[22rem] border-l-2 border-black mt-auto row-start-1 relative justify-self-center left-40 bottom-36"></span>
            <div className="col-start-1 row-start-1">
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">N</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">A</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">D</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">I</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">A</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">N</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">I</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">E</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">L</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">S</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">E</p>
                <p className="text-center relative left-44 top-[15.2rem] text-lg font-medium">N</p>
            </div>
            <div className="bg-red-300 w-[18rem] h-[32rem] rounded-t-full relative place-self-center col-start-1 row-start-1">
                <img src="./images/me.jpg" alt="" className="absolute object-cover w-full h-full rounded-t-full"/>
            </div>
            <div className="col-start-2 row-start-1 border-r-2 w-2 h-40 border-black self-center"></div>
            <div className="w-[53%] place-self-center col-start-2 row-start-1">
                 <p className=" text-xl ">Hello and welcome. My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education.</p>
                 <div className="group ">
                    <p className="font-semibold flex gap-x-2 underline group-hover:text-[#f03fa9] transition-all">For more knowledge about me <Link to={"/about"} className="pt-1 group-hover:text-[#f03fa9] transition-all"><IoMdArrowRoundForward className="text-xl" /></Link></p>
                 </div>
            </div>

                {/* <div className="w-[18rem] h-[20rem] border-t-2 border-black rounded-full absolute left-60"></div> */}
        </article>
        </>
     );
}
 
export default Home;