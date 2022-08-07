import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBRMUHeLc52HxqG4DzNl-q91-HLP52Q7ws",
  authDomain: "portfolio-dev-51f6c.firebaseapp.com",
  projectId: "portfolio-dev-51f6c",
  storageBucket: "portfolio-dev-51f6c.appspot.com",
  messagingSenderId: "969105948620",
  appId: "1:969105948620:web:359b27dc69f1318f652769",
});

export const auth = app.auth();
export default app;
