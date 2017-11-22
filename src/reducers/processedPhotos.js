const processedPhotos = (state = {}, action) => {
  switch (action.type) {
    case 'GO_HOME':
      return [];
    case 'GO_ABOUT':
      return [];
    case 'ADD_COMPLETE_PHOTO':
      let newState = Object.assign({}, state);
      newState[action.name] = action.imageData;
      return newState;
    default:
      return state;
  }
}

export default processedPhotos;
