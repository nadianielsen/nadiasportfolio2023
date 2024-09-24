

const DescriptionArt = ({heading, text}) => {
    return ( 
        <section className="md:px-[7.5rem] size866:px-28 lg:px-40 pt-10 w-[20rem] md:w-full m-auto md:m-0">
            <h2 className="font-semibold">{heading}</h2>
            {text}
        </section>
     );
}
 
export default DescriptionArt;