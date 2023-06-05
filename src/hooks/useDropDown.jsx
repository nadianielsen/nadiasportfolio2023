import { useEffect, useState, useRef } from "react";

/**

 * Hook that alerts clicks outside of the passed ref

 */

function useShowDropdown(initialState) {

    const [showDropdown, setShowDropdown] = useState(initialState);

    const ref = useRef(null);



    function handleClickOutside(event) {

        if (ref.current && !ref.current.contains(event.target)) {

            setShowDropdown(false);

        }

    }



    useEffect(() => {

        // Bind the event listener

        document.addEventListener("click", handleClickOutside);

        return () => {

            // Unbind the event listener on clean up

            document.removeEventListener("click", handleClickOutside);

        };

    }, [ref]);



    return { ref, showDropdown, setShowDropdown };

}

export default useShowDropdown;