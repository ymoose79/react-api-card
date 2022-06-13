import React from 'react'

const SearchBar = ({ inputInfo, handleInputChange, placeholder, check }) => {
    return (
        <div className="row justify-content-center" id="searchBar">
            <form onSubmit={check}>
                <div className="col bg-light border-bottom mt-1">
                    <input type="text"
                        className="form-control-plaintext"
                        placeholder={placeholder}
                        value={inputInfo}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar