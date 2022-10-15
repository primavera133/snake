import { SnakePart, snakePartDrawConfig } from "../types";
import { drawSnakePart } from "./drawSnakePart";

export const drawSnake = (
  snake: snakePartDrawConfig[],
  ctx: CanvasRenderingContext2D
) => {
  return snake.map(snakePart => drawSnakePart(snakePart, ctx));
};
