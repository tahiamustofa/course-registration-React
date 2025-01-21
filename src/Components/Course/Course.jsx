import PropTypes from 'prop-types';

const Course = props => {
   let {course,handleCourseMarks}=props;
   let {course_image,course_title,course_description,course_price,course_credit}=course;
    return (
        <div className='shadow-xl bg-yellow-50 p-5 space-y-5 my-5'>
           <div>
            <img className='w-full xl:h-72 lg:h-52' src={course_image}></img>
           </div> 
           <h3 className='text-md font-extrabold'>{course_title}</h3>
           <p>{course_description}</p>
           <div className='flex justify-between'>
            <p className='bg-gray-100 p-2'>course_price:  ${course_price}</p>
            <p> <button className='bg-slate-50 p-2 border-yellow-400 border-2'>credit:</button> {course_credit} hrs</p>
            
           </div>
           <button onClick={()=>handleCourseMarks(course_title,course_credit)} className='mx-auto flex justify-center border-2 border-white shadow-xl px-5 bg-yellow-400 p-2 rounded'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course:PropTypes.object,
    handleCourseMarks:PropTypes.func,
};

export default Course;