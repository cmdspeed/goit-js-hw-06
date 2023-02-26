const validationInput = document.querySelector('#validation-input');
const dataLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', event => {
  if (event.target.value.length == dataLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
