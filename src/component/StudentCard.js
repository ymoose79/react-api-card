import React, { useState } from 'react'
import CardBody from './CardBody';
import TestScores from './TestScores';
import AddTagInput from './AddTagInput';
import ExpandGrades from './ExpandGrades';
import { useSelector } from 'react-redux';


const StudentCard = ({ student }) => {
    const { grades, email, firstName, lastName, company, skill, pic, id } = student;
    const fName = firstName.toUpperCase();
    const lName = lastName.toUpperCase();
    // packaged up props to send in CardBody component
    const bodyProps = { grades, fName, lName, email, company, skill }

    // convert store to corresponding tag list
    const tagStore = useSelector((state) => state.tags)
    const checkTags = tagStore.filter(tagIds => tagIds.id === id)
    const cardTagsArray = checkTags[0] ? checkTags[0].tags : [];



    // create/handle Open change
    const [isOpen, setIsOpen] = useState(false)
    const handleGrades = () => { setIsOpen(!isOpen) }

    const [tagListArray, settagListArray] = useState(cardTagsArray)

    const handleTagArrayUpdate = (tag) => {
        settagListArray([...tagListArray, tag])
    }

    return (
        <div className='border-bottom' key={id}>
            <div className="card bg-light border-light">
                <div className="row g-0 ">
                    <div className="col-md-2 text-center align-self-center">
                        <img src={pic} className="img-fluid rounded-circle border" alt="..." id="image" />
                    </div>
                    <div className="col-10 col-md-8">
                        <div className="card-body">
                            <CardBody props={bodyProps} />
                        </div>
                    </div>
                    <div className='col-2'>
                        <ExpandGrades isOpen={isOpen} handleGrades={() => handleGrades} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 offset-md-2'>
                        <TestScores isOpen={isOpen} grades={grades} />
                        <div className='container'>
                            {tagListArray?.length > 0 && tagListArray.map((tag, i) => {
                                return <button className='btn btn-secondary border-light' id="tags" key={i}>{tag}</button>
                            })}
                        </div>
                        <AddTagInput isOpen={isOpen} placeholder={"Add a tag"} id={id} handleTagArrayUpdate={handleTagArrayUpdate} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StudentCard