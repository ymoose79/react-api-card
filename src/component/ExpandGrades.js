import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


const ExpandGrades = ({ isOpen, handleGrades }) => {


    return (
        <div className="col mt-1 text-end">
            {!isOpen &&
                <button className='btn mt-1 mt-md-2 ps-md-5' id="plusMinus" data-toggle="collapse" data-target="#showGrades" onClick={handleGrades(isOpen)}>  <FontAwesomeIcon icon={faPlus} size="2x" id="icon" /></button>}
            {isOpen &&
                <button className='btn mt-1 mt-md-2 ps-md-5' id="plusMinus" data-toggle="collapse" data-target="#showGrades" onClick={handleGrades(isOpen)}>  <FontAwesomeIcon icon={faMinus} size="2x" id="icon" /></button>}
        </div>
    )
}

export default ExpandGrades