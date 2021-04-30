import { takeLatest, call, put } from 'redux-saga/effects';
import { convertColectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertColectionsSnapshotToMap, snapshot);
        yield console.log(collectionsMap)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
};

export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
};



