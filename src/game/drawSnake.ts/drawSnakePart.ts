import { SnakePart, snakePartDrawConfig } from "../../types";

export function drawSnakePart(
  snakePartDrawConfig: snakePartDrawConfig,
  ctx: CanvasRenderingContext2D
) {
  ctx.fillStyle = snakePartDrawConfig.fillStyle;
  ctx.fillRect(
    snakePartDrawConfig.x,
    snakePartDrawConfig.y,
    snakePartDrawConfig.widht,
    snakePartDrawConfig.heigh
  );
  ctx.strokeStyle = snakePartDrawConfig.strokeStyle;
  ctx.strokeRect(
    snakePartDrawConfig.x,
    snakePartDrawConfig.y,
    snakePartDrawConfig.widht,
    snakePartDrawConfig.heigh
  );
}
