import React from 'react'

const listToday = (props) => {

    const renderList = () => {
        return props.todayFood.map((food, index) => {
            return (
                <li key={index}>{food.num} {food.food.name} = {food.num * food.food.calories} cal</li>
            )
        })
    }

    return (
        <div className='column'>
            <h2>Today's food</h2>
            <ul>
                {renderList()}
            </ul>
            <p>{props.counterCal}</p>
        </div>
    )
}

export default listToday