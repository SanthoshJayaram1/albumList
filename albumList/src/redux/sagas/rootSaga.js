import { getAlbumAPI,updateAlbumAPI,deleteAlbumByIdAPI,createAlbumAPI } from '../api/api'
import { setAlbumSlice,addedAlbumSlice,deletedAlbumSlice,editedAlbumSlice} from '../slices/albumSlice'; 
import { put,takeLatest } from 'redux-saga/effects';
import { all } from "redux-saga/effects";

// these are the generator functions invoked  from watcher functions
 function* getAlbumSaga() {
    try{
        const albums = yield getAlbumAPI();
        yield put(setAlbumSlice(albums.data));
        //  put work as a dispatch function here
    }catch(error){
       console.log(error);
    }  
}

 function* createAlbumSaga(action) {
    yield createAlbumAPI(action.payload);
    yield put(addedAlbumSlice(action.payload));
}

 function* updateAlbumSaga(action) {
    yield updateAlbumAPI(action.payload);
    yield put(editedAlbumSlice(action.payload))
}

 function* deleteAlbumByIdSaga(action) {
    yield deleteAlbumByIdAPI(action.payload)
    yield put(deletedAlbumSlice(action.payload))
}

// watchergetAlbum,watchercreateAlbum,watcherupdateAlbum,watcherdeleteAlbum,,,all these are watcher functions watch for dispatch functioncalls made. 
// if getAlbumSaga is dispacthed then this wathcher function automatically calls the callback function getAlbumSaga automatically
 function* watchergetAlbum() {
    yield takeLatest('albums/getAlbumSlice', getAlbumSaga)   
}

function* watchercreateAlbum() {
    yield takeLatest('albums/addAlbumSlice', createAlbumSaga)
}
function* watcherupdateAlbum() {
    yield takeLatest('albums/editAlbumSlice', updateAlbumSaga)
}
function* watcherdeleteAlbum() {
    yield takeLatest('albums/deleteAlbumSlice', deleteAlbumByIdSaga)
}

// here {all} keyword calls all watcher functions at same time
 function* rootSaga() {
    yield all([
        watchergetAlbum(),watchercreateAlbum(),watcherupdateAlbum(),watcherdeleteAlbum()
    ])
}
export default rootSaga;