//Esto es lo que hace el hoisting:

//var nameOfDog; / Undefined
console.log(nameOfDog);
var nameOfDog = 'Fico';
//Me retorna undefined 

console.log(nameOfDog);
//Retorna Fico

//EJ: en funciones

nameOfCat();

function nameOfCat() {
    console.log(`El mejor gatito es: ${nameCat}`);
}

var nameCat = 'Fico';

/**Salida:
 * El mejor gatito es: undefined
 
    Retorna eso porque el hoisting hace la elevación de la variable al no encontrarla antes de la funcion:
*/

var nameCat; //undefined (hoisting) hace esto.
nameOfCat();