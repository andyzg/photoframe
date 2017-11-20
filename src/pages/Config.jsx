import React from 'react';

import styles from './config.css';

class Config extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        Config
      </div>
    );
  }
}

export default Config;
