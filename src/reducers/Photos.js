const photos = (state = [], action) => {
  switch (action.type) {
    case 'GO_HOME':
      return [];
    case 'GO_ABOUT':
      return [];
    case 'UPLOAD_PHOTOS':
      return action.photos;
    default:
      return state;
  }
}

export default photos;
