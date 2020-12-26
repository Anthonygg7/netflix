import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDhflJaWOLPnFzANx3_qPuxMZCTIMraNtc",
    authDomain: "netflix-4c38c.firebaseapp.com",
    projectId: "netflix-4c38c",
    storageBucket: "netflix-4c38c.appspot.com",
    messagingSenderId: "694552312658",
    appId: "1:694552312658:web:915dad1456fa58c7fd188b"
};

const firebase = Firebase.initializeApp(config);


export { firebase };

