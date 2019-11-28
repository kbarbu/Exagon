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
    // createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential>
    //<script type="text/javascript" src="HomePage/SignIn.js"></script>
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


// Authenticate with the first user then save the currentUser to a local variable
var previousUser = firebase.auth().currentUser;

// Authenticate with a second method and get a credential
// This example shows an email/password credential, but you can get credentials from any auth provider
// Note that using an OAuth provider as your se
var credential = firebase.auth.EmailPasswordAuthProvider.credential(email, password);
previousUser.link(credential)
 .catch(function (error) {
   // Linking will often fail if the account has already been linked. Handle these cases manually.
 });

// OAuth providers authenticate in an asynchronous manner, so you’ll want to perform the link account link in the callback.
var previousUser = firebase.auth().currentUser;
firebase.auth().signInWithPopup(new firebase.authGoogleAuthProvider())
 .then(function (result) {
 return previousUser.link(result.credential);
 })
 .catch(function (err) {
   // Handle error
 });