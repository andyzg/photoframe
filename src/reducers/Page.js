const page = (state = 'LANDING', action) => {
  switch (action.type) {
    case 'GO_HOME':
      return 'LANDING';
    case 'GO_ABOUT':
      return 'ABOUT';
    case 'UPLOAD_PHOTOS':
      return 'PROCESSING';
    default:
      return state;
  }
}

export default page;
