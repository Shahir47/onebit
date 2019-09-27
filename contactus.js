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


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./index.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
