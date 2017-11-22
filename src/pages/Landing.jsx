import React from 'react';

import UploadButton from '../containers/UploadButton.jsx';

import styles from './landing.css';


class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onPhoneClick() {
    ga('send', 'pageview', 'mobile-phone-instagram');
  }

  onGalleryClick() {
    ga('send', 'pageview', 'mobile-gallery-instagram');
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1> Photoframe </h1>
          <h3> Transform your feed into a beautiful collage of photos</h3>
          <UploadButton className={styles.button} text={'UPLOAD PHOTOS'} fileInput={$('#file-input')} />
        </div>
        <a onClick={this.onPhoneClick} href="https://www.instagram.com/andy.fuji"><img className={styles.iphone} src="./img/iphone.png" /></a>
        <a onClick={this.onGalleryClick} href="https://www.instagram.com/andy.fuji"><img className={styles.gallery} src="./img/background-full.png" /></a>
      </div>
    );
  }
}

// TODO: Implement this
// <div className={styles.dragCaption}>Or drag your photos here to start!</div>

export default Landing
