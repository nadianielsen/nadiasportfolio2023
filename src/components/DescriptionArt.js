

const DescriptionArt = ({heading, text}) => {
    return ( 
        <section className="md:px-[7.5rem] size866:px-28 lg:px-28 size1560:px-[29rem] pt-10 w-[20rem] md:w-full m-auto md:m-0 size1560:text-[1.02rem] ">
            <h2 className="font-semibold">{heading}</h2>
            {text}
        </section>
     );
}
 
export default DescriptionArt;