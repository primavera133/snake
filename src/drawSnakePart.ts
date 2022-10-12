import { config as c } from "./config";
import { SnakePart } from "./state";

export function drawSnakePart(snakePart: SnakePart) {
  if (!c.snakeboard_ctx) {
    return;
  }

  c.snakeboard_ctx.fillStyle = "orchid";
  c.snakeboard_ctx.strokeStyle = "brown";
  c.snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  c.snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
