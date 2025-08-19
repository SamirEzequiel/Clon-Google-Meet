import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, push, set, onValue, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBHAIoSU1-ZOmIT1DsJ0aTn328OaRoMxy4",
  authDomain: "goole-meet-4f705.firebaseapp.com",
  projectId: "goole-meet-4f705",
  storageBucket: "goole-meet-4f705.firebasestorage.app",
  messagingSenderId: "938902710113",
  appId: "1:938902710113:web:bd14b1aee830434d6c8720",
  measurementId: "G-HEPHV8RBPL",
  site: "goole-meet-4f705-66028"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

let firepadRef = ref(db);

if (roomId) {
  firepadRef = ref(db, roomId);
} else {
  firepadRef = ref(db, `rooms/${Math.random().toString(36).substr(2, 9)}`);
  window.history.replaceState(null, "Meet", `?id=${firepadRef.key}`);
}

// Helper functions for Firebase operations
export const firebaseHelpers = {
  child: (parentRef, path) => child(parentRef, path),
  push: (ref) => push(ref),
  set: (ref, data) => set(ref, data),
  onValue: (ref, callback) => onValue(ref, callback),
  onChildAdded: (ref, callback) => onChildAdded(ref, callback),
  onChildChanged: (ref, callback) => onChildChanged(ref, callback),
  onChildRemoved: (ref, callback) => onChildRemoved(ref, callback),
};

export default firepadRef;