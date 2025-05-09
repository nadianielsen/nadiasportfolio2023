import { motion } from "framer-motion";
// import { useTime, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosArrowDown } from "react-icons/io";

const nameAnimation = "Nadia Nielsen"

const senctence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            staggerChildren: 0.08
        },
    },
}

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
}

const HomeFirstLook = () => {

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
        <article className="w-full">
            <motion.h1 initial="hidden" whileInView="visible" variants={senctence} className="text-[4rem] size700:text-[7rem] lg:text-[11rem] size1100:text-[12rem] size1200:text-[13rem] size1300:text-[14rem] size1400:text-[16rem] size1700:text-[20rem] uppercase font-semibold text-center size1200:relative size1200:bottom-20 size1400:bottom-24">
                {nameAnimation.split("").map((char, index) => (
                    <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <section className=" lg:ml-16 size1400:ml-0 size1400:mr-40 flex flex-col lg:flex-row justify-center items-center">
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="size1200:relative size1200:bottom-28 size1400:bottom-[20rem] size1700:bottom-[18rem] w-[15rem] lg:w-[22.5rem] border-2 border-black rounded-full" src="./images/me front page.webp" alt="me - nadia nielsen" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="size1200:relative size1200:bottom-28 size1400:bottom-[16rem] size1700:bottom-[14rem] py-12 px-16 size-1200:px-[25rem] size1400:py-32 flex flex-col">
                    <h2 className="text-3xl size1400:text-[2.5rem]">Hello and <span className="crimson-font text-[#7ea46c]">welcome</span></h2>
                    <p className="size1200:w-[26rem] size1200:text-xl">My name is Nadia Nielsen, I am {age} years old and I come from Zealand in Denmark. I am currently taking the media graphic designer education (mediegrafiker uddannelsen).</p>
                    <figure className="w-[27.5 rem] h-2 border-b-2 border-black py-2"></figure>
                    <p className="text-lg pt-2.5">On my website you can browse through my artworks on the <Link to={"/gallery"} className="underline hover:text-[#7ea46c] hover:font-semibold hover:duration-500 hover:ease-in-out hover:transition-colors">gallery page.</Link></p>
                    <Link to={"/about"} className="w-[15rem] text-lg flex gap-x-1 items-center underline hover:no-underline hover:text-[#7ea46c] hover:duration-500 hover:transition-colors hover:ease-in-out hover:font-semibold">
                        <p>For more knowledge about me</p>
                        <IoIosArrowRoundForward className="text-4xl mt-1" />
                    </Link>
                    <motion.div initial={{ opacity: 0, y: [-40, 40, 0] }} whileInView={{ opacity: 1, y: [-20, 20, 0] }} transition={{ delay: 2.2, duration: 0.40, repeatDelay: 2, repeat: Infinity }} className="w-12 h-12 size1400:w-16 size1400:h-16 m-auto mt-10 lg:mt-24 size1400:mt-12 bg-[#7ea46c] flex justify-center items-center rounded-full">
                        <IoIosArrowDown className="text-3xl text-white mt-1" />
                    </motion.div>
                </motion.div>
            </section>
        </article>
    );
}

export default HomeFirstLook;