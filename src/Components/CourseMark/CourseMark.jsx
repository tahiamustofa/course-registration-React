// import React from 'react'
import PropTypes from 'prop-types'

function CourseMark(props) {
    const {courseMark}= props;
    const {course_title} = courseMark
  return (
    <div>
      <h3 className='bg-purple-300 p-4 m-3 shadow-xl'>{course_title}</h3>
    </div>
  )
}

CourseMark.propTypes = {
    courseMark:PropTypes.string,
    course_credit:PropTypes.number,
}

export default CourseMark
