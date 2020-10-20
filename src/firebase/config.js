import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBFIoxCBou3nE-rCX6sc-QH9CphLmyYeP8',
  authDomain: 'dev3027-firegram.firebaseapp.com',
  databaseURL: 'https://dev3027-firegram.firebaseio.com',
  projectId: 'dev3027-firegram',
  storageBucket: 'dev3027-firegram.appspot.com',
  messagingSenderId: '712599670033',
  appId: '1:712599670033:web:f04a792b5a99820e06d0b0'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }
