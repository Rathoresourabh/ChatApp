import firebase from "firebase/app"
import "firebase/auth"

export  const auth = firebase.initializeApp ( {
  apiKey: "AIzaSyBQIxRzXW3d8NcdIHKzFKOo92PxAMrBMy0",
  authDomain: "chatapp-bba01.firebaseapp.com",
  projectId: "chatapp-bba01",
  storageBucket: "chatapp-bba01.appspot.com",
  messagingSenderId: "1064348903132",
  appId: "1:1064348903132:web:6177e29f2673735c88b619"

}).auth();

