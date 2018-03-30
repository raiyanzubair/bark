import firebase from 'firebase';

const CONFIG = {
    apiKey: "AIzaSyDjIYo8oFUBP3zKcieDIUqt_Lygx-HXVxg",
    authDomain: "csesoc-bark.firebaseapp.com",
    databaseURL: "https://csesoc-bark.firebaseio.com",
    projectId: "csesoc-bark",
    storageBucket: "csesoc-bark.appspot.com",
    messagingSenderId: "269342216095"
}

export const Firebase = firebase.initializeApp(CONFIG)
