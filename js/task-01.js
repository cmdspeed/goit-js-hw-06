console.log('Number of categories: ' + document.querySelectorAll('.item').length);
document.querySelectorAll('.item').forEach(item => {
  console.log('category: ' + item.firstElementChild.textContent);
  console.log('Elements: ' + item.lastElementChild.children.length);
});
