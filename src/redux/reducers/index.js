import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import batchReducer from './batchReducer'; // ADDED
import styleReducer from './styleReducer'; // ADDED
import editReducer from './editReducer'; // ADDED 
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage.
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown.
  user, // will have an id and username if someone is logged in.
  batchReducer, //will contain the item posted in form input.
  styleReducer, //will contain the styles from the style table in Database.
  editReducer, //will contain the one batch from the database selected on the logbook page to edit / update the item and send it back into the Database. 
});

export default rootReducer;
