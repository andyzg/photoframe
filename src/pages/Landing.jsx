import React from 'react';

import styles from './landing.css';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1> Instaframe </h1>
          <h3> Transform your feed into a beautiful collage of photos</h3>
        </div>
        <img className={styles.iphone} src="./img/iphone.png" />
      </div>
    );
  }
}

export default Landing;
