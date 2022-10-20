//block scope

function fruits() {
    if(true) {
        var fruit = 'Orange'; //function scope

        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
}

console.log(fruit); //Si muestra (var)
console.log(fruit2); //No muestra (let)
console.log(fruit3); //No muestra (const)

fruits();