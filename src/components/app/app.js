import React from 'react';
import Layout from '../layout/layout';
import Profile from '../profile/profile';
import AddForm from '../addForm/addForm';
import Recipes from '../recipes/recipes';
import {Route, Switch} from 'react-router-dom';

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
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/add" render={() => <AddForm addRecipe={this.addRecipe} />} />
          <Route path="/" exact render={() => <Recipes recipes={this.state.recipes}/>} />
        </Switch>
      </Layout>
    )
  };
}