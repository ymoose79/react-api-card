import React from 'react'

const TestScores = ({ isOpen, grades }) => {
    return (
        <div className='col mb-2'>
            {isOpen && grades.map((grade, i) => {
                return <h6 className="card-text ms-3 ps-1" key={i}><small className="text-muted">Test {i + 1}: {grade}</small></h6>
            })}
        </div>
    )
}

export default TestScores