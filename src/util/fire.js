import * as firebase from "firebase/app";
import "firebase/database";

var fire = firebase.initializeApp({
    apiKey: "AIzaSyCaF0-ueWJwDmf56JDvu_VtB5lKiHSA2u0",
    authDomain: "turnos-rc.firebaseapp.com",
    databaseURL: "https://turnos-rc.firebaseio.com",
    projectId: "turnos-rc",
    storageBucket: "turnos-rc.appspot.com",
    messagingSenderId: "980944687121",
    appId: "1:980944687121:web:18282199994a60eef021b0"
  }, 'turnos');

  export default fire;