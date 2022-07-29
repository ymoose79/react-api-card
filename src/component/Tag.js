import React from 'react'
import { useSelector } from 'react-redux';


const Tag = ({ tags }) => {

    const tagStore = useSelector((state) => state.tags)

    tagStore.forEach(tagStudent => {
        for (let key in tagStudent) {
            console.log(`${key}: ${tagStudent[key]}`)
        }
    })

    console.log(tags)
    const statCheck = () => console.log(tagStore)

    return (

        <div>
            {/* {tagArray.length > 0 && tagArray.map((tag, i) => {
                return <button className='btn btn-secondary border-light' id={tag} key={i}>{tagStore[i].tags}</button>
            })} */}
        </div>
    )
}

export default Tag