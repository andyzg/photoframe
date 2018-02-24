const config = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CONFIG':
      console.log(action.ratio);
      return action.ratio;
    default:
      return state;
  }
}

export default config;
