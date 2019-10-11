var firebaseConfig = {
    apiKey: "AIzaSyCkKpxvHegsjoibzKVzpZ1LdIP83vXzayY",
    authDomain: "pcshop-a1ced.firebaseapp.com",
    databaseURL: "https://pcshop-a1ced.firebaseio.com",
    projectId: "pcshop-a1ced",
    storageBucket: "",
    messagingSenderId: "790080678035",
    appId: "1:790080678035:web:40a624da6ca43327984566",
    measurementId: "G-MMFW1QKB2Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var newsRef = firebase.database().ref('newsletter');

document.getElementById('news').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');

  // Save message
  saveMessage(email);

  document.getElementById('news').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email){
  var newNewsRef = newsRef.push();
  newNewsRef.set({
    email:email
  });
}
