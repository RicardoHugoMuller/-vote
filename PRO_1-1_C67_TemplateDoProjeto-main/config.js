import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCWO1hwvX7NVirzEorX2BRR5ojxwGyddK4",
        authDomain: "vote-48cf2.firebaseapp.com",
        databaseURL: "https://vote-48cf2-default-rtdb.firebaseio.com",
        projectId: "vote-48cf2",
        storageBucket: "vote-48cf2.appspot.com",
        messagingSenderId: "496066624440",
        appId: "1:496066624440:web:e00d50cb1ffcb50017ed4d"
      };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();