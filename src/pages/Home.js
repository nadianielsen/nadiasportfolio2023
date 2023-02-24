import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io"

const Home = () => {
    return (
        <> 
            <div className="w-full border h-screen z-50 flex justify-center items-center">
                <div className="w-[50vw] bg-neutral-100 h-[60vh] bg-opacity-50 absolute backdrop-blur-sm rounded-xl">
                    <div className="ml-6 mt-5 overflow-hidden slide-left">
                        <p className="home-text w-[50%] font-bold text-6xl uppercase text-white text-shadow">Welcome to my portfolio</p>
                    </div>
                </div>
                    <img src="./images/download.jpeg" alt="" className="object-cover w-full h-full"/>
            </div>
        <article className="w-full h-screen grid grid-cols-2">
            <div className="bg-red-300 w-[18rem] h-[32rem] rounded-t-full relative place-self-center">
                <img src="./images/me.jpg" alt="" className="absolute object-cover w-full h-full rounded-t-full"/>
            </div>
            <div className="w-[53%] place-self-center">
                 <p className=" text-xl ">Hello and welcome. My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education.</p>
                 <p className="font-semibold flex gap-x-2">To know more about me <Link to={"/about"} className="pt-1 hover:text-red-500 transition-all"><IoMdArrowRoundForward className="text-xl" /></Link></p>
            </div>

                {/* <div className="w-[18rem] h-[20rem] border-t-2 border-black rounded-full absolute left-60"></div> */}
        </article>
        </>
     );
}
 
export default Home;