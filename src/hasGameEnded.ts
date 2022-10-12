import { config as c } from "./config";
import { state as s } from "./state";

export function hasGameEnded() {
  if (!c.snakeboard) {
    return;
  }
  for (let i = 4; i < s.snake.length; i++) {
    const has_collided =
      s.snake[i].x === s.snake[0].x && s.snake[i].y === s.snake[0].y;
    if (has_collided) return true;
  }
  const hitLeftWall = s.snake[0].x < 0;
  const hitRightWall = s.snake[0].x > c.snakeboard.width - 10;
  const hitToptWall = s.snake[0].y < 0;
  0;
  const hitBottomWall = s.snake[0].y > c.snakeboard.height - 10;

  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}
