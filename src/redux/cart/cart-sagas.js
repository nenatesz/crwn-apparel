import {takeLatest, put, all, call} from 'redux-saga/effects';
import userActionTypes from '../user/user.types';
import {clearCart} from './cart.actions'

export function* clearCartOnSignout(){
   yield put(clearCart())
}

export function* OnSignoutSuccess(){
    yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout)
}

export function* cartSagas(){
   yield all([
       call(OnSignoutSuccess)
    ])
}