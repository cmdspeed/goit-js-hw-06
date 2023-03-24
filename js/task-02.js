const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.getElementById('ingredients');
const listArr = [];

for (let text of ingredients) {
  let list = document.createElement('li');
  list.textContent = text;
  list.classList = 'item';
  listArr.push(list);
}

ingredientsList.append(...listArr);
