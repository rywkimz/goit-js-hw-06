
    const ingredients = [
      "Potatoes",
      "Mushrooms",
      "Garlic",
      "Tomatoes", 
      "Herbs",
      "Condiments",
    ];

    const ingredientsList = document.getElementById('ingredients');

    const items = ingredients.map(ingredient => {
      const li = document.createElement('li');

      li.textContent = ingredient;

      li.classList.add('item');

      return li;
    });

    ingredientsList.append(...items);
