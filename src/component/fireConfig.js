
import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/database";
import "firebase/storage"
// import firebase from 'firebase/app';





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCv5xBj2zrUcsMa0lY5AEt4GxmRE43bvhA",
   authDomain: "madewithlove-66030.firebaseapp.com",
   databaseURL: "https://madewithlove-66030-default-rtdb.firebaseio.com",
   projectId: "madewithlove-66030",
   storageBucket: "madewithlove-66030.appspot.com",
   messagingSenderId: "775277027301",
   appId: "1:775277027301:web:9d334a027ce3118e42990c",
   measurementId: "G-TL22YMYX6M"
 };


const app = firebase.initializeApp(firebaseConfig)

var storage = firebase.storage();
export { storage,  app, firebase as default }
 

