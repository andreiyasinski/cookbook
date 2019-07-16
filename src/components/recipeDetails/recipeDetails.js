import React from 'react';
import RecipeItem from '../recipeItem/recipeItem';

export default class RecipeDetails extends React.Component {
  state = {
    recipe : {}
  }

  componentDidMount() {
    const {recipes, match} = this.props;
    const matchRecipe = recipes.find(recipe => recipe.id === match.params.id);
    this.setState({
      recipe: matchRecipe,
    })
  }

  render() {
    const { recipe } = this.state;
      if (recipe) {
        return (
          <RecipeItem item={this.state.recipe} />
        )
      }
      return null;
  };
}