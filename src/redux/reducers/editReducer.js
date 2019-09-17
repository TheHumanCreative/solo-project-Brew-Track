// this deals with the given / selected batch from the log book page.


const editReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ITEM":
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

export default editReducer;
