import { drawSnakePart } from "./drawSnakePart";
import { state } from "./state";

export function drawSnake() {
  state.snake.forEach(drawSnakePart);
}
