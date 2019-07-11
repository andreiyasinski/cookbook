import React from 'react';
import styles from './recipes.module.css';
import RecipeItem from '../recipeItem/recipeItem';

export default class Recipes extends React.Component {
  render() {
    return (
      <ul className={styles.container}>
        {this.props.recipes.map((item, index) => (<RecipeItem key={index} item={item}/>))}
      </ul>
    )
  };
}