//redeclaración / reasignación

//var

var firstName; //Undefined
firstName = 'Oscar'; //Oscar
console.log(firstName);

var lastName = 'David'; 
lastName = 'Ana'; //reasignar
console.log(lastName);

var secondName = 'David';
var secondName = 'Ana'; //redeclarar
console.log(secondName);


//let

let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; //reasignar
/let fruit = 'Banana'; //redeclarar (ERROR)

//const 

const animal = 'Dog'; 
animal = 'Cat'; //reasignar (ERROR)
/const animal = 'Snake'; //redeclarar (ERROR)


//Ejemplos arrays (const)

const vehicles = [];
vehicles.push("Mazda"); //Si lo inserta
console.log(vehicles);

vehicles.pop();
console.log(vehicles); //Si saca el último



