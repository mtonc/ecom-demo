import { takeLatest, put, all, call } from 'redux-saga/effects'

import userActionTypes from '../user/user.types'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import { 
	signInSuccess,
	signInFailure,
} from './user.actions'

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser()
		if (!userAuth) return
		yield getSnapshotFromUserAuth(userAuth)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onCheckUserSession() {
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth)
		const userSnapshot = yield userRef.get()
		yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data() }))
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* singIngWithGoogle() {
	try {
		const {user} = yield auth.signInWithPopup(googleProvider)
		yield getSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}	
}

export function* onGoogleSingInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, singIngWithGoogle);
}

export function* signInWithEmail({payload : { email, password }}) {
	try {
		const {user} = yield auth.signInWithEmailAndPassword(email, password)
		yield getSnapshotFromUserAuth(user)
	} catch (error) {
		put(signInFailure(error)) 
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* userSagas() {
	yield all(
		[
			call(onGoogleSingInStart),
			call(onEmailSignInStart),
			call(onCheckUserSession)
		]
	)
}
