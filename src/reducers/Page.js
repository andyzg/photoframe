const page = (state = 'LANDING', action) => {
  switch (action.type) {
    case 'CONFIGURE_PHOTOS':
      return 'CONFIG';
    default:
      return 'LANDING';
  }
}

export default page;
