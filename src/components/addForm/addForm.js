import React from 'react';
import styles from './addForm.module.css';
import defaultImage from '../../assets/default-image.jpg';
import classNames  from 'classnames/bind';
let cn = classNames.bind(styles);

export default class AddForm extends React.Component {
  state = {
    name: '',
    time: '',
    image: defaultImage,
    file: '',
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
    const reader = new FileReader();
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
    const { name, time, image } = this.state;
    const recipe = {
      name: name,
      time: time,
      image: image,
    }
    if (this.state.name.trim()) {
      this.props.addRecipe(recipe);
      this.setState({
        name: '',
        time: '',
        image: defaultImage,
        fileLoaderValue: '',
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
            //className={`${styles.input} ${!this.state.isValid ? styles.invalidInput : ''}`}
            className={cn(styles.input, {invalidInput: !this.state.isValid})}
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
      </div>
    )
  }
}