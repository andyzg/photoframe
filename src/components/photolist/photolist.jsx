import React from 'react';

import ProcessingItem from '../../containers/ProcessingItem.jsx';

import styles from './style.css';

class PhotoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let photos = this.props.photos;
    let processingItems = photos.map((item, index) => {
      return <ProcessingItem item={item} key={index} />
    });

    return (
      <div className={styles.list}>
        {processingItems}
      </div>
    );
  }
}

export default PhotoList;
