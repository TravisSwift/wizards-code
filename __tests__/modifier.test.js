const getModifier = require('../utils/modifier');

test('calculates and returns modifier of a stat', () => {
    const strength = 15;
    const dexterity = 20;
    const constitution = 13;
    const intelligence = 7;
    const wisdom = 10;
    const charisma = 5;

    expect(getModifier(strength)).toBe(2);
    expect(getModifier(dexterity)).toBe(5);
    expect(getModifier(constitution)).toBe(1);
    expect(getModifier(intelligence)).toBe(-2);
    expect(getModifier(wisdom)).toBe(0);
    expect(getModifier(charisma)).toBe(-3);
})