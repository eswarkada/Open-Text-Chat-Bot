// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQOWS9D_w9blW9Fs5WL-JyBOIL3oLRaY",
  authDomain: "textchatbot-b4252.firebaseapp.com",
  databaseURL: "https://textchatbot-b4252-default-rtdb.firebaseio.com",
  projectId: "textchatbot-b4252",
  storageBucket: "textchatbot-b4252.appspot.com",
  messagingSenderId: "853405439058",
  appId: "1:853405439058:web:258e081ed7effaa46b7b8b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();


const username = prompt("What's your name?");

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("chat-txt");
  const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + messages.usr + " : " + messages.msg + "</li>";
  document.getElementById("messages").innerHTML += msg;
});
