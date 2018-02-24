import Processor from '../util/processer.js';


class Photo {
  constructor(file) {
    this.file = file;
    this.name = this.file.name;
    this.size = this.file.size;
  }

  static isValidPhoto(file) {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      return true
    }
    return false;
  }

  process(ratio, callback) {
    let processor = new Processor(1080, ratio);
    processor.uploadImageFile(this.file, (canvas) => {
      callback(canvas.toDataURL(), this.file.name);
      canvas.remove();
    });
  }

  render(ratio, callback) {
    let processor = new Processor(1080, ratio);
    processor.uploadImageFile(this.file, (canvas) => {
      callback(canvas.toDataURL(), this.file.name);
      canvas.remove();
    });
  }
}

export default Photo;
