const photos = (state = [], action) => {
  switch (action.type) {
    case 'UPLOAD_PHOTOS':
      console.log(action.photos);
      return action.photos;
    default:
      return state;
  }
}

export default photos;
