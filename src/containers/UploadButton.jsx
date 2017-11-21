import { connect } from 'react-redux';
import { configurePhotos } from '../actions/index.js';
import Button from '../components/button/button.jsx';


const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      ownProps.fileInput.trigger('click');
      ownProps.fileInput.change(() => {
        // Once the files are uploaded, let's process the files
        // TODO: Pass in the files to be configured.
        dispatch(configurePhotos());
      });
    }
  }
};

const UploadButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default UploadButton
