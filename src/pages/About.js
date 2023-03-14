import { useState } from "react";



const About = () => {


    return ( 
        <>
            <article className="-z-30 absolute">
                <img src="./images/hero.jpg" alt="" />
            </article>
        <article className="w-[70%] h-screen m-auto grid overflow-y-auto relative bg-neutral-100">
            <article className="self-center">
                <div className="flex justify-around items-center">
                    <p className="w-[45%]"><span className="font-semibold"> My name is Nadia Nielsen</span> and I am 18 years old. I come from Denmark and I am right now taking the web developer education. My plan is to become a web developer, mostly frontend and then I have plans about taking the media graphic designer (mediegrafiker) education since I also have a passion for digital design.</p> 
                    <span className="h-[10rem] border border-black"></span>  
                    <img src="./images/me.jpg" alt=""  className="w-[15rem] my-4"/>
                </div>
            </article>
            <article className="mx-[5%] my-2">
                <h2 className="text-xl font-semibold">Web developer education</h2>
                <h3 className="underline pt-1">Just to show some examples of what I've learned</h3>
                <h4 className="font-semibold pt-2">How to fetch from an api in react and javascript</h4>
                <img src="./images/axiosfetchwithoutprops.jpg" alt=""  className=""/>
                <p className="py-4 font-semibold">Fetch in Javascript</p>
                <img src="./images/fetchjavascript.jpg" alt="" className="mb-2" />
                </article>
                <article>
                <h3 className="font-semibold">How to fetch an array of things or object</h3>
            </article>
        </article>
        </>
     );
}
 
export default About;