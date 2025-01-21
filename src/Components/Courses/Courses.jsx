// import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Courses = ({handleCourseMarks}) => {
    const [courses,setCourses] =useState([]);
    useEffect(()=>{
        fetch('course.json')
      .then(response => response.json())
      .then(json => setCourses(json))
    },[])
    return (
        <div className='lg:w-3/4 gap-3 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                courses.map((course)=><Course course={course} handleCourseMarks={handleCourseMarks} key={course.id}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleCourseMarks:PropTypes.func, 
};

export default Courses;