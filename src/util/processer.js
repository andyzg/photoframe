class Processor {

  constructor(length, aspectRatio) {
    length *= 2;
    this.canvas = document.createElement('canvas');
    this.canvas.width = length;
    this.canvas.height = length;
    this.canvas.style.display = 'none';
    document.body.appendChild(this.canvas);
    this.canvas.style.display = 'none';
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, length, length);

    this.length = length;
    this.image = new Image();
    this.aspectRatio = aspectRatio;
    this.reader = new FileReader();

    this.callback = null;
  }

  uploadImageFile(imageFile, callback) {
    if (!(imageFile.type === 'image/jpeg' || imageFile.type === 'image/png')) {
      alert('Need to upload an image.');
      e.preventDefault();
      return;
    }

    this.callback = callback;
    this.reader.readAsDataURL(imageFile);
    this.reader.onloadend = this.onReaderComplete.bind(this);
  }

  onReaderComplete() {
    this.image.src = this.reader.result;
    this.image.setAttribute('crossOrigin', 'anonymous');
    this.image.onload = this.onLoadImage.bind(this);
  }

  onLoadImage() {
    this.ctx.fillRect(0, 0, this.length, this.length);
    let image = this.image;

    let longerLength = image.width > image.height ? image.width : image.height;
    let shorterLength = image.width > image.height ? image.height : image.width;
    let resultLongerLength = this.aspectRatio * this.length;
    let resultShorterLength = resultLongerLength * 1.0 / longerLength * shorterLength;

    let smallPadding = (this.length - resultLongerLength) / 2;
    let bigPadding = (this.length - resultShorterLength) / 2;

    let x = image.width > image.height ? smallPadding : bigPadding;
    let y = image.width > image.height ? bigPadding : smallPadding;

    let resultWidth = image.width > image.height ? resultLongerLength : resultShorterLength;
    let resultHeight = image.width > image.height ? resultShorterLength : resultLongerLength;
    this.ctx.drawImage(image, x, y, resultWidth, resultHeight);


    this.callback(this.canvas);
  }
}

export default Processor;
