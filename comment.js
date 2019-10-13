const cafeList = document.querySelector('#cafe-list');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let comment = document.createElement('span');

//    let notun = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    comment.textContent = doc.data().comment;
    email.textContent = doc.data().email;
    name.textContent = doc.data().name;
//    notun.textContent = doc.data().notun;

    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(comment);
  //  li.appendChild(notun);

    cafeList.appendChild(li);
}

// getting data
db.collection('shahir').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
