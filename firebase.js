var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyDyORV4gH9kUFOBuN4QIKEsHWd_LdIt5T8",
  authDomain: "js-auth-8b1da.firebaseapp.com",
  projectId: "js-auth-8b1da",
  storageBucket: "js-auth-8b1da.appspot.com",
  messagingSenderId: "512479170686",
  appId: "1:512479170686:web:d5e38d7a0936e28aedc82f"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}




