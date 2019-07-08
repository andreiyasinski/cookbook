import React from 'react';
import styles from './recipeItem.module.css';

const RecipeItem = props => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{props.item.name}</h3>
      <p className={styles.time}>{props.item.time}</p>
      <img src={props.item.image} alt='recipe' />
    </div>
  )
}

export default RecipeItem;