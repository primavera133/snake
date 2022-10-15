import { SnakePart } from "../../types";

export const didSnakeEatFood = (
  snake: SnakePart[],
  foodX: number | null,
  foodY: number | null
): boolean => {
  if (foodX === null || foodY === null) {
    return false;
  }
  const head = snake[0];
  return head.x === foodX && head.y === foodY;
};
