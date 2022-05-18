function display(){
    document.getElementById("user").innerHTML = "Name : " + localStorage.getItem("username") ;
    document.getElementById("room").innerHTML = "Room : " + localStorage.getItem("room_name");
}
const firebaseConfig = {
    apiKey: "AIzaSyBiInyIbWv8ZCh68Z47xwLsReu-azYW9IQ",
    authDomain: "project94-6a6c1.firebaseapp.com",
    databaseURL: "https://project94-6a6c1-default-rtdb.firebaseio.com",
    projectId: "project94-6a6c1",
    storageBucket: "project94-6a6c1.appspot.com",
    messagingSenderId: "206368666438",
    appId: "1:206368666438:web:76f239c832e5693954ab47"
  };

  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username") ;
var roomname =  localStorage.getItem("room_name");
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"; 
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: msg,
        likes: 0
    });
    document.getElementById("msg").value = "";
    document.getElementById("message").innerHTML += "<br>" +msg;
}

