import React from 'react'

const CardBody = ({ tagArray, props }) => {
    const { firstName, lastName, email, company, skill, grades } = props

    let avg;
    const calcAvg = function (grades) {
        return avg = grades.reduce((a, b) => a + Number(b), 0) / grades.length
    }
    calcAvg(grades)

    return (
        <>
            <h5 className="card-title display-6 fw-bold">{firstName} {lastName}</h5>
            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Email: {email}</small></h6>
            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Company: {company}</small></h6>
            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Skill: {skill}</small></h6>
            <h6 className="card-text ms-md-2" id="text"><small className="text-muted">Average: {avg}%</small></h6>
            {tagArray.length > 0 && tagArray.map((tag, i) => {
                return <button className='btn btn-secondary m-1 border-light' id="tags">{tag}</button>
            })}
        </>
    )
}

export default CardBody