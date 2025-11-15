import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";


const DropDown = ({ navHover }) => {

    const [isOpen, setIsOpen] = useState(false);


    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    return (

        <div className="relative hidden size770:block" ref={dropdownRef}>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none flex items-center gap-x-2 "
            >
                HF <IoIosArrowDown />
            </button>

            {isOpen && (
                <ul className="absolute -right-2 mt-2 w-20 flex flex-col justify-center items-center py-3 bg-white text-gray-800 rounded-lg shadow-lg animate-fade-down duration-75 delay-100 ease-in-out">
                    <NavLink to={"/hf1"} className={navHover}>HF1</NavLink>
                    <NavLink to={"/hf2"} className={navHover}>HF2</NavLink>
                </ul>
            )}

        </div>
    );
}

export default DropDown;