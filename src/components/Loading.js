import { useState, useEffect } from "react";


const Loading = ({layout}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            //sætter loading state til at være false efter 3 sekunder
        }, 3000)
    }, []);

    return ( 
        <>
        {loading ? (<p>Loading...</p>) : (layout)}
        </>
     );
}
 
export default Loading;