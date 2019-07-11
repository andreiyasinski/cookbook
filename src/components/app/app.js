import React from 'react';
import './app.css';
import AddForm from '../addForm/addForm';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddForm />
      </div>
    )
  };
}