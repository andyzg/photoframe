import { connect } from 'react-redux';

import PhotoList from '../components/photolist/photolist.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.photos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {}
  }
};

const ProcessingPhotoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);

export default ProcessingPhotoList
