// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBW0pNdjWgX6dOF488NzR7SlOY2vRb_ILk",
    authDomain: "lets-chat-web-app-e404f.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-e404f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-e404f",
    storageBucket: "lets-chat-web-app-e404f.appspot.com",
    messagingSenderId: "1089095214791",
    appId: "1:1089095214791:web:5664ad8ba8dd448e0d40e2",
    measurementId: "G-H2XQZX0X5Y"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
    
}



