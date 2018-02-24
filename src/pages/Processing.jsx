import React from 'react';

import ProcessingPhotoList from '../containers/ProcessingList.jsx';
import DownloadButton from '../containers/DownloadButton.jsx';

import styles from './processing.css';

class Processing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2> Processing your photos... </h2>
        <h4> This should take just a moment. </h4>
        <div className={styles.divider} />
        <ProcessingPhotoList />
        <div className={styles.divider} />
        <DownloadButton className={styles.downloadButton} text={'DOWNLOAD'} />
        <a className={styles.back} href='/photoframe'>
          Click here to upload more
        </a>
      </div>
    );
  }
}

export default Processing;
