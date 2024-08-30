import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2"


const PagesLinks = ({ prevPage, location, page }) => {

    const navigate = useNavigate()

    const prevLink = () => {
        navigate(-1)
    }

    return (
        <div className={`flex gap-x-2 mr-auto ml-4 size300:ml-8 md:ml-20 mt-8`}>
            <button onClick={prevLink} className="hover:text-[#00A5E7] hover:font-semibold hover:transition-colors hover:duration-500 hover:ease-in-out">{prevPage}</button>
            <HiOutlineArrowRight className="mt-1.5" />
            <Link to={location} className="font-semibold underline hover:no-underline hover:duration-300 hover:transition-all hover:ease-in-out">{page}</Link>
        </div>

    );
}

export default PagesLinks;