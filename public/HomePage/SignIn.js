import firebase from firebase;


firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  const firebaseConfig = {
    apiKey: "AIzaSyCAcT2Pm-FbZ5D7hQ5pptkRDFr7hgJszgM",
    authDomain: "exagon-fd9d4.firebaseapp.com",
    databaseURL: "https://exagon-fd9d4.firebaseio.com",
    projectId: "exagon-fd9d4",
    storageBucket: "exagon-fd9d4.appspot.com",
    messagingSenderId: "798837430461",
    appId: "1:798837430461:web:58dbf5b97da59276527fd4",
    measurementId: "G-6R8REBMC0P"
  };
  firebase.initializeApp(firebaseConfig);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
    // ...
  });

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });