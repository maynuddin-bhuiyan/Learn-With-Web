import { useState , useEffect } from "react";

const useSData = () => {
        //State Declare
        const [courses, setcourses] = useState([]);
   

        //Loaed Data
            useEffect(() => {
                fetch('./web.JSON')
                .then(res => res.json())
                .then(data => setcourses(data))
            },
            []);

            return[courses,setcourses]
}

export default useSData;