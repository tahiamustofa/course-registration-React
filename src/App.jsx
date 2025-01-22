import { useState } from 'react'
import './App.css'
import CourseMarks from './Components/CourseMarks/CourseMarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [courseMarks,setCourseMarks] =useState([]);
  const [course_credit,set_credit]= useState(0);

  // let p = 0
  //   if () {
  //      p = p + course_credit ;
       
  //   //    setRemo(document.getElementById('tag').classList.remove("hidden"));
       
  //   } else {
  //       alert('pls select in 300hrs')
  //   }

  let handleCourseMarks=(credit,course,id)=>{
    
    if (courseMarks.find((mark) => mark.id === id) ) {
        alert("You can't click that more than once"); // Stop execution if course already exists

     
    } else{
      if (course_credit < 300) {
        let newSetCouseMark = [...courseMarks,course] // Add new course and update credit
setCourseMarks(newSetCouseMark);
set_credit(course_credit + credit);
      } else {
        alert("You can't add more then credit  300"); 
        
      }

    }
  
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
