//clousure: se crean cuando declaras una función dentro de otra

const myGlobal = 0;

function first() {
    const myNumber = 1;
    console.log(myGlobal);

    
    function parent() { //Función interna (clousure)
        const inner = 2;
        console.log(myNumber, myGlobal);
    
    
        function child() { //(clousure)
            console.log(inner, myNumber, myGlobal);
        }
    
        return child();
    }

    return parent();
}

first();

/**Salida:
 * 0
 * 1 0
 * 2 1 0
 */