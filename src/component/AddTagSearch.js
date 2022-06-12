import React from 'react'

const AddTag = ({ placeholder, isOpen, check, tag, handleTag }) => {
    if (!isOpen)
        return (
            <div className="row" id="searchBar">
                <div className="col-4 mbs-1 offset-2" style={{ maxWidth: "640px" }}>
                    <form onSubmit={check}>
                        <input type="text"
                            className="form-control-plaintext"
                            placeholder={placeholder}
                            value={tag}
                            onChange={handleTag}
                        />
                    </form>
                </div>
            </div>
        )
}

export default AddTag