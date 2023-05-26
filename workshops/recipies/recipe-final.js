// Recipe data
let recipes = [
  {
    image: "https://via.placeholder.com/320x180",
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    cuisine: "Italian",
    prepTimeInMin: 25
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Tacos al Pastor",
    description: "A popular dish in Mexico featuring marinated pork, pineapple, coriander and onions.",
    cuisine: "Mexican",
    prepTimeInMin: 35
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Ratatouille",
    description: "A French Provençal stewed vegetable dish, originating in Nice, and sometimes referred to as ratatouille niçoise.",
    cuisine: "French",
    prepTimeInMin: 40
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Sushi",
    description: "Traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits.",
    cuisine: "Japanese",
    prepTimeInMin: 50
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Pad Thai",
    description: "Stir-fried rice noodle dish commonly served as a street food and at most restaurants in Thailand.",
    cuisine: "Thai",
    prepTimeInMin: 35
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Goulash",
    description: "A hearty Hungarian stew made with tender chunks of beef, onions, paprika, and other spices.",
    cuisine: "Hungarian",
    prepTimeInMin: 120
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Miso Soup",
    description: "A traditional Japanese soup made with miso paste, tofu, seaweed, and other ingredients.",
    cuisine: "Japanese",
    prepTimeInMin: 15
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Chicken Parmesan",
    description: "A classic Italian dish featuring breaded and fried chicken cutlets topped with tomato sauce and melted cheese.",
    cuisine: "Italian",
    prepTimeInMin: 40
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Chimichurri Steak",
    description: "A flavorful Argentinean dish consisting of grilled steak topped with a vibrant chimichurri sauce made with parsley, garlic, vinegar, and spices.",
    cuisine: "Argentinean",
    prepTimeInMin: 30
  },
  {
    image: "https://via.placeholder.com/320x180",
    title: "Sushi Burrito",
    description: "A fusion dish that combines the flavors of sushi with the convenience of a burrito, typically filled with sushi rice, raw fish or cooked proteins, vegetables, and sauces.",
    cuisine: "Fusion/Japanese",
    prepTimeInMin: 0
  }

];


let recipeSection = document.getElementById("recipeSection");


// Task 1: Create a single HTML card manually for one recipe
// No additional code needed as it is already present in the HTML file

// Task 2: Write a function to generate a card for each recipe in the data array and append them to the <section id="recipes">
function generateRecipeCards() {
  const recipeSection = document.getElementById("recipes");
  recipeSection.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2 class="recipe-title">${recipe.title}</h2>
        <div class="recipe-infos">
          <div class="recipe-cuisine">
            <i class="fas fa-globe"></i>
            <span>${recipe.cuisine}</span>
          </div>
          <div class="recipe-time">
            <i class="fas fa-clock"></i>
            <span>${recipe.prepTimeInMin} min</span>
          </div>
        </div>
        <p class="recipe-description">${recipe.description}</p>
        
        <button class="like-button">${recipe.likes | 0} Likes</button>
      `;
    recipeCard.id = `recipe-${index}`;
    recipeSection.appendChild(recipeCard);
  });
}
generateRecipeCards()

// Task 3: Console.log all the unique types of cuisines available in the data
function logUniqueCuisines() {
  const uniqueCuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];
  console.log(uniqueCuisines);
}

// Task 4: Store all the unique types of cuisines in an array
const uniqueCuisinesArray = [...new Set(recipes.map(recipe => recipe.cuisine))];
uniqueCuisinesArray.unshift("all");

// Task 5: Create a select element with static options for types of cuisine
const selectElement = document.createElement("select");
selectElement.id = "cuisine-filter";
uniqueCuisinesArray.forEach((cuisine) => {
  const optionElement = document.createElement("option");
  optionElement.value = cuisine.toLowerCase();
  optionElement.textContent = cuisine;
  selectElement.appendChild(optionElement);
});
const filterContainer = document.querySelector(".filter-container");
filterContainer.appendChild(selectElement);

// Task 6: Populate the select options dynamically from the array of cuisines you created
// Already implemented in Task 5

// Task 7: When the user selects a cuisine from the select element, filter the recipe cards based on the selected cuisine type

selectElement.addEventListener("change", filterRecipeCards);


function filterRecipeCards() {
  const selectedCuisine = document.querySelector("#cuisine-filter").value;

  const showLikedRecipes = document.querySelector("#liked-recipes-filter").checked;
  const recipeCards = document.querySelectorAll(".recipe-card");

  recipeCards.forEach((card) => {
    const cuisineElement = card.querySelector(".recipe-cuisine span");
    const recipeTitle = card.querySelector(".recipe-title").textContent;

    const recipe = recipes.find((recipe) => recipe.title === recipeTitle);
    const isLiked = recipe && recipe.likes > 0;

    const cardVisible = (selectedCuisine === "all" || cuisineElement.textContent.toLowerCase() === selectedCuisine)
      && (!showLikedRecipes || isLiked);
    
    card.style.display = cardVisible ? "block" : "none";
  });
}


// Task 8: Add a static "like" button to each recipe card
const likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".recipe-card");
    const recipeTitle = card.querySelector(".recipe-title").textContent;

    const recipe = recipes.find((recipe) => recipe.title === recipeTitle);
    if (recipe) {
      recipe.likes ? recipe.likes++ : recipe.likes = 1;
      button.textContent = `${recipe.likes} Likes`;
    }
  });
});

// Task 9:
const likedRecipesCheckbox = document.createElement("input");
likedRecipesCheckbox.type = "checkbox";
likedRecipesCheckbox.id = "liked-recipes-filter";
likedRecipesCheckbox.addEventListener("change", filterRecipeCards);

const label = document.createElement("label");
label.textContent = "Show only liked recipes";
label.setAttribute("for", "liked-recipes-filter");

filterContainer.appendChild(likedRecipesCheckbox);
filterContainer.appendChild(label);
