import { connect } from 'react-redux';
import { startProcessingPhotos } from '../actions/index.js';

import Button from '../components/button/button.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (aspectRatio) => {
      dispatch(startProcessingPhotos());
    }
  }
};

const DoneConfigButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default DoneConfigButton
