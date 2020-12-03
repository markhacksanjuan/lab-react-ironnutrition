import React from 'react'
import './styles/FoodBox.css'

const foodBox = (props) => {

    const addFoodToList = (index) => {
        const num = document.getElementById('food'+index).value
        props.addFoodToday(num, index)
    }

    const renderBox = () => {
        return props.foods.map((food, index) => {
            return(
            <div className='box column' key={index}>
                <article className='media'>
                    <div className='media-left'>
                        <figure className='image is-64x64'>
                            <img src={food.image} alt={food.name} />
                        </figure>
                    </div>
                    <div className='media-content'>
                        <div className='content'>
                            <p>
                                <strong>{food.name}</strong>
                                <small>{food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className='media-right'>
                        <div className='field has-addons'>
                            <div className='control'>
                                <input name="food" id={'food' + index} className='input' type='number' />
                            </div>
                            <div className='control'>
                                <button className='button is-info' onClick={() => addFoodToList(index)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            )
        })
    }

    return (
        <div className='food-box'>
        {renderBox()}
        </div>
    )
}

export default foodBox