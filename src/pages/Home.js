// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeFirstLook from "../components/HomeFirstLook";



const Home = () => {


    // const time = useTime()
    // const rotate = useTransform(
    // time,
    // [0, 4000], // For every 4 seconds...
    // [0, 360], // ...rotate 360deg
    // { clamp: false }
    // )

    return (
        <motion.article initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.60}} className="grid gap-y-20 size1400:gap-y-0 z-50">
            <div className="absolute -z-50 w-full h-full">
                <img className="fixed w-full opacity-35" src="./images/Artboard 3.png" alt="" />
            </div>
            <HomeFirstLook />
            <section className="flex justify-center items-center text-center h-[30vh]">
                <motion.p initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x:0}} transition={{ease: "easeInOut", delay: 0.30}} className="text-3xl size1700:text-4xl w-[70vw]">I am currently looking for <span className="text-[#7ea46c] crimson-font">apprenticeship (læreplads)</span></motion.p>
            </section>
            <section className="flex flex-col mt-20 size1300:mt-80">
                <h2 className="font-semibold text-center text-3xl">Video portfolio</h2>
                <figure className="w-[20rem] size400:w-[22rem] lg:w-[40rem] size1200:w-[60rem] h-2 border-b-2 border-black mt-2 mb-10 place-self-center"></figure>
                <video src="Nadia Nielsen - Video portfolio.mp4" controls className="w-[80vw] md:w-[50vw] size1200:w-[40vw] shadow-md shadow-black/20 z-20 rounded-[2rem] bg-white place-self-center mb-32 object-cover" poster="./images/video portfolio thumbnail.webp"></video>
            </section>
        </motion.article>
    );
}

export default Home;