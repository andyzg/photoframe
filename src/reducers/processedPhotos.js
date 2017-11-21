const processedPhotos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMPLETE_PHOTO':
      let newState = Object.assign({}, state);
      newState[action.name] = action.imageData;
      console.log('Add new completed photo');
      return newState;
    default:
      return state;
  }
}

export default processedPhotos;
