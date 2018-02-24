const page = (state = 'LANDING', action) => {
  switch (action.type) {
    case 'GO_HOME':
      return 'LANDING';
    case 'GO_ABOUT':
      return 'ABOUT';
    case 'SHOW_PHOTOS':
      return 'SHOW_PHOTOS';
    case 'UPLOAD_PHOTOS':
      return 'CONFIG';
    case 'DONE_CONFIG':
      return 'PROCESSING';
    default:
      return state;
  }
}

export default page;
