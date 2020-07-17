import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyACzdqyzFiSXk_FjwvOXeWzdc7QlYNaNSs',
    authDomain: 'sendit-db-f78aa.firebaseapp.com',
    databaseURL: 'https://sendit-db-f78aa.firebaseio.com',
    projectId: 'sendit-db-f78aa',
    storageBucket: 'sendit-db-f78aa.appspot.com',
    messagingSenderId: '767096823548',
    appId: '1:767096823548:web:7048604b80abe45fd28179',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const siginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
