import { SnakePart } from "../types";

export function hasGameEnded(
  snake: SnakePart[],
  boardWidth: number,
  boardHeight: number
): boolean {
  for (let i = 4; i < snake.length; i++) {
    const hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (hasCollided) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > boardWidth - 10;
  const hitToptWall = snake[0].y < 0;
  0;
  const hitBottomWall = snake[0].y > boardHeight - 10;
  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}
