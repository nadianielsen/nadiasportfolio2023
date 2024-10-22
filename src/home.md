import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion";
// import AgeFunction from "../components/AgeFunction";
import { useState, useEffect } from "react";
import moment from "moment";


const Home = () => {

    const [birthDate, setBirthDate] = useState("2004-11-21");
    const [age, setAge] = useState('');
    
    const calculateAge = (dateString) => {
        const birthDate = moment(dateString, "YYYY-MM-DD")

        const today = moment();

        const age = today.diff(birthDate, 'years')

        return age;

    }

    useEffect(() => {
        if (moment(birthDate, "YYYY-MM-DD").isValid()) {
            setAge(calculateAge(birthDate))
        } else {
            setAge('')
        }
    }, [birthDate, setBirthDate]);


    return (
        <article className="grid z-50">
            <div className="w-full h-[40vh] size866:h-screen flex justify-center items-center">
                <div className="w-[80vw] size400:w-[60vw] size600:w-[55vw] size700:w-[70vw] lg:w-[50vw] bg-neutral-100 py-20 md:h-[30vh] size1470:h-[60vh] lg:py-0 bg-opacity-50 absolute backdrop-blur-[2px] drop-shadow-md rounded-xl grid">
                    <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 0.60 }} className="overflow-hidden self-end justify-self-center text-left">
                        <motion.p className="home-text font-semibold w-80 pl-16 text-xl md:w-auto md:pl-0 md:text-5xl size1200:6xl size1470:text-7xl uppercase text-white drop-shadow" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.60 }}>Welcome to my portfolio</motion.p>
                    </motion.div>
                    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.60 }} className="overflow-hidden justify-center">
                        <div className="border-b-[0.12rem] md:border-b-[0.18rem] mx-12 size1470:mx-10 border-white"></div>
                    </motion.div>
                </div>
                <img src="./images/website banner.webp" alt="website banner" className="object-fill w-full h-full " />
            </div>
            <article className="place-self-center my-6">
                <h2 className="font-semibold text-center text-3xl py-4 underline">Video portfolio</h2>
                <video src="Nadia Nielsen - Video portfolio.mp4" controls className="w-[70vw] lg:w-[40vw] border-2" poster="video thumbnail.webp"></video>
            </article>
            <article className="w-full h-[75vh] py-6 md:py-0 size1100:h-[80vh] grid md:grid-cols-2 size400:gap-y-4">
                <img src="./images/me - photo 2.webp" alt="" className="w-[30rem] h-[25rem] size700::h-[35rem] lg:mb-10 place-self-center object-cover" />
                <div className="col-start-2 row-start-1 border-r-2 w-2 h-40 border-black self-center hidden md:block"></div>
                <div className="px-6 size400:px-0 place-content-center place-self-center md:w-[53%] md:col-start-2 md:row-start-1 row-start-2 pb-20 size700:pb-0 lg:py-4">
                    <p className="sm:text-xl ">Hello and welcome. My name is Nadia Nielsen and I am {age} years old.  I come from Denmark and I am taking the media graphic design education.</p>
                    {/* <p className="sm:text-xl ">Hello and welcome. <AgeFunction />  I come from Denmark and I am taking the media graphic design education.</p> */}
                    <div className="group ">
                        <Link to={"/about"} className="font-semibold flex gap-x-1c underline group-hover:text-[#00A5E7] group-hover:transition-colors group-hover:delay-75 group-hover:duration-300">For more knowledge about me <IoMdArrowRoundForward className="text-xl my-1 hidden size300:block" /></Link>
                    </div>
                </div>
            </article>
        </article>
    );
}

export default Home;

import { motion } from "framer-motion";
import { useTime, useTransform } from "framer-motion";


    // const artworks = [
    //     {
    //         img: "./images/posters-wallpapers/Poster - Mother Nature is a part of os - 3-10-2024.jpg",
    //         text: "Poster - Mother Nature is a part of os",
    //     },
    //     {
    //         img: "./images/posters-wallpapers/Fake perfume poster - 27-8-2024.jpg",
    //         text: "Fake perfume poster",
    //     },
    //     {
    //         img: "./images/posters-wallpapers/nike poster.jpg",
    //         text: "Nike poster - Feet with shoes in the air",
    //     },
    //     {
    //         img: "./images/posters-wallpapers/Hibicus poster.jpg",
    //         text: "Pink hibicus poster",
    //     },
    // ]

    // {artworks.map(({img, text, i}) => (
    //     <div key={i} className={`${i === 3 || 6 ? 'row-span-2' : null}`}>
    //         <img src={img} alt={text} />
    //     </div>
    // ))}

    
    const HomeGallery = () => {
    
    const time = useTime()
    const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
    )

    return ( 
       <section className="flex">
        <section className="w-[15vw] h-[90vh] flex flex-col justify-center items-center">
            <motion.img style={{rotate}} src="./images/Untitled-1-01.png" alt="" />
            <figure className="w-2 h-44 border-l-2 border-black"></figure>
            <motion.img style={{rotate}} src="./images/Untitled-1-01.png" alt="" />
        </section>
        <section className="w-[85vw] h-[90vh] bg-[#00A5E7] rounded-bl-[10rem] relative">
            {/* <img className="absolute w-full h-full object-cover rounded-bl-[10rem]" src="./images/website banner.webp" alt="" /> */}
        </section>
       </section>
     );
}
 
export default HomeGallery;