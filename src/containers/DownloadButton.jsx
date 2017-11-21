import { connect } from 'react-redux';

import Button from '../components/button/button.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    isDisabled: true // TODO
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
    }
  }
};

const DownloadButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default DownloadButton

