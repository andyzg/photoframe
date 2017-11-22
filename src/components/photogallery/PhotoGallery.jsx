import React from 'react';

import styles from './style.css';

class PhotoGallery extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let photos = this.props.photos;
    let galleryElement = [];
    let index = 0;
    for (let i in photos) {
      galleryElement.push(
        <img className={styles.photo} src={photos[i]} alt={i} key={index++} />
      );
    }

    return (
      <div className={styles.list}>
        {galleryElement}
      </div>
    );
  }
}

export default PhotoGallery;

