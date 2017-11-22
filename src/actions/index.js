export const uploadPhotos = (photos) => {
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
  return {
    type: 'SHOW_PHOTOS'
  }
}

export const downloadPhotos = () => {
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
  return {
    type: 'GO_ABOUT'
  }
}
