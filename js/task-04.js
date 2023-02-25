const value = document.querySelector('#value');
let counterValue = value.textContent;
const addBtn = document.querySelector('[data-action="increment"]');
const subBtn = document.querySelector('[data-action="decrement"]');
addBtn.addEventListener('click', () => (value.innerHTML = ++counterValue));
subBtn.addEventListener('click', () => (value.innerHTML = --counterValue));
