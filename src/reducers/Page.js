const page = (state = 'LANDING', action) => {
  switch (action.type) {
    case 'UPLOAD_PHOTOS':
      return 'PROCESSING';
    default:
      return state;
  }
}

export default page;
