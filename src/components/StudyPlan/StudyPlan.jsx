import React, { useState } from 'react'
import { SubjectType } from '../SubjectType/SubjectType';
import './StudyPlan.css';

export const StudyPlan = ({ graph }) => {
    const [highlighted, setHighlighted] = useState([]);

    const handleHover = (requisitos) => {
        setHighlighted(requisitos);
    };
    
    const MICRO = 0;
    const MESO = 1;
    const MACRO = 2;

    return (
        <div className='study-plan'>
            <div>
                <SubjectType type_data={graph[MESO]} requirements={highlighted} onHover={handleHover} show_semester_number />
                <SubjectType type_data={graph[MICRO]} requirements={highlighted} onHover={handleHover} />
                <SubjectType type_data={graph[MACRO]} requirements={highlighted} onHover={handleHover} />
            </div>

        </div>
    )
}
