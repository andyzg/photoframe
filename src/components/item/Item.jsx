import React from 'react';

import styles from './style.css';

const PROCESSING = 'Processing';
const COMPLETE = 'Complete';


class ProcessingItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: PROCESSING
    };
  }

  render() {
    if (this.state.status !== COMPLETE) {
      this.props.photo.process((imageData, name) => {
        console.log('Done processing photo');
        this.props.addCompletePhoto(imageData, name);
        this.setState({ status: COMPLETE });
      });
    }

    return (
      <div className={styles.list}>
        {this.state.status}
      </div>
    );
  }
}

export default ProcessingItem;
