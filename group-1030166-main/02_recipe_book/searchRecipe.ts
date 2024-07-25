import Recipe from "./Recipe"

const fs = require('fs')

function searchRecipe(name:string, path: string){
    const text_json2: string = fs.readFileSync(path, 'utf-8');
   //console.log(path);

   const recette : Recipe[] = JSON.parse(text_json2)

   let e = 0;
   let recette_trouvée : Boolean = false;
   while (e < recette.length) {
       if (name ===  recette[e].name)
       {
           recette_trouvée = true 
           console.log("==== " +  recette[e].name + " ====" )
           let j = 0;
           while (j <  recette[e].ingredients.length)
           {
               console.log( "- " + recette[e].ingredients[j])
               j++
           }
       }    
       e++; 
   }

   if (recette_trouvée === false){
       console.log("No match.");
   }
}

export default searchRecipe


   




