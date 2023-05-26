const recipeWs = [
  {
      "order": "1a",
      "task": {
          "en": "Based on the provided data structure, create a single HTML card manually for one recipe. The card should display relevant details such as the recipe name, ingredients, description, and an image if available.",
          "fr": "Sur la base de la structure de données fournie, créez manuellement une seule carte HTML pour une recette. La carte doit afficher les détails pertinents tels que le nom de la recette, les ingrédients, la description et une image si disponible."
      },
      "hint": {
          "en": "Review the structure of an HTML card. You'll need elements like 'div', 'img', 'h2', 'p', etc. Use the recipe data to fill in the content.",
          "fr": "Revoyez la structure d'une carte HTML. Vous aurez besoin d'éléments tels que 'div', 'img', 'h2', 'p', etc. Utilisez les données de la recette pour remplir le contenu."
      }
  },
  {
      "order": "1b",
      "task": {
          "en": "Now, write a JavaScript function to generate a card for each recipe in the data array. The function should create a new HTML card for each recipe object and append them to the 'section' with id='recipes'.",
          "fr": "Maintenant, écrivez une fonction JavaScript pour générer une carte pour chaque recette dans le tableau de données. La fonction doit créer une nouvelle carte HTML pour chaque objet de recette et les ajouter à la 'section' avec l'identifiant 'recipes'."
      },
      "hint": {
          "en": "Use the 'forEach' method on the data array. Inside the loop, use 'document.createElement' and 'element.appendChild' to create and append HTML elements.",
          "fr": "Utilisez la méthode 'forEach' sur le tableau de données. À l'intérieur de la boucle, utilisez 'document.createElement' et 'element.appendChild' pour créer et ajouter des éléments HTML."
      }
  },
  {
      "order": "2a",
      "task": {
          "en": "Using JavaScript's console.log method, print out all the unique types of cuisines available in the data.",
          "fr": "À l'aide de la méthode console.log de JavaScript, affichez tous les types de cuisines uniques disponibles dans les données."
      },
      "hint": {
          "en": "You can use JavaScript's 'Set' and 'Spread Operator' to quickly get a list of unique cuisines. Look for 'Set in JavaScript' on your preferred search engine.",
          "fr": "Vous pouvez utiliser le 'Set' de JavaScript et l'opérateur de propagation 'Spread Operator' pour obtenir rapidement une liste de cuisines uniques. Recherchez 'Set in JavaScript' sur votre moteur de recherche préféré."
      }
  },
  {
      "order": "2b",
      "task": {
          "en": "Store all the unique types of cuisines in an array. This array will be useful for dynamically populating select options in a later task.",
          "fr": "Stockez tous les types de cuisines uniques dans un tableau. Ce tableau sera utile pour remplir dynamiquement les options de sélection dans une tâche ultérieure."
      },
      "hint": {
          "en": "Use the 'Spread Operator' to convert the Set into an array.",
          "fr": "Utilisez l'opérateur de propagation 'Spread Operator' pour convertir le Set en tableau."
      }
  },
  {
      "order": "3a",
      "task": {
          "en": "Create a select element with static options for types of cuisine. This is a dropdown menu where users can choose a type of cuisine to filter recipes. For now, just manually write a few cuisine types as options.",
          "fr": "Créez un élément select avec des options statiques pour les types de cuisine. Il s'agit d'un menu déroulant où les utilisateurs peuvent choisir un type de cuisine pour filtrer les recettes. Pour l'instant, écrivez manuellement quelques types de cuisine en tant qu'options."
      },
      "hint": {
          "en": "Look at the 'select' and 'option' HTML tags. Write static 'option' values to represent the cuisines for now.",
          "fr": "Regardez les balises HTML 'select' et 'option'. Écrivez des valeurs statiques pour les 'option' afin de représenter les cuisines pour le moment."
      }
  },
  {
      "order": "3b",
      "task": {
          "en": "Populate the select options dynamically from the array of cuisines you created. Instead of static options, your JavaScript code should create a new option for each type of cuisine in the array.",
          "fr": "Remplissez dynamiquement les options de sélection à partir du tableau de cuisines que vous avez créé. Au lieu d'options statiques, votre code JavaScript doit créer une nouvelle option pour chaque type de cuisine dans le tableau."
      },
      "hint": {
          "en": "Use a 'forEach' loop on the array of unique cuisines. Inside the loop, create an 'option' element for each cuisine and set its 'value' and 'innerText' properties.",
          "fr": "Utilisez une boucle 'forEach' sur le tableau de cuisines uniques. À l'intérieur de la boucle, créez un élément 'option' pour chaque cuisine et définissez ses propriétés 'value' et 'innerText'."
      }
  },
  {
      "order": "4:",
      "task": {
          "en": "When the user selects a cuisine from the select element, filter the recipe cards based on the selected cuisine type. Only the recipes of the selected cuisine should be visible.",
          "fr": "Lorsque l'utilisateur sélectionne une cuisine dans l'élément select, filtrez les cartes de recettes en fonction du type de cuisine sélectionné. Seules les recettes de la cuisine sélectionnée doivent être visibles."
      },
      "hint": {
          "en": "Add an 'event listener' for the 'change' event on the select element. Inside the listener, use the 'filter' method to filter the recipe cards.",
          "fr": "Ajoutez un 'event listener' pour l'événement 'change' sur l'élément select. À l'intérieur de l'écouteur, utilisez la méthode 'filter' pour filtrer les cartes de recettes."
      }
  },
  {
      "order": "5a",
      "task": {
          "en": "Add a static 'like' button to each recipe card. The button does not need to do anything yet.",
          "fr": "Ajoutez un bouton 'like' statique à chaque carte de recette. Le bouton n'a pas besoin de faire quoi que ce soit pour le moment."
      },
      "hint": {
          "en": "Add a button HTML element to each recipe card. It doesn't need functionality yet, so focus on the HTML structure.",
          "fr": "Ajoutez un élément de bouton HTML à chaque carte de recette. Ne vous concentrez pas encore sur la fonctionnalité, mais plutôt sur la structure HTML."
      }
  },
  {
      "order": "5b",
      "task": {
          "en": "Implement functionality to update the number of likes when the 'like' button is clicked. Every time a user clicks a recipe's like button, the number of likes should increase by one. Remember to update your data accordingly.",
          "fr": "Implémentez la fonctionnalité permettant de mettre à jour le nombre de mentions 'J'aime' lorsqu'on clique sur le bouton 'like'. Chaque fois qu'un utilisateur clique sur le bouton 'like' d'une recette, le nombre de mentions 'J'aime' doit augmenter de un. N'oubliez pas de mettre à jour vos données en conséquence."
      },
      "hint": {
          "en": "Attach a 'click' event listener to the like button. When clicked, update the likes value for the recipe in your data and on the card.",
          "fr": "Attachez un 'event listener' de type 'click' au bouton 'like'. Lorsqu'il est cliqué, mettez à jour la valeur de mentions 'J'aime' pour la recette dans vos données et sur la carte."
      }
  },
  {
      "order": "6a",
      "task": {
          "en": "Create a static checkbox or another select element for filtering liked recipes. This gives users a way to see only the recipes they've liked.",
          "fr": "Créez une case à cocher statique ou un autre élément select pour filtrer les recettes aimées. Cela permet aux utilisateurs de voir uniquement les recettes qu'ils ont aimées."
      },
      "hint": {
          "en": "Consider using a 'checkbox' or 'select' HTML element. Look at the static HTML structure for each to decide which fits best.",
          "fr": "Envisagez d'utiliser un élément HTML de type 'checkbox' ou 'select'. Examinez la structure HTML statique de chacun pour décider lequel convient le mieux."
      }
  },
  {
      "order": "6b",
      "task": {
          "en": "Implement the filtering functionality to show only the recipes that have been liked when the checkbox or select option for liked recipes is selected. This will require changing the visibility of recipe cards based on their liked status.",
          "fr": "Implémentez la fonctionnalité de filtrage pour afficher uniquement les recettes qui ont été aimées lorsque la case à cocher ou l'option select pour les recettes aimées est sélectionnée. Cela nécessitera de modifier la visibilité des cartes de recettes en fonction de leur statut 'aimé'."
      },
      "hint": {
          "en": "Add an 'event listener' to the checkbox/select element. Use 'filter' to show only recipes that the user has liked.",
          "fr": "Ajoutez un 'event listener' à l'élément checkbox/select. Utilisez 'filter' pour afficher uniquement les recettes que l'utilisateur a aimées."
      }
  },
  {
      "order": "7a",
      "task": {
          "en": "Create a search bar with an input field and a search button. When the search button is clicked, filter the recipe cards based on the search term entered in the input field. The search should be case-insensitive and can match any part of the recipe's name.",
          "fr": "Créez une barre de recherche avec un champ de saisie et un bouton de recherche. Lorsque l'utilisateur clique sur le bouton de recherche, filtrez les cartes de recettes en fonction du terme de recherche saisi dans le champ de saisie. La recherche doit être insensible à la casse et peut correspondre à n'importe quelle partie du nom de la recette."
      },
      "hint": {
          "en": "Consider creating a 'form' element with an 'input' field for text and a 'button' for submission. Add an 'event listener' for 'submit' event on the form.",
          "fr": "Envisagez de créer un élément 'form' avec un champ de saisie de texte et un bouton de soumission. Ajoutez un 'event listener' pour l'événement 'submit' sur le formulaire."
      }
  },
  {
      "order": "7b",
      "task": {
          "en": "(Bonus): Update the search functionality to filter recipes in real time as the user types. Instead of waiting for the user to click the search button, the recipe cards should update immediately whenever the text in the search bar changes.",
          "fr": "(Bonus) : Mettez à jour la fonctionnalité de recherche pour filtrer les recettes en temps réel au fur et à mesure que l'utilisateur tape. Au lieu d'attendre que l'utilisateur clique sur le bouton de recherche, les cartes de recettes doivent être mises à jour immédiatement à chaque fois que le texte dans la barre de recherche change."
      },
      "hint": {
          "en": "Instead of the 'submit' event, attach an 'input' event listener to the input field. Update the filter every time the input event is fired.",
          "fr": "Au lieu de l'événement 'submit', attachez un 'event listener' de type 'input' au champ de saisie. Mettez à jour le filtre chaque fois que l'événement 'input' est déclenché."
      }
  }
]

