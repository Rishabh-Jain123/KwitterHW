const firebaseConfig = {
  apiKey: "AIzaSyAAqdAIcFLR2lPPMHXVH9Syqjf-TqF2q0Y",
  authDomain: "kwitter-f313b.firebaseapp.com",
  databaseURL: "https://kwitter-f313b-default-rtdb.firebaseio.com",
  projectId: "kwitter-f313b",
  storageBucket: "kwitter-f313b.appspot.com",
  messagingSenderId: "289254362227",
  appId: "1:289254362227:web:b88660934f1385a3bb6e06",
  measurementId: "G-JHHW6BB6NK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
});
});

}

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
window.location = "kwitter.html";
}
