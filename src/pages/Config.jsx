import React from 'react';

import styles from './config.css';

import DoneConfigButton from '../containers/DoneConfigButton.jsx';
import PhotoPreview from '../containers/PhotoPreview.jsx';
import ConfigOptions from '../components/configoptions/configoptions.jsx';

class Config extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}> One last step... </h2>
          <h4>Choose how much padding you want your framed photo to have.</h4>
          <PhotoPreview />
          <ConfigOptions />
        </div>
        <DoneConfigButton text="DONE" />
      </div>
    );
  }
}

export default Config;
