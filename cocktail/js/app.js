// Instantiate the Classes
const ui = new UI().
      cocktail = new CocktailAPI();


// Create the Event Listener
function eventListeners() {
    //Document Ready
    document.addEventListener(`DOMContentLoaded`, documentReady);
      
    //add event Listeners when form is submitted
    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }

    // The results div listeners
    const resultsDiv = document.querySelector('#results');
    if(resultsDiv) {
        resultsDiv.addEventListener('click', resultsDelegation);
    }
    
}

eventListeners();



// Get cocktails function
function getCocktails(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;
        
    // Check something is on the search input
    if(searchTerm === '') {
        // Call User Interface print message 
        ui.printMessage('Please add something into the form', 'danger');
    } else {
          // Server response from promise
          let serverResponse;

          // Type of search (ingredients, cocktails, or name)
          const type = document.querySelector('#type').value;

          // Evaluate the type of method and then execute the query


          switch(type) {
              case 'name':
                    serverResponse = cocktail.getDrinksByName( searchTerm );
                    break;
                case 'ingredient':
                    serverResponse = cocktail.getDrinksByIngredient( searchTerm );
                    break;
          }

          ui.clearResults();

        //Query by the name of the drink
        
        cocktail.getDrinksByName( searchTerm )
        .then(cocktails => {
              if(cocktails.cocktails.drinks === null) {
                  // Nothing exists
                  ui.printMessage('There\'re no results, try a different term ', 'danger');
              } else {
                  if(type === 'name') {
                      // Display with ingredients
                      ui.displayDrinksWithIngredients( cocktails.cocktails.drinks );
                  } else {
                      // Display without Ingredients (category, alcohol, ingredient)
                      ui.displayDrink(cocktails.cocktails.drinks);
                  }
              }
        })
    }

}

// Delegation for the #results area
function resultsDelegation(e) {
    e.preventDefault();

    if(e.target.classList.contains('get-recipe')) {
        cocktail.getSingleRecipe( e.target.dataset.id )
             .then(recipe => {
                 // Display Single recipe into a modal
                 ui.displaySingleRecipe(recipe.recipe.drinks(0));
             })
    }

}
//Document Ready 
function documentReady(){

    //Select the search category select
    const searchCategory = document.querySelector(`.search-category`);
    if(searchCategory){
        ui.printCategories();

    }
}