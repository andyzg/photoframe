import Landing from '../pages/Landing.jsx';
import Config from '../pages/Config.jsx';
import Processing from '../pages/Processing.jsx';


const Page = (state = 'LANDING', action) => {
  switch (action.type) {
    case 'CONFIGURE_PHOTOS':
      return 'CONFIG';
    default:
      return 'LANDING';
  }
}

export default Page;
