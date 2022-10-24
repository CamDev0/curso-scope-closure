//Cumplir con el mayor de los estándares

pi = 3.1416;
console.log(pi); 
//se asigna var automaticamente a pi


'use strict'
saludo = 'Hola Mundo';
console.log(saludo);
//ERROR por no declarar


function myFunction() {
    'use strict'
    return pi = 3.1416;
}
console.log(myFunction()); //ERROR por no declarar pi


function myFunction2() {
    'use strict'
    const pi = 3.1416;
    return pi; 
}
console.log(myFunction2()); //Correcto