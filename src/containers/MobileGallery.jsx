import { connect } from 'react-redux';

import PhotoGallery from '../components/photogallery/PhotoGallery.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: state.processedPhotos
  };
};

const MobileGallery = connect(
  mapStateToProps,
)(PhotoGallery);

export default MobileGallery;
