
function greeting() {
    let userName = 'Cam';


    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName();
}

const g = greeting();

console.log(g); //return la definición de displayUserName
console.log(g()); //return el valor

/**Salida:
 * [Function: displayUserName]
 * Hello Cam
 */
