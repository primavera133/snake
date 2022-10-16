import { getResetState } from "./getResetState";

describe("getResetState", () => {
  it("returns reset state after gameOver", () => {
    const boardWidth = 100;
    const boardHeight = 100;

    const result = getResetState(boardWidth, boardHeight);
    expect(result.snake).toEqual([
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ]);
    expect(result.dx).toBe(10);
    expect(result.dy).toBe(0);

    expect(result.foodX).toBeGreaterThanOrEqual(0);
    expect(result.foodX).toBeLessThan(boardWidth);
    expect(result.foodY).toBeGreaterThanOrEqual(0);
    expect(result.foodY).toBeLessThan(boardHeight);
    expect(result.score).toBe(0);
  });
});
