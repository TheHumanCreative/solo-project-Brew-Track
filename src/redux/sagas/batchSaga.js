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

function* putBatchInfo(action) {
    try{
        // POST THE ITEMS FROM OUR SERVER
        yield axios.post(`/api/batch`, action.payload)
        // {beer_style: action.payload.beer_style},
        // {beer_name: action.payload.beer_name},
        // {batch_number: action.payload.batch_number},
        // {hlt_temp: action.payload.hlt_temp},
        // {mash_in_temp: action.payload.mash_in_temp},
        // {mash_out_temp: action.payload.mash_out_temp},
        // {boil_time: action.payload.boil_time},
        // {notes: action.payload.notes});
        yield put ({
            type: 'FETCH_BATCH_INFO',
        })
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
    yield takeEvery('POST_INFO', putBatchInfo);
    yield takeLatest('DELETE_USER_BATCH', removeBatchInfo);
}

export default batchSaga;