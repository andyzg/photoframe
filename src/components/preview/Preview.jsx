import React from 'react';

import styles from './style.css';

class Preview extends React.Component {

  constructor(props) {
    super(props);
    this.canvas = null;
    this.state = {}
  }

  render() {
    if (!this.state[this.props.ratio]) {
      this.props.photo.process(this.props.ratio, (imageData, name) => {
        this.setState({ [this.props.ratio]: imageData });
      });
    }

    let src = this.state[this.props.ratio];
    if (!src) {
      return (
        <div className={styles.loading}>
          Loading
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <img className={styles.preview} src={src} />
        <div className={styles.previewText}>
          Preview
        </div>
      </div>
    );
  }
}

export default Preview;
