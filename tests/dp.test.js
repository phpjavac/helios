const { buy } = require('../output/index');

test('买东西', () => {
    expect(buy(0)).toBe(0);
    expect(buy(3)).toBe(1);
    expect(buy(2)).toBe(0);
    expect(buy(7)).toBe(1);
    expect(buy(8)).toBe(2);
    expect(buy(27)).toBe(4);
});