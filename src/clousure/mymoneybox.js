//Alcancía.

// no se acumula cuando se llama de nuevo a la función.

function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins
    console.log(`Money: ${saveCoins}`);
}

moneyBox(10);
moneyBox(5);
moneyBox(5);


//Lo arreglamos haciendo una clousure:

function moneyBox2() {
    let saveCoins2 = 0;
    
    //Se queda el valor de saveCoins2 acumulado dentro de countCoins
    function countCoins(coins) { //(clousure)
        saveCoins2 += coins
        console.log(`Money: ${saveCoins2}`);
    }

    return countCoins();
}

const money = moneyBox2();

moneyBox2(10);
moneyBox2(5);
moneyBox2(5);

//Lo que ha ahorrado cam: 
const moneyCam = moneyBox2();

moneyCam(10);
moneyCam(10);
moneyCam(10);