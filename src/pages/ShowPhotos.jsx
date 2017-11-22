import React from 'react';

import MobileGallery from '../containers/MobileGallery.jsx';

import styles from './showphotos.css';

class ShowPhotos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}> Download </h2>
        <h4 className={styles.title}> Hold touch on each photo to download them. </h4>
        <MobileGallery />
      </div>
    );
  }
}

export default ShowPhotos;
