const fontSizeControl = document.querySelector('#font-size-control');
let textsize = fontSizeControl.value;
let text = document.querySelector('#text');

fontSizeControl.addEventListener('input', event => {
  text.style.fontSize = event.target.value + 'px';
});
text.style.fontSize = `${textsize}px`;
