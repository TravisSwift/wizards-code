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

module.exports = rollDice;