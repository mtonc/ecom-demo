import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBO13n_rkDRkh_s-AIE0KoL4IjVLyYg9CM",
	authDomain: "ecom-demo-6022e.firebaseapp.com",
	databaseURL: "https://ecom-demo-6022e.firebaseio.com",
	projectId: "ecom-demo-6022e",
	storageBucket: "ecom-demo-6022e.appspot.com",
	messagingSenderId: "634670845600",
	appId: "1:634670845600:web:3a020669f6b31f8518c3c5",
	measurementId: "G-E7Y8QDE1XN"
};

export const createUserProfileDocument = async (userAuth, data) => {
	if (!userAuth) {
		console.log(userAuth)
		return
	}

	console.log(userAuth);
	
	const userRef = firestore.doc(`/users/${userAuth.uid}`)
	const snapShot = await userRef.get()

	
	if (!snapShot.exists) {
		const { displayName, email, data } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...data
			})
		} catch (err) {
			throw new Error("Failed retrieving user document")
		}
	}

	return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth)
		}, reject)
	})
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey)
	console.log(collectionRef)

	const batch = firestore.batch()
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj)
	})

	return await batch.commit()
}

export const convertCollectionsSnaphotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	})

	return transformedCollection.reduce((accumaltor, collection) => {
		accumaltor[collection.title.toLowerCase()] = collection
		return accumaltor
	}, {})
}
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export default firebase;