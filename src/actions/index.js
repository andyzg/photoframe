export const uploadPhotos = (photos) => {
  ga('send', 'event', 'Photos', 'upload', 'action', photos.length);
  return {
    type: 'UPLOAD_PHOTOS',
    photos: photos
  }
}

export const addCompletePhoto = (imageData, name) => {
  return {
    type: 'ADD_COMPLETE_PHOTO',
    imageData,
    name
  };
}

export const showPhotos = () => {
  ga('send', 'event', 'Photos', 'showMobile', 'action');
  return {
    type: 'SHOW_PHOTOS'
  }
}

export const downloadPhotos = () => {
  ga('send', 'event', 'Photos', 'download', 'action');
  return {
    type: 'DOWNLOAD_PHOTOS'
  }
}

export const goHome = () => {
  return {
    type: 'GO_HOME'
  }
}

export const goAbout = () => {
  ga('send', 'pageview', 'about');
  return {
    type: 'GO_ABOUT'
  }
}

export const setAspectRatio = (ratio) => {
  return {
    type: 'SET_CONFIG',
    ratio: ratio
  }
}

export const startProcessingPhotos = () => {
  return {
    type: 'DONE_CONFIG',
  }
}
