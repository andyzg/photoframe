import React from 'react';
import { connect } from 'react-redux';

import { goAbout, goHome } from './actions/index.js';

import Landing from './pages/Landing.jsx';
import Config from './pages/Config.jsx';
import Processing from './pages/Processing.jsx';
import About from './pages/About.jsx';
import ShowPhotos from './pages/ShowPhotos.jsx';

import styles from './app.css';

const LANDING = 'LANDING';
const CONFIG = 'CONFIG';
const PROCESSING = 'PROCESSING';
const ABOUT = 'ABOUT';
const SHOW_PHOTOS = 'SHOW_PHOTOS';


class Nav extends React.Component {

  constructor(props) {
    super(props);
    var hash = window.location.hash.substr(1);
    if (hash === 'about') {
      this.onClickAbout();
    }
  }

  onClickHome() {
    this.props.dispatch(goHome());
  }

  onClickAbout() {
    this.props.dispatch(goAbout());
  }

  render() {
    let classList = [styles.nav];
    if (this.props.page === LANDING) {
      classList.push(styles.disableBackground);
    }
    return (
      <div className={classList.join(' ')}>
        <a onClick={this.onClickHome.bind(this)} className={styles.nav__link} href="#">Home</a>
        <a onClick={this.onClickAbout.bind(this)} className={styles.nav__link} href="#about">About</a>
      </div>
    );
  }
}

let ConnectedNav = connect()(Nav);

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let content = null;
    switch (this.props.page) {
      case CONFIG:
        content = <Config />;
        break;
      case PROCESSING:
        content = <Processing />;
        break;
      case ABOUT:
        content = <About />;
        break;
      case SHOW_PHOTOS:
        content = <ShowPhotos />;
        break;
      case LANDING:
      default:
        content = <Landing />;
        break;
    }

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {content}
        </div>
        {this.props.page === LANDING ? <div className={styles.rightBackground} /> : null}
        <div className={styles.footer}>
          Made by <a href="https://www.instagram.com/andy.fuji/">@andy.fuji</a>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    page: state.page
  }
}

export default connect(
  mapStateToProps
)(App)
