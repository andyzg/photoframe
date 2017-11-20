import React from 'react';

import styles from './style.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.button + ' ' + this.props.className} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
