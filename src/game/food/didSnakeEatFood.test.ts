import { SnakePart } from "../../types";
import { didSnakeEatFood } from "./didSnakeEatFood";

describe("didSnakeEatFood", () => {
  it("should eat food", () => {
    const snake: SnakePart[] = [
      { x: 100, y: 100 },
      { x: 110, y: 100 },
      { x: 120, y: 100 },
    ];
    const foodX = 100;
    const foodY = 100;

    const result = didSnakeEatFood(snake, foodX, foodY);

    expect(result).toBe(true);
  });
});
