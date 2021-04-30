import { convertColectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

//  the Redux Thunk 
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertColectionsSnapshotToMap(snapshot);
            // dispatch the action of getting the collections object from the firestore to the reducer
            dispatch(fetchCollectionsSuccess(collectionsMap))            
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
} 
    