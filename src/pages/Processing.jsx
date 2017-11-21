import React from 'react';

import ProcessingPhotoList from '../containers/ProcessingList.jsx';
import DownloadButton from '../containers/DownloadButton.jsx';

import styles from './processing.css';

class Processing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <h2> Processing your photos... </h2>
        <h4> This should take just a moment. </h4>
        <ProcessingPhotoList />
        <DownloadButton text={'DOWNLOAD'} />
      </div>
    );
  }
}

export default Processing;
