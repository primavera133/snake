import { SnakePart, snakePartDrawConfig } from "../types";

function getMovedSnake(
  snake: SnakePart[],
  dx: number,
  dy: number,
  hasEatenFood: boolean
) {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  if (hasEatenFood) {
    return [head].concat(snake);
  } else {
    return [head].concat(snake.slice(0, -1));
  }
}

export const moveSnake = (
  snake: SnakePart[],
  dx: number,
  dy: number,
  hasEatenFood: boolean
): SnakePart[] => {
  return getMovedSnake(snake, dx, dy, hasEatenFood);
};
