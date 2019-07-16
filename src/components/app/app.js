import React from 'react';
import Layout from '../layout/layout';
import Profile from '../profile/profile';
import AddForm from '../addForm/addForm';
import Recipes from '../recipes/recipes';
import RecipeDetails from '../recipeDetails/recipeDetails';
import { Route, Switch } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

export default class App extends React.Component {
  state = {
    recipes : []
  }

  addRecipe = (recipe) => {
    this.setState({
      recipes: [{
        name: recipe.name,
        time: recipe.time,
        image: recipe.image,
        id: uuidv4()
      }, ...this.state.recipes]
    })
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/add" render={() => <AddForm addRecipe={this.addRecipe} />} />
          <Route path="/" exact render={() => <Recipes recipes={this.state.recipes} />} />
          <Route
            path="/recipe/:id"
            render={(props) => <RecipeDetails {...props} recipes={this.state.recipes} />}
            exact
          />
        </Switch>
      </Layout>
    )
  };
}