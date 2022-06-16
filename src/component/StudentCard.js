import React, { useState } from 'react'
import CardBody from './CardBody';
import TestScores from './TestScores';
import AddTagSearch from './AddTagSearch';
import ExpandGrades from './ExpandGrades';
import { useDispatch } from 'react-redux';
import { addTag, replaceTagArr } from '../state/tagSlice';
import { useSelector } from 'react-redux';


const StudentCard = ({ student }) => {
    const { grades, email, firstName, lastName, company, skill, pic, id } = student;
    const fName = firstName.toUpperCase();
    const lName = lastName.toUpperCase();

    // packaged up props to send in CardBody component
    const bodyProps = { grades, fName, lName, email, company, skill }

    // set up store via redux toolki
    const dispatch = useDispatch()
    const tagStore = useSelector((state) => state.tags)

    // create/handle Open change
    const [isOpen, setIsOpen] = useState(false)
    const handleGrades = () => { setIsOpen(!isOpen) }

    // create/handle tags
    const [tagArray, setTagArray] = useState([])
    const [tag, setTag] = useState("")

    const handleTag = (e) => {
        e.preventDefault()
        setTag(e.target.value)
    }

    const handleTagSubmit = (e) => {
        e.preventDefault();
        if (tag === "") {
            return;
        }
        setTagArray([tag, ...tagArray])
        if (tagArray < 1) {
            dispatch(addTag({
                id: id,
                tags: tag,
            }))
        } else {
            dispatch(replaceTagArr({
                id: id,
                tags: tagArray,
            }))
        }
        setTag("")
    }

    // check store: linked w/ button below
    // const statCheck = () => console.log(tagStore)

    return (
        <div className='border-bottom' key={id}>
            {/* <button onClick={statCheck}>button</button> */}
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
                            {tagArray.length > 0 && tagArray.map((tag, i) => {
                                return <button className='btn btn-secondary border-light' id="tags">{tag}</button>
                            })}
                        </div>
                        <AddTagSearch isOpen={isOpen} placeholder={"Add a tag"} handleTagSubmit={handleTagSubmit} tag={tag} handleTag={handleTag} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StudentCard