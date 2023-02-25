const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.getElementById('ingredients');

for (let text of ingredients) {
  let list = document.createElement('li');
  list.textContent = text;
  list.classList = 'item';
  ingredientsList.append(list);
}
