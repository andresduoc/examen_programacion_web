const form = document.querySelector('#register-form');
const nameError = document.querySelector('#name-error');
const nameSuccess = document.querySelector('#name-success');
const emailError = document.querySelector('#email-error');
const emailSuccess = document.querySelector('#email-success');
const passwordError = document.querySelector('#password-error');
const passwordSuccess = document.querySelector('#password-success');
const validateButton = document.querySelector('#validate-button');

var msj = document.getElementById("warnings");

validateButton.addEventListener('click', () => {
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  if (!isValidName(name)) {
    nameError.style.display = 'block';
    nameSuccess.style.display = 'none';
  } else {
    nameError.style.display = 'none';
    nameSuccess.style.display = 'block';
  }

  if (!isValidEmail(email)) {
    emailError.style.display = 'block';
    emailSuccess.style.display = 'none';
  } else {
    emailError.style.display = 'none';
    emailSuccess.style.display = 'block';
  }

  if (!isValidPassword(password)) {
    passwordError.style.display = 'block';
    passwordSuccess.style.display = 'none';
  } else {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'block';
  }

  if (isValidName(name) && isValidEmail(email) && isValidPassword(password)) {
    alert("Enviado");
  }
});

function isValidName(name) {
  return /^[A-Z][a-z]{2,}$/.test(name);
}

function isValidEmail(email) {
  return /^[\w.-]+@[a-z]+\.(com|cl)$/.test(email);
}

function isValidPassword(password) {
  return password.length >= 9;
}