const rollDice = require('./dice');

// html ids
const diceTray = document.getElementById("dice-tray");

const getStat = () => {
    // roll 4d6
    let rolls = rollDice(4, 6);

    // sort array & drop lowest 
    rolls.sort().splice(0, 1);

    // add new array into one number
    let sum = rolls.reduce((a, b) => a + b);
    
    return sum;
}

// when dice tray roller button is clicked, roll and display six stats
const statRollHandler = (event) => {
    event.preventDefault();

    // store stats in an array
    let statsArr = [];

    // push six stats into array
    statsArr.push(getStat());
    statsArr.push(getStat());
    statsArr.push(getStat());
    statsArr.push(getStat());
    statsArr.push(getStat());
    statsArr.push(getStat());
    
    // for each stat in array, create and display dice in dice tray
    for (let i = 0; i < statsArr.length; i++) {
        let statEl = document.createElement("div");

        statEl.textContent = statsArr[i];
        diceTray.appendChild(statEl);
    }
}


// event listener
// dice tray needs a button
module.exports = getStat;