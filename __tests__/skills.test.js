const getSkill = require('../public/javascript/skills');

test('calculates skill', () => {
    const wis = 3;
    const dex = 4;
    const proficiency = 2;
    
    expect(getSkill(proficiency, wis)).toBe(5);
    expect(getSkill(proficiency, dex)).toBe(6);
})