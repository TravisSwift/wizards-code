const rollDice = require('../utils/dice');

test('roll dice to return array of length for number of dice rolled', () => {
    const try1 = rollDice(1, 6).length;
    const try2 = rollDice(4, 20).length;

    expect(try1).toBe(1);
    expect(try2).toBe(4);
})