import React from 'react';

import styles from './style.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let classList = [styles.button, this.props.className];
    if (this.props.isDisabled) {
      classList.push(styles.disabled);
    }

    return (
      <button className={classList.join(' ')} onClick={this.props.isDisabled ? null : this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
