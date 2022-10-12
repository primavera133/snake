import { config as c } from "./config";
import { generateFood } from "./generateFood";
import { state as s } from "./state";
import { updateScore } from "./updateScore";

export function moveSnake() {
  const head = { x: s.snake[0].x + c.dx, y: s.snake[0].y + c.dy };
  s.snake.unshift(head);

  const hasEatenFood = s.snake[0].x === s.foodX && s.snake[0].y === s.foodY;
  if (hasEatenFood) {
    s.score += 10;
    updateScore();
    generateFood();
  } else {
    s.snake.pop();
  }
  //   s.snake.pop();
}
