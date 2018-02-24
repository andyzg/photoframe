import { connect } from 'react-redux';

import Preview from '../components/preview/Preview.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    photo: state.photos[0],
    ratio: state.config
  };
};

const PhotoPreview = connect(
  mapStateToProps,
)(Preview);

export default PhotoPreview
