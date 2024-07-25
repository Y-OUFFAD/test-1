import { text } from "stream/consumers";
import Recipe from "./Recipe"

// import modul fs 
const fs = require('fs')

//declaration de la fonction qui me sert a afficher une recette 
//path chemin vers les fichiés json
function displayRecipe(path: string){
//lire les contenus des  fichiés 

    const text_json : string = fs.readFileSync(path, 'utf-8');
    //console.log(path);
    //console.log(text_json);
    // creation de recette

     const recette : Recipe = JSON.parse(text_json)
    console.log ('==== ' + recette.name + ' ====')
  

    for ( let i=0; i<recette.ingredients.length; i++){
        console.log ( '- '  + recette.ingredients[i] )
    }
}

export default displayRecipe