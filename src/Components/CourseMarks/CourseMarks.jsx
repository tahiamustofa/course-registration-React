// import React from 'react';
import PropTypes from 'prop-types';

import CourseMark from '../CourseMark/CourseMark';
// import { useState } from 'react';

const CourseMarks = ({ courseMarks, course_credit,remaining}) => {
    // let [remo, setRemo] = useState('');
 
let remain = remaining;
    if (remain >= 0) {
        remain= remaining;
       
        return (
            <div className='lg:w-1/5'>
                <h2 className='m-3 font-semibold bg-yellow-200 p-2'>CourseMarks {courseMarks.length}</h2>
                <div>
                 <p className='p-3 m-3 bg-pink-400'>remain {remain}</p>
            </div>
               
                {
                    courseMarks.map(courseMark => <CourseMark key={courseMark} course_credit={course_credit} courseMark={courseMark}></CourseMark>)
                }
                <p className='p-3 m-3 bg-pink-400' id='tag'> credit {course_credit}  </p>
              
            </div>
        );
    } 

    else{
        alert("can't remain negative ");
        return (
            <div className='lg:w-1/5'>
                <h2 className='m-3 font-semibold bg-yellow-200 p-2'>CourseMarks {courseMarks.length}</h2>
               
                {
                    courseMarks.map(courseMark => <CourseMark key={courseMark} course_credit={course_credit} courseMark={courseMark}></CourseMark>)
                }
                <p className='p-3 m-3 bg-pink-400' id='tag'> credit {course_credit}  </p>
              
            </div>
        );
    }
};

CourseMarks.propTypes = {
    courseMarks: PropTypes.array,
    course_credit: PropTypes.number,
    remaining: PropTypes.number,
   
};

export default CourseMarks;