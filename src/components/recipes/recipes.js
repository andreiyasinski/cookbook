import React from 'react';
import styles from './recipes.module.css';
import RecipeItem from '../recipeItem/recipeItem';
import { Link } from 'react-router-dom';

export default class Recipes extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <h3>List of recipes:</h3>
        <ul className={styles.list}>
          {this.props.recipes.map(item => (
            <li>
              <Link className={styles.container} to={`/recipe/${item.id}`}>
                <RecipeItem key={item.id} item={item}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  };
}