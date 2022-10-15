// import { randomizer } from "../../helpers";
// TODO: mock randomizer for better test

import { generateFood } from "./generateFood";
describe("generateFood", () => {
  it("should return generated food coords", () => {
    const boardWidth = 100;
    const boardHeight = 100;

    const result = generateFood(boardWidth, boardHeight);
    expect(result.foodX).toBeGreaterThanOrEqual(0);
    expect(result.foodX).toBeLessThan(boardWidth);
    expect(result.foodY).toBeGreaterThanOrEqual(0);
    expect(result.foodY).toBeLessThan(boardHeight);
  });
});
