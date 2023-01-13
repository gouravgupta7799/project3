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
  console.log(newobj)
}
