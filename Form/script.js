const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');
const toggleLoginBtn = document.getElementById('login');
const toggleRegisterBtn = document.getElementById('register');

toggleLoginBtn.addEventListener('click', () => {
  document.getElementById('container').classList.remove('sign-up-mode');
});

toggleRegisterBtn.addEventListener('click', () => {
  document.getElementById('container').classList.add('sign-up-mode');
});

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const formData = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("formData", JSON.stringify(formData));

  signUpForm.reset();

  window.location.href = "http://127.0.0.1:5500/proyect/Index.html"; 
});

signInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const formData = {
    email: email,
    password: password
  };

  localStorage.setItem("formData", JSON.stringify(formData));

  signInForm.reset();

  window.location.href = "http://127.0.0.1:5500/proyect/Index.html"; 
});
