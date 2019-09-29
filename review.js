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



var reviewsRef = firebase.database().ref('reviews');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  var email = getInputVal('email');
  var rating = getInputVal('rating');
  var comment = getInputVal('comment');

  // Save review
  savereview(name, email, rating, comment);

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

// Save review to firebase
function savereview(name, email, rating, comment){
  var newreviewRef = reviewsRef.push();
  newreviewRef.set({
    name: name,
    email:email,
    rating:rating,
    comment:comment
  });
}


function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('rating').selectedIndex = 0;
    document.getElementById('comment').value = "";
}
