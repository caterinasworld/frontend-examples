import { sum, mul } from './math';

describe('Math tests', () => {
  test('adding numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(3, 3)).toEqual(6);
    expect(sum(3, 6)).not.toEqual(10);
    expect(sum(-2, 16)).toEqual(14);
    expect(sum(1.1, 6.1)).toBeCloseTo(7.2); // toBeCloseTo for flowting point math
  });

  test('multiply numbers', () => {
    expect(mul(1, 2)).toEqual(2);
    expect(mul(3, 12)).toEqual(36);
    expect(mul(3, 3)).not.toEqual(6);
    expect(mul(-2, 16)).toEqual(-32);
    expect(mul(1.1, 6.1)).toBeCloseTo(6.71); // toBeCloseTo for flowting point math
  });
});
