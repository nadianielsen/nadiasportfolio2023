import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2"


const GalleryPagesLinks = ({location, page}) => {
    return ( 
        <div className="flex gap-x-2 mr-auto ml-40 mt-8">
        <Link to={"/gallery"} className="hover:text-[#f03fa9] hover:font-semibold transition-all">Gallery</Link>
        <HiOutlineArrowRight className="mt-1.5" />
        <Link to={location} className="font-semibold underline">{page}</Link>
    </div>

     );
}
 
export default GalleryPagesLinks;