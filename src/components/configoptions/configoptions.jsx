import React from 'react';
import { connect } from 'react-redux';

import styles from './style.css';
import { setAspectRatio } from '../../actions/index.js';

let OPTIONS = ['fit', 'small-pad', 'big-pad'];
let RATIOS = [1, 0.92, 0.8]


class ConfigOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0 // Full
    }
  }

  generateOption(index) {
    let optionName = OPTIONS[index];
    let classNames = [styles.option];
    if (this.state.selected === index) {
      classNames.push(styles.optionSelected);
    }

    let onClick = () => {
      this.setState({selected: index});
      this.props.setAspectRatio(RATIOS[index]);
    }

    return (
        <div className={classNames.join(' ')} key={index} onClick={onClick}>
          <img src={'./img/' + optionName + '.png'} />
          <div className={styles.optionName}>
            {optionName.replace('-', ' ')}
          </div>
        </div>
    );
  }

  render() {
    let options = [];
    for (let i = 0; i < OPTIONS.length; i++) {
      options.push(this.generateOption(i));
    }

    return (
      <div>
        {options}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAspectRatio: (ratio) => dispatch(setAspectRatio(ratio)),
    }
};

export default connect(null, mapDispatchToProps)(ConfigOptions);
