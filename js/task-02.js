const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsList = document.querySelector("#ingredients");

  const ingredientsListItems = ingredients.map(ingredient => {
    let item = document.createElement("li");
    item.textContent = ingredient;
    return item;
  })

  console.log(ingredientsListItems);

  ingredientsList.append(...ingredientsListItems)

  