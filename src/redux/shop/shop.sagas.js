import { takeLatest, call, put, all } from 'redux-saga/effects'

import { firestore, convertCollectionsSnaphotToMap } from '../../firebase/firebase.utils'
import ShopActionTypes from './shop.types'
import {
	fetchCollectionsSuccess,
	fetchCollectionsError
} from './shop.actions'

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collection')
		console.log(collectionRef)
		const snapshot = yield collectionRef.get()
		console.log(snapshot)
		const collectionsMap = yield call(convertCollectionsSnaphotToMap, snapshot)
		yield put(fetchCollectionsSuccess(collectionsMap))
	} catch (error) {
		yield put(fetchCollectionsError(error.message))
	}
	// collectionRef.get().then(snapshot => {
	// 	const collectionsMap = convertCollectionsSnaphotToMap(snapshot)
	// 	dispatch(fetchCollectionsSuccess(collectionsMap))
	// }).catch(error => dispatch(fetchCollectionsError(error.message)))
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	)
}

export function* shopSagas() {
	yield all([
		call(fetchCollectionsStart)
	])
}