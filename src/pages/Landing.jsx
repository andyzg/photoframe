import React from 'react';

import styles from './landing.css';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        Landing
      </div>
    );
  }
}

export default Landing;
