import React from 'react';
import { connect } from 'react-redux';

import { goAbout, goHome } from './actions/index.js';

import Landing from './pages/Landing.jsx';
import Config from './pages/Config.jsx';
import Processing from './pages/Processing.jsx';
import About from './pages/About.jsx';

import styles from './app.css';

const LANDING = 'LANDING';
const CONFIG = 'CONFIG';
const PROCESSING = 'PROCESSING';
const ABOUT = 'ABOUT';


class Nav extends React.Component {

  constructor(props) {
    super(props);
    var hash = window.location.hash.substr(1);
    console.log(hash);
    if (hash === 'about') {
      console.log('hey');
      this.onClickHome();
    }
  }

  onClickHome() {
    this.props.dispatch(goHome());
  }

  onClickAbout() {
    this.props.dispatch(goAbout());
  }

  render() {
    return (
      <div className={styles.nav}>
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
      case LANDING:
      default:
        content = <Landing />;
        break;
    }

    return (
      <div>
        <ConnectedNav />
        <div className={styles.content}>
          {content}
        </div>
        {this.props.page === LANDING ? <div className={styles.rightBackground} /> : null}
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
