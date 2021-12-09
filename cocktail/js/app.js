// Instantiate the Classes
const ui = new UI().
      cocktail = new CocktailAPI();


// Create the Event Listener
function eventListeners() {
      
    //add event Listeners when form is submitted
    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }
    
}

eventListeners();



// Get cocktails function
function getCocktails(e) {
    e.preventDefault();

    const searchterm = document.querySelector('#seacrh').value;
        }
    // Check something is on the search input
    if(searchTerm === '') {
        // Call user Interface print message 
        ui.printMessage('Please add something into the form', 'danger');
    } else {
        //Query by the name of the drink
        cocktail.getDrinksByName( searchTerm )
          .then(cocktails =>{
              if(cocktails.cocktails.drinks === null) {
                  // Nothing exists
                  ui.printMessage('There\'re no results, try a different term ', 'danger');
              } else {
                  if(type === 'name') {
                      //displays with ingredient
                      ui.displaysDrinksWithIngredgients( cocktails.cocktails.drinks );
                     } else {
                         //Displays without Ingredients ( category. alcohol. ingredients)
                         ui.displayDrink( cocktails.cocktails.drinks);
                     }
                    }