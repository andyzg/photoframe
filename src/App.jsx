import React from 'react';

import Landing from './pages/Landing.jsx';
import Config from './pages/Config.jsx';
import Processing from './pages/Processing.jsx';

import styles from './app.css';

const LANDING = 'LANDING';
const CONFIG = 'CONFIG';
const PROCESSING = 'PROCESSING';


let Nav = (props) => {
  return (
    <div className={styles.nav}>
      <a className={styles.nav__link} href="#">Home</a>
      <a className={styles.nav__link} href="#">About</a>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: LANDING
    };
  }

  render() {
    let content = null;
    switch (this.state.page) {
      case CONFIG:
        content = <Config />;
        break;
      case PROCESSING:
        content = <Processing />;
        break;
      case LANDING:
      default:
        content = <Landing />;
        break;
    }

    return (
      <div>
        <Nav />
        <div className={styles.content}>
          {content}
        </div>
        {this.state.page === LANDING ? <div className={styles.rightBackground} /> : null}
      </div>
    );
  }
}

export default App;
