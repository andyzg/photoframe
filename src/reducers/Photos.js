const photos = (state = [], action) => {
  switch (action.type) {
    case 'CONFIGURE_PHOTOS':
      return action.photos;
    default:
      return state;
  }
}

export default photos;
