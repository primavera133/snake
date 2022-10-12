import { board as b } from "./config";
import { state as s } from "./state";

export function hasGameEnded() {
  for (let i = 4; i < s.snake.length; i++) {
    const hasCollided =
      s.snake[i].x === s.snake[0].x && s.snake[i].y === s.snake[0].y;
    if (hasCollided) return true;
  }
  const hitLeftWall = s.snake[0].x < 0;
  const hitRightWall = s.snake[0].x > b.canvas.width - 10;
  const hitToptWall = s.snake[0].y < 0;
  0;
  const hitBottomWall = s.snake[0].y > b.canvas.height - 10;
  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}
