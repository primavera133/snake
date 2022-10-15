import { SnakePart, snakePartDrawConfig } from "../../types";

const getSnakePartDrawConfig = (snakePart: SnakePart): snakePartDrawConfig => {
  return {
    fillStyle: "orchid",
    strokeStyle: "brown",
    x: snakePart.x,
    y: snakePart.y,
    widht: 10,
    heigh: 10,
  };
};

export const getSnakeDrawConfig = (
  snake: SnakePart[]
): snakePartDrawConfig[] => {
  return snake.map(snakePart => getSnakePartDrawConfig(snakePart));
};
