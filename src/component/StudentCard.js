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
        <div className='border-bottom'>
            <div className="card mx-auto bg-light" style={{ maxWidth: "640px" }}>
                <div className="row g-0 ">
                    <div className="col-md-2 mt-sm-2 align-self-center ">
                        <img src={pic} className="img-fluid rounded-circle border mx-auto
                    " alt="..." style={{ width: "85%" }} />
                    </div>
                    <div className="col-9 col-md-8">
                        <div className="card-body">
                            <h5 className="card-title display-6 fw-bold">{firstName} {lastName}</h5>
                            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Email: {email}</small></h6>
                            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Company: {company}</small></h6>
                            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Skill: {skill}</small></h6>
                            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Average: {avg}%</small></h6>
                        </div>
                    </div>
                    <div className="col mt-1 justify-content-end">
                        {!isOpen &&
                            <button className='btn text-secondary mt-1 mt-md-2 ps-md-5' data-toggle="collapse" data-target="#showGrades" onClick={() => setIsOpen(!isOpen)}>  <FontAwesomeIcon icon={faPlus} size="2x" id="icon" /></button>}
                        {isOpen &&
                            <button className='btn text-secondary mt-1 mt-md-2 ps-md-5' data-toggle="collapse" data-target="#showGrades" onClick={() => setIsOpen(!isOpen)}>  <FontAwesomeIcon icon={faMinus} size="2x" id="icon" /></button>}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-4 offset-1'>
                        {isOpen && grades.map((grade, i) => {
                            return <h6 className="card-text"><small className="text-muted">Test {i + 1}: {grade}</small></h6>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard