import { connect } from 'react-redux';
import { downloadPhotos, showPhotos } from '../actions/index.js';

import Button from '../components/button/button.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    isDisabled: state.photos.length !== Object.keys(state.processedPhotos).length,
    photos: state.processedPhotos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      if (window.isMobileOrTablet()) {
        dispatch(showPhotos());
      } else {
        dispatch(downloadPhotos());
      }
    }
  }
};

const DownloadButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default DownloadButton
