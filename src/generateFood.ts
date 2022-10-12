import { board as b } from "./config";
import { randomFood } from "./randomFood";
import { SnakePart, state as s } from "./state";

function hasSnakeEatenFood(part: SnakePart) {
  const has_eaten = part.x == s.foodX && part.y == s.foodY;
  if (has_eaten) generateFood();
}

export function generateFood() {
  s.foodX = randomFood(0, b.canvas.width - 10);
  s.foodY = randomFood(0, b.canvas.height - 10);

  s.snake.forEach(hasSnakeEatenFood);
}
