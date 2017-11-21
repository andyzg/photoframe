import { connect } from 'react-redux';

import { configurePhotos } from '../actions/index.js';
import Photo from '../models/Photo.js';
import Button from '../components/button/button.jsx';


const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      let fileInput = ownProps.fileInput;
      fileInput.trigger('click');
      fileInput.change(() => {
        // Once the files are uploaded, let's process the files
        // TODO: Pass in the files to be configured.
        let files = fileInput.prop('files');
        let photoList = [];
        for (let i = 0; i < files.length; i++) {
          photoList.push(new Photo(files[i]));
        }
        dispatch(configurePhotos(photoList));
      });
    }
  }
};

const UploadButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default UploadButton
