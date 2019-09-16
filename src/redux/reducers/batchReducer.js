const batchReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_INFO":
      return action.payload;
    case "UPDATE":
      return {
        ...state,
        [action.payload.propertyName]: action.payload.value
      };
    default:
      return state;
  }
};

export default batchReducer;
