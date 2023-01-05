
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDK8cqOx7-_HoYnoZLwAPjwzArNZm6I848",
      authDomain: "kwitter-e15d8.firebaseapp.com",
      databaseURL: "https://kwitter-e15d8-default-rtdb.firebaseio.com",
      projectId: "kwitter-e15d8",
      storageBucket: "kwitter-e15d8.appspot.com",
      messagingSenderId: "9238551874",
      appId: "1:9238551874:web:6ccc08af68594f20c77cdb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     function addRoom()
     {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });


      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

     }
     
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}