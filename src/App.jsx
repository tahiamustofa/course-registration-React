import { useState } from 'react'
import './App.css'
import CourseMarks from './Components/CourseMarks/CourseMarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [courseMarks,setCourseMarks] =useState([]);
  const [course_credit,set_credit]= useState(0);
  let handleCourseMarks=(title,credit)=>{
    let newCourseMarks = [...courseMarks,title];
    setCourseMarks(newCourseMarks);

    set_credit(course_credit + credit);
    
}
  let remaining = 300 - course_credit;

  return (
    <>
    
      <div>
        <Header></Header>
      </div>
     
      <div className='lg:flex lg:gap-5 md:mx-5'>
        <Courses handleCourseMarks={handleCourseMarks}></Courses>
        <CourseMarks course_credit={course_credit} courseMarks={courseMarks} remaining={remaining}></CourseMarks>
      </div>
      
    </>
  )
}

export default App
