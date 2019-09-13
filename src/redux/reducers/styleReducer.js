const styleReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STYLE':
      return action.payload;
    default:
      return state;
  }
};

export default styleReducer;
