import React from 'react';

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
      <div>
        Processing
      </div>
    );
  }
}

export default Processing;
