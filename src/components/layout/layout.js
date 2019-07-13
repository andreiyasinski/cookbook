import React from 'react';
import styles from './layout.module.css';
import Header from '../header/header';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className={styles.main}>
          {this.props.children}
        </main>
      </div>
    )
  };
}