const workshops = new Map();
workshops.set("recipe", recipeWs);





function loadWorkshop(workshopName) {
  if(!workshops.has(workshopName)){
    alert("Workshop under construction, come back later");
    return;
  }
  // Hide all workshop-info divs
  let workshopInfoDivs = document.getElementsByClassName('workshop-info');
  for (let div of workshopInfoDivs) {
    div.style.display = 'none';
  }

  // Show the selected workshop-info div
  let selectedWorkshopInfo = document.getElementById(workshopName + '-info');
  selectedWorkshopInfo.style.display = 'block';
  const taskList = document.querySelector("#tasks");
  const language = 'fr';
  workshops.get(workshopName).forEach(element => {
    const div = document.createElement("div");
    div.innerHTML =
      `
      <div class="task-content">
        <h3 class="task-title">Task ${element.order}</h3>
        <p class="task-description">${language === 'en' ? element.task.en : element.task.fr}</p>
      </div>
      <div class="task-hint-wrapper">
        <button class="hint-toggle">Show/Hide Hint</button>
        <p class="task-hint" style="display: none;">${language === 'en' ? element.hint.en : element.hint.fr}</p>
      </div>`
    div.classList.add("task");
    taskList.appendChild(div);
  });
  document.querySelectorAll('.hint-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      var hints = this.parentElement.querySelectorAll('.task-hint');
      hints.forEach(function(hint) {
        if (hint.style.display === "none") {
          hint.style.display = "block";
        } else {
          hint.style.display = "none";
        }
      });
    });
  });
  
  // Here, you would also load the tasks for the selected workshop into the #tasks section...
}

