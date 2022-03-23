import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBuXHrD8VnVFBfZSwhFuPP9nfwxDBKp1xQ',
    authDomain: 'tevi-entrenar.firebaseapp.com',
    databaseURL: 'https://tevi-entrenar-default-rtdb.firebaseio.com',
    projectId: 'tevi-entrenar',
    storageBucket: 'tevi-entrenar.appspot.com',
    messagingSenderId: '637963393291',
    appId: '1:637963393291:web:e8e3a5ceb148f340606a0e',
    measurementId: 'G-BLGH6JLL6D',
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const fb = firebase
const db = firebase.firestore()
const storage = firebase.storage()

export { db, fb, auth, storage }
