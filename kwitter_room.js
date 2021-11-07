
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCI3FPSAca2qWERb-W8ItHESLtiRbbB7ns",
      authDomain: "kwitter-2638e.firebaseapp.com",
      databaseURL: "https://kwitter-2638e-default-rtdb.firebaseio.com",
      projectId: "kwitter-2638e",
      storageBucket: "kwitter-2638e.appspot.com",
      messagingSenderId: "238023066005",
      appId: "1:238023066005:web:dc7407491b297e6f08f69c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
