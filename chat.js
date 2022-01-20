user_name=localStorage.getItem("name")
room_name="chatdout"
var firebaseConfig = {
    apiKey: "AIzaSyBFLbPva1qaRIFWeor3oS4winabiy6qNWM",
    authDomain: "chatbook-841f2.firebaseapp.com",
    databaseURL: "https://chatbook-841f2-default-rtdb.firebaseio.com",
    projectId: "chatbook-841f2",
    storageBucket: "chatbook-841f2.appspot.com",
    messagingSenderId: "425698887730",
    appId: "1:425698887730:web:f5e52254c58b8ab9fd542b"
  };
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name_get= message_data["name"]
msg_get= message_data["message"]
like_get= message_data["like"]

name_row_tag= "<h4>"+name_get+"</h4>"
msg_row_tag= "<h4 class='message_h4'>"+msg_get+"</h4>"

mix_row_tag= name_row_tag+msg_row_tag
document.getElementById("output").innerHTML += mix_row_tag
//End code
      } });  }); }
getData();
function send() {
      msg = document.getElementById("msg").value
      firebase. database().ref(room_name).push({ 
      name: user_name, 
      message : msg, 
})
document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("name")
      window.location="index.html"
}



