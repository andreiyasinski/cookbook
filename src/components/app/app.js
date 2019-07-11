import React from 'react';
import './app.css';
import AddForm from '../addForm/addForm';

export default class App extends React.Component {
  state = {
    recipes : []
  }

  addRecipe = (name, time, image) => {
    this.setState({
      recipes: [{name: name, time: time, image: image}, ...this.state.recipes]
    })
  }

  render() {
    return (
      <div className="App">
        <AddForm />
      </div>
    )
  };
}