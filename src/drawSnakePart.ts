import { config } from "./config";
import { SnakePart } from "./state";

export function drawSnakePart(snakePart: SnakePart) {
  if (!config.snakeboard_ctx) {
    return;
  }

  config.snakeboard_ctx.fillStyle = "lightblue";
  config.snakeboard_ctx.strokeStyle = "darkblue";
  config.snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  config.snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
