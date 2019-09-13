import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";


function* fetchStyleInfo() {
    try{
        // GET THE INFO FROM OUR SERVER
        const infoStylesResponse = yield axios.get(`/api/style`);
        // THEN SEND TO REDUX
        console.log('saga response!', infoStylesResponse.data);
        // PUT IS DISPATCH
        yield put ({
            type: 'SET_STYLE',
            payload: infoStylesResponse.data
        });
        
    }catch (error) {
        console.log(error);
    }
}

function* putStyleInfo(action) {
    try{
        // POST THE ITEMS FROM OUR SERVER
        yield axios.post(`/api/style`, action.payload)
        // {beer_style: action.payload.beer_style},
        // {beer_name: action.payload.beer_name},
        // {batch_number: action.payload.batch_number},
        // {hlt_temp: action.payload.hlt_temp},
        // {mash_in_temp: action.payload.mash_in_temp},
        // {mash_out_temp: action.payload.mash_out_temp},
        // {boil_time: action.payload.boil_time},
        // {notes: action.payload.notes});
        yield put ({
            type: 'FETCH_STYLE_INFO',
        })
    }catch(error){
        console.log('ERROR IN POST', error);
    }
}

// function* removeBatchInfo(action) {
//     try{
//         console.log(action.payload);
//         let id = action.payload.id
//         console.log(id);
        
//         yield axios.delete(`/api/batch/${id}`, {user_id: action.payload});
//         yield put ({
//             type: 'FETCH_BATCH_INFO'
//         })
//     }catch(error){
//         console.log(error);
//     }
// }

function* styleSaga() {
    yield takeLatest('FETCH_STYLES_INFO', fetchStyleInfo);
    yield takeEvery('POST_STYLES', putStyleInfo);
    // yield takeLatest('DELETE_STYLES_BATCH', removeStyleInfo);
}

export default styleSaga;