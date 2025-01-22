import { useState } from 'react'
import './App.css'
import CourseMarks from './Components/CourseMarks/CourseMarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [courseMarks,setCourseMarks] =useState([]);
  const [course_credit,set_credit]= useState(0);
const [remaining,setRemaining]=useState(300)
  
 
  let handleCourseMarks=(credit,course,id)=>{
    
    if (courseMarks.find((mark) => mark.id === id) || remaining<0 ) {
        alert("You can't click that more than once"); // Stop execution if course already exists

     
    } else{
      let rest=(remaining-credit);
      if (rest>=0) {
        let newSetCouseMark = [...courseMarks,course] // Add new course and update credit
setCourseMarks(newSetCouseMark);
set_credit(course_credit + credit);
setRemaining(rest)
      } else {
        alert("You can't add more then credit  300"); 
        
      }

    }
  
}
  

  
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
