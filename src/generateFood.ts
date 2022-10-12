import { config as c } from "./config";
import { randomFood } from "./randomFood";
import { SnakePart, state as s } from "./state";

function hasSnakeEatenFood(part: SnakePart) {
  const has_eaten = part.x == s.foodX && part.y == s.foodY;
  if (has_eaten) generateFood();
}

export function generateFood() {
  if (!c.snakeboard) {
    return;
  }
  s.foodX = randomFood(0, c.snakeboard.width - 10);
  s.foodY = randomFood(0, c.snakeboard.height - 10);

  s.snake.forEach(hasSnakeEatenFood);
}
