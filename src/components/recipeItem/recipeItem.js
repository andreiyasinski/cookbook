import React from 'react';
import styles from './recipeItem.module.css';
import defaultImage from '../../assets/default-image.jpg';
import PropTypes from 'prop-types';

const RecipeItem = props => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{props.item.name}</h3>
      <p className={styles.time}>{props.item.time}</p>
      <img src={props.item.image || defaultImage} className={styles.image} alt="recipe" />
    </div>
  )
}

RecipeItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string,
    image: PropTypes.string
  })
}

export default RecipeItem;