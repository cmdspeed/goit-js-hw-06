const nameUser = document.querySelector('#name-input');
let nameSpan = document.querySelector('#name-output');

nameUser.addEventListener('input', name => {
  if (name.currentTarget.value == '') {
    nameSpan.textContent = 'Anonymous';
  } else {
    nameSpan.textContent = name.currentTarget.value;
  }
});
