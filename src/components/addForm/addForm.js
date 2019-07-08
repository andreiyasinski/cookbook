import React from 'react';
import styles from './addForm.module.css';
import RecipeItem from '../recipeItem/recipeItem';
import defaultImage from '../../assets/default-image.jpg';

export default class AddForm extends React.Component {
  state = {
    name: '',
    time: '',
    image: defaultImage,
    recipes : []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      time: '',
      image: defaultImage,
      recipes: [{name: this.state.name, time: this.state.time, image: defaultImage}, ...this.state.recipes]
    })
  }

  render() {
    const recipeItems = this.state.recipes.map((item, index) => <RecipeItem key={index} item={item} />)
    return (
      <div>
        <form className={styles.add_form} onSubmit={this.handleSubmit}>
          <input
            name = 'name'
            type='text'
            placeholder='Название...'
            className={styles.input}
            value = {this.state.name}
            onChange = {this.handleChange}
          />
          <input
            name = 'time'
            type='text'
            placeholder='Время готовки...'
            className={styles.input}
            value = {this.state.time}
            onChange = {this.handleChange}
          />
          <input 
            type='file'
            className={styles.add_image}
            accept='image/jpeg,image/png'
          />
          <button className={styles.button}>Добавить рецепт</button>
        </form>
        {recipeItems}
      </div>
    )
  }
}