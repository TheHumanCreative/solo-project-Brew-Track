import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";


function* fetchBatchInfo() {
    try{
        // GET THE INFO FROM OUR SERVER
        const infoDetailsResponse = yield axios.get(`/api/batch`);
        // THEN SEND TO REDUX
        console.log('saga response!', infoDetailsResponse.data);
        // PUT IS DISPATCH
        yield put ({
            type: 'SET_INFO',
            payload: infoDetailsResponse.data
        });
        
    }catch (error) {
        console.log(error);
    }
}

function* putBatchItem(action) {
    try{
        console.log(action.payload);
        
        // POST THE ITEMS FROM OUR SERVER
        yield axios.post(`/api/batch`, action.payload);
        yield put ({
            type: 'FETCH_BATCH_INFO',
        })
        // go to a new page
        action.history.push('/logbook')
    }catch(error){
        console.log('ERROR IN POST', error);
    }
}

function* removeBatchInfo(action) {
    try{
        console.log(action.payload);
        let id = action.payload.id
        console.log(id);
        
        yield axios.delete(`/api/batch/${id}`, {user_id: action.payload});
        yield put ({
            type: 'FETCH_BATCH_INFO'
        })
    }catch(error){
        console.log(error);
    }
}

function* batchSaga() {
    yield takeLatest('FETCH_BATCH_INFO', fetchBatchInfo);
    yield takeEvery('POST_INFO', putBatchItem);
    yield takeLatest('DELETE_USER_BATCH', removeBatchInfo);
    // yield takeEvery('UPDATE', updateBatchInfo);
}

export default batchSaga;