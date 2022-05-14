const rollDice = require('./dice');

const getStat = () => {
    // roll 4d6
    let rolls = rollDice(4, 6);

    // sort array & drop lowest 
    rolls.sort().splice(0, 1);

    // add new array into one
    let sum = rolls.reduce((a, b) => a + b);
    
    return sum;
}

module.exports = getStat;