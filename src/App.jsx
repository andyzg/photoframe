import React from 'react';

import Landing from './pages/Landing.jsx';
import Config from './pages/Config.jsx';
import Processing from './pages/Processing.jsx';

import styles from './app.css';

const LANDING = 'LANDING';
const CONFIG = 'CONFIG';
const PROCESSING = 'PROCESSING';


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
      <div className={styles.lol}>
        {content}
      </div>
    );
  }
}

export default App;
