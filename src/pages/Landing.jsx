import React from 'react';

import Button from '../components/button/button.jsx';

import styles from './landing.css';


class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onClick() {
    $('#file-input').trigger('click');
    $('#file-input').change(this.onUploadComplete);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1> Instaframe </h1>
          <h3> Transform your feed into a beautiful collage of photos</h3>
          <Button className={styles.button} text={'UPLOAD PHOTOS'} onClick={this.onClick.bind(this)} />
          <div className={styles.dragCaption}>Or drag your photos here to start!</div>
        </div>
        <img className={styles.iphone} src="./img/iphone.png" />
      </div>
    );
  }
}

export default Landing;
