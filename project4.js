let Name = document.getElementById('name');
let email = document.getElementById('email');
let form = document.getElementById('addForm');
form.addEventListener('submit', additems);

function additems(e) {
  e.preventDefault();
  localStorage.setItem(Name.value, email.value)
}
