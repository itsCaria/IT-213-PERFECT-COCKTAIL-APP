class CocktailAPI{
    // Get recipe by name
   async getDrinksByName(name ) {
          // Search by name
          const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}');
          // Returns a json respone
          const cocktails = await apiResponse.json();

          return {
            cocktails
          }
     }

     // Get recipes by ingredients
     async getDrinksByName(ingredient) {
          // Search by ingredients 
          const apiResponse = await fetch('www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka {ingredient}'
          // wait for response then return json
         const cocktails = await apiResponse.json();
         
         return{
             cocktails
         }

     }
    
}