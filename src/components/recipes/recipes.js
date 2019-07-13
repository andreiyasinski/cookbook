import React from 'react';
import styles from './recipes.module.css';
import RecipeItem from '../recipeItem/recipeItem';

export default class Recipes extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>List of recipes:</h3>
        <ul className={styles.list}>
          {this.props.recipes.map((item, index) => (<RecipeItem key={index} item={item}/>))}
        </ul>
      </div>
    )
  };
}