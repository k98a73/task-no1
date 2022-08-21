const knapsack = require("./knapsack");

describe("knapsack", () => {
  test("knapsack1", () => {
    // weight, value
    const items = [
      [2, 3],
      [1, 2],
      [3, 6],
      [2, 1],
      [1, 3],
      [5, 85],
    ];
    expect(knapsack(items, 9)).toBe(94);
  });
  test("knapsack2", () => {
    // weight, value
    const items = [
      [3, 5],
      [2, 3],
      [2, 3],
    ];
    expect(knapsack(items, 4)).toBe(6);
  });
});
