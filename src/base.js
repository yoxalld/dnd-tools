import Rebase from "re-base";
import * as firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIE9X9alWeFa-z0SPMkgjYixfct4Yw-fs",
  authDomain: "dnd-combat-tracker.firebaseapp.com",
  databaseURL: "https://dnd-combat-tracker.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
