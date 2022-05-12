const Character = require('../models/Character');

test('creates a character with 6 stats & modifiers', () => {
    const char = new Character('Emil');

    expect(char.name).toBe('Emil');
    expect(char.strength).toEqual(expect.any(Number));
    expect(char.dexterity).toEqual(expect.any(Number));
    expect(char.constitution).toEqual(expect.any(Number));
    expect(char.intelligence).toEqual(expect.any(Number));
    expect(char.wisdom).toEqual(expect.any(Number));
    expect(char.charisma).toEqual(expect.any(Number));
})