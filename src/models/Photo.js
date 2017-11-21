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

  process(callback) {
    let processor = new Processor(1080, 0.952);
    processor.uploadImageFile(this.file, (data) => {
      callback(data, this.file.name);
    });
  }
}

export default Photo;
