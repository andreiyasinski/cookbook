import React from 'react';
import styles from './addForm.module.css';
import RecipeItem from '../recipeItem/recipeItem';
import defaultImage from '../../assets/default-image.jpg';

export default class AddForm extends React.Component {
  state = {
    name: '',
    time: '',
    image: defaultImage,
    file: '',
    recipes : [],
    isValid: true
  }

  imagesLoaderRef = React.createRef();

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      isValid: true
    })
  }

  handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {name, time, image} = this.state;
    if (this.state.name.trim()) {
      this.setState({
        name: '',
        time: '',
        image: defaultImage,
        fileLoaderValue: '',
        recipes: [{name: name, time: time, image: image}, ...this.state.recipes]
      });
      this.imagesLoaderRef.current.value = '';
    } else {
      this.setState({isValid: false})
    }
    
  }

  render() {
    
    return (
      <div>
        <form className={styles.add_form} onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Название..."
            className={`${styles.input} ${!this.state.isValid ? styles.invalitInput : ''}`}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="time"
            type="text"
            placeholder="Время готовки..."
            className={styles.input}
            value={this.state.time}
            onChange={this.handleChange}
          />
          <input
            type="file"
            id="image_loader"
            ref={this.imagesLoaderRef}
            className={styles.add_image}
            accept="image/jpeg,image/png"
            onChange={(e)=>this.handleImageChange(e)}
          />
          <button className={styles.button}>Добавить рецепт</button>
        </form>
        <ul>
          {this.state.recipes.map((item, index) => (<RecipeItem key={index} item={item}/>))}
        </ul>
      </div>
    )
  }
}