let Name = document.getElementById('name');
let email = document.getElementById('email');
let form = document.getElementById('addForm');
form.addEventListener('submit', additems);
obj = {
  personName: '',
  personEmail: ''
}

function additems(e) {
  e.preventDefault();
  obj.personName = Name.value;
  obj.personEmail = email.value;
  let newobj = JSON.stringify(obj);
  localStorage.setItem(newobj, newobj);
  // console.log(newobj)

  let items = document.getElementById('items');
  let newitem = Name.value + email.value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newitem));
  items.appendChild(li);


}

