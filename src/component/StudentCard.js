import React, { useState } from 'react'
import CardBody from './CardBody';
import TestScores from './TestScores';
import AddTagSearch from './AddTagSearch';
import ExpandGrades from './ExpandGrades';


const StudentCard = ({ student, tagArray }) => {
    const { grades, email, firstName, lastName, company, skill, pic, id, ...rest } = student;
    const bodyProps = { grades, firstName, lastName, email, company, skill }

    // create/handle Open change
    const [isOpen, setIsOpen] = useState(false)
    const handleGrades = () => { setIsOpen(!isOpen) }

    // create/handle tags
    const [tagArr, setTagArr] = useState([])
    const [tag, setTag] = useState("")
    const handleTag = (e) => {
        e.preventDefault()
        setTag(e.target.value)
    }

    // feels like this is to clunky, should be sexier way to complete this process, but in the interest of time...
    const check = (e) => {
        e.preventDefault();
        tag !== "" ? setTagArr([tag, ...tagArr]) : setTag("");
        setTag("")
    }

    return (
        <div className='border-bottom'>
            <div className="card mx-auto bg-light border-light" style={{ maxWidth: "640px" }}>
                <div className="row g-0 ">
                    <div className="col-md-2 text-center align-self-center">
                        <img src={pic} className="img-fluid rounded-circle border" alt="..." id="image" />
                    </div>
                    <div className="col-9 col-md-8">
                        <div className="card-body">
                            <CardBody tagArray={tagArr} props={bodyProps} isOpen={isOpen} handleGrades={() => handleGrades} />
                        </div>
                    </div>
                    <ExpandGrades isOpen={isOpen} handleGrades={() => handleGrades} />
                    <AddTagSearch isOpen={isOpen} placeholder={"Add a tag"} check={check} tag={tag} handleTag={handleTag} />
                </div>
                <div className="row justiy-content-start">
                    <TestScores isOpen={isOpen} grades={grades} />
                </div>
            </div>
        </div>
    )
}

export default StudentCard