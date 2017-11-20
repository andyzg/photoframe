
let CANVAS_ID = 'canvas';
let TEST_URL = 'https://github.com/andyzg/gallery/blob/gh-pages/photos/California/DSCF1894.jpg?raw=true'
let LENGTH = 1080;

/**
 * This is the function that will take care of image extracting and
 * setting proper filename for the download.
 * IMPORTANT: Call it from within a onclick event.
*/
let downloadCanvasLink = (link, filename) => {
  link.href = document.getElementById(CANVAS_ID).toDataURL();
  link.download = filename;
};

let loadImage = (ctx, image, padding) => {
  ctx.fillRect(0, 0, LENGTH, LENGTH);
  let longerLength = image.width > image.height ? image.width : image.height;
  let shorterLength = image.width > image.height ? image.height : image.width;
  let resultLongerLength = padding * LENGTH;
  let resultShorterLength = resultLongerLength * 1.0 / longerLength * shorterLength;

  let smallPadding = (LENGTH - resultLongerLength) / 2;
  let bigPadding = (LENGTH - resultShorterLength) / 2;

  let x = image.width > image.height ? smallPadding : bigPadding;
  let y = image.width > image.height ? bigPadding : smallPadding;

  let resultWidth = image.width > image.height ? resultLongerLength : resultShorterLength;
  let resultHeight = image.width > image.height ? resultShorterLength : resultLongerLength;
  ctx.drawImage(image, x, y, resultWidth, resultHeight);
};

$(document).ready(() => {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, LENGTH, LENGTH);
  let image = new Image();

  let previewFile = () => {
    let file = $('.file-input').prop('files');
    if (file[0] && !(file[0].type === 'image/jpeg' || file[0].type === 'image/png')) {
      alert('Need to upload an image.');
      e.preventDefault();
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onloadend = function(r) {
      console.log(reader.result);
      image.src = reader.result;
      image.setAttribute('crossOrigin', 'anonymous');
      image.onload = function() {
        loadImage(ctx, image, 0.92);
      };
    };
  };

  $('.file-input').change(previewFile);

  $('.download').click(downloadCanvasLink.bind(this, $('.download')[0], 'result.jpg'));
});
