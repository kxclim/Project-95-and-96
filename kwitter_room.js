var firebaseConfig = {
  apiKey: "AIzaSyA76JdWYUaXao4ebcMF5xjLr9eYoXF07k8",
  authDomain: "kwitterdatabasee.firebaseapp.com",
  databaseURL: "https://kwitterdatabasee-default-rtdb.firebaseio.com",
  projectId: "kwitterdatabasee",
  storageBucket: "kwitterdatabasee.appspot.com",
  messagingSenderId: "243260966564",
  appId: "1:243260966564:web:7a1922e1980840d2364831"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update
({
purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}