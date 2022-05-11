const getStat = require('../utils/stats');

test('getStat will roll a random stat', () => {
    expect(getStat()).toBeGreaterThanOrEqual(3);
    expect(getStat()).toBeLessThanOrEqual(18);
})