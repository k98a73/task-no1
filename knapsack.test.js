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
  test("knapsack3", () => {
    // weight, value
    const items = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
      [8, 8],
      [9, 9],
    ];
    expect(knapsack(items, 20)).toBe(20);
  });
  test("knapsack4", () => {
    // weight, value
    const items = [
      [1, 10],
      [2, 25],
      [3, 33],
      [4, 48],
      [5, 52],
      [6, 61],
    ];
    expect(knapsack(items, 50)).toBe(229);
  });
  test("knapsack5", () => {
    // weight, value
    const items = [
      [19, 10],
      [23, 25],
      [31, 33],
      [45, 48],
      [57, 52],
      [62, 61],
      [79, 70],
      [83, 55],
      [91, 93],
    ];
    expect(knapsack(items, 550)).toBe(447);
  });
});
