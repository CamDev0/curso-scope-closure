//variables

var a; //declarando
var b = 'Hola' //declaramos y asignamos.
b = 'Re-asignar' 
var a = 'Re-declarar'


//Global Scope

var fruit = 'Apple' //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; //global
    var country2 = 'México'; //local
    console.log(country2);
}

countries();
