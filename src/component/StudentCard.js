import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const StudentCard = (student) => {
    const newStudent = student.student
    const { grades, email, firstName, lastName, company, skill, pic, ...rest } = newStudent;

    const [isOpen, setIsOpen] = useState(false)

    let avg;
    const calcAvg = function (grades) {
        return avg = grades.reduce((a, b) => a + Number(b), 0) / grades.length
    }
    calcAvg(grades)


    return (
        <>
            <div className="card mx-auto border-light" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-4 text-center align-self-center">
                        <img src={pic} className="img-fluid rounded-circle border border-dark border" alt="..." style={{ width: "65%" }} />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">{firstName} {lastName}</h5>
                            <h6 className="card-text"><small className="text-muted">Email: {email}</small></h6>
                            <h6 className="card-text"><small className="text-muted">Company: {company}</small></h6>
                            <h6 className="card-text"><small className="text-muted">Skil: {skill}</small></h6>
                            <h6 className="card-text"><small className="text-muted">Average: {avg}</small></h6>

                        </div>
                    </div>
                    <div className="col-auto">
                        {!isOpen &&
                            <button className='btn text-secondary' data-toggle="collapse" data-target="#showGrades" onClick={() => setIsOpen(!isOpen)}>  <FontAwesomeIcon icon={faPlus} size="2x" /></button>}
                        {isOpen &&
                            <button className='btn text-secondary hover-primary' data-toggle="collapse" data-target="#showGrades" onClick={() => setIsOpen(!isOpen)}>  <FontAwesomeIcon icon={faMinus} size="2x" /></button>}
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div className='col-4 offset-1'>
                        {isOpen && grades.map((grade, i) => {
                            return <h6 className="card-text"><small className="text-muted">Test {i + 1}: {grade}</small></h6>
                        })}
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default StudentCard