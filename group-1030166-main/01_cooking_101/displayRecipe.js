"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import modul fs 
var fs = require('fs');
//declaration de la fonction qui me sert a afficher une recette 
//path chemin vers les fichiés json
function displayRecipe(path) {
    //lire les contenus des  fichiés 
    var text_json = fs.readFileSync(path, 'utf-8');
    //console.log(path);
    //console.log(text_json);
    // creation de recette
    var recette = JSON.parse(text_json);
    console.log('==== ' + recette.name + ' ====');
    for (var i = 0; i < recette.ingredients.length; i++) {
        console.log('- ' + recette.ingredients[i]);
    }
}
exports.default = displayRecipe;
