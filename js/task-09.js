function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnBgColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

let color;

btnBgColor.addEventListener('click', () => {
  color = getRandomHexColor();
  span.innerHTML = color;
  document.body.style.backgroundColor = color;
});
