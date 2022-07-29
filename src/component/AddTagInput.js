import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTag } from '../state/tagSlice';


const AddTag = ({ placeholder, isOpen, id, handleTagArrayUpdate }) => {
    const dispatch = useDispatch()

    const [tag, setTag] = useState("")

    const handleTag = (e) => {
        e.preventDefault();
        if (tag === "") {
            return;
        } else {
            dispatch(addTag({
                id: id,
                tags: tag,
            }))
            setTag("")
            handleTagArrayUpdate(tag)
        }
    }

    if (!isOpen)
        return (
            <div className="container" id="searchBar">
                <form onSubmit={handleTag}>
                    <input type="text"
                        className="form-control-plaintext"
                        placeholder={placeholder}
                        value={tag}
                        id="tag"
                        onChange={e => setTag(e.target.value)} />
                </form>
            </div>
        )
}

export default AddTag