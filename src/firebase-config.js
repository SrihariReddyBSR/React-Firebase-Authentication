import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAX9yCZNRBe7_2ODfGj7X3WEQ9b-6eFKE4",
  authDomain: "react-firebase-authentic-22aee.firebaseapp.com",
  projectId: "react-firebase-authentic-22aee",
  storageBucket: "react-firebase-authentic-22aee.appspot.com",
  messagingSenderId: "948230920007",
  appId: "1:948230920007:web:3cca7beaff728b67739e62",
  measurementId: "G-DLZLGBW1RX"
};

  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app);

