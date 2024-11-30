import React from 'react'
import './SubjectType.css'
import { Semester } from '../Semester/Semester'

export const SubjectType = ( {type_data, show_semester_number, requirements, onHover} ) => {
  return (
    <div className='subject-type'>
        <p className='type-name'>{type_data.tipo}</p>
        <div className='subject-semesters'>
            {type_data.semestres.map((semestre) => (
                <Semester semester_data={semestre} show_semester_number={show_semester_number} requirements={requirements} onHover={onHover} />
            ))}
        </div>
    </div>
  )
}
