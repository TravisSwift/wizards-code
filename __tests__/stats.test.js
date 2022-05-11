const { getStat } = require('../utils/stats');

test('getStat will roll a random stat', () => {
    expect(getStat(stat)).toBeGreaterThanOrEqual(3);
    expect(getStat(stat)).toBeLessThanOrEqual(18);
})