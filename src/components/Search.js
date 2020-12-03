import React from 'react'

const search = (props) => {

    const onInputChange = (e) => {
        props.search(e.target.value)
    }

    return(

    <div>
        <input
        type='search'
        onChange={(e)=>onInputChange(e)}
        >
        
        </input>
    </div>
    )
}

export default search