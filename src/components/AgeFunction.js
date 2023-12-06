import { useState, useEffect } from "react";
import moment from "moment";
//moment.js kan blive brugt til f.eks. at regne alder ud eller år, måneder, dage.

const AgeFunction = () => {

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
        <>
            <p className="sm:text-xl ">Hello and welcome. My name is Nadia Nielsen and I am {age} years old. I come from Denmark and I have just finished the web developer education.</p>
        </>
     );
}
 
export default AgeFunction;