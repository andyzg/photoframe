import { connect } from 'react-redux';

import { addCompletePhoto } from '../actions/index.js';

import Item from '../components/item/Item.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: ownProps.item
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCompletePhoto: (imageData, name) => {
      dispatch(addCompletePhoto(imageData, name));
    }
  }
};

const ProcessingItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);

export default ProcessingItem
