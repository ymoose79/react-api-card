import React, { useState } from 'react'
import CardBody from './CardBody';
import TestScores from './TestScores';
import AddTagSearch from './AddTagSearch';
import ExpandGrades from './ExpandGrades';
import { useDispatch } from 'react-redux';
import { addTag } from '../state/tagSlice';
import { useSelector } from 'react-redux';


const StudentCard = ({ student }) => {
    const { grades, email, firstName, lastName, company, skill, pic, id, ...rest } = student;
    const bodyProps = { grades, firstName, lastName, email, company, skill }

    const dispatch = useDispatch()
    const tagStore = useSelector((state) => state.tags)

    // create/handle Open change
    const [isOpen, setIsOpen] = useState(false)
    const handleGrades = () => { setIsOpen(!isOpen) }

    // create/handle tags
    const [tagArray, setTagArray] = useState([])
    const [tagObject, setTagObject] = useState({})
    const [tag, setTag] = useState("")
    const handleTag = (e) => {
        e.preventDefault()
        setTag(e.target.value)
    }

    // feels like this is to clunky, should be sexier way to complete this process, but in the interest of time...
    const check = (e) => {
        e.preventDefault();
        if (tag !== "") {
            dispatch(addTag({
                id: id,
                tags: tag,
            }))
            setTagArray([tag, ...tagArray])
            setTagObject({ id, tagArray })
            setTag("")
        }
        else {
            setTag("")
        }
    }
    const statCheck = () => console.log(tagStore)

    return (
        <div className='border-bottom'>
            <button onClick={statCheck}>button</button>
            <div className="card mx-auto bg-light border-light" style={{ maxWidth: "640px" }}>
                <div className="row g-0 ">
                    <div className="col-md-2 text-center align-self-center">
                        <img src={pic} className="img-fluid rounded-circle border" alt="..." id="image" />
                    </div>
                    <div className="col-9 col-md-8">
                        <div className="card-body">
                            <CardBody props={bodyProps} />
                        </div>
                    </div>
                    <div className='col-2'>
                        <ExpandGrades isOpen={isOpen} handleGrades={() => handleGrades} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 offset-md-2'>
                        <TestScores isOpen={isOpen} grades={grades} />
                        <div className='container'>
                            {tagArray.length > 0 && tagArray.map((tag, i) => {
                                return <button className='btn btn-secondary border-light' id="tags">{tag}</button>
                            })}
                        </div>
                        <AddTagSearch isOpen={isOpen} placeholder={"Add a tag"} check={check} tag={tag} handleTag={handleTag} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StudentCard