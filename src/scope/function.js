//function scope

function greeting() { 
    let userName = 'Camilo'; //solo se puede usar dentro de la función.
    console.log(userName);

    if (userName === 'Camilo') {
        console.log(`Hello ${userName}!`);
    }

}

greeting();