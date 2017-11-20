$(document).ready(() => {
  $('.file-input').change(() => {
    let file = $('.file-input').prop('files');
    if (file[0] && !(file[0].type === 'image/jpeg' || file[0].type === 'image/png')) {
      alert('Need to upload an image.');
      e.preventDefault();
      return;
    }

    let pf = new PhotoFrame('canvas', 1080, 0.92);
    pf.uploadImageFile(file[0], (dataUrl) => {
      $('.download')[0].href = dataUrl;
      $('.download')[0].download = file[0].name;
    });
  });
});
