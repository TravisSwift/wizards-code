// html ids
const diceTray = document.getElementById("dice-tray");
const diceBtn = document.getElementById("dice-btn");

const rollDice = (num, type) => {
    // store rolls in an array
    let arr = [];

    // "roll" num times & push to array
    for (let i = 0; i < num; i ++) {
        let result = Math.floor(Math.random() * type + 1);
        arr.push(result);
    }
    return arr;
}

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
    // if any stats are present, clear them first
    diceTray.textContent = "";

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
diceBtn.addEventListener("click", statRollHandler);