const processedPhotos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMPLETE_PHOTO':
      let newState = Object.assign({}, state, {
        name: action.name,
        data: action.imageData
      });
    default:
      return state;
  }
}

export default processedPhotos;
