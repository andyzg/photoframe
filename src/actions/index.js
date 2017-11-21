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

export const downloadPhotos = () => {
  return {
    type: 'DOWNLOAD_PHOTOS'
  }
}
