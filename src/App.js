import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css'
import FoodBox from './components/FoodBox'
import AddForm from './components/AddForm'
import Search from './components/Search'
import ListToday from './components/ListToday'

class App extends Component {

    state = {
      foods: [...foods],
      showForm: false,
      temporalNewFood : {
        name: '',
        calories: '',
        image: ''
      },

      updateFood : (name, value) => {
        const copyOfTemporalNewFood = {...this.state.temporalNewFood}
        if(name === 'name'){
          copyOfTemporalNewFood.name = value
        }else if(name === 'calories'){
          copyOfTemporalNewFood.calories = value
        }else if(name === 'image'){
          copyOfTemporalNewFood.image = value
        }
        this.setState({temporalNewFood: copyOfTemporalNewFood})
      },
      addFood : (e) => {
        e.preventDefault()
        const copyOfFoods = [...this.state.foods]
        const copyOfTemporalNewFood = {...this.state.temporalNewFood, name: '', calories: '', image: ''}
        copyOfFoods.unshift(this.state.temporalNewFood)
        this.setState({foods: copyOfFoods, temporalNewFood: copyOfTemporalNewFood})
        this.showFormToggle(e)
      },

      searchFood:  [...foods],
      search : (value) => {
        console.log(this.state.searchFood)
        const copyOfFoods = [...this.state.searchFood]
        const newArr = copyOfFoods.filter(item => {
          const newName = item.name.toLowerCase()
          return newName.includes(value)
        })
        this.setState({foods: newArr})
        if(value === ''){
          this.setState({foods: copyOfFoods})
        }
        console.log(copyOfFoods)
      },

      todayFood: [],
      counterCal: 0,

      addFoodToday: (num, index) => {
        const copyTodayFood = [...this.state.todayFood]
        const newFood = {
          num,
          food: this.state.foods[index]
        }
        const newArr = copyTodayFood.filter(item => {
          return item.food.name === newFood.food.name
        })
        copyTodayFood.push(newFood)
        this.setState({
          todayFood: copyTodayFood,
          counterCal: this.state.counterCal + num * newFood.food.calories
        })
      }
    }


    showFormToggle = (e) => {
      e.preventDefault()
     this.state.showForm
     ? this.setState({showForm:false})
     : this.setState({showForm:true})
    }

    render() {
      return (
        <div className="App">
        <button onClick={(e) => this.showFormToggle(e)}>Add Food Form</button>
          <AddForm
          show={this.state.showForm}
          foods={this.state.foods}
          temporalNewFood={this.state.temporalNewFood}
          updateFood={this.state.updateFood}
          addFood={this.state.addFood}
          />
          <Search
          search={this.state.search}
           />
           <div className='columns'>
            <FoodBox
            foods={this.state.foods}
            addFoodToday={this.state.addFoodToday}
            />
            <ListToday
            todayFood={this.state.todayFood}
            counterCal={this.state.counterCal}
             />
           </div>
        </div>
      );
    }
}

export default App;
