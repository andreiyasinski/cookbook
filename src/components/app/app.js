import React from 'react';
import './app.css';
import AddForm from '../addForm/addForm';
import Recipes from '../recipes/recipes';

export default class App extends React.Component {
  state = {
    recipes : []
  }

  addRecipe = (recipe) => {
    this.setState({
      recipes: [{name: recipe.name, time: recipe.time, image: recipe.image}, ...this.state.recipes]
    })
  }

  render() {
    return (
      <div className="App">
        <AddForm addRecipe={this.addRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    )
  };
}