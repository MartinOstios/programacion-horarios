import React, { useState } from 'react';
import './Box.css';

export const Box = ({ subject, requirements, onHover }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        if (subject['requisitos']){
            onHover(subject['requisitos']);
        } else{
            onHover([]);
        }
        
    };

    const handleMouseLeave = () => {
        setHovered(false);
        onHover([]);
    };

    const getColor = () => {
        if (hovered) {
            return 'blue'; // Color cuando está seleccionado (hovered)
        } else if (requirements.includes(subject.codigo)) {
            return 'red'; // Color de los requisitos
        } else {
            return 'black'; // Color predeterminado
        }
    };


    return (
        <div className='subject-box' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className='subject-upper' style={{ backgroundColor: subject?.vista ? 'lightblue' : 'white', color: getColor() }}>
                <div className='subject-name'>
                    {subject.nombre}
                </div>
            </div>
            <div className='subject-lower'>
                <div className='subject-code'>
                    {subject.codigo}
                </div>
                <div className='subject-credits'>
                    {subject.creditos}
                </div>
            </div>
            {subject?.req_creditos ? (
                <div className='subject-credits-req'>
                    {subject.req_creditos}
                </div>
            ) : null}
        </div>
    )
}

