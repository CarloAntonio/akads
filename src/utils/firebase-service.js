import firebase from "firebase/app";
import 'firebase/auth';

const getEnvEndpoint = () => {
  switch(process.env.NODE_ENV){
    case "development": {
      return "http://localhost:5001/akads-4dd8d/us-central1/api/";
    }
    case "production": {
      return "https://us-central1-akads-4dd8d.cloudfunctions.net/api/";
    }
    default: {
      return "http://localhost:5001/akads-4dd8d/us-central1/api/";
    }
  }
}

// This is safe to expose to the client, see:
// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
const firebaseConfig = {
  apiKey: "AIzaSyAGE4jerf-skC7QnSohIyucnpsoZlvWy5g",
  authDomain: "akads-4dd8d.firebaseapp.com",
  databaseURL: "https://akads-4dd8d.firebaseio.com",
  projectId: "akads-4dd8d",
  storageBucket: "akads-4dd8d.appspot.com",
  messagingSenderId: "879587152716",
  appId: "1:879587152716:web:ecf212006be23351be35e9",
  measurementId: "G-RXNR68KR4N"
};

firebase.initializeApp(firebaseConfig);

export const envEndpoint = getEnvEndpoint();
export const auth = firebase.auth;
export default firebase;