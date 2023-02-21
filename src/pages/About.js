


const About = () => {
    return ( 
        <article className="w-[50%] h-full m-auto grid ">
            <article className="">
                <h2 className="text-xl font-semibold">About</h2>
                <h3 className="underline pt-1">Information about me</h3>
                <p>My name is Nadia Nielsen and I am 18 years old. I come from Denmark and I am right now taking the web developer education.</p>
                <p>My plan is to become a web developer, mostly frontend and the I have plans about taking the media graphic designer (mediegrafiker) education since I also have a passion for digital design.</p>
            </article>
            <article className="">
                <h2 className="text-xl font-semibold">Web developer education</h2>
                <h3 className="underline pt-1">Just to show some examples of what I've learned</h3>
                <h4 className="font-semibold pt-2">How to fetch from an api in react and javascript</h4>
                <img src="./images/axiosfetchwithoutprops.jpg" alt=""  className="my-2"/>
                <img src="./images/fetchjavascript.jpg" alt="" className="mb-2" />
            </article>
            <article>
                <h3 className="font-semibold">How to fetch an array of things or object</h3>
            </article>
        </article>
     );
}
 
export default About;