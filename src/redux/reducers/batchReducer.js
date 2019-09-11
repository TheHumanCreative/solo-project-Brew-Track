const batchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default batchReducer;
