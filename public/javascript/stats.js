// html ids
const diceTray = document.getElementById("dice-tray");
const diceBtn = document.getElementById("dice-btn");
const stats = document.getElementsByClassName("stat");
const strModEl = document.getElementById("str");
const dexModEl = document.getElementById("dex");
const conModEl = document.getElementById("con");
const intModEl = document.getElementById("int");
const wisModEl = document.getElementById("wis");
const chaModEl = document.getElementById("cha");
const strengthEl = document.getElementById("strength");
const dexterityEl = document.getElementById("dexterity");
const constitutionEl = document.getElementById("constitution");
const intelligenceEl = document.getElementById("intelligence");
const wisdomEl = document.getElementById("wisdom");
const charismaEl = document.getElementById("charisma");

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
        let statEl = document.createElement("p");
        statEl.classList = "text-white draggable mx-3 mt-7";
        statEl.draggable = "true"

        statEl.textContent = statsArr[i];
        diceTray.appendChild(statEl);
    }
}

const getModifier = (stat) => {
    // stat will be rounded down (so 9 is -1 & 11 is 0)
    let mod = Math.floor((stat - 10) / 2);
    return mod;
}

const showModifier = function (event) {
    // grab the stat & get the modifier
    let mod = getModifier(this.value.trim());

    // get check which stat has been modified, then display modifier
    switch (this.id) {
        case "strength":
            strModEl.textContent = mod;
            break;
        case "dexterity":
            dexModEl.textContent = mod;
            break;
        case "constitution":
            conModEl.textContent = mod;
            break;
        case "intelligence":
            intModEl.textContent = mod;
            break;
        case "wisdom":
            wisModEl.textContent = mod;
            break;
        case "charisma":
            chaModEl.textContent = mod;
            break;
    }
}

// event listener
diceBtn.addEventListener("click", statRollHandler);
// when dice are added to a stat, get the modifier
strengthEl.addEventListener("change", showModifier);
dexterityEl.addEventListener("change", showModifier);
constitutionEl.addEventListener("change", showModifier);
intelligenceEl.addEventListener("change", showModifier);
wisdomEl.addEventListener("change", showModifier);
charismaEl.addEventListener("change", showModifier);