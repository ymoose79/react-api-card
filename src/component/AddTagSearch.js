import React from 'react'

const AddTag = ({ placeholder, isOpen, check, tag, handleTag }) => {
    if (!isOpen)
        return (
            <div className="container" id="searchBar">
                <form onSubmit={check} className="border-bottom border-2 mb-3">
                    <input type="text"
                        className="form-control-plaintext"
                        placeholder={placeholder}
                        value={tag}
                        onChange={handleTag}
                    />
                </form>
            </div>
        )
}

export default AddTag