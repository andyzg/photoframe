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
      this.props.photo.process(this.props.ratio, (imageData, name) => {
        this.props.addCompletePhoto(imageData, name);
        this.setState({ status: COMPLETE });
      });
    }

    let classList = [styles.container];
    if (this.state.status === COMPLETE) {
      classList.push(styles.success);
    }

    return (
      <div className={classList.join(' ')}>
        <div className={styles.filename}>
          {this.props.photo.name}
        </div>
        <div className={styles.status}>
          {this.state.status}
        </div>
      </div>
    );
  }
}

export default ProcessingItem;
