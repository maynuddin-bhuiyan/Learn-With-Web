/*---------------------------------------------------------------
      File  Initialize                
---------------------------------------------------------------*/

import Iteam from '../Iteam/Iteam';
import useSData from '../useData/useSData';
import "./Course.css";


const Course = () => {
//State Declare
    const [courses] = useSData([]);
   

// All Course Item Generate
    return (
        <div className="Couse-full">
        <div className="Couses">
            <h1>Choose From Our Top Courses</h1>

            <div className="Couse">
                {
                courses.map(course => <Iteam
                     key={course.id}
                     course= {course}
                     />)
            }
            </div>
        </div>
        </div>
    );
};


// Export File
export default Course;