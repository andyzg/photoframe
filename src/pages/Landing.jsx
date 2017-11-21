import React from 'react';

import UploadButton from '../containers/UploadButton.jsx';

import styles from './landing.css';


class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1> Instaframe </h1>
          <h3> Transform your feed into a beautiful collage of photos</h3>
          <UploadButton className={styles.button} text={'UPLOAD PHOTOS'} fileInput={$('#file-input')} />
          <div className={styles.dragCaption}>Or drag your photos here to start!</div>
        </div>
        <img className={styles.iphone} src="./img/iphone.png" />
      </div>
    );
  }
}

export default Landing
