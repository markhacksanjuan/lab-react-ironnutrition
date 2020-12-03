import React from 'react'

const formNewFood = (props) => {

    const onInputChange = (e) => {
        props.updateFood(e.target.name, e.target.value)
    }


    if(!props.show){
        return null
    }
    return (
        <div>
            <form onSubmit={props.addFood}>
                <label htmlFor='name'>Name:</label>
                <input
                type='text'
                name='name'
                value={props.temporalNewFood.name}
                onChange={(e)=>onInputChange(e)}
                 />
                <label htmlFor='calories'>Calories:</label>
                <input
                type='number'
                name='calories'
                value={props.temporalNewFood.calories}
                onChange={(e)=>onInputChange(e)}
                />
                <label htmlFor='image'>Image:</label>
                <input
                type='text'
                name='image'
                value={props.temporalNewFood.image}
                onChange={(e)=>onInputChange(e)}
                />
                <button type='submit'>Add Food</button>
            </form>
        </div>
    )
}

export default formNewFood