const download = store => next => action => {
  console.log(action.type);
  if (action.type === 'DOWNLOAD_PHOTOS') {
    let photos = store.getState().processedPhotos;
    let zip = new JSZip();
    let folder = zip.folder('photos');
    for (let name in photos) {
      folder.file(name,
        photos[name].replace(/^data:image\/(png|jpg);base64,/, ""),
        { base64: true }
      );
    }

    zip.generateAsync({ type: 'blob' })
      .then((content) => {
        saveAs(content, 'photos.zip');
      });
  }

  return next(action);
}

export default download;
