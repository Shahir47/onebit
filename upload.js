


const form = document.querySelector('.contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('shahir').add({
        name: form.name.value,
        email: form.email.value,
        comment: form.comment.value
    });
    form.name.value = '';
    form.email.value = '';
    form.comment.value = '';


  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


   setTimeout(function(){
    document.location.href="./index.html";
  },3050);

});