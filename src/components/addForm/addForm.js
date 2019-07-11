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
    inputBg: ''
  }

  imageLoaderRef = React.createRef();

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      inputBg: ''
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
    if (this.state.name.trim()) {
      this.setState({
        name: '',
        time: '',
        image: defaultImage,
        fileLoaderValue: '',
        recipes: [{name: this.state.name, time: this.state.time, image: this.state.image}, ...this.state.recipes]
      });
      this.imageLoaderRef.current.value = '';
    } else {
      this.setState({inputBg: "rgba(255, 0, 0, 0.15)"})
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
            className={styles.input}
            value={this.state.name}
            onChange={this.handleChange}
            style={{background: `${this.state.inputBg}`}}
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
            ref={this.imageLoaderRef}
            className={styles.add_image}
            accept="image/jpeg,image/png"
            onChange={(e)=>this.handleImageChange(e)}
          />
          <button className={styles.button}>Добавить рецепт</button>
        </form>
        {this.state.recipes.map((item, index) => (<RecipeItem key={index} item={item}/>))}
      </div>
    )
  }
}