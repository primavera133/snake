import { SnakePart, snakePartDrawConfig } from "../../types";
import { getSnakeDrawConfig } from "./getSnakeDrawConfig";

describe("moveSnake", () => {
  it("should return config from snake state ", () => {
    const snake: SnakePart[] = [
      { x: 200, y: 200 },
      { x: 190, y: 200 },
    ];

    const expectedConfig: snakePartDrawConfig[] = [
      {
        fillStyle: "orchid",
        strokeStyle: "brown",
        x: 200,
        y: 200,
        widht: 10,
        heigh: 10,
      },
      {
        fillStyle: "orchid",
        strokeStyle: "brown",
        x: 190,
        y: 200,
        widht: 10,
        heigh: 10,
      },
    ];

    const result = getSnakeDrawConfig(snake);

    expect(result).toEqual(expectedConfig);
  });
});
