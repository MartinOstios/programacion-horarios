import React from 'react'
import './Semester.css'
import { Box } from '../Box/Box'

export const Semester = ({ semester_data, show_semester_number, requirements, onHover }) => {
    return (
        <div className='semester'>
            {show_semester_number ? (
                <p className='num_semestre'>{semester_data.num_semestre}</p>
            ) : null}

            <div className='subjects'>
                {semester_data.asignaturas.map((asignatura) => (
                    <Box subject={asignatura} requirements={requirements} onHover={onHover} />
                ))}
            </div>
        </div>
    )
}
