import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";


// go to the database and target the id and get that one id to edit. 
function* fetchBatchItem(action) {
    try{
        // GET THE INFO FROM OUR SERVER
        const infoBatchResponse = yield axios.get(`/api/edit/${action.payload}`);
        // THEN SEND TO REDUX
        console.log('saga response!', infoBatchResponse.data);
        // PUT IS DISPATCH
        yield put ({
            type: 'SET_ITEM',
            payload: infoBatchResponse.data
        });
        
    }catch (error) {
        console.log(error);
    }
};

// function* putBatchItem(action) {
//   try {
//     // POST THE ITEMS FROM OUR SERVER
//     yield axios.post(`/api/batch`, action.payload);
//     yield put({
//       type: "FETCH_BATCH_ITEM"
//     });
//   } catch (error) {
//     console.log("ERROR IN POST", error);
//   }
// }

// update a single batch / item from the database as the edit page will allow for the user to 
// change the values inputted from the first time when the batch was created. 
function* updateBatchItem(action) {
  console.log("updating Batch:", action.payload);
  try {
    yield axios.put(`/api/edit/`, action.payload);
    yield put({
      type: "FETCH_BATCH_INFO"
    });
  } catch (error) {
    console.log("Error in PUT", error);
  }
}

function* editSaga() {
  yield takeLatest("FETCH_BATCH_ITEM", fetchBatchItem);
//   yield takeLatest("FETCH_BATCH_ITEM")
  yield takeEvery("UPDATE", updateBatchItem);
}

export default editSaga;