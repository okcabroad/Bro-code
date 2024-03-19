function rollDiceFunction() {
    const diceresult = document.getElementById('diceresult');
    const dice = Math.floor(Math.random() * 6 + 1);
    switchDice(dice, diceresult);
}

function switchDice(dice, diceresult) {
    switch(dice) {
        case 1:
            diceresult.src = '1dice.svg';
            break;
        case 2: 
            diceresult.src = '2dice.svg';
            break;
        case 3:
            diceresult.src = '3dice.svg';
            break;
        case 4:
            diceresult.src = '4dice.svg';
            break;
        case 5:
            diceresult.src = '5dice.svg';
            break;
        case 6:
            diceresult.src = '6dice.svg';
            break;    
    }
}

function reset() {
    const diceresult = document.getElementById('diceresult');
    diceresult.src = '1dice.svg'; // Reset to initial dice image
}
