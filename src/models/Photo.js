class Photo {
  constructor(file) {
    this.lastModified = file.lastModified;
    this.lastModifiedDate = file.lastModifiedDate;
    this.name = file.name;
    this.size = file.size;
    this.type = file.type;
  }

  static isValidPhoto(file) {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      return true
    }
    return false;
  }
}

export default Photo;
