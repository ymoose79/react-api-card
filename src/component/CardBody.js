import React from 'react'

const CardBody = ({ props }) => {
    const { fName, lName, email, company, skill, grades } = props

    let avg;
    const calcAvg = function (grades) {
        return avg = grades.reduce((a, b) => a + Number(b), 0) / grades.length
    }
    calcAvg(grades)

    return (
        <>
            <h1 className="card-title fw-bold">{fName} {lName}</h1>
            <h6 className="card-text ms-md-2" id="text"><small >Email: {email}</small></h6>
            <h6 className="card-text ms-md-2" id="text"><small >Company: {company}</small></h6>
            <h6 className="card-text ms-md-2" id="text"><small >Skill: {skill}</small></h6>
            <h6 className="card-text ms-md-2" id="text"><small >Average: {avg}%</small></h6>

        </>
    )
}

export default CardBody