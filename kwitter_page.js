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
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}
