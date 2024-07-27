// Select all <li> elements with the class "item" within the <ul> with id "categories"
const items = document.querySelectorAll('#categories .item');

// Display the total number of categories
console.log(`Number of categories: ${items.length}`);

// Iterate through each <li> element with the class "item"
items.forEach(item => {
  // Select the title of the category (the <h2> element)
  const categoryTitle = item.querySelector('h2').textContent;

  // Select all <li> elements within the sublist of the category
  const elementsCount = item.querySelectorAll('ul li').length;

  // Display the title of the category and the number of elements in that category
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
