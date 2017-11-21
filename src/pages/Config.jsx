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
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}> One last step... </h2>
          <h4> What kind of framing style do you want?</h4>
        </div>
      </div>
    );
  }
}

export default Config;
